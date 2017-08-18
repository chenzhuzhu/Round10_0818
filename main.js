/**
 * Created by cyz on 2017/8/18.
 */
"use strict";
let arr = [1,3,7,1,4];
let item =1;
console.log(arr);
main(arr,item);

function main(collection,element){
    let result =''
    collection.filter((item,index)=>{
        if(item == element){
            result+= ' '+index
        }
    })
    console.log('与item'+ item +'相等的元素出现的所有位置:')
    console.log(result)


}
