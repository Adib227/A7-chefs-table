import Profile from '../../../dist/assets/images/Profile.png';

const Headers = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto p-1 md:p-5 ">
      <div className="md:w-1/3">
        <h1 className="text-xl md:text-3xl font-bold font-serif">
          Recipe Calories
        </h1>
      </div>
      <div className="grid md:flex justify-center gap-x-1 md:gap-x-8 md:w-1/3">
        <p>Home</p>
        <p>Recipes</p>
        <p>About</p>
        <p>Search</p>
      </div>
      <div className="md:w-1/3">
        <img className="bg-[#0BE58A] rounded-full p-1" src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Headers;
