import { useParams } from "react-router-dom";
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

  useEffect(() => {
    setReservation((prev) => ({ ...prev, roomId: id }));
  }, [id]);

  useEffect(() => {
    setBill({
        room: hotelRooms[reservation.roomId],
    })
  }, [reservation]);

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
    setErrors(newErrors);
    console.log(errors)
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Book now!</h1>
          <p className="py-6">Your bill:<br/>{bill}</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select your room</span>
              </label>
              <select
                name="roomId"
                className="select select-bordered"
                onChange={handleChange}
                value={reservation.roomId}
              >
                {hotelRooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (€{room.pricePerNight} / night)
                  </option>
                ))}
              </select>
              {errors.roomId && (
                <p className="text-red-500">{errors.roomId}</p>
              )}
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
              {errors.dateFrom && <p className="text-red-500">{errors.dateFrom}</p>}
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