import { useState } from 'react';
import { useEffect } from 'react';

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('datas.json')
      .then(res => res.json())
      .then(data => setDishes(data));
  }, []);

  return <div className="text-4xl ">Dishes</div>;
};

export default Dishes;
