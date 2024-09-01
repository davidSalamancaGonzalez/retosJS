export function fizzBuzz() {
    for(let i = 0; i <= 100; i++){
        let fizz = i % 3 === 0;
        let buzz = i % 5 === 0;
        if (fizz && buzz) {
            console.log(i, 'fizzbuzz')
        } else if (fizz) {
            console.log(i, 'fizz')
        } else if (buzz) {
            console.log(i, 'buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()
