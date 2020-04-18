const array1 = [1, 2, 3, 4];
const array2 = [9, 5, 6, 7];
let array3 = [];
const addingTwoArrays = () => {
    let i;
    for (i = 0; i < array1.length; i++) {
        array3[i] = array1[i] + array2[i];
    }
    console.log(array3);
}
addingTwoArrays();