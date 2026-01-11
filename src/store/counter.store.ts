import {makeAutoObservable} from 'mobx'

 class CounterStore {
    count: number = 0;


    constructor(){
        makeAutoObservable(this)
    }

    increment = (val: number): void => {
        this.count += val;
    };
    
    decrement = (val: number): void => {
       this.count -= val;
    };
}

export const counterStore = new CounterStore()