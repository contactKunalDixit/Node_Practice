const arr = process.argv;
// console.log(arr);
const arrSliced = arr.slice(2);
console.log(arrSliced);

for (const iterator of arrSliced) {
  console.log(`Hi ${iterator}, How are you!`);
}
