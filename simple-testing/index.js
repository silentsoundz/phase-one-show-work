const add = (a, b) =>  {
  return a + b
}

const chunk = (array, groupSize)=>{
  let outerArray = []
    for(let i = 0; i < array.length; ){
      let innerArray = array.splice(i, groupSize)
        outerArray.push(innerArray)
  }
      return outerArray
}


const reverseArray = (array) =>{
  const newArray = []
  for (let i=array.length -1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}

module.exports = {add, chunk, reverseArray}