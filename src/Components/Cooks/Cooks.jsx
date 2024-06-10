import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks }) => {
  return (
    <div className=" border-2 rounded-xl w-full">
      <h1 className="text-[#282828] text-2xl font-semibold text-center mt-6">
        Want to cook: {cooks.length}
        <p className="border-b-2 my-4 mx-16"></p>
        <div className="flex gap-x-8 my-4 ml-6">
          <h3 className="text-lg text-[#282828B2] w-36 font-semibold">Name</h3>
          <h3 className="text-lg text-[#282828B2] w-24 font-semibold">Time</h3>
          <h3 className="text-lg text-[#282828B2] w-24 font-semibold">
            Calories
          </h3>
        </div>
      </h1>
      {cooks.map(cook => (
        <Cook key={cook.id} cook={cook}></Cook>
      ))}
      <h1 className="text-[#282828] text-2xl font-semibold text-center">
        Currently cooking: 0
      </h1>
      <p className="border-b-2 my-4 mx-16"></p>
      <div
        className="flex gap-x-6
       my-4 ml-16 "
      >
        <h3 className="text-lg text-[#282828B2] w-32 font-semibold">Name</h3>
        <h3 className="text-lg text-[#282828B2] w-24 font-semibold">Time</h3>
        <h3 className="text-lg text-[#282828B2] w-24 font-semibold">
          Calories
        </h3>
      </div>
    </div>
  );
};

Cooks.propTypes = {
  cooks: PropTypes.array,
};

export default Cooks;
