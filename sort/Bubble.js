function BubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    console.log(array);
}
BubbleSort([23,54,34,134,1,34,12,34])