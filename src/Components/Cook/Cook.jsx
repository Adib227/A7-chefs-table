import PropTypes from 'prop-types';

const Cook = ({ cook }) => {
  const { title, minutes, calories } = cook;

  return (
    <>
      <div className="flex gap-x-6 my-4   p-4 bg-[#28282808]">
        {/* <p>{cook.length}</p> */}
        <h3 className="text2xl text-[#282828B2] ml-8 w-36 font-semibold">
          {title}
        </h3>
        <h3 className="text2xl text-[#282828B2] w-24 font-semibold">
          {minutes} minutes
        </h3>
        <h3 className="text2xl text-[#282828B2] w-24 font-semibold">
          {calories} calories
        </h3>
        <button className="btn rounded-3xl bg-[#0BE58A]">Preparing</button>
      </div>
    </>
  );
};

Cook.propTypes = {
  cook: PropTypes.object,
};

export default Cook;
