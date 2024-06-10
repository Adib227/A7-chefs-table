import man from '../../assets/image/man.png';
import search from '../../assets/image/search.png';

const Headers = () => {
  return (
    <div className="navbar flex max-w-screen-xl mx-auto p-1 md:p-5 ">
      <div className="navbar-start md:w-1/3">
        <h1 className="text-xl md:text-3xl font-bold font-serif">
          Recipe Calories
        </h1>
      </div>
      <div className="navbar-center grid md:flex justify-center gap-x-1 md:gap-x-8 md:w-1/3 mt-2">
        <p>Home</p>
        <p>Recipes</p>
        <p>About</p>
        <p>Search</p>
      </div>
      <div className="navbar-end md:w-1/3 md:flex">
        <div className="flex">
          <img className="w-5 h-5 mt-3 -mr-9 " src={search} alt="" />
          <input
            type="text"
            placeholder="      Search"
            className="input input-bordered rounded-3xl bg-[#150B2B0D]"
          />
        </div>
        <img className="bg-[#0BE58A] rounded-full p-1 m-2" src={man} alt="" />
      </div>
    </div>
  );
};

export default Headers;
