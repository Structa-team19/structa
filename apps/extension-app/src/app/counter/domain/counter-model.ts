import type { Counter } from "./counter-entity";

// Business logic to create, increment, and decrement a counter.

export function create(count: Counter["value"]): Counter {
  return { value: count };
}

export function increment(counter: Counter): Counter {
  return { value: counter.value + 1 };
}

export function decrement(counter: Counter): Counter {
  return { value: counter.value - 1 };
}
