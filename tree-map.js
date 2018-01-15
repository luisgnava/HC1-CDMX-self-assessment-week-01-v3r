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

//create a tree function
//create a parent node that takes a value
  var tree = function(value) {
    var newTree = {};

    _.extend(newTree, treeMethods);

    newTree.value = value;
    newTree.children = [];

return newTree;
  };
    var treeMethods =
  //from that parent node, two different nodes will branch out
  tree.addChild('A');
  tree.addChild('B');
  tree.addChild('C');
  tree.children[0](.addChild('D'));
  tree.children[0](.addChild('E'));
  tree.children[0](.addChild('F'));
  tree.children[1](.addChild('G'));
  tree.children[1](.addChild('H'));
  tree.children[1](.addChild('I'));
  tree.children[2](.addChild('J'));
  tree.children[2](.addChild('K'));
  tree.children[2](.addChild('L'));
  //both node 1 and 2 will take three diferent nodes (3, 4, 5, 6, 7, 8)
var newTree = tree.map(function (value)) {
  return value++;
}
