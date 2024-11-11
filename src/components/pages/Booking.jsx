import { useNavigate, useParams } from "react-router-dom";
import hotelRooms from "../../data/roomsData";
import { useEffect, useState } from "react";

const Booking = () => {
  const [reservation, setReservation] = useState({
    roomId: 0,
    dateFrom: "",
    dateTo: "",
  });
  const [errors, setErrors] = useState({});
  const [bill, setBill] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setReservation((prev) => ({ ...prev, roomId: id }));
  }, [id]);

  useEffect(() => {
    if (!reservation.people || !reservation.dateFrom || !reservation.dateTo)
      return;
    const room = getRoomById(reservation.roomId);
    let newBill = reservation.people * room.pricePerNight;

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(reservation.dateFrom);
    const secondDate = new Date(reservation.dateTo);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays);

    setBill("€" + newBill);
  }, [reservation]);

  const getRoomById = (id) => {
    return hotelRooms.find((room) => {
      return room.id === parseInt(id);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };
  const validateForm = () => {
    const newErrors = {};
    if (!reservation.roomId) newErrors.title = "room is required";
    if (!reservation.dateFrom) newErrors.dateFrom = "dateFrom is required";
    if (!reservation.dateTo) newErrors.dateTo = "dateTo is required";
    if (!reservation.paymentMethod)
      newErrors.paymentMethod = "paymentMethod is required";
    setErrors(newErrors);
    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    navigate("/thank-you-booking");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Book now!</h1>
          {bill && <p className="py-6">Your bill: {bill}</p>}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="tel"
              onChange={handleChange}
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Additional Details"
              className="textarea textarea-bordered w-full"
            />

            <input
              name="people"
              type="number"
              onChange={handleChange}
              placeholder="Number of People"
              className="input input-bordered w-full"
              required
            />

            <div className="form-control">
              <label className="label">Select your room</label>
              <select
                name="roomId"
                className="select select-bordered"
                onChange={handleChange}
                value={reservation.roomId}
              >
                {hotelRooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (€{room.pricePerNight} / night / person)
                  </option>
                ))}
              </select>
              {errors.roomId && <p className="text-red-500">{errors.roomId}</p>}
            </div>
            <div className="form-control">
              <label className="label">Date from</label>
              <input
                className="input input-bordered"
                name="dateFrom"
                type="datetime-local"
                value={reservation.dateFrom}
                onChange={handleChange}
              />
              {errors.dateFrom && (
                <p className="text-red-500">{errors.dateFrom}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">Date to</label>
              <input
                className="input input-bordered"
                name="dateTo"
                type="datetime-local"
                value={reservation.dateTo}
                onChange={handleChange}
              />
              {errors.dateTo && <p className="text-red-500">{errors.dateTo}</p>}
            </div>

            <div className="form-control">
              <label className="label">Payment Method</label>
              <select
                name="paymentMethod"
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Please select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cash">Cash</option>
                <option value="Online Transfer">Online Transfer</option>
              </select>
              {errors.paymentMethod && (
                <p className="text-red-500">{errors.paymentMethod}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Go for it</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
