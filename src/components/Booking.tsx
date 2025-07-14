import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, Shield, CheckCircle, User, Phone, Mail, MapPin } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    petAge: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialInstructions: ''
  });

  const services = [
    {
      id: 'basic-health',
      name: 'Basic Health Panel',
      price: 89,
      duration: '3-5 business days',
      description: 'Complete Blood Count (CBC) and Basic Chemistry Panel',
      popular: false
    },
    {
      id: 'complete-wellness',
      name: 'Complete Wellness Panel',
      price: 149,
      duration: '5-7 business days',
      description: 'Comprehensive health analysis including genetic markers',
      popular: true
    },
    {
      id: 'allergy-testing',
      name: 'Allergy Testing Panel',
      price: 129,
      duration: '7-10 business days',
      description: 'Environmental and food allergy identification',
      popular: false
    },
    {
      id: 'genetic-screening',
      name: 'Genetic Health Screening',
      price: 199,
      duration: '10-14 business days',
      description: 'Comprehensive genetic analysis for breed-specific conditions',
      popular: false
    },
    {
      id: 'senior-care',
      name: 'Senior Pet Panel',
      price: 179,
      duration: '5-7 business days',
      description: 'Specialized testing for aging pets (7+ years)',
      popular: false
    },
    {
      id: 'multi-pet',
      name: 'Multi-Pet Package',
      price: 249,
      duration: '5-7 business days',
      description: 'Wellness testing for up to 3 pets (save 30%)',
      popular: false
    }
  ];

  const availableDates = [
    '2025-01-20', '2025-01-21', '2025-01-22', '2025-01-23', '2025-01-24',
    '2025-01-27', '2025-01-28', '2025-01-29', '2025-01-30', '2025-01-31'
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="booking" className="booking-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">
            Book Your <span className="font-bungee text-brand-yellow">Pet's Health</span> Test
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your pet's laboratory testing in just a few simple steps. 
            We'll send a collection kit to your home with everything you need.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step ? 'bg-brand-yellow text-brand-black' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    currentStep > step ? 'bg-brand-yellow' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Select Service</span>
            <span>Choose Date</span>
            <span>Your Details</span>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Choose Your Testing Package</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedService === service.id 
                        ? 'border-brand-yellow bg-brand-yellow/5' 
                        : 'border-gray-200 hover:border-brand-yellow/50'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-4 bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-brand-black">{service.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-yellow">${service.price}</div>
                        <div className="text-sm text-gray-500">{service.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <div className={`mt-4 w-6 h-6 rounded-full border-2 ${
                      selectedService === service.id 
                        ? 'border-brand-yellow bg-brand-yellow' 
                        : 'border-gray-300'
                    }`}>
                      {selectedService === service.id && (
                        <CheckCircle className="w-4 h-4 text-brand-black m-0.5" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button 
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors duration-300"
                >
                  Continue to Date Selection
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Select Collection Kit Delivery Date</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-black mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-brand-yellow" />
                    Available Dates
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedDate === date
                            ? 'bg-brand-yellow text-brand-black'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-black mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-brand-yellow" />
                    Delivery Time Window
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        disabled={!selectedDate}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                          selectedTime === time
                            ? 'bg-brand-yellow text-brand-black'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {selectedDate && (
                <div className="mt-6 p-4 bg-brand-yellow/10 rounded-lg">
                  <p className="text-brand-black font-semibold">
                    Collection kit will be delivered on {formatDate(selectedDate)} 
                    {selectedTime && ` between ${selectedTime} - ${availableTimes[availableTimes.indexOf(selectedTime) + 1] || '5:00 PM'}`}
                  </p>
                </div>
              )}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300"
                >
                  Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors duration-300"
                >
                  Continue to Details
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Customer Details */}
          {currentStep === 3 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Pet & Owner Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Pet Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-brand-black">Pet Information</h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name *</label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Enter your pet's name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type *</label>
                    <select
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      required
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Age *</label>
                    <input
                      type="text"
                      name="petAge"
                      value={formData.petAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="e.g., 3 years, 8 months"
                      required
                    />
                  </div>
                </div>

                {/* Owner Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-brand-black">Owner Information</h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-brand-black mb-4">Delivery Address</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Enter your street address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                    placeholder="ZIP Code"
                    required
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions (Optional)</label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  placeholder="Any special delivery instructions or health concerns we should know about..."
                />
              </div>

              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300"
                >
                  Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!formData.petName || !formData.petType || !formData.ownerName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.zipCode}
                  className="bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors duration-300"
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-6">Order Confirmation</h3>
              
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-brand-black mb-4">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-semibold">{services.find(s => s.id === selectedService)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pet:</span>
                    <span className="font-semibold">{formData.petName} ({formData.petType})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Date:</span>
                    <span className="font-semibold">{selectedDate && formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Window:</span>
                    <span className="font-semibold">{selectedTime} - {availableTimes[availableTimes.indexOf(selectedTime) + 1] || '5:00 PM'}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-brand-yellow">${services.find(s => s.id === selectedService)?.price}</span>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-brand-black mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-brand-yellow" />
                  Payment Method
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-2 border-brand-yellow bg-brand-yellow/5 rounded-lg p-4 text-center">
                    <CreditCard className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                    <p className="font-semibold">Credit/Debit Card</p>
                    <p className="text-sm text-gray-600">Visa, MasterCard, Amex</p>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4 text-center opacity-50">
                    <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="font-semibold">PayPal</p>
                    <p className="text-sm text-gray-600">Coming Soon</p>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4 text-center opacity-50">
                    <User className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="font-semibold">HSA/FSA</p>
                    <p className="text-sm text-gray-600">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-brand-black mb-2">Terms & Conditions</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Collection kit must be returned within 30 days of delivery</p>
                  <p>• Results will be available within the specified timeframe after sample receipt</p>
                  <p>• Full refund available if sample collection is unsuccessful</p>
                  <p>• Veterinary consultation included with all premium packages</p>
                  <p>• All test results are confidential and HIPAA-compliant</p>
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm">I agree to the Terms & Conditions and Privacy Policy</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300"
                >
                  Back
                </button>
                <button className="bg-brand-yellow text-brand-black px-12 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Complete Secure Payment
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Security & Guarantee */}
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-6 h-6 text-brand-yellow" />
            <span className="text-sm text-gray-600">256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="w-6 h-6 text-brand-yellow" />
            <span className="text-sm text-gray-600">30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-brand-yellow" />
            <span className="text-sm text-gray-600">24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;