import {intSortFunction} from "./intSortFunction";

export class BubbleSort implements intSortFunction{
    constructor(){}
    sort(data: number[]):number[]{
        let sorted:boolean = false;
        let i = 0;
        let aux:number;
        while((i < data.length) && (sorted == false)){
            i++;
            sorted = true;
            for(let j = 0; j < data.length - i; j++){
                if(data[j] > data[j+1]){
                    sorted = false;
                    aux = data[j];
                    data[j] = data[j+1];
                    data[j+1] = aux;
                }
            }
            console.log(data);
        }
        return data;
    }
}