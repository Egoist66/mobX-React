export interface ICounter {
    decrement: (val: number) => void;
    increment: (val: number) => void;
    increaseNewNumber: (val: number) => void;
    saveCount: () => void;
    resetCount: () => void;
    total: number;
    count: number
    savedCount: number | null
    newNumber: number

}