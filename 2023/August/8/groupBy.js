Array.prototype.groupBy = function (fn) {
  const output = {};

  this.forEach((item) => {
    const val = fn(item);
    if (output[val]) output[val].push(item);
    else output[val] = [item];
  });

  return output;
};
