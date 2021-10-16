Array.prototype.count = function (filter) {
  return this.filter(filter).length;
};

Array.prototype.sum = function (map) {
  return this.map(map).reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.removeDuplicates = function (map) {
  const comparableEntries = this.map(map);
  const uniqueComparableEntries = comparableEntries.filter(
    (item, pos) => comparableEntries.indexOf(item) === pos
  );
  const uniqueIndexes = uniqueComparableEntries.map(entrie =>
    comparableEntries.indexOf(entrie)
  );
  return this.filter((item, pos) => uniqueIndexes.some(index => index === pos));
};

Array.prototype.replaceItem = function (replaceCondition, newItem) {
  return this.map(item => (replaceCondition(item) ? newItem : item));
};
