class node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree{
    constructor(value){
        let newNode = new node(value);
        this.root = newNode;
    }

    insert(value){
        let newNode = new node(value)
        let currentNode = this.root;
        while(1){
            if(value < currentNode.value){
                if(currentNode.left){
                    currentNode = currentNode.left
                }
                else{
                    currentNode.left = newNode
                    break
                }
            }
            else{
                    if(currentNode.right){
                        currentNode = currentNode.right
                    }
                    else{
                        currentNode.right = newNode
                        break
                    }
            }
        }
    }

    lookup(value){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value == value){
                return true
            }
            else{
                if( currentNode.value > value){
                    currentNode = currentNode.left
                }
                else{
                    currentNode = currentNode.right
                }
            }
        return false
        }
    }
}

let b = new binarySearchTree(5)
console.log(b)
b.insert(10)
console.log(b.lookup(1))

