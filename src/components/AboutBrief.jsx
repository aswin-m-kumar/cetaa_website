import React from 'react';
import { Users, Target, Building, Heart } from 'lucide-react';

const AboutBrief = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-50 rounded-full -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Students" 
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Legacy Since 1939</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd July 1939. Initially, the College was housed in the former office and bungalow of the Chief Engineer (present PMG Office).
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
             CETAA continues to foster this legacy, connecting alumni globally to support the institution that shaped us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
             <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
               <Users className="w-5 h-5 text-red-900 mr-3" /> Global Networking
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
               <Target className="w-5 h-5 text-red-900 mr-3" /> Student Mentorship
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
               <Building className="w-5 h-5 text-red-900 mr-3" /> Infra Support
             </div>
             <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
               <Heart className="w-5 h-5 text-red-900 mr-3" /> Social Initiatives
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;
