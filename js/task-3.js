class StringBuilder{
    #value;

    constructor(inititalValue) {
        this.#value = inititalValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        return this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
        return this.#value;
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
        return this.#value;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
