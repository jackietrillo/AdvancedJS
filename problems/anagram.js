var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let mapS = new Map();
  let mapT = new Map();

  for (var i = 0; i < t.length; i++) {
    mapS.set(s[i], 1 + (mapS.get(s[i]) || 0));
    mapT.set(t[i], 1 + (mapT.get(t[i]) || 0));
  }
  let equalCount = true;
  for (const entry of mapS.entries()) {
    if (mapS.get(entry[0]) != mapT.get(entry[0])) {
      equalCount = false;
      break;
    }
  }
  return equalCount;
};

var result;
result = isAnagram("cat", "tac");
result;
result = isAnagram("aacc", "ccac"); // false
result;
result = isAnagram("ab", "a"); //false
result;
//result = isAnagram("anagram", "nagaram"); //true
