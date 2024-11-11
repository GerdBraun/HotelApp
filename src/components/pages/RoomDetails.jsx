import { useParams } from 'react-router-dom';
import hotelRooms from '../../data/roomsData';
import { Link } from 'react-router-dom';
const RoomDetails = () => {
  const { roomId } = useParams(); 
  const room = hotelRooms.find(r => r.id === parseInt(roomId)); 

  if (!room) {
    return <div>Room not found!</div>; 
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={room.imageUrl} alt={room.name} className="w-full h-80 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{room.name}</h2>
          <p>{room.description}</p>
          <p><strong>Amenities:</strong> {room.amenities.join(', ')}</p>
          <p><strong>Price per night:</strong> €{room.pricePerNight.toFixed(2)}</p>
          <span className={`badge ${room.availability ? 'badge-success' : 'badge-error'}`}>
            {room.availability ? 'Available' : 'Booked'}
          </span>

          <div className="card-actions justify-end mt-4">
            <Link to={`/booking/${room.id}`} className="btn btn-primary">Book Now</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
