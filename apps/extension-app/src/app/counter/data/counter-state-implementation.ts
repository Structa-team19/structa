import { useState } from "react";
import { CounterStore } from "../domain/counter-store";
import { Counter } from "../domain/counter-entity";
import { getCounter, updateCounter } from "./api";

// Repository implementation. This is the only place where we interact with the API.

type CounterStoreState = Pick<CounterStore, "counter">;

export function useCounterStore(): CounterStore {
  const [counter, setCounter] = useState<CounterStoreState>();

  const loadInitialCounter = async () => {
    const counter = await getCounter();
    setCounter({ counter });

    return counter;
  };

  const updateCounterAction = async (counter: Counter) => {
    setCounter({ counter });
    return await updateCounter(counter);
  };

  return {
    counter: counter?.counter,
    loadInitialCounter,
    updateCounter: updateCounterAction,
  };
}
