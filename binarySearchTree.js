function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right); 
  }
};


/*BST.prototype.getMinVal = function() {
  var minVal = this.value;
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    if (treeNode.value < minVal) minVal = treeNode.value;
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right); 
  }
  return minVal;
}

BST.prototype.getMaxVal = function() {
  var maxVal = this.value;
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    if (treeNode.value > maxVal) maxVal = treeNode.value;
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right); 
  }
  return maxVal;
}*/

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}

/*function log(value) {
  console.log(value);
}*/

function log(node) {
  console.log(node.value);
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

//console.log(bst.left.right.left);
//console.log(bst.contains(90));
//bst.depthFirstTraversal(log, "post-order");
//bst.breadthFirstTraversal(log);

console.log('Min: ', bst.getMinVal());
console.log('Max: ', bst.getMaxVal());

