import { makeAutoObservable } from "mobx";
import type { ICounter } from "./counter.store.interface";

class CounterStore implements ICounter {
  count: number = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;
  savedCount: number | null = null;
  newNumber: number = 0

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

  resetCount = () => {
    this.count = 0
    this.savedCount = this.count
    this.newNumber = this.count

    localStorage.removeItem('count')
  }

  increaseNewNumber = (val: number) => {
    this.newNumber += val
  }

  get total() {
    return this.count * 3;
  }
}

export const counterStore = new CounterStore();
