import './App.css';
import Testimonials from "./components/Testimonials.js";
import reviews from './data';
function App() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center bg-teal-300">
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonials review={reviews}/>
    </div>
  );
}

export default App;
