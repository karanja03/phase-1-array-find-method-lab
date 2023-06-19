// code your solution here
function superbowlWin(array) {
  const winningYear = array.find(obj => obj.result === "W");
  return winningYear ? winningYear.year : undefined;
}
const superbowls = [
  { year: 2000, result: "L" },
  { year: 2001, result: "W" },
  { year: 2002, result: "L" },
  // ... more objects ...
];

const winningYear = superbowlWin(superbowls);
console.log(winningYear); 
