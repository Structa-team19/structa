import { updateCounterUseCase } from "./update-counter-use-case";
import type { UpdateCounterStore } from "./update-counter-use-case";
import { increment } from "../domain/counter-model";

export function incrementCounterUseCase(store: UpdateCounterStore) {
  updateCounterUseCase(store, increment);
}
