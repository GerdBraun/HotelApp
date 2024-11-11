const RoomCard = ({ room }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={room.imageUrl} alt={room.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{room.name}</h2>
        <p>{room.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">€{room.pricePerNight} / night</span>
          <span className={`badge ${room.availability ? 'badge-success' : 'badge-error'}`}>
            {room.availability ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
