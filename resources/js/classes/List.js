export default class ClassName {
    constructor(data) {
        this.data = data
    }

    getItemBy(what, value) {
        return this.data.find(item => item[what] == value)
    }

    getListOF(what) {
        return this.data.map(item => item[what])
    }
}
