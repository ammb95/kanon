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
