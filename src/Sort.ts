import {intSortFunction} from "./intSortFunction";

/**
 * La clase Sort permite ordenar arrays numéricos utilizando cualquier algoritmo de ordenación.
 */
export class Sort{
    /**
     * Constructor de la clase
     * @param data Array numérico a ordenar
     * @param algorithm Algoritmo de ordenación seleccionado
     */
    constructor(private data: number[], private algorithm: intSortFunction){}
    /**
     * Cambia el algoritmo de ordenación
     * @param newAlgorithm Nuevo algoritmo
     */
    set(newAlgorithm: intSortFunction){
        this.algorithm = newAlgorithm;
    }
    /**
     * Devuelve el array ordenado
     */
    solve():number[] {
        return this.algorithm.sort(this.data);
    }
};