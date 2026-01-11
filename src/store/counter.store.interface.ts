export interface ICounter {
    decrement: (val: number) => void;
    increment: (val: number) => void;
    total: number;
    count: number
    savedCount: number

}