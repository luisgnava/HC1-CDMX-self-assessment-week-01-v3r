/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/

/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */


//create a parent node that takes a value
  var node = new Node(0);
  //from that parent node, two differen nodes will branch out
  var branch1 = node.addChild(1);
  var branch2 = node.addChild(2);
  //both node 1 and 2 will take three diferent nodes (3, 4, 5, 6, 7, 8)
  var branch3 = branch1.addChild(3);
  var branch4 = branch1.addChild(4);
  var branch5 = branch1.addChild(5);
  var branch6 = branch2.addChild(6);
  var branch7 = branch2.addChild(7);
  var branch8 = branch2.addChild(8);
