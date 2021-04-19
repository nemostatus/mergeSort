const merge = (leftArr, rightArr) =>{
//comparison fn
const output =[] 
let leftIndex = 0;
let rightIndex = 0;
while(leftIndex < leftArr.length || rightIndex < rightArr.length){
    const leftEl = leftArr[leftIndex]
    const rightEl =rightArr[rightIndex]
if(leftEl < rightEl){
    output.push(leftEl)
    leftIndex++}else{
        output.push(rightEl);
        rightIndex++
    }
}
} //helper fn, when popping into output increment indices

const mergeSort = array =>{
    if(array.length<1){
    //edge case for recursive fn
    return array} //exits when this happens
    const middleIndex = Math.floor(array.length /2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr) //recursing mergeSort until theres one element the 2 arguments in the merge fn 
    ) 
    //im calling merge in this?
} //goal of this fn break original array into indiviual arrays

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



