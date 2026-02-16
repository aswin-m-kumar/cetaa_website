import React from 'react';
import { Globe, MapPin, Award, Building } from 'lucide-react';

const StatsBar = () => {
  return (
    <div className="bg-white py-12 shadow-xl relative z-20 -mt-16 mx-4 md:mx-20 rounded-2xl flex flex-wrap justify-around text-center border-b-4 border-red-900 animate-slide-in-right">
      {[
        { label: 'Alumni Worldwide', value: '50,000+', icon: Globe },
        { label: 'Chapters', value: '25+', icon: MapPin },
        { label: 'Scholarships', value: '₹2 Cr+', icon: Award },
        { label: 'Legacy', value: '85 Years', icon: Building },
      ].map((stat, idx) => (
        <div key={idx} className="p-4 w-1/2 md:w-1/4 group hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="w-12 h-12 mx-auto mb-3 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-900 transition-colors">
            <stat.icon className="w-6 h-6 text-red-900 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
