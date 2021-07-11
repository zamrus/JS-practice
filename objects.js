// object iteration

let obj = {
    from: 1,
    to: 5
}

obj[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current <= this.last) {
                return {value: this.current++, done: false}
            } else {
                return {done: true}
            }
        }
    }
}

for(let key of obj) {
    console.log(key);
}
