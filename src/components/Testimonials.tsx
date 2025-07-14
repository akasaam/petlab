import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      location: 'San Francisco, CA',
      pet: 'Golden Retriever - Max (8 years)',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/552598/pexels-photo-552598.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'As a veterinarian myself, I was impressed by PetLabs\' thoroughness. The allergy panel revealed Max\'s sensitivities to chicken and wheat, which we never would have identified otherwise. His chronic ear infections are completely gone now!',
      service: 'Complete Allergy Panel'
    },
    {
      name: 'Michael Chen',
      location: 'Austin, TX',
      pet: 'Maine Coon - Luna (3 years)',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'The genetic screening was a game-changer! We discovered Luna carries the gene for hypertrophic cardiomyopathy. Thanks to early detection, we\'re monitoring her heart health and she\'s thriving. The peace of mind is invaluable.',
      service: 'Genetic Health Screening'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Miami, FL',
      pet: 'French Bulldog - Buster (5 years)',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'Buster\'s wellness panel caught early kidney changes that our regular vet missed. The detailed nutritional recommendations helped us adjust his diet, and his latest bloodwork shows significant improvement. PetLabs literally saved his life!',
      service: 'Senior Wellness Panel'
    },
    {
      name: 'Jennifer Walsh',
      location: 'Denver, CO',
      pet: 'Border Collie Mix - Scout (2 years)',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'The microbiome analysis explained Scout\'s digestive issues perfectly. Following their probiotic recommendations, his stomach problems are completely resolved. The customer service team was incredibly helpful throughout the process.',
      service: 'Microbiome Analysis'
    },
    {
      name: 'Robert Kim',
      location: 'Seattle, WA',
      pet: 'Persian Cat - Mochi (7 years)',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'After Mochi\'s cancer diagnosis, the toxin screening helped us identify environmental factors in our home. The comprehensive report gave us actionable steps to create a healthier environment for her recovery.',
      service: 'Environmental Toxin Screen'
    },
    {
      name: 'Amanda Foster',
      location: 'Nashville, TN',
      pet: 'Labrador Mix - Bella (4 years)',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      petImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'The multi-pet package was perfect for our three dogs. Each got personalized nutrition plans based on their individual needs. The cost savings compared to individual tests was substantial, and all three are healthier than ever!',
      service: 'Multi-Pet Wellness Package'
    }
  ];

  return (
    <section className="testimonials-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            Real Stories from <span className="font-bungee text-brand-yellow">Pet Parents</span>
          </h2>
          <p className="testimonials-subtitle text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            Don't just take our word for it. Here's how PetLabs has made a real difference in the lives 
            of pets and their families across North America.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-brand-yellow mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="bg-brand-yellow/10 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-brand-black">Service Used:</p>
                <p className="text-sm text-gray-700">{testimonial.service}</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-brand-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.petImage} 
                    alt={testimonial.pet}
                    className="w-10 h-10 rounded-full object-cover mr-2"
                  />
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="testimonials-stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto opacity-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">200K+</div>
              <div className="text-sm text-gray-600">Tests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">99.8%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;