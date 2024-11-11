import { Link } from "react-router-dom";

const ThankYouBooking = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Thank you!</h1>
          <p className="py-6">
            we accepted your booking.
          </p>
          <Link to="/" className="btn btn-primary">back to start</Link>
          </div>
      </div>
    </div>
  );
};

export default ThankYouBooking;
