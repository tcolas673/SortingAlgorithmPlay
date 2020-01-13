let j = 0;
j--;
console.log(j);

bubbleSort([3,1,2]);

function bubbleSort(array) {
    // Write your code here.
      while(!isSorted){
      isSorted = true;	
      for(let i = 0; i < array.length-1; i++){
          if(array[i] > array[i+1]){
              const temp = array[i];
              array[i] = array[i+1];
              array[i+1] = temp;
              isSorted = false;
          }
       }
      }
      console.log(array);
      return array;
  }