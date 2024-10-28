import type { CounterStore } from "../domain/counter-store";
import { getCounterUseCase } from "../use-cases/get-counter-use-case";
import { incrementCounterUseCase } from "../use-cases/increment-counter-use-case";
import { decrementCounterUseCase } from "../use-cases/decrement-counter-use-case";

// Actions to interact with the counter feature

export function counterViewModel(store: CounterStore) {
  const getCounter = () => {
    getCounterUseCase({
      loadInitialCounter: store.loadInitialCounter,
    });
  };

  const incrementCounter = () => {
    incrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
    });
  };

  const decrementCounter = () => {
    decrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
    });
  };

  return {
    count: store.counter?.value,
    getCounter,
    incrementCounter,
    decrementCounter,
  };
}
