//GS Merge two sorted arrays using Priority queue
// function mergeArrays(arr1, arr2){ //TIME O(M+N), SPACE O(M+N)
//     let merged = []
//     let i = 0
//     let j = 0

//     while(arr1.length && arr2.length){
//         if(arr1[i]<arr2[j]){
//             merged.push(arr1.shift())
//         }else{
//             merged.push(arr2.shift())
//         }
//     }

//     return merged.concat(arr1.slice()).concat(arr2.slice())
// }
// console.log(mergeArrays([1,2,3,4], [7,12,15,17]))
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// GS Given an input string, write a function that returns the Run Length Encoded string for the input string.
//METHOD 1:
// function run_length_encoded(str){ //METHOD ONE: TIME O(N)     SPACE O(N)
//     let result = ""
//     let map = {}

//     for(let i=0; i<str.length; i++){
//         if(!map.hasOwnProperty(str[i])){
//             map[str[i]] = 0
//         }
//         map[str[i]]++
//     }

//     for(let j=0; j<Object.keys(map).length; j++){
//         let key = Object.keys(map)[j]
//         result = result + String(key) + String(map[key])
//     }

//     return result
// }
// console.log(run_length_encoded("wwwwaaadexxxxxx"))
//
//
// METHOD 2:
// function run_length_encoded(str){  //TIME: O(N^2)     SPACE: O(1)
//     let result = ""
//     let counter = 0
//     let total_counter = 0

//     for(let i=0; i<str.length; i++){
//         for(let j=i; j<str.length; j++){
//             if(str[i] === str[j]){
//                 counter++
//             }else{
//                 i = j
//                 i--
//                 break
//             }
//         }


//         result = result + str[i] + String(counter) //coercion

//         total_counter += counter
//         if(total_counter === str.length){
//             break
//         }

//         counter = 0
//     }

//     console.log(result)
// }
// run_length_encoded("wwwwaaadexxxxxx")
// run_length_encoded("aaabbbbbccdd")
// run_length_encoded("abcdes")
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// GS Given a matrix of size m*n, m denotes the row starting with index 0 and n denotes the column starting with index 0.
//The matrix will hold distinct integers as elements.
//We need to find a distinct number of positional elements which are either the minimum or maximum in their corresponding row or column.
// function distinct_min_max(two_dim_arr){
//     let map = {}

//     //check all rows for minimum and maximum and hash such numbers
//     for(let i=0; i<two_dim_arr.length; i++){
//         let arr = two_dim_arr[i]

//         let min = Math.min(...arr)
//         if(!map.hasOwnProperty(min)){
//             map[min] = 0
//         }
//         map[min]++

//         let max = Math.max(...arr)
//         if(!map.hasOwnProperty(max)){
//             map[max] = 0
//         }
//         map[max]++
//     }


//     //extract the columns into a new organised array
//     let columns = []
//     let k=0
//     while(k<two_dim_arr.length){
//         let column = []
//         for(let j=0; j<two_dim_arr.length; j++){
//             column.push(two_dim_arr[j][k])
//         }

//         columns.push(column)
//         k++
//     }

//     //check all columns for minimum and maximum and hash such numbers
//     for(let r=0; r<columns.length; r++){
//         let array = columns[r]

//         let min = Math.min(...array)
//         if(!map.hasOwnProperty(min)){
//             map[min] = 0
//         }
//         map[min]++

//         let max = Math.max(...array)
//         if(!map.hasOwnProperty(max)){
//             map[max] = 0
//         }
//         map[max]++
//     }

//     //return the number of keys in the hash map
//     return Object.keys(map).length
// }
// console.log(distinct_min_max([[1,3,4],[5,2,9],[8,7,6]]))