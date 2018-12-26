function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/*var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

var node = new Node(100, 'node2', null);

console.log(node);
console.log(LL);*/

LinkedList.prototype.addToHead = function(value) {
  var newNode = Node(value, this.head, null);
};
