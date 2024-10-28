import type { Counter } from "../domain/counter-entity";
import { CounterStore } from "../domain/counter-store";

export type UpdateCounterStore = Pick<
  CounterStore,
  "counter" | "updateCounter"
>;

export function updateCounterUseCase(
  store: UpdateCounterStore,
  updatedBy: (counter: Counter) => Counter,
) {
  const updatedCounter = store.counter
    ? updatedBy(store.counter)
    : store.counter;

  if (
    (!updatedCounter?.value && updatedCounter?.value !== 0) ||
    store.counter?.value === updatedCounter.value
  )
    return;

  store.updateCounter(updatedCounter);
}
