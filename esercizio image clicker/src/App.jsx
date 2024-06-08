
import Clock from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";

export function App() {
  return (
    <div>
      {/* <Counter initialValue={0} incrementAmount={1} /> */}
      <h1>My React App</h1>
      <MouseClicker />
    </div>
  );
}

export default App;