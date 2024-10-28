import { updateCounterUseCase } from "./update-counter-use-case";
import type { UpdateCounterStore } from "./update-counter-use-case";
import { decrement } from "../domain/counter-model";

export function decrementCounterUseCase(store: UpdateCounterStore) {
  updateCounterUseCase(store, decrement);
}
