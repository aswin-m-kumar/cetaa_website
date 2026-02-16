import React, { useState } from 'react';
import { CreditCard, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Button from './Button';

const DonationForm = () => {
    const [amount, setAmount] = useState('');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
          <SectionHeader 
            title="Support the Cause" 
            subtitle="Your contribution builds the foundation for future interactions. All donations are eligible for tax exemption."
            centered={false}
          />
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-yellow-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Secure Payment</h4>
                <p className="text-gray-600 text-sm">We use bank-grade encryption for all transactions.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-red-900" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Instant Receipt</h4>
                <p className="text-gray-600 text-sm">Receive your 80G compliant receipt immediately via email.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
           <h3 className="text-2xl font-bold text-gray-900 mb-6">Contribution Form</h3>
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                  <input type="text" className="w-full p-3 rounded border border-gray-300 focus:border-red-900 outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                  <input type="text" className="w-full p-3 rounded border border-gray-300 focus:border-red-900 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Graduation Year & Branch</label>
                <input type="text" className="w-full p-3 rounded border border-gray-300 focus:border-red-900 outline-none" placeholder="e.g. 1995 Mechanical" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Donation Amount (₹)</label>
                <div className="grid grid-cols-3 gap-2 mt-1 mb-2">
                  {['5000', '10000', '25000'].map(val => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`py-2 text-sm font-medium rounded border ${amount === val ? 'bg-red-900 text-white border-red-900' : 'bg-white text-gray-600 border-gray-300'}`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300 focus:border-red-900 outline-none" 
                  placeholder="Enter custom amount" 
                />
              </div>
              <Button className="w-full justify-center mt-4">
                Donate Now
              </Button>
           </form>
        </div>

      </div>
    </section>
  );
};

export default DonationForm;
