// Least Recent Used Cache Implementation
// A Least Recently Used (LRU) Cache organizes items in order of use, allowing you to quickly identify which item hasn't been used for the longest amount of time.
// Under the hood, an LRU cache is often implemented by pairing a doubly linked list with a hash map.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  set(key, value) {
    //if we're at capacity, we need to remove the least-recently-used item:
    if (this.cache.size >= this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value
      this.cache.delete(leastRecentlyUsedKey)
    }
    // even so, we need to reinsert the value in the cache to make it more recently used.
    this.cache.delete(key)
    this.cache.set(key, value)
  }

  get(key) {
    if (this.cache.has(key)) {
      // we need to make it more recently used
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
  }

  print() {
    console.log(this.cache)
  }
}

const cache = new LRUCache(5)
cache.set('a', 1)
cache.set('b', 2)
cache.set('c', 3)
cache.print() // a is the least-recently used

console.log(cache.get('b'))
cache.print() // /b is the more recently used

cache.set('a', 111) // a is the more recent used
cache.print()

cache.set('d', 4)
cache.set('e', 5)
cache.print()

// c is the least-recently used, so if we add a new value, it should be removed:
cache.set('f', 6)
cache.print()
