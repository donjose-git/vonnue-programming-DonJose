const array1 = [1, 2, 3, 4];
const array2 = [9, 5, 6, 7];
let array3 = [];
const compareArray = ()=> {
    for (let i = 0; i < array1.length && array2.length; i++){
        array3 = array1.concat(array2);
    }
    console.log(array3);
}
compareArray();