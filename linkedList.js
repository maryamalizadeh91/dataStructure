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
  var newNode = new Node(value, this.head, null);

  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

/*var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

console.log(ll);*/

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

/*var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

myLL.addToHead(100);

console.log(myLL.tail.prev.prev.prev);*/

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

/*var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

ll.removeHead();
console.log(ll.removeHead())*/

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

var ll = new LinkedList();

ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');
console.log(ll.removeTail());