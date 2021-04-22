// HashTable/HashMap Examples
// https://javascript.plainenglish.io/algorithm-in-javascript-hash-table-7b0464d2b81b
// Problem - Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
// It is assumed that the characters are stored using 8 bit and there can be 256 possible characters.
// Time Complexity of this solution : O(n) and  Space Complexity: O(1)

function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    // generates array with zeros with 256 length
    var hash_table_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0); 

    // Increments with 1 the element in the position of chardCodeAt for each char of the string
    for (var i = 0; i < str1.length; i++) {
      hash_table_array[str1[i].charCodeAt(0)] += 1;
    }

    // decrements the correspondent position by chardCodeAt. If the value is less then zero, there isnt permutation because the char
    // doesnt exists in the first string.
    for (var i = 0; i < str2.length; i++) {
      if ((hash_table_array[str2[i].charCodeAt(0)] -= 1) < 0) {
        return false;
      }
    }

    return true;
  };

// console.log(isPermutation('abcd','dcba')) //true
// console.log(isPermutation('abcd','dcbx')) //false
console.log(isPermutation('augusto','otsugua')) //false
