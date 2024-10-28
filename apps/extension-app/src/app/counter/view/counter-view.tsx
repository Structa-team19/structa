import { useEffect } from "react";
import { useCounterStore } from "../data/counter-state-implementation";
import { counterViewModel } from "../controller/counter-view-model";
import { Button } from "@/components/ui/button";

// View Layer
function CounterView() {
  const store = useCounterStore();
  const { count, decrementCounter, getCounter, incrementCounter } =
    counterViewModel(store);

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <div>
      <h1>Hello Structa</h1>

      <h2>Counter: {count}</h2>
      <Button onClick={incrementCounter}>Increment</Button>
      <Button onClick={decrementCounter}>Decrement</Button>
    </div>
  );
}

export default CounterView;
