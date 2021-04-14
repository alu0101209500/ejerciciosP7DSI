import {Sort} from "./Sort";
import {BubbleSort} from "./BubbleSort";

const bbsort = new BubbleSort();
let sortelem = new Sort([3, 1, 5, 8, 9, 2], bbsort);
console.log(sortelem.solve());