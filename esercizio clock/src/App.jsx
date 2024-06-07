
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;