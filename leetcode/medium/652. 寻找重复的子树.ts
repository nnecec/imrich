/**
 * Definition for a binary tree node.
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function findDuplicateSubtrees (root: TreeNode | null): Array<TreeNode | null> {
  if (root === null) {
    return '#'
  }

  return traverse(root)
};

function traverse (root: TreeNode) {
  const left = traverse(root.left)
  const right = traverse(root.right)

  const subTree = left + ',' + right + ',' + root.val
  return subTree
}

console.log(findDuplicateSubtrees([1, 2, 3, 4, null, 2, 4, null, null, 4]))
