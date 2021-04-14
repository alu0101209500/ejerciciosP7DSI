import "mocha";
import {expect} from "chai";
import {Sort} from "../src/Sort";
import {BubbleSort} from "../src/BubbleSort";

const bbsort = new BubbleSort();
let sortelem = new Sort([3, 1, 5, 8, 9, 2], bbsort);

describe('BubbleSort:', () =>{
  it('Se debe poder ordenar un vector', () =>{
    expect(sortelem.solve().join("")).to.be.equal("123589");
  });
});