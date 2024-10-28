import type { Counter } from "./counter-entity";

// Structure to share data between use cases. A.k.a. Repository.

interface CounterStore {
  counter: Counter | undefined;

  loadInitialCounter(): Promise<Counter>;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

export type { CounterStore };
