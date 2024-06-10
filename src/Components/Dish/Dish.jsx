import PropTypes from 'prop-types';
import time from '../../assets/image/time.png';
import fire from '../../assets/image/fire.png';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Dish = ({ handleAddToCooks, dish = {} }) => {
  const { title, image, description, ingredients, calories, minutes } = dish;

  // const [clickCount, setClickCount] = useState(0);

  // const handleClick = () => {
  //   if (clickCount >= 1) {
  //     toast.error('Dish Already Added!');
  //   } else {
  //     setClickCount(clickCount + 1);
  //   }
  // };

  return (
    <>
      <div className="md:w-2/3">
        <div className="card w-96 bg-base-100 shadow-xl flex border-2">
          <figure className="rounded-xl">
            <img
              className="p-6"
              src={image}
              alt={`Recipe Picture of the title ${title}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">{title}</h2>
            <p className="text-[#878787] text-base font-normal my-2">
              {description}
            </p>
            <p className="border-b-2 my-2"></p>
            <div>
              <p className="text-base font-semibold text-[#282828] my-2">
                Ingredients: 6{' '}
              </p>
              <p className="text-[#878787] font-normal text-base">
                {ingredients}
              </p>
            </div>
            <p className="border-b-2 my-2"></p>
            <div className="flex gap-x-4">
              <div className="flex gap-x-2">
                <img src={time} alt="" />
                {minutes} minutes
              </div>
              <div className="flex gap-x-2">
                <img src={fire} alt="" />
                {calories} calories
              </div>
            </div>
            <div className="card-actions mt-4">
              <button
                onClick={() => {
                  handleAddToCooks(dish);
                }}
                className="btn font-serif bg-[#0BE58A] rounded-3xl text-[#150B2B]"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dish.propTypes = {
  dish: PropTypes.object.isRequired,
  handleAddToCooks: PropTypes.func,
};

export default Dish;
