
insertionSort([8,13,5,1]);
function insertionSort(array){
    for(let i = 0; i < array.length; i++){
        let j = i+1;
        while( j > 0 && array[j] < array[j-1]){
            const temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j--;
        }
    }
    console.log(array);
    return array;
}