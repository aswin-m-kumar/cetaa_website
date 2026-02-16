import React from 'react';
import { Users, Building, Target, ArrowRight } from 'lucide-react';
import RenovationHero from '../components/RenovationHero';
import BeforeAfterCard from '../components/BeforeAfterCard';
import DonationForm from '../components/DonationForm';

const RenovationPage = () => {
  const projects = [
    {
      title: "CETAA Hall",
      description: "Transforming the classic auditorium into a world-class convention center. Upgrades include wood-panel acoustics, modern HVAC, and ergonomic beige seating to replace the dated red chairs.",
      icon: Users,
      cost: "₹25 Lakhs",
      funded: "45%",
      imgCurrent: "/CETAAHALLCURRENT.png",
      imgProposed: "/CETAAHALLproposed.png"
    },
    {
      title: "Reception Lounge",
      description: "Converting the transit corridor into a premium alumni lounge. The plan introduces a modern reception desk, zoned seating, marble flooring, and decorative lighting to replace the sparse pillar hall.",
      icon: Building,
      cost: "₹15 Lakhs",
      funded: "20%",
      imgCurrent: "/receptionareacurrent.png",
      imgProposed: "/receptionareaproposed.png"
    },
    {
      title: "CETAA Office",
      description: "Modernizing the operational hub. We aim to declutter the workspace, introducing digital archives and modular workstations to improve efficiency for the secretariat.",
      icon: Target,
      cost: "₹10 Lakhs",
      funded: "10%",
      imgCurrent: "/CETAAofficecurrent.png",
      imgProposed: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Entrance Ramp",
      description: "Safety and Inclusivity First. Reconstruction of the damaged entrance area into a fully compliant, anti-skid ramp with stainless steel handrails for our senior alumni.",
      icon: ArrowRight,
      cost: "₹8 Lakhs",
      funded: "5%",
      imgCurrent: "/rampcurrent.png",
      imgProposed: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <RenovationHero />

      {/* Projects Grid with Toggle */}
      <section className="relative -mt-20 px-4 pb-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <BeforeAfterCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      <DonationForm />
    </div>
  );
};

export default RenovationPage;
