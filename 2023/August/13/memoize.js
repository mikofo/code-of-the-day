// Optimized for speed using an object
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    const hit = cache[key];

    if (hit !== undefined) return hit;

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Optimized for memory using a weak map
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    return cache.has(key)
      ? cache.get(key)
      : cache.set(key, fn.apply(this, args)).get(key);
  };
}
