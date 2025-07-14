import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How accurate are PetLabs test results?',
      answer: 'Our laboratory maintains a 99.8% accuracy rate using state-of-the-art equipment and certified veterinary technicians. All tests are performed in AAHA-accredited facilities with rigorous quality control measures.'
    },
    {
      question: 'How long does it take to get results?',
      answer: 'Most test results are available within 3-5 business days after we receive your sample. Rush processing is available for urgent cases, with results in 24-48 hours for an additional fee.'
    },
    {
      question: 'Is the sample collection process stressful for my pet?',
      answer: 'Not at all! Our collection kits are designed for at-home use with simple, stress-free methods. Most samples can be collected during regular play or feeding time without your pet even noticing.'
    },
    {
      question: 'What types of pets can be tested?',
      answer: 'We currently offer testing for dogs and cats of all ages, breeds, and sizes. We\'re expanding to include other companion animals like rabbits and ferrets in the near future.'
    },
    {
      question: 'Do I need a veterinarian referral?',
      answer: 'No referral is needed for most of our wellness and genetic tests. However, we always recommend sharing results with your veterinarian and can provide veterinary consultation as part of our premium packages.'
    },
    {
      question: 'What if my pet has special dietary requirements?',
      answer: 'Our nutritional analysis takes into account any existing dietary restrictions or health conditions. We provide customized recommendations that work with your pet\'s current diet and health status.'
    },
    {
      question: 'Can I test multiple pets with one kit?',
      answer: 'Each kit is designed for one pet to ensure accurate results and prevent cross-contamination. However, we offer multi-pet discounts when you order multiple kits at once.'
    },
    {
      question: 'What happens if something goes wrong with my sample?',
      answer: 'If your sample is damaged, contaminated, or insufficient for testing, we\'ll send you a replacement kit at no charge. We also provide detailed instructions and support to ensure successful collection.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="faq-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            <span className="font-bungee text-brand-yellow">Frequently Asked</span> Questions
          </h2>
          <p className="faq-subtitle text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            Got questions? We've got answers. Find everything you need to know about PetLabs testing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Image */}
            <div className="faq-image opacity-0">
              <img 
                src="https://images.pexels.com/photos/6235045/pexels-photo-6235045.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="Veterinarian with happy pet owner"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="mt-6 bg-brand-yellow rounded-xl p-6 text-center">
                <HelpCircle className="w-12 h-12 text-brand-black mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-black mb-2">Still have questions?</h3>
                <p className="text-brand-black mb-4">Our support team is here to help 24/7</p>
                <button className="bg-brand-black text-brand-yellow px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Contact Support
                </button>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="faq-item bg-gray-50 rounded-lg overflow-hidden opacity-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold text-brand-black pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;