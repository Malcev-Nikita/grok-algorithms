export default class LineSearch {
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

        for (let index = 0; index < this.array.length; index++) {
            if(this.array[index] == this.numberSearch) {
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