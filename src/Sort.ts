import {intSortFunction} from "./intSortFunction";

export class Sort{
    constructor(private data: number[], private algorithm: intSortFunction){}
    set(newAlgorithm: intSortFunction){
        this.algorithm = newAlgorithm;
    }
    solve():number[] {
        return this.algorithm.sort(this.data);
    }
};