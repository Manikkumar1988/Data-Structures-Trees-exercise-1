class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    //Code here
    if (this.root === null) {
      this.root = new Node(value)
      return
    } else {
      let temp = this.root

      while(temp!==null) {



         if(temp.value>value) {

if(temp.left===null) {
          temp.left = new Node(value)
          break;
        }
        else {
          temp = temp.left
        }
        }
       else if(temp.value<value){


            if(temp.right===null) {
          temp.right = new Node(value)
          break;
        }
        else {
          temp = temp.right
        }  
             
      }
    }
  }
  }

  lookup(value){
    //Code here
    if(this.root === null) {
      return false
    } else {
      let currentNode = this.root
      while(currentNode!==null) {
        if(value>currentNode.value) {
          currentNode = currentNode.right
        }else if(value<currentNode.value) {
          currentNode = currentNode.left
        }
        else {
          console.log(currentNode)
        return currentNode
        
        }
      }
      return false
    }
    
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





