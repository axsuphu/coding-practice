// have a current node to reference

//constructs a node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//creating each node
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b; //linking these two nodes together
b.next = c;
c.next = d;
//A -> B -> C -> D -> null

// const printLinkedList = (head) => {
// 	//have a current node to reference
//   let current = head;

//   //how long do we want to execute this function?
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

//recursive way
// const printLinkedList = (head) => {
//   if (head === null) return;
//   console.log(head.val);
//   printLinkedList(head.next);
// };

// printLinkedList(a); //A B C D

//--------------------Solving Problems with Linked Lists--------------------
// const linkedListValues = (head) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.value);
//     current = current.next;
//   }
//   return values;
// };

//recursive way
const linkedListValues = (head) => {
  const values = [];
  //use a helper function to do the recursion
  fillValues(head, values);

  return values;
};

//have this function outside so it doesnt create multiple arrays
const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};
