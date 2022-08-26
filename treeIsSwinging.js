const tree = {
  value: 6,
  nodeR: {
    value: 3,
    nodeR: { value: 2, nodeR: null, nodeL: null },
    nodeL: { value: 1, nodeR: null, nodeL: null },
  },
  nodeL: {
    value: 5,
    nodeR: { value: 2, nodeR: null, nodeL: null },
    nodeL: { value: 1, nodeR: null, nodeL: null },
  },
};

function treeIsSwinging(tree) {
  if (tree.nodeL && tree.nodeR) {
    if (tree.value === tree.nodeL.value + tree.nodeR.value) {
      return treeIsValid(tree.nodeL) && treeIsValid(tree.nodeR);
    }
    return false;
  }
  return true;
}
