# quick sort in ascending order
def partition(arr, low, high):
    i = (low-1)  
    pivot = arr[high]  
 
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i+1
            arr[i], arr[j] = arr[j], arr[i]
 
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return (i+1)


def quickSort(arr, low, high):
    if len(arr) == 1:
        return arr
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

# driver code for quick sort in ascending order
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr, 0, n-1)
#
#
#
#
#
#
#
#
#
#
# linked list reversal
def reverseLinkedlist(head):
    previous, current, next = None, head, None

    while current is not None:
        next = current.next
        current.next = previous
        previous = current
        current = next
    
    return previous
#
#
#
#
#
#
#
#
#
# breadth first search......traversing each level of a binary tree
from collections import deque

def BFS_tree_traversal(root):
    result = []

    if root is None:
        return result
    
    queue = deque()
    queue.append(root)

    while queue:
        levelSize = len(queue)
        currentLevel = []

        for index in range(levelSize):
            currentNode = queue.popleft()
            currentLevel.append(currentNode.val)

            if currentNode.left:
                queue.append(currentNode.left)

            if currentNode.right:
                queue.append(currentNoderight)

        result.append(currentLevel)

    return result
#
#
#
#
#
#
#
#
#
#
#
#
# nth fibonacci number
# naive recursive implementation: Time:O(2^n) where n is the depth of calltree,  Space - O(n) where n is number of recursive calls
def fibonacci(n):
    if n==2:
        return 1
    elif n==1:
        return 0
    else:
        return fibonacci(n-1)+fibonacci(n-2)

    
# memoized recursive implementation of fibonacci:  Time:O(n), Space:O(n)
def memoized_fib(n, memoize={1:0, 2:1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = memoized_fib(n-1, memoize) + memoized_fib(n-2, memoize)
        return memoize[n]


# iterative approach for fibonacci: Time: O(n)  Space: O(1)
def fib_iterative(n):
    sum_pair = [0,1]
    calculations = 2

    while calculations <= n:
        nth_fib = sum_pair[0] + sum_pair[1]
        sum_pair.pop(0)
        sum_pair.append(nth_fib)
        calculations = calculations + 1 
    
    return sum_pair[0]
#
#
#
#
#
#
#
#
#
#
#
#
#
# depth first search: checking if there's a branch equal to sum
def depth_first(node, sum):
    if node is None:
        return False

    if node.left is None and node.right is None and node.value==sum:
        return True
    

    return depth_first(node.left, sum-node.value) or depth_first(node.right, sum-node.value)
#
#
#
#
#
#
#
#
#
#
#
#
# algorithm for determining the diameter of a binary tree: the number of nodes lying on the longest path between any two leafs
class TreeDiameter:
    def __init__(self):
        self.treeDiameter = 0

    def calculate_treeDiameter(self, root):
        self.calculate_treeHeight(root)
        return self.treeDiameter

    def calculate_treeHeight(self, currentNode):
        #preamble
        if currentNode is not None:
            return 0
        

        # height for left node/tree of a particular (parent)node
        leftTreeHeight = self.calculate_treeHeight(currentNode.left)
        # height for right node/tree of a particular (parent)node
        rightTreeHeight = self.calculate_treeHeight(currentNode.right)



        # ------------------------------------------------------------------------------------------
        diameter = leftTreeHeight + rightTreeHeight + 1
        self.treeDiameter = max(diameter, self.treeDiameter)
        # ------------------------------------------------------------------------------------------



        # height for a particular node - returns value to lines 164 and 166
        return max(leftTreeHeight, rightTreeHeight) + 1
#
#
#
#
#
#
#
#
#
#
#
#
#
# Naive approach for designing a class that calculates median of a constantly changing array 
class findNumbersMedian:
    def __init__(self):
        self.numbers = []
        self.median = None

    def sort(self):
        self.numbers.quickSort()

    # driver method
    def calcMedian(self, number):
        self.insertNum(number)
        self.findMedian()
        return self.median

    def insertNum(self, num):
        self.numbers.append(num)

    def findMedian(self):
        # sort updated array
        self.sort()

        # calculate median
        if (len(self.numbers))%2 == 0:
            middle = (len(self.numbers))/2
            left = self.numbers[Math.floor(middle)]
            right = self.numbers[Math.ceil(middle)]

            self.median = (left + right)/2
        
        else:
            mid = (len(self.numbers))/2
            self.median = self.numbers[Math.floor(mid)]
#
#
#
#
#
#
#
#
#
#
#
#
# sliding window pattern - maximum sum of contiguous subarray of size=k
def maxSumK(arr, k):
    max_sum = 0
    window_sum = 0

    for i in range(0, len(arr)-k+1):
        window_sum = 0
        for j in range(i, i+k):
            window_sum = window_sum + arr[j]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
#
#
#
#
#
#
#
#
#
#
# checking uniqueness of characters in a string: time = O(n)......space = O(n)
def isAllUnique(word):
    hash = {}

    #store all characters (and their freqs) in a hashmap
    for char in word:
        if not(char in hash):
            hash[char] = 0
        hash[char] = hash[char] + 1

    
    for key in hash:
        if hash[key] > 1:
            return False  #not unique

    return True  #unique


# checking uniqueness of characters in a string: time = O(n^2)......space = O(1)
def isAllUnique(word):
    for i in range(len(word)):
        for j in range(len(word)):
            if i==j:
                continue
            else:
                if word[i] == word[j]:
                    return False
    return True

#
#
#
#
#
#
#
#
#
#
# given two strings, check if one is a permutation of the other
def isPermutation(first, second):
    if not(len(first) == len(second)):
        return False

    for char in first:
        if not(char in second):
            return False

    return True
#
#
#
#
#
#
#
#
#
#
#
#
#
# replace all spaces in a string with '%20'
def replaceAll(spacedWord):
    charArray = []

    for char in spacedWord:
        if char == " ":
            charArray.append("%20")
        else:
            charArray.append(char)

    return "".join(charArray)
#
#
#
#
#
#
#
#
#
#
#
#
#  Given a string, write a function to check if it is a permutation of a palindrome
from itertools import permutations

def getPerms(val):
    permutes = [''.join(p) for p in permutations(val)]  # all permutations of a string as an array(anagram)

    return permutes


def isPermOfPalindrome(word):
    word = word.replace(" ", "")  # remove all spaces in a string
    perms = getPerms(word)     # an array of permutations(strings) is returned

    for perm in perms:
        if perm == perm[::-1]:
            return True
        
    return False
#
#
#
#
#
#
#
#
#
#
#
# one (or zero) edit away
def oneOrZeroAway(first, second):
    if first == second:
        return "one or zero edit away"

    queue = []
    largerArr = []
    smallerArr = []
    counter = 0

    if len(first) > len(second):
        for i in first:
            largerArr.append(i)
        for p in second:
            queue.append(p)
    elif len(second) > len(first):
        for j in second:
            largerArr.append(j)
        for q in first:
            queue.append(q)
    else:
        for k in first:    #or second
            largerArr.append(k)
        for r in second:
            queue.append(r)

    initial = len(queue)

    for char in largerArr:
        if len(queue) == 0:
            for i in range(len(largerArr) - initial):
                smallerArr.append(" ")
            break
        if char == queue[0]:
            smallerArr.append(char)
            queue.pop(0)
        else:
            smallerArr.append(" ")
            if initial == len(largerArr):
                queue.pop(0)
    
    for elem in smallerArr:
        if elem == " ":
            counter = counter + 1
        if counter > 1:
            return "not one or zero edit away"
    
    return "one or zero edit away"
#
#
#
#
#
#
#
#
#
#
# string compression algorithm:   time: O(n), space(worst case): O(n)
def stringCompression(word):
    # edge cases
    if len(word) == 0:
        return ""
    if len(word) == 1:
        return word + "1"


    hash = {}
    new = ""

    for char in word:
        if not(char in hash):
            hash[char] = 0

        hash[char] = hash[char] + 1
    
    for key in hash:
        new = new + str(key) + str(hash[key])

    if not(len(new) < len(word)):
        return word
    else:
        return new
#
#
#
#
#
#
#
#
#
#
# rotate matrix 90 degrees algorithm:  time: O(n^2)
def rotateMatrix90(matrix):
    newMatrix = []

    for i in range(len(matrix[0])):
        subMatrix = []
        for j in matrix:
            subMatrix.append(j[i])
        subMatrix = subMatrix[::-1]
        newMatrix.append(subMatrix)
    
    return newMatrix

#
#
#
#
#
#
#
#
#
#
# zero matrix algorithm
def setToZero(array):
    for index in range(len(array)):
        array[index] = 0

def checkIfZero(entities):
    for entity in entities:
        if not(entity == 0):
            return False
    return True

def zeroMatrix(matrix):
    rows = []
    columns = []

    # store all rows
    for i in matrix:
        rows.append(i)

    # store all columns
    for j in range(len(matrix[0])):
        column = []
        for k in matrix:
            column.append(k[j])
        columns.append(column)

    for arr in rows:
        for index in range(len(arr)):
            if arr[index] == 0:
                setToZero(arr)
                setToZero(columns[index])
                break

    for p in range(len(columns)):
        if checkIfZero(columns[p]) == True:
            for r in rows:
                r[p] = 0
        else:
            continue
    
    return rows
#
#
#
#
#
#
#
#
#
#
#
# product sum algorithm(recursive) - time: O(n),  space: O(D) where D is depth of callstack
def productSum(array, multiplier = 1):
    sum = 0

    for element in array:
        if type(element) is list:
            sum = sum + productSum(element, multiplier + 1)
        else:
            sum = sum + element
        
    return sum*multiplier
#
#
#
#
#
#
#
#
#
#
#
# computing all subsets of a set(array with distinct elements):   time = O(2^n),   space = O(2^n)
def subsets(arr):
    result = []

    result.append([])

    for element in arr:
        length = len(result)

        for i in range(length): # takes time for large data sets
            newArr = []
            newArr.extend(result[i])
            newArr.append(element)
            result.append(newArr)
    
    return result
#
#
#
#
#
#
#
#
#
#
#
# binary search algorithm:  recursive implementation.  time = O(logN),  space = O(logN)
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array)-1)


def binarySearchHelper(array, target, left, right):
    if left > right:
        return -1  #not found

    middle = (left + right) // 2
    potentialMatch = array[middle]
    if target == potentialMatch:
        return middle  #found, so return its index
    elif target < potentialMatch:
        return binarySearchHelper(array, target, left, middle-1)
    else:
        return binarySearchHelper(array, target, middle+1, right)




# iterative approach to binary search:  time = O(logN)   space = O(1)
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array)-1)


def binarySearchHelper(array, target, left, right):
    while left <= right:
        middle = (left + right) // 2
        potentialMatch = array[middle]
        if target == potentialMatch:
            return middle  #found, so return its index
        elif target < potentialMatch:
            right = middle - 1
        else:
            left = middle + 1
        
    return -1 #not found










# recursive method for finding greatest common divisor
def euclid_gcd(num1, num2):
    # base case
    if num1 == 0:
        return num2
    if num2 == 0:
        return num1
    if num1 == num2:
        return num1 #or num2

    if num1 > num2:
        return euclid_gcd(num1%num2, num2)
    elif num1 < num2:
        return euclid_gcd(num1, num2%num1)
#
#
#
#
#
#
#
#
#
# checking if a number is a prime number(naive).........to optimize => use range(2, sqrt(num)) 
def check_primality(num):
    for i in range(2, num):
        if num%i == 0:
            return False

    return True
#
#
#
#
#
#
#
#
#
#
# generate all prime numbers up to a given number
def sieve_of_erathosthenes(num):
    arr = []
    for i in range(2, num+1):
        arr.append(i)
    
    i = 0
    first = arr[i]
    while i < len(arr):

        for j in range(i+1, len(arr)):
            if j < len(arr):
                if arr[j]%first == 0:
                    del(arr[j])

        i = i + 1
        if i < len(arr):
            first = arr[i]
    

    return arr
#
#
#
#
#
#
#
#
#
#
# find n largest numbers......time = O(n^2) worstcase,   space = O(n) worstcase
def find_n_largest(arr, n):
    blacklist = []
    largest = -float('inf')
    distinct = set()

    for k in arr:
        distinct.add(k)

    for j in range(len(distinct)):
        for i in arr:
            if not(i in blacklist):
                largest = max(largest, i)

        blacklist.append(largest)
        largest = -float('inf')

    return blacklist
#
#
#
#
#
#
#
#
#
#
#find 3 largest numbers in an array:  time = O(n)   space = O(1)
def findThreeLargest(arr):
    largest = []

    for i in range(len(arr)):
        if len(largest) < 3:
            if not(arr[i] in largest):
                largest.append(arr[i])
        else:
            if arr[i] > min(largest):
                idx = largest.index(min(largest))
                del(largest[idx])
                largest.append(arr[i])
    
    return largest
#
#
#
#
#
#
#
#
#
#
# HACKERRANK PROBLEM - Picking Numbers
def checkDifference(arr):
    anyTwo = list(combinations(arr, 2))
    
    for k in anyTwo:
        if abs(k[0]-k[1]) > 1:
            return False
    
    return True
    

def pickingNumbers(a):
    # Write your code here
    start = 0
    maxLength = 0
    
    while start < len(a):
        sampleArr = []
        sampleArr.append(a[start])
        for i in range(start+1, len(a)):
            sampleArr.append(a[i])
            if checkDifference(sampleArr) == True:
                maxLength = max(maxLength, len(sampleArr))
        
        start = start + 1
                
    return maxLength
#
#
#
#
#
#
#
#
#
#
#
# subsets pattern - for generating all subsets of a given set.
def generateSubsets(set):
    result = []
    result.append([])

    for i in range(0, len(set)):
        length = len(result)

        for j in range(length):
            temp = []
            temp.extend(result[j])
            temp.append(set[i])
            result.append(temp)

    return result
#
#
#
#
#
#
#
#
#
#
# bitwise XOR operation - finding ONE missing number in an array
def findMissing(arr):
    n = len(arr) + 1
    x1 = 1

    for i in range(2, n+1):
      x1 = x1 ^ i

    x2 = arr[0]

    for j in range(1, len(arr)):
      x2 = x2 ^ arr[j]


    return x1 ^ x2

# print(findMissing([1,2,3,4,6,7]))
#
#
#
#
#
#
#
#
#
#
#
# bitwise XOR operation - finding the single number in an array where all other numbers appear TWICE
# Note: This algorithm can also be used to find the number that occurs an ODD number of times, where all other numbers occur an even number of times 
def singleNumber(arr):
    single = 0
    for i in range(len(arr)):
        single = single ^ arr[i]

    return single

#print(singleNumber([1,2,3,5,6,3,1,2,5]))
#
#
#
#
#
#
#
#
#
#
#
# find the k largest elements in an array - Brute force O(N) time
def k_largest(arr, k):
    kLarge = []

    for i in range(k):
        kLarge.append(arr[i])

    for j in range(k, len(arr)):
        smallest = min(kLarge)
        if arr[j] > smallest:
            idx = kLarge.index(smallest)
            kLarge[idx] = arr[j]

    return kLarge

#print(k_largest([4,6,2,1,8,20,0,20,5], 3))
#
#
#
#
#
#
#
#
#
#
#
#
# find the K closest points to the origin, given the x and y coordinates of each point
import math

def K_closest(arr, k):
    distances = []
    distances_copy = []
    k_minimum = []
    result = []

    for i in arr:
        dist = math.sqrt((i[0]*i[0]) + (i[1]*i[1]))
        distances.append(dist)
        distances_copy.append(dist)

    quickSort(distances_copy, 0 , len(distances_copy)-1)

    for j in range(k):
        k_minimum.append(distances_copy[j])

    for r in k_minimum:
        idx = distances.index(r)
        result.append(arr[idx])

    return result

# print(K_closest([[1,2], [1,3]], 1))
# print(K_closest([[1,3], [3,4], [2,-1], [0,1], [3,6], [7,3], [2,0]], 5))
#
#
#
#
#
#
#
#
#
#
#
#
# K-way merge pattern: merging a list of sorted linkedlists into one sorted linkedlist
from heapq import *

class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

    def __lt__(self, other):
        return self.val < other.val

list1 = Node(1)
list1.next = Node(2)
list1.next.next = Node(3)
list1.next.next.next = Node(24)

list2 = Node(6)
list2.next = Node(12)
list2.next.next = Node(13)
list2.next.next.next = Node(16)

list3 = Node(15)
list3.next = Node(17)
list3.next.next = Node(21)
list3.next.next.next = Node(33)

linkedLists = [list1, list2, list3]


def linkedListify(array):
    head = Node(array[0])
    linkedlist = head
    for i in range(1 , len(array)):
        head.next = Node(array[i])
        head = head.next

    return linkedlist


def K_way_merge(arr):
    minHeap = []
    result = []

    for i in range(len(arr)):
        heappush(minHeap, arr[i])

    while len(minHeap) > 0:
        node = heappop(minHeap)
        value = node.val
        if node is not None and node.next is not None:
            heappush(minHeap, node.next)
        result.append(value)

    result = linkedListify(result)
    return result

# print(K_way_merge(linkedLists))

# def main():
#     sortedList = K_way_merge(linkedLists)
#     while sortedList is not None:
#         print(sortedList.val)
#         sortedList = sortedList.next
    
# main()
#
#
#
#
#
#
#
#
#
#
#
#
# 0/1 Knapsack brute force
from itertools import combinations

def knapsack(weights, profits, c):
    groups = []
    groups_profits = []
    max_profit = 0

    for i in range(1, len(weights)+1):
        group = list(combinations(weights, i))
        for j in group:
            if sum(j) < c or sum(j) == c:
                groups.append(j)
    
    for k in groups:
        profit = 0
        if len(k) == 1:
            profit = profits[weights.index(k[0])]
            groups_profits.append(profit)
        else:
            for j in k:
                profit = profit + profits[weights.index(j)]
            groups_profits.append(profit)

    max_profit = max(groups_profits)
    return groups[groups_profits.index(max_profit)]

# print(knapsack([1,2,3,4,5,6,7,8], [10,12,23,6,80,1,4,2], 6))

#0/1 Knapsack - optimised solution: Involves the use of some Table and a Formula
#
#
#
#
#
#
#
#
#
#
#
#
# MERGE SORT ALGORITHM
# - divide and conquer
# - recursive
# - time O(nlogn)
# - space O(n)
# - uses the principle that an array(or list) of one element is inherently sorted.
def mergeSort(arr):
    if len(arr) > 1:
        # divide step
        left_arr = arr[:len(arr)//2]
        right_arr = arr[len(arr)//2:]
        
        mergeSort(left_arr)
        mergeSort(right_arr)


        # merge step
        i, j, k = 0, 0, 0     # left, right and merged array indexes respectively
        while i < len(left_arr) and j < len(right_arr):
            if left_arr[i] < right_arr[j]:
                arr[k] = left_arr[i]
                i = i + 1
            else:
                arr[k] = right_arr[j]
                j = j + 1
            k = k + 1        
        while i < len(left_arr):
            arr[k] = left_arr[i]
            i = i + 1
            k = k + 1
        while j < len(right_arr):
            arr[k] = right_arr[j]
            j = j + 1
            k = k + 1

    return arr
# print(mergeSort([23,1,4,3,6,10,5,7,8,0]))
#
#
#
#
#
#
#
#
#
#
#
#
#
#
# BINARY SEARCH ALGORITHM
# - iterative approach to binary search
# - time = O(logN)   
# - space = O(1)
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array)-1)


def binarySearchHelper(array, target, left, right):
    while left <= right:
        middle = (left + right) // 2
        potentialMatch = array[middle]
        if target == potentialMatch:
            return middle  #found, so return its index
        elif target < potentialMatch:
            right = middle - 1
        else:
            left = middle + 1
        
    return -1 #not found

# print(binarySearch([1,2,3,4,5,6,7], 7))
#
#
#
#
#
#
#
#
#
#
#
#
# SLIDING WINDOW PATTERN REVISION
# Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
def slide1(arr, k):
    sum = 0
    start = 0
    averages = []

    for i in range(len(arr)):
        sum = sum + arr[i]
        if i == (k-1) or i > (k-1):
            averages.append(sum/k)
            sum = sum - arr[start]
            start = start + 1
        
    return averages

# print(slide1([1,2,3,4,6,7,8], 4))
#
#
#
#
#
#
#
#
#
#
#
# Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
def slide2(arr, k):
    sum = 0
    sums = []
    start = 0

    for i in range(len(arr)):
        sum = sum + arr[i]

        if i >= (k-1):
            sums.append(sum)
            sum = sum - arr[start]
            start = start + 1

    print(sums)
    return max(sums)

# print(slide2([1,2,3,4,6,7,8], 4))
#
#
#
#
#
#
#
#
#
#
#
#
#
# Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’
def slide3(arr, s):
    sum = 0
    array = []
    start = 0
    minLength = float('inf')
    for i in range(len(arr)):
        sum = sum + arr[i]
        array.append(arr[i])

        while sum >= s:
            minLength = min(minLength, len(array))
            array.pop()
            sum = sum - arr[start]
            start = start + 1

    return minLength

# print(slide3([2,1,5,2,8], 7))
# print(slide3([2,1,5,2,3,2],7))
# print(slide3([3,4,1,1,6], 8))
#
#
#
#
#
#
#
#
#
#
#
#
#
#
# Given a string, find the length of the longest substring in it with no more than K distinct characters.
def checker(val, k):
    dict = {}

    for i in val:
        if not(i in dict):
            dict[i] = 0
        dict[i] = dict[i] + 1

    keyLength = len(dict.keys())
    if keyLength > k:
        return False
    else:
        return True
        


def slide4(str, k):
    maxLength = 0
    
    for i in range(0, len(str)-k):
        sub = ""
        for j in range(i+k, len(str)):
            sub = str[i:j]
            if checker(sub, k):
                maxLength = max(maxLength, len(sub))
    
    return maxLength

# print(slide4("araaci", 2))
# print(slide4("araaci", 1))
# print(slide4("araaci", 3))
#
#
#
#
#
#
#
#
#
#
#
#
#
# depth first search on a non-binary tree
class Vertex:
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def addChild(self, name):
        self.children.append(Vertex(name))
    
    def dfs(self, array):
        array.append(self.name)

        for child in self.children:
            child.dfs(array)
        
        return array

# graph = Vertex("a")
# graph.addChild("b")
# graph.addChild("c")
# graph.addChild("d")
# graph.children[0].addChild("e")
# graph.children[1].addChild("f")
# graph.children[2].addChild("g")
# print(graph.dfs([]))
#
#
#
#
#
#
#
#
#
#
#
#
# using the min heap data structure to sort an array
from heapq import *

def usingMinHeap(arr):
    minHeap = []
    sorted_arr = []

    for i in arr:
        heappush(minHeap, i)

    while len(minHeap) > 0:
        sorted_arr.append(heappop(minHeap))
    
    print(sorted_arr)

# usingMinHeap([2,1,5,9,3,1,12,56,7])
#
#
#
#
#
#
#
#
#
#
#
# DYNAMIC PROGRAMMING
# sum of first n positive integers
# def sum(n):
#     if n == 1:
#         return 1
#     if n == 0:
#         return 0

#     return n + sum(n-1)

#print(sum(5))
#
#
#
#
#
#
#
#
#
#
#
#
# finding n factorial
def factorial(n):
    if n == 1:
        return 1
    if n == 0:
        return 1

    return n * factorial(n-1)
#print(factorial(5))
#
#
#
#
#
#
#
#
#
#
#
def res(n, array):
    if n == 0:
        return 1
    return array[n] + res(n-1, array)

def sum_of_terms(arr, result=[]):
    for i in range(len(arr)):
        result.append(res(i, arr))
    
    return result

# print(sum_of_terms([1,2,3,4,5,6]))
#
#
#
#
#
#
#
#
#
#
#
def nth_power(x, n):
    if x == 1:
        return x
    if n == 0:
        return 1

    return x * nth_power(x, n-1)

#print(nth_power(2, 10))
#
#
#
#
#
#
#
#
#
#
#
#
def tower_of_hanoi(s, d, e, num):
    if num <= 0:
        return
    
    tower_of_hanoi(s, e, d, num-1)
    print('Move disc-{0} from {1} to {2}'.format(num, s, d))
    tower_of_hanoi(e, d, s, num-1)

# tower_of_hanoi('s', 'd', 'e', 3)
#
#
#
#
#
#
#
#
#
#
#
# BUBBLE SORT REVISION: iterative
def bubble_sort_iterative(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr)-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr

# print(bubble_sort_iterative([6,7,2,1,0,3]))
#
#
#
#
#
#
#
#
#
#
# BUBBLE SORT REVISION: recursive
def bubble_sort_recursive(arr, count = 0):
    if count == len(arr):
        return arr

    for i in range(len(arr)-(count+1)):
        if arr[i] > arr[i+1]:
            arr[i], arr[i+1] = arr[i+1], arr[i]

    count = count + 1

    return bubble_sort_recursive(arr, count)
    

# print(bubble_sort_recursive([6,7,2,1,0,3,12,4,60,44,22,31,16,9,0,2,1]))
# print(bubble_sort_recursive([0,1,4,6,2,7,9,5,4,2,1,100]))
#
#
#
#
#
#
#
#
#
# TAIL RECURSION
def printTable1(n, factor = 1):
    if factor > 10:
        return

    print(n*factor)
    factor = factor + 1
    printTable1(n, factor)

#printTable1(10)
#
#
#
#
#
#
#
#
#
#
# finding nth fibonacci number - revision
def fib(n):
    if n == 1 or n == 2:
        return 1

    return fib(n-1) + fib(n-2)
# print(fib(7))

# memoized version
def fib_memoized(n, memoize = {1:1, 2:1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = fib_memoized(n-1, memoize) + fib_memoized(n-2, memoize)
        return memoize[n]

# print(fib_memoized(20))
#
#
#
#
#
#
#
#
#
#
# most frequent network packet
def freq(record):
    dict = {}
    freq_list = []

    for i in record:
        if i not in dict:
            dict[i] = 0
        dict[i] = dict[i] + 1

    max_freq = max(dict.values())

    for key in dict:
        if dict[key] == max_freq:
            freq_list.append(key)

    if len(freq_list) > 1:
        return freq_list

    return freq_list[0]

# print(freq([1,2,3,2,2,2,2,2,3,4,4,1,6,8,3,3,3,3,78,77,6,0]))
#
#
#
#
#
#
#
#
#
#
#
#
#
# trapping rain water problem
def trapping(arr):
    total_amount = 0

    for i in range(1, len(arr)-1):
        arr_copy1 = []
        arr_copy2 = []
        arr_copy1.extend(arr)
        arr_copy2.extend(arr)
        left_max = max(arr_copy1[0:i])
        right_max = max(arr_copy2[i+1:])

        minimum = min(left_max, right_max)
        amount = minimum - arr[i]

        if amount > 0:
            total_amount = total_amount + amount

    return total_amount

# print(trapping([2,0,2]))
# print(trapping([3,0,2,0,4]))
# print(trapping([0,1,0,2,1,0,1,3,2,1,2,1]))
#
#
#
#
#
#
#
#
#
#
#
#
def average(arr):
    dict = {}
    freq = {}

    for i in range(len(arr)):
        if arr[i][0] not in dict:
            dict[arr[i][0]] = 0
            freq[arr[i][0]] = 0

        dict[arr[i][0]] = dict[arr[i][0]] + int(arr[i][1])
        freq[arr[i][0]] = freq[arr[i][0]] + 1

    for key in freq:
        freq[key] = dict[key]//freq[key]

    max_average = max(freq.values())

    for student in freq:
        if freq[student] == max_average:
            return student

# print(average([["Bob","87"], ["Mike", "35"],["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]]))
#
#
#
#
#
#
#
#
#
#
#
#
# The weird algorithm. Collatz conjecture - the algorithm always terminates for any value of n
def weird_algo(n):
    sequence = []
    sequence.append(n)
    if n <= 1:
        return sequence

    while not(n == 1):
        if n%2 == 0:
            n = n / 2
            sequence.append(n)
        else:
            n = (n*3) + 1
            sequence.append(n)
    
    return sequence

# print(weird_algo(138367))
#
#
#
#
#
#
#
#
#
#
#
# generating subsets of a given set
def gen_subsets(set):
    subsets = []
    subsets.append([])

    for i in set:
        length = len(subsets)

        for j in range(length):
            new = []
            new.extend(subsets[j])
            new.append(i)
            subsets.append(new)
    
    return subsets

# print(gen_subsets([1,5,3]))
# print(gen_subsets([1,3]))
#
#
#
#
#
#
#
#
#
#
#
def gen_sets(original, pointer=0, updated=[[]]):
    if pointer > len(original)-1:
        return updated

    length = len(updated)

    for i in range(length):
        new = []
        new.extend(updated[i])
        new.append(original[pointer])
        updated.append(new)
    
    pointer = pointer + 1
    return gen_sets(original, pointer, updated)


# print(gen_sets([1,5,3]))
#
#
#
#
#
#
#
#
#
#
#
# recursive algorithm for generation of all subsets of a set(1,2,3,...n)
# vect = []
# sub = []

# def subsets_recursive(n, k=1):

#     if k == n+1:
#         # process subset
#         vect.append(sub)
#     else:
#         sub.append(k)
#         subsets_recursive(n, k+1)
#         sub.pop()
#         subsets_recursive(n, k+1)


# subsets_recursive(3)
# print(vect)
#
#
#
#
#
#
#
#
#
#
#
#
def two_sorted(arr1, arr2):
    new_arr = []
    i = 0
    j = 0

    while (i < len(arr1)) and (j < len(arr2)):
        if arr1[i] < arr2[j]:
            new_arr.append(arr1[i])
            i = i + 1
        elif arr2[j] < arr1[i]:
            new_arr.append(arr2[j])
            j = j + 1
        else:
            new_arr.append(arr1[i])
            new_arr.append(arr2[j])
            i = i + 1
            j = j + 1

    if i < j:
        for r in range(i, len(arr1)):
            new_arr.append(arr1[r])
    else:
        for k in range(j, len(arr2)):
            new_arr.append(arr2[k])

    # median
    if len(new_arr)%2 == 0:
        return (new_arr[int(len(new_arr)/2)] + new_arr[int(len(new_arr)/2) - 1])/2
    else:
        return new_arr[len(new_arr)//2]


# print(two_sorted([10,13,78,80.5,100,145], [3,7,8,13,90.5,145,190.5,300,300.5]))
#
#
#
#
#
#
#
#
#
#
#
#
#
def check(str):
    strg = ""
    for i in str:
        strg = strg + i
    if str == strg[::-1]:
        return True
    else:
        return False

def longest_pal(val):    # O(N^2) time,   O(N) space
    hash = {}

    for i in range(0, len(val)):
        substr = ""
        for j in range(i, len(val)):
            substr = substr + val[j]
            if check(substr):
                hash[substr] = len(substr)


    if len(hash.values()) > 0:
        maximum = max(hash.values())
        for key in hash:
            if hash[key] == maximum:
                return key
    else:
        return -1

# print(longest_pal("babad"))
# print(longest_pal("cbbd"))
#
#
#
#
#
#
#
#
#
#
#
#
class Node:
    def __init__(self, value, nxt=None):
        self.val = value
        self.next = nxt

hd = Node(1)
hd.next = Node(2)
hd.next.next = Node(3)
hd.next.next.next = Node(4)

# linkedlist reversal
def reverse_ll(head):
    current = head
    prev = None

    while current:
        next = current.next
        current.next = prev
        prev = current
        current = next
    
    curr = prev
    while curr:
        print(curr.val)
        curr = curr.next

# reverse_ll(hd)
#
#
#
#
#
#
#
#
#
#
#
# searching and sorting revisited

# bubble sort algorithm
def bubbleSort(arr):
    i = 0
    while i < len(arr):
        for j in range(0, len(arr)-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
        i = i + 1
    
    return arr

# print(bubbleSort([3,1,6,5,8,9,10,12,0,60,100,54,-2,-10]))
#
#
#
#
#
#
#
#
#
#
#
# sorting an array using a min-heap - time O(N)   space O(N)
import heapq

def sort_heap(arr):
    heap = []

    for i in arr:
        heapq.heappush(heap, i)

    arr.clear()

    while len(heap) > 0:
        arr.append(heapq.heappop(heap))

    return arr

# print(sort_heap([3,1,6,5,8,9,10,12,0,60,100,54,-2,-10]))
#
#
#
#
#
#
#
#
#
#
#
def bin_to_dec(bitString):     # converting binary to decimal. time: O(n)
    runningSum = 0
    bitString = bitString[::-1]

    for i in range(0, len(bitString)):
        runningSum = runningSum + (int(bitString[i])*(2**i))

    return runningSum

# print(bin_to_dec("10011001110111010101011110101110101011010111111110101010110010101111101010101010101010101010101010101010101010101010101001010101010101011000000011111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111000000011111111010101010101010100101010101010101010101010000011111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111010101011111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110100101001111111111111111111111111111"))
#
#
#
#
#
#
#
#
#
#
#
def median(arr1, arr2):
    length = len(arr1)
    i = j = prev = nxt = count = 0
    
    while count <= length:
        if arr1[i] < arr2[j]:
            prev = nxt
            nxt = arr1[i]
            i = i + 1
            count = count + 1
        elif arr2[j] < arr1[i]:
            prev = nxt
            nxt = arr2[j]
            j = j + 1
            count = count + 1
        else:
            prev = nxt
            nxt = arr2[j]
            i = i + 1
            j = j + 1
            count = count + 2

    return (prev + nxt)/2
    

# print(median([1,2,4,7], [1,3,5,6]))
#
#
#
#
#
#
#
#
#
#
# 0/1 Knapsack Problem...iterative brute force
from itertools import combinations

def knapsack(weights, profits, capacity):

    def getSum(passedTuple):
        sum = 0
        for elem in passedTuple:
            sum = sum + profits[weights.index(elem)]

        return sum


    weightToProfit = {}

    combo = len(weights)

    for i in range(1, combo + 1):
        comb = combinations(weights, i)
        
        for tupl in list(comb):
            if sum(tupl) <= capacity:
                weightToProfit[tupl] = getSum(tupl)


    maxProfit = max(list(weightToProfit.values()))

    for key in weightToProfit:
        if weightToProfit[key] == maxProfit:
            return key

#print(knapsack([2,3,1,4], [4,5,3,7], 5))


# node1 = Tree(1)
# node2 = Tree(2)
# node3 = Tree(3)
# node4 = Tree(4)
# node5 = Tree(5)
# node6 = Tree(6) #root

# node6.left = node5
# node6.right = node4
# node4.left = node3
# node4.right = node2
# node3.left = node1

# class Tree:
#     def __init__(self, value, left=None, right=None):
#         self.left = left
#         self.right = right
#         self.value = value

#     def parent(self, position):
#         # return parent-position of given position


#     def position_depth(self, position):
#         # base case
#         if position == node6:
#             return 0

#         return 1 + self.parent(position)

#     def position_height(self, position):
#         # base case
#         if position.left == None and position.right == None:
#             return 0

#         return 1 + position_height(position.left)