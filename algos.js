////////////////////////////////////////////////////////////CuriousP21 JUNE 3, 2021 https://bucky21.medium.com/goldman-sachs-interview-experience-d8383e665498

//1. https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/
// FIND THE ELEMENT THAT APPEARS ONCE IN AN ARRAY WHERE EVERY OTHER ELEMENT APPEARS TWICE
//MY SOLUTION:
// function occursOnce(arr){  //USING HASHING[O(N)] AND TIME OF O(N)
//     let map = {}

//     for(let i=0; i<arr.length; i++){
//         if(!map.hasOwnProperty(arr[i])){
//             map[arr[i]] = 0
//         }
//         map[arr[i]]++
//     }

//     for(let j=0; j<arr.length; j++){
//         if(map[arr[j]] === 1){
//             return arr[j]
//         }
//     }
// }
// console.log(occursOnce([7,3,5,4,5,3,4]))
// console.log(occursOnce([2, 3, 5, 4, 5, 3, 4]))
// console.log(occursOnce([15, 18, 16, 18, 16, 15, 89]))

// function occursOnce(arr){   //USING TIME OF O(N^2)
//     for(let i=0; i<arr.length; i++){
//         let item = arr[i]
//         let count = 0;

//         for(let j=0; j<arr.length; j++){
//             if(item === arr[j]){
//                 count++
//             }
//         }

//         if(count === 1){
//             return item
//         }

//         count = 0;
//     }
// }
// console.log(occursOnce([7,3,5,4,5,3,4]))
// console.log(occursOnce([2, 3, 5, 4, 5, 3, 4]))
// console.log(occursOnce([15, 18, 16, 18, 16, 15, 89]))


//LEETCODE SOLUTION:   O(N) TIME AND O(1) SPACE
// The best solution is to use XOR. XOR of all array elements gives us the number with a single occurrence. The idea is based on the following two facts. 
// a) XOR of a number with itself is 0. 
// b) XOR of a number with 0 is number itself.
// function occursOnce(arr){
//     let res = arr[0]

//     for(let i=1; i<arr.length; i++){
//         res = res ^ arr[i]
//     }

//     return res
// }
// console.log(occursOnce([7,3,5,4,5,3,4]))
// console.log(occursOnce([2, 3, 5, 4, 5, 3, 4]))
// console.log(occursOnce([15, 18, 16, 18, 16, 15, 89]))
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
//
//
//
//
//
//
//
//2. https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
//Given a linked list, check if the linked list has loop or not. Below diagram shows a linked list with a loop. 
//MY SOLUTION:
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = head.next


// function loopCheck(head){   //O(N) TIME AND O(1) SPACE.......floyd's cycle-finding algorithm
//     let slow = head
//     let fast = head

//     while(slow && fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next

//         if(fast === slow){
//             return true
//         }
//     }

//     return false
// }
// console.log(loopCheck(head))
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
//
//
//3. https://bucky21.medium.com/arrangement-of-bricks-fc5a213d4f94
// We are given a wall of height h and length l and we have to design it with bricks in such a way that:
// When the bricks are stacked on top of each other no two bricks’ edges coincide(except at the corners).
// After stacking the bricks the total length is l and height is h.
// There are 2 kinds of bricks: 2X1 and 3X1.
//LEETCODE SOLUTION:
// function stackedBricks(lgth, hght){
//     let firstCombination = [];
//     let secondCombination = [];
//     let noOf2lenBricks;

//     if(findWall(lgth) !== -1){
// 	    printWall(hght);
// 	}
// 	else{
// 	    cout<<"Arrangement is not possible for "<<length<<endl;
// 	}

//     function findFirstForEvenLen(length){
//         //fill firstCombination with all 2X1 bricks
//         noOf2lenBricks=length/2;

//         for(let i=0; i<noOf2lenBricks; i++){
//             firstCombination.push(2);
//         }
//     }

//     function findSecondForEvenLen(length){
//         if(length>=6){
//             //fill secondCombination with first brick of 3 length
//             secondCombination.push(3);
//             //fill secondCombination with (length-6)/2 bricks of 2 length
//             noOf2lenBricks=(length-6)/2;
//             for(let i=0; i<noOf2lenBricks; i++){
//                 secondCombination.push(2);
//             }  
//             //fill secondCombination with last brick of 3 length
//             secondCombination.push(3);
//         }
//         else{   // if length=2
//            secondCombination.push(2); 
//         }
//     }

//     function findFirstForOddLen(length){
//         //first brick of length 3 
//         firstCombination.push(3);

//         //remaining bricks of length 2
//         noOf2lenBricks=(length-3)/2;
//         for(let i=0; i<noOf2lenBricks; i++){
//             firstCombination.push(2);
//         }
//     }

//     function findSecondForOddLen(length){
//         //secondCombination is reverse of firstCombination
//         secondCombination = firstCombination;
//         secondCombination = secondCombination.reverse()
//     }

//     function findWall(length){
//         //corner cases
//         if(length===0 || length===1 || length===4){
//             return -1;
//         }

//         //if length is even
//         if(length%2===0){
//             findFirstForEvenLen(length);
//             findSecondForEvenLen(length);
//         }

//         //if length is odd
//         else{
//             findFirstForOddLen(length);
//             findSecondForOddLen(length);
//         }
//         return 0;
//     }

//     function printFrist(){
//         for(let brick of firstCombination){
//             console.log(brick)
//         }
//     }

//     function printSecond(){
//         for(let brick of secondCombination){
//             console.log(brick)
//         }
//     }

//     function printWall(height){
//         for(let i=0; i<height; i++){
//             if(i % 2) {
//                 printFrist();
//             }
//             else{
//                 printSecond();
//             }
//         }
//     }
// }
// stackedBricks(7,5)
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
//
//
//
//4. Q4. Given n number of cars with varying speeds, speed is given in a form of an array of integers. Initially, all the cars are placed at the starting point and they have to reach the ending point. We need to calculate the total number of overtakes that will happen till all the cars reach the final destination. https://www.geeksforgeeks.org/counting-inversions/
//MY SOLUTION   O(n^2) TIME , O(1) SPACE
// function inversionCount(arr){
//     //edge cases
//     if(arr.length <= 1){
//         console.log(0)
//         return 
//     }

//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         const left = arr[i]

//         for(let j=i+1; j<arr.length; j++){
//             let right = arr[j]
//             if(left > right){
//                 count++
//             }
//         }
//     }

//     console.log(count)
// }
// inversionCount([8, 4, 2, 1])
// inversionCount([1,2,4,8])
// inversionCount([3, 1, 2])
// inversionCount([2])
// inversionCount([1, 20, 6, 4, 5])


//LEETCODE SOLUTION: USING MERGE SORT. O(nlogn) TIME, O(n) SPACE
// function mergeAndCount(arr,l,m,r)
// {
//     let left = [];
//     for(let i = l; i < m + 1; i++)
//     {
//         left.push(arr[i]);

//     }

//     let right = [];
//     for(let i = m + 1; i < r + 1; i++)
//     {
//         right.push(arr[i]);
//     }
//     let i = 0, j = 0, k = l, swaps = 0;
//     while (i < left.length && j < right.length)
//     {
//         if (left[i] <= right[j])
//         {
//             arr[k++] = left[i++];
//         }
//         else
//         {
//             arr[k++] = right[j++];
//             swaps += (m + 1) - (l + i);
//         }
//     }
//     while (i < left.length)
//     {
//         arr[k++] = left[i++];
//     }
//     while (j < right.length)
//     {
//         arr[k++] = right[j++];
//     }
//     return swaps;
// }

// // Merge sort function
// function mergeSortAndCount(arr, l, r)
// {
//     let count = 0;
//     if (l < r)
//     {
//         let m = Math.floor((l + r) / 2);
//         count += mergeSortAndCount(arr, l, m);
//         count += mergeSortAndCount(arr, m + 1, r);
//         count += mergeAndCount(arr, l, m, r);
//     }
//     return count;
// }

// let arr = [1, 20, 6, 4, 5]
// console.log(mergeSortAndCount(arr, 0, arr.length-1))
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
//
//
//
//
//
//5. https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/
//MY SOLUTION:
// function median_of_sorted_arrays(arr1, arr2){
//     let newArr = [...arr1, ...arr2]  //merge

//     newArr.sort((a,b)=>{   //sort
//         return a-b
//     })

//     //binary search for median
//     let first_index = 0
//     let last_index = newArr.length-1

//     let median_index = (first_index+last_index)/2

//     if(median_index !== Math.floor(median_index)){
//         let left = Math.floor(median_index)
//         let right = Math.floor(median_index)+1

//         return (newArr[left] + newArr[right])/2
//     }

//     return newArr[median_index]
// }

// console.log(median_of_sorted_arrays([2,3,5,8], [10,12,14,16,18,20]))
// console.log(median_of_sorted_arrays([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]))
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
//
//
//6. https://www.geeksforgeeks.org/two-water-jug-puzzle/
// You are on the side of the river. You are given a m liter jug and a n liter jug where 0 < m < n. Both the jugs are initially empty. The jugs don’t have markings to allow measuring smaller quantities. You have to use the jugs to measure d liters of water where d < n. Determine the minimum no of operations to be performed to obtain d liters of water in one of jug. 
// The operations you can perform are: 
// 1. Empty a Jug
// 11. Fill a Jug
// 111. Pour water from one jug to the other until one of the jugs is either empty or full.

//LEETCODE SOLUTION:
//EITHER YOU GO BY:
// 1. Fill the m litre jug and empty it into n liter jug.
// 2. Whenever the m liter jug becomes empty fill it.
// 3. Whenever the n liter jug becomes full empty it.
// 4. Repeat steps 1,2,3 till either n liter jug or the m liter jug contains d litres of water.

//OR BY:
// 1. Fill the n liter jug and empty it into m liter jug.
// 2. Whenever the n liter jug becomes empty fill it.
// 3. Whenever the m liter jug becomes full empty it.
// 4. Repeat steps 1, 2 and 3 till either n liter jug or the m liter jug contains d liters of water.

//The minimum of the two step-counts returned by the above methods IS OUR ANSWER.

// Utility function to return GCD of 'a' and 'b': EUCLIDEAN'S ALGORITHM
// function gcd(a , b) {
//     if (b == 0)
//         return a;

//     return gcd(b, a % b);
// }

// /*
// fromCap -- Capacity of jug from which water is poured 
// toCap -- Capacity of jug to which water is poured
// d -- Amount to be measured
//  */
// function pour(fromCap , toCap , d)
// {

//     // Initialize current amount of water
//     // in source and destination jugs
//     var from = fromCap;
//     var to = 0;

//     // Initialize count of steps required
//     var step = 1; // Needed to fill "from" Jug

//     // Break the loop when either of the two jugs has d litre water
//     while (from != d && to != d) {

//         // Find the maximum amount that can be poured
//         var temp = Math.min(from, toCap - to);

//         // Pour "temp" liters from "from" to "to"
//         to += temp;
//         from -= temp;

//         // Increment count of steps
//         step++;

//         if (from == d || to == d)
//             break;

//         // If first jug becomes empty, fill it
//         if (from == 0) {
//             from = fromCap;
//             step++;
//         }

//         // If second jug becomes full, empty it
//         if (to == toCap) {
//             to = 0;
//             step++;
//         }
//     }
//     return step;
// }

// // Returns count of minimum steps needed to
// // measure d liter
// function minSteps(m , n , d) {
//     // To make sure that m is smaller than n
//     if (m > n) {
//         var t = m;
//         m = n;
//         n = t;
//     }

//     // For d > n we cant measure the water using the jugs
//     if (d > n)
//         return -1;

//     // If gcd of n and m does not divide d, then solution is not possible
//     if ((d % gcd(n, m)) != 0)
//         return -1;

//     // Return minimum two cases:
//     // a) Water of n liter jug is poured into m liter jug
//     // b) Vice versa of "a"
//     return Math.min(pour(n, m, d), // n to m
//             pour(m, n, d)); // m to n
// }
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
//
//
//
//
//
//
//
//7. Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
//   If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
//SOLUTION:
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)
// head.next.next.next.next.next.next.next = new Node(8)

// function reverseEvery_K_Elements(head, k){
//     if(k<=1 || !head){
//         return head
//     }

//     let current = head
//     let previous = null

//     while(true){
//         const last_node_of_previous_part = previous;
//         const last_node_of_subList = current;
//         let next = null
//         let count = 0;

//         while(current && count<k){
//             next = current.next
//             current.next = previous
//             previous = current;
//             current = next;

//             count++
//         }

//         //connect with the previous part
//         if(last_node_of_previous_part){
//             last_node_of_previous_part.next = previous
//         }else{
//             head = previous
//         }

//         //connect with the next part
//         last_node_of_subList.next = current;

//         if(!current){
//             break;
//         }

//         previous = last_node_of_subList
//     }

//     return head
// }
// const result = reverseEvery_K_Elements(head, 3)
// result.printData()
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
//
//
//
//
//
//
//8. Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
//SOLUTION:
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

// function linkedListReversal(head){
//     let current = head
//     let previous = null
//     let next = null

//     while(current){
//         next = current.next
//         current.next = previous
//         previous = current
//         current = next
//     }

//     return previous
// }
// const result = linkedListReversal(head)
// result.printData()
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
//
//
//
//
// 9. Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// MY SOLUTION:
//function max(arr, k){
//     let sums = []
//     let i = 0
//     let j = i+k-1

//     while(j<arr.length){
//         let subArrSum = 0
//         for(let count = i; count<=j; count++){
//             subArrSum = subArrSum+arr[count]
//         }

//         sums.push(subArrSum)
//         i++
//         j++
//     }

//     return Math.max(...sums)

// }
// console.log(max([2,1,5,1,3,2], 3))
// console.log(max([2,3,4,1,5], 2))
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
//
//
//
// 10. Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’
// function min(arr, sum){
//     let i = 0
//     let subArraySum = 0
//     let minLength = Infinity

//     for(let j=0; j<arr.length; j++){
//         subArraySum += arr[j]

//         while(subArraySum >= sum){
//             subArraySum = subArraySum - arr[i]
//             minLength = Math.min(minLength, j-i+1)
//             i++
//         }
//     }

//     return minLength
// }
// console.log(min([2,1,5,2,3,2], 7))
// console.log(min([3,4,1,1,6], 8))
// console.log(min([2,1,5,2,8], 7))
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
//
//
// 11. Given a string, find the length of the longest substring in it with no more than K distinct characters.
// function distinctChars(str, k){
//     let map = {}
//     let maxLength = 0
//     let i = 0

//     for(let j=0; j<str.length; j++){
//         if(!map.hasOwnProperty(str[j])){
//             map[str[j]] = 0
//         }
//         map[str[j]]++

//         while(Object.keys(map).length > k){
//             map[str[i]]--
//             if(map[str[i]] === 0){
//                 delete map[str[i]]
//             }
//             i++
//         }

//         maxLength = Math.max(maxLength, j-i+1);
//     }

//     return maxLength
// }

// console.log(distinctChars("araaci", 2))
// console.log(distinctChars("araaci", 1))
// console.log(distinctChars("cbbebi", 3))
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
//
// 12. Given a string, find the length of the longest substring which has no repeating characters.
// MY SOLUTION:
// function longest_substring(str){
//     let maxLength = 0
//     let start = 0
//     let substr = ""
//     let map = {}

//     for(let end=0; end<str.length; end++){
//         if(!map.hasOwnProperty(str[end])){
//             map[str[end]] = 0
//         }
//         map[str[end]]++

//         substr = substr + str[end]
//         if(map[str[end]] === 1){
//             maxLength = Math.max(maxLength, substr.length)
//         }

//         while(map[str[end]] > 1){
//             substr = substr.substring(1)
//             map[str[start]]--
//             if(map[str[start]] === 0){
//                 delete map[str[start]]
//             }
//             start++
//         }
//     }

//     return maxLength
// }
// console.log(longest_substring("aabccbb"))
// console.log(longest_substring("abbbb"))
// console.log(longest_substring("abccde"))
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
// 13. Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)
// head.next.next.next.next.next.next.next = new Node(8)

// function reverse_alt_k(head, k){
//     let current = head
//     let previous = null

//     while(true){
//         let count = 0
//         let next = null
//         let last_node_of_previous_part = previous
//         let last_node_of_subList = current

//         while(current && count<k){
//             next = current.next
//             current.next = previous
//             previous = current
//             current = next

//             count++
//         }

//         //connect to previous part
//         if(last_node_of_previous_part){
//             last_node_of_previous_part.next = previous
//         }else{
//             head = previous
//         }

//         //connect to next part
//         last_node_of_subList.next = current


//         previous = last_node_of_subList

//         let steps = 0
//         while(previous && current && steps < k){
//             current = current.next
//             previous = previous.next

//             steps++
//         }

//         //eventually breaks thread out of the loop
//         if(!current){
//             break
//         }
//     }

//     return head
// }
// const result = reverse_alt_k(head, 2)
// result.printData()
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
//
//
//
//
//
// 14. Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.
// MY SOLUTION:
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }

//     printData(){
//         let current = this
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }
// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)

// function rotate(head, k){
//     let current = head
//     let check = current
//     let previous = null

//     while(true){
//         let count = 0
//         let exit = false
//         while(count<k){
//             check = check.next
//             if(!check){
//                 exit = true
//                 break
//             }
//             count++
//         }
//         if(exit){
//             break
//         }
//         previous = current
//         current = current.next
//         check = current
//     }

//     check = current

//     //current is at Kth node from null, previous is at (K+1)th node from null
//     previous.next = null
//     while(current.next){
//         current = current.next
//     }
//     current.next = head

//     return check
// }
// const result = rotate(head, 5)
// result.printData()
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
//
//
///////////////////////////////////////////////// Anonymous User September 21, 2020

// 15. Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.
// Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.
// It is possible that several messages arrive roughly at the same time.
// MY SOLUTION:
// class Logger{
//     constructor(){
//         this.map = {} //will only hold message and timestamp THAT ACTUALLY GOT PRINTED
//     }

//     shouldPrintMessage(message, timestamp){
//         let check = true

//         //message not printed before
//         if(!this.map.hasOwnProperty(message)){
//             this.map[message] = timestamp
//         }else{  //message printed before
//             if(Math.abs(timestamp-this.map[message]) < 10){
//                 check = false
//             }
//         }

//         if(check){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// const logger = new Logger()
// console.log(logger.shouldPrintMessage('foo', 1))
// console.log(logger.shouldPrintMessage('bar', 2))
// console.log(logger.shouldPrintMessage('foo', 3))
// console.log(logger.shouldPrintMessage('foo', 8))
// console.log(logger.shouldPrintMessage('foo', 10))
// console.log(logger.shouldPrintMessage('foo', 11))
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
//
//
//
//
//
// 16. Design a hit counter which counts the number of hits received in the past 5 minutes.
//LEETCODE SOLUTION:
// class HitCounter{
//     constructor(){
//         this.times = new Array(300)
//         this.hits = new Array(300)
//     }

//     hit(timestamp){
//         let idx = timestamp % 300
//         if(this.times[idx] !== timestamp){
//             this.times[idx] = timestamp
//             this.hits[idx] = 1
//         }else{
//             this.hits[idx]++
//         }
//     }

//     getHits(timestamp){
//         let res = 0
//         for(let i=0; i<300; i++){
//             if((timestamp - this.times[i]) < 300){
//                 res = res + this.hits[i]
//             }
//         }

//         return res
//     }
// }
// const counter = new HitCounter()
// counter.hit(1)
// counter.hit(2)
// counter.hit(3)
// console.log(counter.getHits(4))
// counter.hit(300)
// console.log(counter.getHits(300))
// console.log(counter.getHits(301))
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
//
//
//
//
///////////////////////////////////////////// Anonymous User July 20, 2020
// 17. Given a string, find the lexicographically largest substring. (Can't quite remember description, see example below)
// eg)

// abcdefabc --> fabc
// zabcdzt --> zt
// dcba --> dcba
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
//
//
//
// 18. Given a string s, return the last substring of s in lexicographical order.
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
//
//
//
//
//19. Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
// MY SOLUTION:
// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5) 

// function breadth_first(root){
//     let queue = []
//     let result = []
//     let check_queue_for_total_nullity = true
//     queue.push(root)

//     //edge case
//     if(!root.left && !root.right){
//         result.push(root)
//         return result
//     }

//     function check_for_total_nullity(array){
//         let null_check = false
//         for(let i=0; i<array.length; i++){
//             if(array[i]){
//                 null_check = true || null_check
//             }
//         }

//         return null_check
//     }

//     while(check_queue_for_total_nullity){
//         let arr = []
//         let length_of_queue = queue.length
//         for(let i=0; i<length_of_queue; i++){
//             if(queue[i]){
//                 arr.push(queue[i].value)
//             }
//         }
//         for(let j=0; j<length_of_queue; j++){
//             if(queue[j]){
//                 queue.push(queue[j].left)
//                 queue.push(queue[j].right)
//             }
//         }
//         for(let k=0; k<length_of_queue; k++){
//             queue.shift()
//         }

//         result.push(arr)

//         check_queue_for_total_nullity = check_for_total_nullity(queue)
//     }

//     return result
// }

// console.log(breadth_first(root))
//
//
// GROKKING SOLUTION:
// function traverse(root){
//     result = []

//     if(root === null){
//         return result
//     }

//     const queue = []
//     queue.push(root)

//     while(queue.length > 0){
//         const levelSize = queue.length
//         currentLevel = []

//         for(let i=0; i<levelSize; i++){
//             let currentNode = queue.shift() //take hold of the node
//             currentLevel.push(currentNode.value)  //push the node's value into currentLevel array

//             if(currentNode.left !== null){
//                 queue.push(currentNode.left)
//             }
//             if(currentNode.right !== null){
//                 queue.push(currentNode.right)
//             }
//         }

//         result.push(currentLevel)
//     }

//     return result
// }
// console.log(traverse(root))
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
//
//
////////////////////////////////////////// Anonymous User April 12, 2020
// 20. Reverse a linked list
// SOLUTION:
// class Node{
//         constructor(data, next=null){
//             this.data = data
//             this.next = next
//         }

//         printData(){
//             let current = this
//             while(current){
//                 console.log(current.data)
//                 current = current.next
//             }
//         }
// }

// const head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// head.next.next.next.next.next.next = new Node(7)
// head.next.next.next.next.next.next.next = new Node(8)

// function reverse_linkedlist(head){
//     let previous = null
//     let current = head
//     let next = null

//     while(current){
//         next = current.next
//         current.next = previous
//         previous = current
//         current = next
//     }

//     return previous
// }

// const result = reverse_linkedlist(head)
// result.printData()
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
// 21. Implement merge sort algorithm
// function merge(left, right){
//     let array = []
//     let i = 0
//     let j = 0

//     while(left.length && right.length){
//         if(left[i]<right[j]){
//             array.push(left.shift())
//         }else{
//             array.push(right.shift())
//         }
//     }

//     return array.concat(left.slice()).concat(right.slice())
// }
// function mergeSort(arr){
//     //base case
//     if(arr.length <= 1){
//         return arr
//     }

//     let middle = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0, middle)
//     let rightArr = arr.slice(middle)

//     return merge(
//         mergeSort(leftArr),
//         mergeSort(rightArr)
//     )
// }
// console.log(mergeSort([1,2,9,10,5,6,7,8]))
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
//
//
//
// 22. Find the intersection of two linkedlists
// class Node{
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }
// }

// //first linked list
// const head1 = new Node(1)
// head1.next = new Node(2)
// head1.next.next = new Node(3)
// head1.next.next.next = new Node(4)
// head1.next.next.next.next = new Node(5)
// head1.next.next.next.next.next = new Node(6)

// //second linked list
// const head2 = new Node(1)
// head2.next = new Node(2)
// head2.next.next = new Node(3)
// head2.next.next.next = new Node(4)
// head2.next.next.next.next = new Node(5)
// head2.next.next.next.next.next = head1.next.next.next

// //MY SOLUTION
// function linked_list_intersection(head1, head2){
//     let map1 = {}
//     let map2 = {}
//     let current1 = head1
//     let current2 = head2

//     while(current1){
//         map1[current1.data] = current1
//         current1 = current1.next
//     }
//     while(current2){
//         map2[current2.data] = current2
//         current2 = current2.next
//     }

//     for(let i=0; i<Object.keys(map1).length; i++){
//         let key1 = Object.keys(map1)[i]

//         for(let j=0; j<Object.keys(map2).length; j++){
//             let key2 = Object.keys(map2)[j]

//             if(map1[key1] === map2[key2]){
//                 return map1[key1].data
//             }
//         }
//     }

//     return null
// }
// console.log(linked_list_intersection(head1, head2))
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
//
//
//
//
//
//
//
// 23. Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
// function traverse_reverse(root){
//         let result = []
//         let final_result = []


//         if(root === null){
//             return result
//         }

//         const queue = []
//         queue.push(root)

//         while(queue.length > 0){
//             const levelSize = queue.length
//             currentLevel = []

//             for(let i=0; i<levelSize; i++){
//                 let currentNode = queue.shift()
//                 currentLevel.push(currentNode.value) 

//                 if(currentNode.left !== null){
//                     queue.push(currentNode.left)
//                 }
//                 if(currentNode.right !== null){
//                     queue.push(currentNode.right)
//                 }
//             }

//             result.push(currentLevel)
//         }

//         for(let i=result.length-1; i>=0; i--){
//             final_result.push(result[i])
//         }

//         return final_result
// }
// console.log(traverse_reverse(root))
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
//
//
//
//
// 24. Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.right.left.left = new TreeNode(20)
// root.right.left.right = new TreeNode(17)

// function zigzag_traversal(root){
//     let queue = []
//     let result = []
//     queue.push(root)

//     //edge case 1
//     if(root && !root.left && !root.right){
//         result.push([root.value])
//         return result
//     }
//     //edge case 2
//     if(!root){
//         result.push([null])
//         return result
//     }

//     let left_to_right = true

//     while(queue.length){
//         let levelSize = queue.length
//         let levelArray = []

//         for(let i=0; i<levelSize; i++){
//             let currentNode = queue.shift()
//             left_to_right? levelArray.push(currentNode.value) : levelArray.unshift(currentNode.value)
//             if(currentNode.left){
//                 queue.push(currentNode.left)
//             }
//             if(currentNode.right){
//                 queue.push(currentNode.right)
//             }
//         }

//         result.push(levelArray)
//         left_to_right = !left_to_right
//     }

//     return result
// }
// console.log(zigzag_traversal(root))
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
// 25. Given a binary tree, populate an array to represent the averages of all of its levels.
// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.right.left.left = new TreeNode(20)
// root.right.left.right = new TreeNode(17)

// function average_of_level(root){
//         let queue = []
//         let result = []
//         queue.push(root)

//         //edge case 1
//         if(root && !root.left && !root.right){
//             result.push(root)
//             return result
//         }
//         //edge case 2
//         if(!root){
//             result.push(null)
//             return result
//         }


//         while(queue.length){
//             let levelSize = queue.length
//             let levelArray = []

//             for(let i=0; i<levelSize; i++){
//                 let currentNode = queue.shift()
//                 levelArray.push(currentNode.value)

//                 if(currentNode.left){
//                     queue.push(currentNode.left)
//                 }
//                 if(currentNode.right){
//                     queue.push(currentNode.right)
//                 }
//             }

//             let levelSum = 0
//             for(let j=0; j<levelArray.length; j++){
//                 levelSum = levelSum + levelArray[j]
//             }

//             result.push(levelSum/levelArray.length)
//         }

//         return result
// }
// console.log(average_of_level(root))
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
// 26. Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.right.left.left = new TreeNode(11)

// function minimum_depth(root){
//     let queue = []
//     let counter = 0

//     queue.push(root)

//     while(queue.length){
//         let levelSize = queue.length
//         counter++

//         for(let i=0; i<levelSize; i++){
//             let currentNode = queue.shift()
//             if(!currentNode.left && !currentNode.right){
//                 return counter
//             }
//             if(currentNode.left)  queue.push(currentNode.left)
//             if(currentNode.right) queue.push(currentNode.right)
//         }
//     }
// }
// console.log(minimum_depth(root))
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
////////////////////////////////////////// Anonymous User August 31, 2020
// 27. Given a string, you have to check whether the second half of the string can be rearranged into a palindrome or not.
// function palindrome(str){
//     if(str.length%2 === 0){ //even length
//         let mid = str.length/2
//         let left = str.substring(0, mid)
//         let right = str.substring(mid)

//         if(left === right.split("").reverse().join("")){
//             return true
//         }else{
//             return false
//         }
//     }else{ //odd length
//         let middle = Math.floor(str.length/2)
//         let leftStr = str.substring(0, middle)
//         let rightStr = str.substring(middle+1)

//         if(leftStr === rightStr.split("").reverse().join("")){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// console.log(palindrome("maniam"))
// console.log(palindrome("madam"))
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
// 28. //////////////////// Anonymous User July 18, 2020
//You are given a binary string s of length n. Compute the sum of pairwise Hamming distances between all subsequences of string s with length exactly k for all k from 1 to n. Since the answers can be very large, find them modulo 40 961.
//Hamming distance between two strings of equal length is the number of positions in which these two strings are different.
//Input:
//The only line of input contains a string s of length n (1 ≤ n ≤ 4 * 10^3) containing only characters “0” and “1”.
//Output:
//Print n numbers: k-th of them must be the sum of pairwise Hamming distances between all subsequences of string s with length exactly k, taken modulo 40 961.

//Input:
//11000110111001

//Output:
//48 4056 15326 31033 20654 29362 32472 13700 21357 12217 20411 12456 212 0
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
// 29. Given an array of size n that has the following specifications: 
//        1. Each element in the array contains either a policeman or a thief.
//        2. Each policeman can catch only one thief.
//        3. A policeman cannot catch a thief who is more than K units away from the policeman.
//     We need to find the maximum number of thieves that can be caught.

//MY SOLUTION:
// function max_caught(arr, k){
//     let map = {}

//     for(let i=0; i<arr.length; i++){
//         //check if "T"
//         if(arr[i] === "T"){
//             let pair_found = false
//             for(let j=i; Math.abs(j-i)<=k; j++){
//                 if(j>arr.length-1){
//                     break
//                 }
//                 if(arr[j] === "P"){
//                     //store "P" index in a hash
//                     if(!map.hasOwnProperty(j)){
//                         map[j] = 0
//                     }
//                     map[j]++
//                     pair_found = true
//                 }
//             }
//             if(!pair_found){
//                 for(let j=i; Math.abs(j-i)<=k; j--){
//                     if(j<0){
//                         break
//                     }
//                     if(arr[j] === "P"){
//                         //store "P" index in a hash
//                         if(!map.hasOwnProperty(j)){
//                             map[j] = 0
//                         }
//                         map[j]++
//                     }
//                 }
//             }
//         }
//     }
//     return Object.keys(map).length
// }
// console.log(max_caught(["T", "T", "P", "P", "T", "P"], 2))
// console.log(max_caught(["P", "T", "T", "P", "T"], 1))
// console.log(max_caught(["P", "T"], 1))
// console.log(max_caught(["P", "T", "T", "P", "T", "T", "T"], 4))
// console.log(max_caught(["P", "P", "P", "P", "T", "T"], 2))
// console.log(max_caught(["T", "T", "T", "T", "T", "T"], 4))
// console.log(max_caught(["T", "P", "T", "P", "T", "P"], 1))
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
// 30. ///////////////////////////// Anonymous User April 12, 2020
//Given a string s, return the longest palindromic substring in s.

// function longest_palindrome(str){
//     function is_Palindrome(word){
//         if(word.length%2 === 0){
//             let mid = Math.floor(word.length/2)
//             let left = word.substring(0, mid)
//             let right = word.substring(mid)
//             if(left === right.split("").reverse().join("")){
//                 return true
//             }
//             return false
//         }else{
//             let middle = Math.floor(word.length/2)
//             let leftStr = word.substring(0, middle)
//             let rightStr = word.substring(middle+1)
//             if(leftStr === rightStr.split("").reverse().join("")){
//                 return true
//             }
//             return false
//         }
//     }

//     let map = {}  //only palindromes will be here
//     let substr = ""

//     for(let j=0; j<str.length; j++){
//         for(let i=j; i<str.length; i++){
//             substr = substr + str[i]
//             if(is_Palindrome(substr)){
//                 map[substr.length] = substr
//             }
//         }
//         substr = ""
//     }

//     let maxLength = Math.max(...Object.keys(map))

//     return map[maxLength]
// }
// console.log(longest_palindrome("babad"))
// console.log(longest_palindrome("cbbd"))
// console.log(longest_palindrome("ac"))
// console.log(longest_palindrome("abdedbbc"))
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
// 31. Given an array of integers and a positive integer k, determine the number of  pairs (i,j) where i<j and arr[i] + arr[j] is divisible by k.
// function divisible_by_k(size, arr, k){

//     let count = 0

//     for(let i=0; i<size-1; i++){
//         for(let j=i+1; j<size; j++){
//             if((arr[i]+arr[j])%k === 0){
//                 count++
//             }
//         }
//     }

//     return count
// }
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
// 32. Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.
// function maximal_subset(arr,K)
//     {
//         let N = arr.length

//         // Array for storing frequency of modulo
//         // values
//         let f = new Array(K);
//         for(let i=0;i<K;i++)
//         {
//             f[i]=0;
//         }



//         // Fill frequency array with values modulo K
//         for (let i = 0; i < N; i++)
//             f[arr[i] % K]++;

//         // if K is even, then update f[K/2]
//         if (K % 2 == 0)
//             f[K/2] = Math.min(f[K/2], 1);

//         // Initialize result by minimum of 1 or
//         // count of numbers giving remainder 0
//         let res = Math.min(f[0], 1);

//         // Choose maximum of count of numbers
//         // giving remainder i or K-i
//         for (let i = 1; i <= K/2; i++)
//             res += Math.max(f[i], f[K-i]);

//         return res;
// }
// console.log(maximal_subset([1,7,2,4], 3))
// console.log(maximal_subset([3,7,2,9,1], 3))
// console.log(maximal_subset([3,17,12,9,11,15], 5))
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
// 33. This code snippet spits out an array of all possible subsets of a set (which was represented as an array):
// function getCombinations(array) {

//     function fork(i, t) {
//         if (i === array.length) {
//             result.push(t);
//             return;
//         }
//         fork(i + 1, t.concat([array[i]]));
//         fork(i + 1, t);
//     }

//     var result = [];
//     fork(0, []);
//     return result;
// }
// console.log(getCombinations([1,2,3,4]))
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
// 34. Checking how many students are not standing in the correct order
// function order_check(arr){
//     let count = 0
//     let oldOrder = [...arr]
//     let newOrder = arr.sort()

//     for(let i=0; i<newOrder.length; i++){
//         if(newOrder[i] !== oldOrder[i]){
//             count++
//         }
//     }

//     return count
// } 
// console.log(order_check([1,1,3,3,4,1]))
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
/////////////////////////////////////////////// Anonymous user. August 26, 2020
// 35. Given an array of integers, return the pivot index such that the sum of all the integers to the left of the pivot is equal to the sum of all the integers to the right of the pivot. You may assume that such a pivot is guaranteed to exist.
// function pivot(arr){    //TIME O(N^2)
//     for(let i=0; i<arr.length; i++){
//         let leftSum = 0
//         let rightSum = 0
//         for(let j=i; j<arr.length-1; j++){
//             rightSum = rightSum + arr[j+1]
//         }
//         for(let j=i; j>0; j--){
//             leftSum = leftSum + arr[j-1]
//         }
//         if(leftSum === rightSum){
//             return arr[i]
//         }
//     }
// } 
// console.log(pivot([1,2,3,4,5,10]))
// console.log(pivot([0,1,3,4,8,7,1]))
// console.log(pivot([1,2,3,4,5,4,3,2,1]))
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
// 36. Given a string s, return the number of palindromic substrings in it.
//     A string is a palindrome when it reads the same backward as forward.
//     A substring is a contiguous sequence of characters within the string.
// MY SOLUTION:
// function palindrome_count(str){
//     let count = 0

//     for(let i=0; i<str.length; i++){
//         let substr = ""

//         for(let j=i; j<str.length; j++){
//             substr = substr + str[j]

//             if(substr === substr.split("").reverse().join("")){
//                 count++
//             }
//         }
//     }

//     return count
// }
// console.log(palindrome_count("aaa"))
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
// 37. Given a string s, return the number of distinct palindromic substrings in it.
//     A string is a palindrome when it reads the same backward as forward.
//     A substring is a contiguous sequence of characters within the string.
// MY SOLUTION:
// function palindrome_count(str){
//     let count = 0
//     let map = {}

//     for(let i=0; i<str.length; i++){
//         let substr = ""

//         for(let j=i; j<str.length; j++){
//             substr = substr + str[j]

//             //store all distinct substrings as keys in a map
//             if(!map.hasOwnProperty(substr)){
//                 map[substr] = 0
//             }
//             map[substr]++
//         }
//     }

//     for(let j=0; j<Object.keys(map).length; j++){
//         let key = Object.keys(map)[j]
//         if(key === key.split("").reverse().join("")){
//             count++
//         }
//     }

//     return count
// }
// console.log(palindrome_count("aaa"))
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
// 38. Find the second minimum element in an array
// BRUTE FORCE APPROACH:
// function second_min(arr) {
//     let min = Math.min(...arr)

//     let i = 1
//     let sec_min

//     while (true) {
//         sec_min = min + i

//         if (arr.includes(sec_min)) {
//             return sec_min
//         }

//         i++
//     }
// }
// console.log(second_min([5, 3, 2, 1, 39, 44, -23, -23]))
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
//////////////////////////// PATTERN SLIDING WINDOW REVISION (GETTING CONCEPTS ABSOLUTELY RIGHT)
//39. Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// function average(arr, k){        //windowEnd established a form of counter...so to speak
//     let windowStart = 0
//     let result = []
//     let sum = 0

//     for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
//         sum = sum + arr[windowEnd]

//         if(windowEnd >= k-1){
//             result.push(sum/k)
//             sum = sum - arr[windowStart]
//             windowStart++
//         }
//     }

//     return result
// }
// console.log(average([1,2,3,4,5,6], 3))
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
// 40. Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// function max_sum(arr, k){
//     let sum = 0
//     let maxSum = 0
//     let start = 0

//     for(let end=0; end<arr.length; end++){
//         sum = sum + arr[end]

//         if(end >= k-1){
//             maxSum = Math.max(sum, maxSum)
//             sum = sum-arr[start]
//             start++
//         }
//     }

//     return maxSum
// }
// console.log(max_sum([1,2,3,4,5,6], 3))
// console.log(max_sum([2,1,5,1,3,2], 3))
// console.log(max_sum([2,3,4,1,5], 2))
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
// 41. Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
// function smallest_arr(arr, k){
//     let minLength = Infinity
//     let sum = 0
//     let start = 0

//     for(let end=0; end<arr.length; end++){
//         sum = sum + arr[end]

//         while(sum >= k){
//             minLength = Math.min(minLength, end-start+1)
//             sum = sum - arr[start]
//             start++
//         }
//     }

//     if(minLength === Infinity){
//         return 0
//     }

//     return minLength
// }
// console.log(smallest_arr([2,1,5,2,3,2], 100))
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
// 42. Given a string, find the length of the longest substring in it with no more than K distinct characters.
// MY SOLUTION:                      NAIVE, BUT NOT EFFICIENT!
// function longest_substring(str, k){
//     let store = []   //contains map for each substring
//     let maxSum = 0

//     for(let i=0; i<str.length; i++){
//         let substr = ""

//         for(let j=i; j<str.length; j++){
//             substr = substr + str[j]

//             let map = {}
//             for(let k=0; k<substr.length; k++){
//                 if(!map.hasOwnProperty(substr[k])){
//                     map[substr[k]] = 0
//                 }
//                 map[substr[k]]++
//             }
//             store.push(map)
//         }
//     }

//     for(let i=0; i<store.length; i++){
//         let a_map = store[i]
//         if(Object.keys(a_map).length <= k){
//             let sum = 0
//             for(let m=0; m<Object.keys(a_map).length; m++){
//                 sum = sum + a_map[Object.keys(a_map)[m]]
//             }
//             maxSum = Math.max(maxSum, sum)
//         }
//     }

//     return maxSum
// }
// console.log(longest_substring("araaci", 2))
// console.log(longest_substring("araaci", 1))
// console.log(longest_substring("cbbebi", 3))
//
//
//
//MORE EFFICIENT SOLUTION.........TIME: O(N)............SPACE: O(K)
// function longest_substring(str, k){
//     let maxLength = 0;
//     let start = 0
//     let map = {}

//     for(let i=0; i<str.length; i++){
//         if(!map.hasOwnProperty(str[i])){
//             map[str[i]] = 0
//         }
//         map[str[i]]++


//         while(Object.keys(map).length > k){
//             map[str[start]]--

//             if(map[str[start]] === 0){
//                 delete map[str[start]]
//             }

//             start++
//         }

//         maxLength = Math.max(maxLength, i-start+1)
//     }

//     return maxLength
// }
// console.log(longest_substring("araaci", 2))
// console.log(longest_substring("araaci", 1))
// console.log(longest_substring("cbbebi", 3))
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
// // GS CODING INTERVIEW.....GS CODING INTERVIEW..............GS CODING INTERVIEW...............GS CODING INTERVIEW
//function plusMult(array){
    // let arr1 = [...array]
    // let R_even = arr1[0]
    // let sign = true
    // for(let i=2; i<arr1.length; i+=2){
    //     if(sign){
    //         R_even = R_even*arr1[i]
    //         sign  = false
    //     }else{
    //         R_even = R_even+arr1[i]
    //         sign = true
    //     }
    // }
    // function mod(n, m) {
    //     return ((n % m) + m) % m;
    // }

    // if(R_even > 0){
    //     R_even = R_even%2
    // }else{
    //     R_even = mod(R_even, 2)
    // }

    // let arr2 = [...array]
    // let R_odd = arr2[1]
    // let sgn = true
    // for(let j=3; j<arr2.length; j+=2){
    //     if(sgn){
    //         R_odd = R_odd*arr2[j]
    //         sgn  = false
    //     }else{
    //         R_odd = R_odd+arr2[j]
    //         sgn = true
    //     }
    // }
    // if(R_odd>0){
    //     R_odd = R_odd%2
    // }else{
    //     R_odd = mod(R_odd, 2)
    // }

    // if(R_even > R_odd){
    //     return "EVEN"
    // }
    // if(R_odd > R_even){
    //     return "ODD"
    // }
    // if(R_odd === R_even){
    //     return "NEUTRAL"
    // }

// }
// console.log(plusMult([1,2,3,4,5,6,7,8,9,10]))


// function plusMult(array){
//     if(array.length < 1){
//         return "NEUTRAL"
//     }
//     let arr1 = [...array]
//     let newArr1 = [] //holds even-indexes
//     for(let i=0; i<arr1.length; i++){
//         if(i%2 === 0){
//             newArr1.push(arr1[i])
//         }
//     }

//     let arr2 = [...array]
//     let newArr2 = []  //holds odd indexes
//     for(let i=0; i<arr2.length; i++){
//         if(i%2 !== 0){
//             newArr2.push(arr2[i])
//         }
//     }

//     let R_even = 0
//     let R_odd = 0
//     let sgn_even = true
//     let sgn_odd = true

//     for(let i=0; i<newArr1.length; i++){
//         if(sgn_even){
//             R_even = R_even+newArr1[i]
//             sgn_even = false
//         }else{
//             R_even = R_even*newArr1[i]
//             sgn_even = true
//         }
//     }
//     R_even = R_even%2

//     for(let i=0; i<newArr2.length; i++){
//         if(sgn_odd){
//             R_odd = R_odd+newArr2[i]
//             sgn_odd = false
//         }else{
//             R_odd = R_odd*newArr2[i]
//             sgn_odd = true
//         }
//     }
//     R_odd = R_odd%2

//     if(R_even > R_odd){
//         return "EVEN"
//     }
//     if(R_odd > R_even){
//         return "ODD"
//     }
//     if(R_odd === R_even){
//         return "NEUTRAL"
//     }
// }
// console.log(plusMult([1,2,3,4,5,6,7,8,9,10]))

// function run(){
//     R_even = -5
//     if(R_even > 0){
//         R_even = R_even%2
//     }else{
//         let q=1
//         while(q>0){
//             let r = R_even + (q*2)
//             if(r>0){
//                 R_even = r
//                 break
//             }
//             q++
//         }
//     }
//     console.log(R_even)
// }
// run()

// function analogous(arr, lb, ub){
//     let count = 0
//     let store = []

//     let start = lb
//     while(start <= ub){
//         store.push(start)
//         let is_among = true

//         for(let i=0; i<arr.length; i++){
//             start = start - arr[i]
//             if(start > ub && store.length !== arr.length+1){
//                 is_among = false
//                 break
//             }
//             store.push(start)
//         }

//         let is_consecutive = true
//         for(let j=0; j<store.length; j++){
//             if(!(store[j]-store[j+1]===arr[j])){
//                 is_consecutive = false
//             }
//         }

//         if(is_among && store.length===arr.length+1 && is_consecutive){
//             count++
//         }
//         store = []
//         start++
//     }
//     return count
// }
// console.log(analogous([-2,-1,-2,5], 3, 10))

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
//REVISION OF CODING TECHNIQUES...................

//SLIDING WINDOW TECHNIQUE: 
// function no_repeat(str){
//     let substr = ""
//     let map = {}
//     let maxLength = 0

//     for(let i=0; i<str.length; i++){
//         substr = substr + str[i]
//         if(!map.hasOwnProperty(str[i])){
//             map[str[i]] = 0
//         }
//         map[str[i]]++

//         while(map[str[i]] > 1){
//             map[substr[0]]--
//             substr = substr.substring(1)
//         }
        
//         console.log(substr)
//         maxLength = Math.max(maxLength, substr.length)
//     }

//     console.log(maxLength)
// }
// no_repeat("aabccbb")
// no_repeat("abbbb")
// no_repeat("abccde")

// TWO POINTERS TECHNIQUE
// function sort_in_place(arr){
//     let i = 0

//     while(i<arr.length){
//         const j = arr[i]

//         if(arr[i] !== i){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }else{
//             i++
//         }
//     }

//     console.log(arr)
// }
//sort_in_place([3,1,6,5,2,4,0])
//sort_in_place([2,2,0,1,2,0])

// function sort_in_place(arr){
//     let i = 0
//     let j = 1
//     let sorted = arr.length-1

//     while(sorted>0){
//         while(arr[i]>arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             i++
//             j++
//         }
//         sorted--
//     }

//     console.log(arr)
// }
// sort_in_place([2,2,0,1,2,0])

// function search(target, arr){
//     let i=0;
//     let j=arr.length-1

//     while(i !== j){
//         if(arr[(i+j)/2] === target){
//             return (i+j)/2;  //return index
//         }else{
//             if(target < arr[(i+j)/2]){
//                 j = (i+j)/2
//             }
//             if(target > arr[(i+j)/2]){
//                 i = (i+j)/2
//             }
//         }
//     }

//     return -1
// }

// console.log(search(0, [1,2,3,4,5,6,7,8,9]))


// function jumbled_numbers(){

// }