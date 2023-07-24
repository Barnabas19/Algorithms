//SORTING ALGORITHMS
//1. MERGE SORT: USES DIVIDE AND CONQUER, O(nlogn) TIME, RECURSIVE........WORST: O(nlogn)
// function mergeSort(array){
//     if(array.length <= 1){
//         return array
//     }

//     const middle = Math.floor(array.length/2)
//     const left = array.slice(0, middle)
//     const right = array.slice(middle)

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     )
// }
// function merge(left, right){
//     const array = [];

//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             array.push(left.shift())
//         }else{
//             array.push(right.shift())
//         }
//     }

//     return array.concat(left.slice()).concat(right.slice())
// }
// console.log(mergeSort([2,1,5,6,7,3,4,9]))
// console.log(mergeSort([2,1,5,6,7,3,4,9,12,32,45,14,20,1000]))
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
//
//
//
// 2. INSERTION SORT
//MY IMPLEMENTATION     SPACE: O(N)     TIME: O(N^2)
// function insertion_sort(arr){
//     let newArr = []
//     newArr.push(arr[0])

//     for(let i=0; i+1<arr.length; i++){
//         newArr.push(arr[i+1])

//         let j = 1

//         while(newArr[newArr.length-j] < newArr[newArr.length-(j+1)]){
//             let temp = newArr[newArr.length-j]
//             newArr[newArr.length-j] = newArr[newArr.length-(j+1)]
//             newArr[newArr.length-(j+1)] = temp

//             j++
//         }
//     }

//     return newArr
// }
// console.log(insertion_sort([1,4,2,8,345,123,43,32]))

//BETTER IMPLEMENTATION       SPACE: O(1)    TIME: O(N^2)
// function insertion_sort(array){
//     for(let i=1; i<array.length; i++){
//         for(let j=i; j>0; j--){
//             if(array[j] < array[j-1]){
//                 //swap
//                 [array[j], array[j-1]] = [array[j-1], array[j]]
//             }else{
//                 break
//             }
//         }
//     }

//     return array
// }
// console.log(insertion_sort([1,4,2,8,345,123,43,32]))
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
//
//
//

//
// 3. BUBBLE SORT...........the bigger number bubbles up towards the extreme right      TIME: O(N^2)......WORST: O(N^2)
//MY IMPLEMENTATION
// function bubble_sort(arr){
//     let sorted = 0

//     while(sorted < arr.length){
//         for(let i=0; i<(arr.length-sorted+1); i++){
//             if(arr[i] > arr[i+1]){
//                 //swap
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//             }
//         }
//         sorted++
//     }

//     return arr
// }
// console.log(bubble_sort([7,1,2,4,3,6]))
// console.log(bubble_sort([34,1,23,6,4,5,8,678,0]))
// console.log(bubble_sort([1]))
// console.log(bubble_sort([7,1,3,8,1,2]))
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
//
//
//
//
// 4. SELECTION SORT......................select minimums.......TIME O(N^2)
// function selection_sort(arr){
//     for(let i=0; i<arr.length-1; i++){
//         let minIndex = i

//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         //swap
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }

//     return arr
// }
// console.log(selection_sort([7,1,2,4,3,6]))
// console.log(selection_sort([34,1,23,6,4,5,8,678,0]))
// console.log(selection_sort([1]))
// console.log(selection_sort([7,1,3,8,1,2]))
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
//
//
//
//
//
// 5. QUICK SORT
// function quick_sort(arr){    //RECURSIVE............DIVIDE AND CONQUER.............TIME: O(nlogn)....WORST: O(N^2)
//     //base case
//     if(arr.length === 1){
//         return arr
//     }

//     const pivot = arr[arr.length-1]
//     const leftArr = []
//     const rightArr = []

//     //separate elements into the two arrays
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     if(leftArr.length > 0 && rightArr.length > 0){
//         return [...quick_sort(leftArr), pivot, ...quick_sort(rightArr)]
//     }else if(leftArr.length > 0){
//         return [...quick_sort(leftArr), pivot]
//     }else{
//         return [pivot, ...quick_sort(rightArr)]
//     }
// }
// console.log(quick_sort([7,1,2,4,3,6]))
// console.log(quick_sort([34,1,23,6,4,5,8,678,0]))
// console.log(quick_sort([1]))
// console.log(quick_sort([7,1,3,8,1,2]))
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
//
//
//
//
//
//
//
// 6. CYCLIC SORT................USED FOR SORTING ARRAYS OF A KNOWN RANGE
// function cyclic_sort(arr){
//     if(arr.includes(0)){  //range starts from 0
//         let i=0

//         while(i<arr.length){
//             const j = arr[i]
//             if(arr[j] !== arr[i]){
//                 [arr[j], arr[i]] = [arr[i], arr[j]]
//             }else{
//                 i++
//             }
//         }
//     }else if(arr.includes(1) && !arr.includes(0)){  //range starts from 1
//         let i=0

//         while(i<arr.length){
//             const j = arr[i]-1
//             if(arr[j] !== arr[i]){
//                 [arr[j], arr[i]] = [arr[i], arr[j]]
//             }else{
//                 i++
//             }
//         }
//     }

//     return arr
// }
// console.log(cyclic_sort([7,1,2,4,3,6]))
// console.log(cyclic_sort([34,1,23,6,4,5,8,678,0]))
// console.log(cyclic_sort([1]))
// console.log(cyclic_sort([7,1,3,8,1,2]))
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
//
//
//
//
//
//
//
// 7. HEAP SORT       //TIME: O(nlogn)
// const heapify = (arr, length, i) => {
//     let largest = i
//     const left = i * 2 + 1
//     const right = left + 1
  
//     if (left < length && arr[left] > arr[largest]) {
//       largest = left
//     }
  
//     if (right < length && arr[right] > arr[largest]) {
//       largest = right
//     }
  
//     if (largest !== i) {
//       [arr[i], arr[largest]] = [arr[largest], arr[i]]
//       heapify(arr, length, largest)
//     }
  
//     return arr
// }
  
// const heap_sort = arr => {
//     const length = arr.length
//     let i = Math.floor(length / 2 - 1)
//     let k = length - 1
  
//     while (i >= 0) {
//       heapify(arr, length, i)
//       i--
//     }
  
//     while (k >= 0) {
//       [arr[0], arr[k]] = [arr[k], arr[0]]
//       heapify(arr, k, 0)
//       k--
//     }
  
//     return arr
// }

// console.log(heap_sort([7,1,2,4,3,6]))
// console.log(heap_sort([34,1,23,6,4,5,8,678,0]))
// console.log(heap_sort([1]))
// console.log(heap_sort([7,1,3,8,1,2]))
// console.log(heap_sort([1,2,7,3,5]))

























//SEARCHING ALGORITHMS
// 1. LINEAR SEARCH            TIME: O(N)
// function linear_search(arr, key){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === key){
//             return true
//         }
//     }
//     return false
// }
// console.log(linear_search([1,3,4,6,5,4,7], 10))
// console.log(linear_search([1,3,4,6,5,4,7], 5))
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
//
//
//
//
//
//
//
//2. BINARY SEARCH            TIME: O(logn)...................ONLY WORKS FOR SORTED ARRAYS
// MY SOLUTION:
// function binary_search(arr, key){
//     let start = 0
//     let end = arr.length-1

//     if(arr[start]===key || arr[end]===key){
//         return true
//     }

//     while(end-start+1 !== 2){
//         mid = Math.floor((start + end)/2)
//         if(arr[mid] > key){
//             end = mid
//         }else if(arr[mid] < key){
//             start = mid
//         }else{
//             return true
//         }
//     }

//     return false
// }
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 9))
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 4))
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 2))
// console.log(binary_search([1,3,5,6,8,9,20], 20))
// console.log(binary_search([3,6,7,8,100,200], 3))
// console.log(binary_search([3,6,7,8,100,200], 5))


// GEEKSFORGEEKS SOLUTION:                 same TIME: O(logn)
// let binary_search = function (arr, x) {
   
//     let start=0, end=arr.length-1;
          
//     while (start <= end){
  
//         let mid = Math.floor((start + end)/2);
   
//         if (arr[mid] === x){
//             return true;
//         }else if (arr[mid] < x){
//              start = mid + 1;
//         }else{
//              end = mid - 1;
//         }
//     }
   
//     return false;
// }
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 9))
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 4))
// console.log(binary_search([1,2,3,4,5,6,7,9,10], 2))
// console.log(binary_search([1,3,5,6,8,9,20], 20))
// console.log(binary_search([3,6,7,8,100,200], 3))
// console.log(binary_search([3,6,7,8,100,200], 5))
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
//
//
//
//
//
//
//
//3. FIBONACCI SEARCH ..........ONLY WORKS FOR SORTED ARRAYS........TIME: O(logn)........DIVIDE AND CONQUER
// function fibonacci_search(arr, x)         //RETURN INDEX OF KEY IF FOUND, ELSE, RETURN -1
// {
//     //n holds the arr length
//     let n = arr.length

//     /* Initialize fibonacci numbers */
//     let fibMMm2 = 0; // (m-2)'th Fibonacci No.
//     let fibMMm1 = 1; // (m-1)'th Fibonacci No.
//     let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci
  
//     /* fibM is going to store the smallest Fibonacci
//     Number greater than or equal to n, where n is the length of arr */
//     while (fibM < n)
//     {
//         fibMMm2 = fibMMm1;
//         fibMMm1 = fibM;
//         fibM = fibMMm2 + fibMMm1;
//     }
  
//     // Marks the eliminated range from front
//     let offset = -1;
  
//     /* while there are elements to be inspected. Note that
//     we compare arr[fibMm2] with x. When fibM becomes 1,
//     fibMm2 becomes 0 */
   
//     while (fibM > 1)
//     {
//         // Check if fibMm2 is a valid location
//         let i = Math.min(offset + fibMMm2, n-1);
  
//         /* If x is greater than the value at index fibMm2,
//         cut the subarray array from offset to i */
//         if (arr[i] < x)
//         {
//             fibM = fibMMm1;
//             fibMMm1 = fibMMm2;
//             fibMMm2 = fibM - fibMMm1;
//             offset = i;
//         }
  
//         /* If x is less than the value at index fibMm2,
//         cut the subarray after i+1 */
//         else if (arr[i] > x)
//         {
//             fibM = fibMMm2;
//             fibMMm1 = fibMMm1 - fibMMm2;
//             fibMMm2 = fibM - fibMMm1;
//         }
  
//         /* element found. return index */
//         else return i;
//     }
  
//     /* comparing the last element with x */
//     if(fibMMm1 && arr[n-1] == x){
//       return n-1
//     }
  
//     /*element not found. return -1 */
//     return -1;
// }
// console.log(fibonacci_search([1,2,3,4,5,6,7,9,10], 9))
// console.log(fibonacci_search([1,2,3,4,5,6,7,9,10], 4))
// console.log(fibonacci_search([1,2,3,4,5,6,7,9,10], 2))
// console.log(fibonacci_search([1,3,5,6,8,9,20], 20))
// console.log(fibonacci_search([3,6,7,8,100,200], 3))
// console.log(fibonacci_search([3,6,7,8,100,200], 5))






















// DATA STRUCTURES IMPLEMENTATION IN JAVASCRIPT
// 1. PRIORITY QUEUE
// A priority queue is a special type of queue in which each element is associated with a priority value. 
//And, elements are served on the basis of their priority. That is, higher priority elements are served first. 
//However, if elements with the same priority occur, they are served according to their order in the queue.
//NB: PRIORITY QUEUE CAN BE IMPLEMENTED USING:
// 1. ARRAY
// 2. BINARY HEAP (MIN OR MAX)
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
//
//
//
//
// 2. (MIN) BINARY HEAP
// const comparison = Object.freeze({
//     BIGGER: 1,
//     BIGGER_OR_EQUAL: [1,0],
//     SMALLER: -1,
//     SMALLER_OR_EQUAL: [-1,0],
//     EQUAL: 0
// });

// const defaultCompareFunction = (a, b)=>{
//     if(a>b){
//         return comparison.BIGGER
//     }
//     if(a<b){
//         return comparison.SMALLER
//     }
//     return comparison.EQUAL
// }

// class MinHeap{
//     #heap = [];   //internally using an array to implement the heap........NB: You could also use a linked list
//     #compare;

//     constructor(compareFn = defaultCompareFunction){
//         this.#compare = compareFn;
//     }

//     get size(){
//         return this.#heap.length;
//     }

//     get isEmpty(){
//         return this.size === 0
//     }

//     peek(){
//         return this.isEmpty? null : this.#heap[0]
//     }

//     print(){
//         console.log(this.#heap)
//         this.#printNode(0)
//     }

//     insert(value){
//         if(value !== null  &&  value !== undefined){
//             this.#heap.push(value)
//             this.#siftUp(this.size-1)
//             return true
//         }
//         return false
//     }

//     extract(){
//         if(this.isEmpty){
//             return null
//         }
//         if(this.size === 1){
//             return this.#heap.shift()
//         }
//         const removedNode = this.#heap.shift();
//         this.#siftDown(0)
//         return removedNode
//     }

//     #siftDown(index){
//         let currentIndex = index
//         const leftIndex = this.#getLeftIndex(index)
//         const rightIndex = this.#getRightIndex(index)

//         if(
//             leftIndex < this.size &&
//             this.#compare(this.#heap[currentIndex], this.#heap[leftIndex]) === comparison.BIGGER
//         ){
//             currentIndex = leftIndex
//         }

//         if(
//             rightIndex < this.size &&
//             this.#compare(this.#heap[currentIndex], this.#heap[rightIndex]) === comparison.BIGGER
//         ){
//             currentIndex = rightIndex
//         }

//         if(currentIndex !== index){
//             this.#swap(index, currentIndex)
//             this.#siftDown(currentIndex)
//         }
//     }

//     #siftUp(index){
//         let parentIndex = this.#getParentIndex(index)

//         while(index>0  &&  this.#compare(this.#heap[parentIndex], this.#heap[index]) === comparison.BIGGER){
//             this.#swap(parentIndex, index)
//             index = parentIndex
//             parentIndex = this.#getParentIndex(index)
//         }
//     }

//     #swap(i, j){
//         [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]
//     }

//     #getLeftIndex(index){
//         return 2*index + 1
//     }

//     #getRightIndex(index){
//         return 2*index + 2
//     }

//     #getParentIndex(index){
//         if(index === 0){
//             return null
//         }
//         return Math.floor((index-1)/2)
//     }

//     #printNode(i=0, spaceCount=0, label='*'){

//         if(i >= this.size){
//             return
//         }

//         console.log(`${''.repeat(spaceCount)}${label}: ${this.#heap[i]} [${i}]`);
//         this.#printNode(this.#getLeftIndex(i), spaceCount + 3, 'L')
//         this.#printNode(this.#getRightIndex(i), spaceCount + 3, 'R')
//     }
// }

// const min_heap = new MinHeap()
// min_heap.insert(2)
// min_heap.insert(3)
// min_heap.insert(4)
// min_heap.insert(5)
// min_heap.insert(1)
// min_heap.print()
// console.log(min_heap.extract())
// console.log(min_heap.extract())
// console.log(min_heap.extract())
// min_heap.print()
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
//
//
//
//
//
//
//
// 3. (MAX) BINARY HEAP
// class MaxHeap extends MinHeap{
//     constructor(compareFn = defaultCompareFunction){
//         super((a,b) => compareFn(b,a));
//     }
// }

// const max_heap = new MaxHeap()
// max_heap.insert(2)
// max_heap.insert(3)
// max_heap.insert(4)
// max_heap.insert(5)
// max_heap.insert(1)
// max_heap.print()
// console.log(max_heap.extract())
// console.log(max_heap.extract())
// console.log(max_heap.extract())
// max_heap.print()