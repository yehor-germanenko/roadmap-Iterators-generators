function* numGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numGen(2)

console.log(num.next())
console.log(num.next())
console.log(num.next())

function makeIterator(array) {
    let nextIndex = 0;

    return {
        next: () => nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {done: true}
    }
}

const it = makeIterator(['one', 'two']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

const SymbolIterator = {
    [Symbol.iterator](array = [1, 2, 3]) {
        let nextIndex = 0;

        return {
            next: () => nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true}
        }
    }
}

for (let value of SymbolIterator) {
    console.log(value)
}

for (let value of 'abc') {
    console.log(value)
}
