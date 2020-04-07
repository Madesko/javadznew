let newArr = [[], [], []];
let arr_max = [];
let max1;
let max2;
let max3;
let length_1 = prompt("Длина первой строчки массива", '');
let length_2 = prompt("Длина второй строчки массива", '');
let length_3 = prompt("Длина третий строчки массива", '');
for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < length_1; j++) {
        let min = -99;
        let max = 99;
        let random_j = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[0][j] = random_j;
    }
    for (let k = 0; k < length_2; k++) {
        let min = -99;
        let max = 99;
        let random_k = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[1][k] = random_k;
    }
    for (let l = 0; l < length_3; l++) {
        let min = -99;
        let max = 99;
        let random_l = Math.floor(Math.random() * (+max - +min + 1) + +min);
        newArr[2][l] = random_l;
    }
} 
max1 = Math.max.apply(null, newArr[0]);
max2 = Math.max.apply(null, newArr[1]);
max3 = Math.max.apply(null, newArr[2]);
arr_max.push(max1, max2, max3);
console.log(Math.max.apply(null, arr_max));
console.log(newArr);




let login = prompt("Login", '');
for (let i = 0; i < login.length; i++) {
    if (login[0] === login[0].toLowerCase()) {
        login[0] = login[0].toUpperCase();
        console.log(login);
    }
}

let animalsArr = ['dog', 'cat', 'rabbit', 'mouse'];
let indexCat = animalsArr.indexOf('cat');
animalsArr.splice(indexCat, 1);
console.log(animalsArr);

