import { makeAutoObservable } from "mobx";
import type { ICounter } from "./counter.store.interface";

class CounterStore implements ICounter {
  count: number = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;
  savedCount: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  increment = (val: number): void => {
    this.count += val;
  };

  decrement = (val: number): void => {
    this.count -= val;
  };

  saveCount = (): void => {
    localStorage.setItem("count", this.count.toString());
    this.savedCount = this.count;
  };

  get total() {
    return this.count * 3;
  }
}

export const counterStore = new CounterStore();
