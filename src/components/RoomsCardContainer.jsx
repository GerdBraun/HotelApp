import RoomCard from './RoomCard';
import hotelRooms from '../data/roomsData';

const RoomsCardContainer = () => {
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {hotelRooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomsCardContainer;
