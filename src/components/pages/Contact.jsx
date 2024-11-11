import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    people: '',
    checkin: '',
    checkout: '',
    roomType: 'Single', // Default value for dropdown
    rooms: '1',
    arrivalTime: '',
    specialRequirements: '',
    paymentMethod: 'Credit Card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" onChange={handleChange} placeholder="Full Name" className="input input-bordered w-full" required />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" className="input input-bordered w-full" required />
        <input name="phone" type="tel" onChange={handleChange} placeholder="Phone" className="input input-bordered w-full" required />
        <textarea name="message" onChange={handleChange} placeholder="Additional Details" className="textarea textarea-bordered w-full" />

        <input name="people" type="number" onChange={handleChange} placeholder="Number of People" className="input input-bordered w-full" required />
        <label className="block text-gray-700">Check-In</label>

        <input
          name="checkin"
          type="date"
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <label className="block text-gray-700">Check-Out</label>
        <input
          name="checkout"
          type="date"
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <select name="roomType" onChange={handleChange} className="select select-bordered w-full">
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Family Room">Family Room</option>
          <option value="Deluxe">Deluxe</option>
        </select>

        <input name="rooms" type="number" onChange={handleChange} placeholder="Number of Rooms" className="input input-bordered w-full" required />
        <input name="arrivalTime" type="time" onChange={handleChange} placeholder="Arrival Time" className="input input-bordered w-full" />

        <textarea name="specialRequirements" onChange={handleChange} placeholder="Special Requirements (Accessibility, Dietary, Pets)" className="textarea textarea-bordered w-full" />

        <select name="paymentMethod" onChange={handleChange} className="select select-bordered w-full">
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Cash">Cash</option>
          <option value="Online Transfer">Online Transfer</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">Submit Booking</button>
      </form>
    </div>
  );
};

export default Contact;
