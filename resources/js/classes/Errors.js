class Errors {
    constructor() {
        this.errors = {};
    }

    get(filed) {
        if (this.errors[filed]) return this.errors[filed][0];
    }

    recored(errors) {
        this.errors = errors;
    }
}

export default Errors;
