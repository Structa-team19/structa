import { Counter } from "../domain/counter-entity";
import { create } from "../domain/counter-model";

// API/External Service Calls

export function getCounter(): Promise<Counter> {
  return Promise.resolve(create(0));
}

export function updateCounter(counter: Counter): Promise<Counter> {
  return Promise.resolve(counter);
}
