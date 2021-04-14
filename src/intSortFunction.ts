/**
 * Interfaz para definir objetos que implementen un algoritmo de ordenación.
 * Todos los algoritmos de ordenación, independientemente de su funcionamiento,
 * han de tener un método sort.
 */
export interface intSortFunction {
    sort(data: number[]): number[]
}