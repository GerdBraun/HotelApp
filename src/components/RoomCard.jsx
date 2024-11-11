import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{room.name}</h2>
        <p></p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">
            €{room.pricePerNight} / night
          </span>
          <span
            className={`badge ${
              room.availability ? "badge-success" : "badge-error"
            }`}
          >
            {room.availability ? "Available" : "Booked"}
          </span>
        </div>
        
        <div className="card-actions">
          <Link to={`/booking/${room.id}`} className="btn">Book Now</Link>
        </div>
        <Link to={`/rooms/${room.id}`} className="btn btn-primary">Room Details</Link>
      </div>
    </div>
  );
};

export default RoomCard;
