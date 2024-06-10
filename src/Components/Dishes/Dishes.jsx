import { useState } from 'react';
import { useEffect } from 'react';
import Dish from '../Dish/Dish';
import PropTypes from 'prop-types';

const Dishes = ({ handleAddToCooks }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('datas.json')
      .then(res => res.json())
      .then(data => setDishes(data));
  }, []);
  console.log(dishes);

  return (
    <div className="grid">
      <div className="grid grid-cols-2 mx-auto  gap-x-16">
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            dish={dish}
            handleAddToCooks={handleAddToCooks}
          ></Dish>
        ))}
      </div>
    </div>
  );
};

Dishes.propTypes = {
  handleAddToCooks: PropTypes.func,
};

export default Dishes;
