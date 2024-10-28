import { CounterStore } from "../domain/counter-store";

type GetCounterStore = Pick<CounterStore, "loadInitialCounter">;

export async function getCounterUseCase(store: GetCounterStore) {
  await store.loadInitialCounter();
}
