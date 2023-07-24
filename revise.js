//const arr = [1,2,3,4,5,6,7,8]
// const array = arr.slice(0, Math.floor(arr.length/2))
// for(let i=0; i<array.length; i++){
//     console.log(array[i])
// }
// const array1 = arr.slice(Math.floor(arr.length/2))
// for(let i=0; i<array1.length; i++){
//     console.log(array1[i])
// }
//console.log(arr.slice())


//bubble sort
// function bubble_sort(arr){
//     let i=0
//     let sorted = 0
//     while(i<arr.length-1 && sorted < arr.length){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 //swap
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//             i++
//         }
//         //one element sorted
//         sorted++
//         i=0
//     }

//     console.log(arr)
// }
// bubble_sort([4,1,6,3,2])

// let arr = [1,3,4,2,5,0]
// console.log(arr.sort((a,b)=>{
//     return b-a
// }))

// function linear(arr, k){
//     for(let i of arr){
//         if(k === i){
//             return true
//         }
//     }
//     return false
// }
// console.log(linear([1,2,3,4,5,6], 6))

// function binary(arr, k){
//     //edges
//     if(k === arr[arr.length-1]) return true
//     if(k === arr[0]) return true

//     let midIndex = Math.floor(arr.length/2)
//     let start = 0
//     let end = arr.length-1

//     while(end-start > 1){
//         if(k === arr[midIndex]){
//             return true
//         }

//         else if(k > arr[midIndex]){
//             start = midIndex
//             midIndex = Math.floor((end+start)/2)
//         }

//         else{
//             end = midIndex
//             midIndex = Math.floor((end+start)/2)
//         }
//     }

//     return false
// }
// console.log(binary([2,1,3,4,5,6], 2))


// class Node{
//     constructor(data, next=null){
//         this.Data = data
//         this.Next = next
//     }
// }


// const one = new Node(10) //tail
// const two = new Node(20, one)
// const three = new Node(30, two)
// const four = new Node(40, three)
// const five = new Node(50, four) //head

// function printData(list){
//     let current = list
//     while(current){
//         console.log(current.Data)
//         current = current.Next
//     }
// }

// printData(five)
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
//insertion sort
// function insertion_sort(arr){
//     let array = []

//     array.push(arr[0])

//     for(let i=1; i<arr.length; i++){
//         array.push(arr[i])
//         for(let j=i; j>0; j--){
//             if(array[j] < array[j-1]){
//                 [array[j], array[j-1]] = [array[j-1], array[j]]  //swap
//             }
//         }
//     }

//     console.log(array)
// }
// insertion_sort([4,1,0,2,3,6])



// const list = [
//     {
//         name: "babatunde1",
//         age: 20,
//     },
//     {
//         name: "babatunde2",
//         age: 21,
//     },
//     {
//         name: "babatunde3",
//         age: 22,
//     },
//     {
//         name: "babatunde4",
//         age: 20,
//     },
//     {
//         name: "babatunde5",
//         age: 20,
//     },
//     {
//         name: "babatunde6",
//         age: 20,
//     }
// ]

// console.log(list.filter((item)=>{
//     return item.age === 20;
// }).filter((item)=>{
//     return item.name === "babatunde1"
// }))

//check if number is palindrome
// function palindrome_check(num){
//     let num_array = []
//     let num_string = String(num)
//     console.log(num_string)

//     for(let i=0; i<num_string.length; i++){
//         num_array.push(num_string[i])
//     }

//     console.log(num_array)

//     let i=0;
//     let j=num_array.length-1;

//     while(i<num_array.length && j>=0){
//         if(num_array[i] !== num_array[j]){
//             return false
//         }
//         i++;
//         j--
//     }

//     return true
// }

// console.log(palindrome_check(1234321))
// console.log(palindrome_check(1254321))
// console.log(palindrome_check(1234567654321))


// class binary_Node{
//     constructor(data, left=null, right=null){
//         this.data = data
//         this.left = left
//         this.right = right
//     }
// }

// const root = new binary_Node(10)
// root.left = new binary_Node(20)
// root.right = new binary_Node(30)
// root.left.left = new binary_Node(40)
// root.left.right = new binary_Node(50)
// root.right.left = new binary_Node(60)


//find most frequently occurring element in array

// function frequent(arr){
//     let map = {}

//     for(let i=0; i<arr.length; i++){
//         if(!map.hasOwnProperty(arr[i])){
//             map[arr[i]] = 0
//         }
//         map[arr[i]]++
//     }

//     let max_freq = Object.keys(map)[0]

//     //THIS IS HOW TO TRAVERSE A MAP OBJECT....GET THE KEYS THROUGH: Object.keys(map)[i].....GET THE VALUES THROUGH: map[Object.keys(map)[i]]
//     for(let j=1; j<Object.keys(map).length; j++){
//         if(map[Object.keys(map)[j]] > map[Object.keys(map)[j-1]]){
//             max_freq = Object.keys(map)[j]
//         }
//     }

//     console.log(Object.keys(map))
//     console.log(map)
//     console.log(max_freq)
// }

// frequent([1,1,1,1,1,3,3,3,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6])





//reverse a linked list
// class Node{
//     constructor(data, next=null){
//         this.Data = data
//         this.Next = next
//     }
// }
// const one = new Node(10) //tail
// const two = new Node(20, one)
// const three = new Node(30, two)
// const four = new Node(40, three)
// const five = new Node(50, four) //head

// let reversed = five

// function reverse_linkedlist(head){
//     let current = head
//     let prev = null

//     while(current){
//         next = current.Next
//         current.Next = prev
//         prev = current
//         current = next
//     }
//     reversed = prev
// }

// function printData(list){
//     let current = list
//     while(current){
//         console.log(current.Data)
//         current = current.Next
//     }
// }

// printData(reversed)
// reverse_linkedlist(reversed)
// printData(reversed)

//recursion