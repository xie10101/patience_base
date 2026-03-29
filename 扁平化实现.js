
const tree = [
  {
    id: 1,
    name: 'A',
    children: [
      { id: 2, name: 'A-1' },
      {
        id: 3,
        name: 'A-2',
        children: [{ id: 4, name: 'A-2-1' }]
      }
    ]
  },
  { id: 5, name: 'B' }
];

function treeToList(tree, res = []) {
  for (let node of tree) {
    const { children, ...item } = node;
    res.push(item);
    if (children && children.length) {
      treeToList(children, res);
    }
  }
  return res;
}

const map = new Map();

map.delete

console.log(treeToList(tree))


// 仅是 -特定结果的树形数组扁平化为清晰结构的数组 