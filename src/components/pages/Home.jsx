import HeroSlider from "../partials/HeroSlider";
import RoomsCardContainer from "../RoomsCardContainer";

const Home = () => {
  return (
    <>
      <HeroSlider />

      <div className="mt-16">
        <RoomsCardContainer />
      </div>
    </>
  );
};

export default Home;
