
import Clock from "./Clock";
import { Counter } from "./Counter";

export function App() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-orange-100 animate-bounce py-8 px-8 ml-80 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:bg-blue-700">
      <h1 className=" text-pink-200 text-3xl font-sans ">My React App</h1>
      <Clock />
    </div>
  );
}

export default App;