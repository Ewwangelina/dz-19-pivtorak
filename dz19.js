 /*Написать функцию, принимающую 1 параметр. с тем, что передали первый
   раз и т. д. Все это с замыканиями, например:

sum(3) = 3

sum(5) = 8

sum(20) = 28
*/

let getAdder = function () {
    let res = 0;
    return function(x) {
        res += x;
        return res;
    }
};

let sum = getAdder();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));



