export default class BinarySearch {
    private array: Array<number>;
    private numberSearch: number;

    constructor(array: Array<number>, numberSearch: number) {
        this.array = array;
        this.numberSearch = numberSearch
    }


    /**
     * Поиск по массиву
     */
    public Search() {
        let time = performance.now()

        let res = new Array();
        let index = Number((this.array.length / 2).toFixed(0));

        while(res.length == 0) {
            if(this.array[index] > this.numberSearch)
                index = Number((index / 2).toFixed(0));

            else if(this.array[index] < this.numberSearch)
                index = Number((index * 2).toFixed(0));

            else {
                res.push({
                    number: this.array[index],
                    arrayId: index,
                });

                break;
            }
        }

        res[0].time = Number(((performance.now() - time) * 10000).toFixed(0));

        return res;
    }
}