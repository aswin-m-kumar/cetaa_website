import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BeforeAfterCard = ({ project }) => {
  const [showProposed, setShowProposed] = useState(true);

  // If we only have one image, don't show toggle
  const hasComparison = project.imgProposed && project.imgCurrent;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover-scale">
      <div className="relative h-72 bg-gray-200">
        {/* Image Container */}
        <div className="absolute inset-0">
          <img 
            src={showProposed ? project.imgProposed : project.imgCurrent} 
            alt={project.title} 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
        {/* Toggle Switch Overlay */}
        {hasComparison && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 z-20">
            <span className={`text-xs font-bold ${!showProposed ? 'text-white' : 'text-gray-400'}`}>CURRENT</span>
            <button 
              onClick={() => setShowProposed(!showProposed)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${showProposed ? 'bg-green-500' : 'bg-red-500'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${showProposed ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-xs font-bold ${showProposed ? 'text-white' : 'text-gray-400'}`}>PROPOSED</span>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20 bg-white/95 text-gray-900 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
          Est: {project.cost}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-red-50 text-red-900 mr-3">
            <project.icon className="w-6 h-6" />
          </div>
          <div>
             <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
             {hasComparison && (
               <p className="text-xs text-gray-500 italic">Toggle image to see transformation</p>
             )}
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="pt-4 border-t border-gray-100">
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: project.funded }}></div>
          </div>
          <div className="flex justify-between text-xs font-medium text-gray-500">
            <span>{project.funded} Funded</span>
            <span className="text-red-900 cursor-pointer hover:underline">View Blueprint &rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BeforeAfterCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.elementType,
    cost: PropTypes.string,
    funded: PropTypes.string,
    imgCurrent: PropTypes.string,
    imgProposed: PropTypes.string,
  }).isRequired,
};

export default BeforeAfterCard;
