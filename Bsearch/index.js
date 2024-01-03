
function BinarySearch(array,target){
    let start=0;
    let end=array.length-1;
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if(array[middle]===target){
            return middle
        }
        if(array[middle]<target){
            start=middle+1
        }else{
            end=middle-1
        }
    }
    return -1
}

console.log(BinarySearch([23,23,67,89,90],89));