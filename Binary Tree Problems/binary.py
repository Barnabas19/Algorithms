# binary tree class
class bt:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


# binary tree instance
tree = bt(10)
tree.left = bt(5)
tree.right = bt(15)
tree.left.left = bt(2)
tree.left.right = bt(5)
tree.right.left = bt(13)
tree.right.right = bt(22)
tree.left.left.left = bt(1)
tree.right.left.right = bt(14)
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
# BINARY TREE ALGORITHMS FOR INTERVIEWS........................................................

#1. find closest value in bst
def closestValInBst(node, target):
    return closestVal(node, target, float('inf'))

def closestVal(node, target, closest):
    if node is None:
        return closest

    if abs(closest - target) > abs(node.value - target):
        closest = node.value 
    
    if target > node.value:
        return closestVal(node.right, target, closest)
    elif target < node.value:
        return closestVal(node.left, target, closest)
    else:
        return closest
    
# print(closestValInBst(tree, 14))
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
#2. return list of all branch sums of a binary tree
def branchSums(node):
    sums = []
    calculateBranchSums(node, 0, sums)
    return sums

def calculateBranchSums(node, runningSum, sums):
    if node is None:
        return
    
    newRunningSum = runningSum + node.value
    if node.left is None and node.right is None:
        sums.append(newRunningSum)
        return 
    
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)

# print(branchSums(tree))
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
#3. write a function to return the total of all node depths
def sumOfNodeDepths(root):
    return depthHelper(root, 0)

def depthHelper(node, depth):
    if node is None:
        return 0

    return depth + depthHelper(node.left, depth+1) + depthHelper(node.right, depth+1)

# print(sumOfNodeDepths(tree))
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
#4. depth-first search algorithm within a graph implementation
class Node:
    def __init__(self, name):
        self.name = name
        self.children = []

    def addChild(self, name):
        self.children.append(Node(name))

    def DFS(self, array):
        array.append(self.name)

        for child in self.children:
            child.DFS(array)
        
        return array

graph = Node("a")
graph.addChild("b")
graph.addChild("c")
graph.addChild("d")
graph.children[0].addChild("e")
graph.children[1].addChild("f")
graph.children[2].addChild("g")
# print(graph.DFS([]))
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
# 5. computing height of a binary tree(or subtree) given a position (as root)

def height(p):
    if p is None:
        return 0
    if p.left==None and p.right==None:
        return 0

    return 1 + max(height(p.left), height(p.right))

# print(height(tree))
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
# 6. return the height of node with the given value
def height(tree):
    if tree is None:
        return 0

    if tree.left==None and tree.right==None:
        return 0

    return 1 + max(height(tree.left), height(tree.right))

def height_of_node(root, val):
    if root is None:
        return None

    if root.value == val:
        return height(root)

    return height_of_node(root.left, val) or height_of_node(root.right, val)


print(height_of_node(tree, 15))
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
# 7. computing depth of a node in a binary tree
    