function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  total = 0;
  for (i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  console.log("Index: ", index);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

var myHT = new HashTable(30);

//console.log(myHT.hash("Becca"));

myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "dane@yahoo.com");

console.log(myHT.buckets);
