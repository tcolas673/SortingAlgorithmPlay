
selectionSort([5,1,3,6]);
function selectionSort(array) {
    // Write your code here.
      for(let i = 0; i < array.length-1; i++){
          let min = i;
          for(let j=i+1; j<array.length; j++){
              if(array[j] < array[min]){
                  min = j;
              }
          }
          if(min !== i){
              swap(i, min, array);
          }
      }
      return array;
  }
  function swap(i, min, array){
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
  }