//3. https://bucky21.medium.com/arrangement-of-bricks-fc5a213d4f94
// We are given a wall of height h and length l and we have to design it with bricks in such a way that:
// When the bricks are stacked on top of each other no two bricks’ edges coincide(except at the corners).
// After stacking the bricks the total length is l and height is h.
// There are 2 kinds of bricks: 2X1 and 3X1.
//LEETCODE SOLUTION:
#include <bits/stdc++.h>
using namespace std;

vector<int> firstCombination,secondCombination;
int noOf2lenBricks;

void findFirstForEvenLen(int length){
    //fill firstCombination with all 2X1 bricks
    noOf2lenBricks=length/2;
    for(int i=0;i<noOf2lenBricks;i++)   
        firstCombination.push_back(2);
}

void findSecondForEvenLen(int length){
    if(length>=6){
        //fill secondCombination with first brick of 3 length
        secondCombination.push_back(3);
        //fill secondCombination with (length-6)/2 bricks of 2 length
        noOf2lenBricks=(length-6)/2;
        for(int i=0;i<noOf2lenBricks;i++)   
            secondCombination.push_back(2);
        //fill secondCombination with last brick of 3 length
        secondCombination.push_back(3);
    }
    else{   // if length=2
       secondCombination.push_back(2); 
    }
}


void findFirstForOddLen(int length){
    //first brick of length 3 
    firstCombination.push_back(3);
    
    //remaining bricks of length 2
    noOf2lenBricks=(length-3)/2;
    for(int i=0;i<noOf2lenBricks;i++)   
        firstCombination.push_back(2);
}

void findSecondForOddLen(int length){
    //secondCombination is reverse of firstCombination
    secondCombination=firstCombination;
    reverse(secondCombination.begin(),secondCombination.end());
}

int findWall(int length){
    //corner cases
    if(length==0 or length==1 or length==4) return -1;
    
    //if length is even
    if(length%2==0){
        findFirstForEvenLen(length);
        findSecondForEvenLen(length);
    }
    
    //if length is odd
    else{
        findFirstForOddLen(length);
        findSecondForOddLen(length);
    }
    return 0;
}

void printFrist(){
    for(auto brick:firstCombination)
        cout<<brick<<" ";
    cout<<endl;
}

void printSecond(){
    for(auto brick:secondCombination)
        cout<<brick<<" ";
    cout<<endl;
}

void printWall(int height){
    for(int i=0;i<height;i++){
        if(i%2) printFrist();
        else    printSecond();
    }
}

int main() {
    int length,height;
    
	cin>>length>>height;
	
	if(findWall(length)!=-1){
	    printWall(height);
	}
	else{
	    cout<<"Arrangement is not possible for "<<length<<endl;
	}
	return 0;
}