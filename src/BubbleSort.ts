import {intSortFunction} from "./intSortFunction";

/**
 * Clase para implementar el algoritmo de Ordenación de la Burbuja.
 * Es importante que implemente la interfaz intSortFunction, ya que los objetos de la clase Solve
 * utilizan objetos de intSortFunction para ordenar arrays numéricos.
 */
export class BubbleSort implements intSortFunction{
    /**
     * Constructor de la clase. Vacío.
     */
    constructor(){}
    /**
     * Ordena una entrada de datos siguiendo el algoritmo BubbleSort
     * @param data Array numérico que el usuario desea ordenar
     */
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