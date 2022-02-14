
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = []
  if(arguments.length == 0){
  return result
  }
  if(matrix.length == 0){
    return result
  }
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i].length == 0){
      result.push([])
    }
    if(i % 2 == 0){
      for(let j = 0; j < matrix[i].length; j++){
        result.push(matrix[i][j])
      }
    }
    else {
        for(let k = matrix[i].length - 1; k >= 0; k --){
          result.push(matrix[i][k])
        }
      }
    }
    return result
  }

  

