const getNestedChildren = require('./src/util').getNestedChildren;

let data = [
  { id: 123, label: 'NodeB', parentID: 7000 },
  { id: 7000, label: 'NodeA', parentID: 0 },
  { id: 9, label: 'NodeC', parentID: 123 },
  { id: 3, label: 'NodeF', parentID: 0 },
  { id: 25, label: 'NodeE', parentID: 7000 },
  { id: 2, label: 'NodeD', parentID: 7000 },
  { id: 10, label: 'NodeG', parentID: 3 }
]

let result = getNestedChildren(data, 0);
console.log(JSON.stringify(result, null, 2));

