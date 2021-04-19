function mergeSort(array){
    console.log(array)
    return array
}

mergeSort([1,4,2,8,345])
//[1,4,2,8,345]
//[1,4,2] [8,245]
//[1,4] [2] [8] [345]
//[1][4][2][8][345]
//split the whole array into individual arrays
//compare and sort
//[1,4] [2,8] [345]
//[1,2,4,8] [345]
//[1,2,4,8,345]



