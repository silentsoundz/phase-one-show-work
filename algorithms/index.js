// Sorting Algorithms


const bubbleSort = ( arr ) => {
  if( !Array.isArray( arr ) ){
    return 'This is not an array, fool'
  }

  for( let index = 1; index < arr.length; index++ ) {
    for( let jindex = 1; jindex < arr.length; jindex ++ ) {
      const a = arr[jindex - 1]
      const b =  arr[jindex]
      if( a > b ) {
        arr[jindex - 1] = b
        arr[jindex] = a
      }
    }
  }
  return arr;
}

const selectionSort = ( array ) => {
  if( !Array.isArray( arr ) ){
    return 'This is not an array, fool'
  }
  let length = array.length;
    for( let i = 0; i < length -1; i++ ) {
     let min = i ;
     for( let j = i + 1; j < length; j++ ) {
       if( array[j] < array[min] ) {
         min = j;
       }
     }
       if( min != i ) {
         let tmp = array[i];
         array[i] = array[min];
         array[min] = tmp;
       }
    }
  return array
}



const insertionSort = ( array ) => {
  if( !Array.isArray( arr ) ){
    return 'This is not an array, fool'
  }
  for( let i = 1; i < array.length; i++ ){
    for( let j = 0; j < i; j++ ) {
      if( array[i] < array[j] ) {
        const spliced = array.splice( i, 1 )
        array.splice( j, 0, spliced[0] )
      }
    }
  }
  return array
}


/*
 * Validate your sorting implementation by calling your functions on the
 * input, below, and comparing their results to the results of using JavaScript's
 * Array.prototype.sort()
 */
var testInput = [ 9, 3, 1, 2, 1000, 15, 83, 75, 84, 200000, 42 ];