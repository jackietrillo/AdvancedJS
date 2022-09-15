const a = ['a'];
const b = ['b', 'bb', 'bbb'];
const c = ['c', 'cc', 'ccc'];
const d = [];

const spread = [...a, ...b, ...c, ...d];

console.log(spread);

let results = [];
results.push(a, ...b, ...c);
results