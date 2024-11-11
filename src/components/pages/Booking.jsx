const Booking = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-lg mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Book now!</h1>
          <p className="py-6">
            Info about selected room.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select your room</span>
              </label>
              <select className="select select-bordered" defaultValue={0}>
                <option disabled value="0">
                  Please select a room
                </option>
                <option value="1">Room 1</option>
                <option value="2">Room 2</option>
              </select>
              <p>Info about room...</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
