var LinkedList = function(){
  var list = {};
  list.head = null; //point to first node in list, head is its own obj (not a node)
  list.tail = null; //point to last node in the list, tail is its own obj (not a node)
  

  list.addToTail = function(value){


      var newNode = Node(value);
      
      if (list.head === null && list.tail === null) {
          list.tail = newNode 
          list.head = newNode
      }

      else if (list.head === list.tail) {
          list.tail = newNode
          list.head.next = list.tail //.value
      }

      else if (list.head.next !== list.tail.value) {
          list.tail.next = newNode

      }

  };

  list.removeHead = function(){

      //list.head.value = list.head.next 
      //console.log()

      var previousHeadValue = list.head
      list.head = list.head.next;
      console.log(previousHeadValue)

      return previousHeadValue.value 

  };

  list.contains = function(target){
  


    var current = list.head;

    while (current !== null) {    
      if (current.value === target) {
        return true
      } current = current.next
        
   }
   return false;
   

};

return list

};

var Node = function(value){
   var node = {};
   
  node.value = value;
  node.next = null; //points to next node in list

  return node;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
