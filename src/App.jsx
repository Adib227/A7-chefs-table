import './App.css';
import Dishes from './Components/Dishes/Dishes';
import Headers from './Components/Headers/Headers';
import Banner from './Components/Banner/Banner';
import Cooks from './Components/Cooks/Cooks';
import { useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [cooks, setCooks] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCooks = dish => {
    const newCooks = [...cooks, dish];
    setCooks(newCooks);
    if (clickCount >= 1) {
      toast.error('Dish Already Added!');
    } else {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <>
      <Headers></Headers>
      <Banner></Banner>
      <h1 className="text-[#150B2B] font-semibold text-4xl text-center mt-20 ">
        Our Recipes
      </h1>
      <h2 className="text-[#150B2B99] font-medium text-base text-center mb-12 mt-8">
        Our Recipes offers a diverse culinary repertoire to inspire home cooks
        with creative and delicious <br /> dishes. We try to bring up different
        recipe from different cuisine.
      </h2>
      <div className="md:flex w-full">
        <div className="md:w-2/3">
          <Dishes handleAddToCooks={handleAddToCooks}></Dishes>
        </div>
        <div className="md:w-1/3">
          <Cooks cooks={cooks}></Cooks>
        </div>
      </div>
    </>
  );
}

export default App;
