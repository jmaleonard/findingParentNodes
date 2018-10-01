//recursive function to get nested children
module.exports.getNestedChildren = (arr, parent) => {
  var out = [];
  for (var i in arr) {
    if (arr[i].parentID == parent) {
      var children = exports.getNestedChildren(arr, arr[i].id);

      if (children && children.length) {
        arr[i].children = children;
      }
      out.push(arr[i]);
    }
  }
  return out;
};