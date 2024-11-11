import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate();

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

    navigate("/thank-you-contact");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Contact us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" onChange={handleChange} placeholder="Full Name" className="input input-bordered w-full" required />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" className="input input-bordered w-full" required />
        <input name="phone" type="tel" onChange={handleChange} placeholder="Phone" className="input input-bordered w-full" required />
        <textarea name="message" onChange={handleChange} placeholder="Additional Details" className="textarea textarea-bordered w-full" />

        <button type="submit" className="btn btn-primary w-full">Submit Booking</button>
      </form>
    </div>
  );
};

export default Contact;
