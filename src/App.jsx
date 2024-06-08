import './App.css';
import Dishes from './Components/Dishes/Dishes';
import Headers from './Components/Headers/Headers';
import Recipe from './Components/Recipe/Recipe';
import Cook from './Cook/Cook';

function App() {
  return (
    <>
      <Headers></Headers>
      <Dishes></Dishes>
      <div className="md:flex">
        <Recipe></Recipe>
        <Cook></Cook>
      </div>
    </>
  );
}

export default App;
