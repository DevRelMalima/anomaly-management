export const hseMatrix = [
  ["IA", "IA", "P5", "P5", "P4"],
  ["IA", "P5", "P5", "P4", "P3"],
  ["P5", "P5", "P4", "P3", "P2"],
  ["P5", "P4", "P3", "P2", "P1"],
  ["P4", "P3", "P2", "P1", "P0"],
];
export const getPriority = (lof, cof) => hseMatrix[lof - 1][cof - 1];
export const getPrioritySoF = (sof) => hseMatrix[sof - 1][sof - 1];

// export const getPriority1 = (
//   priorities,
//   coFs,
//   poFs,
//   enteredPoF,
//   enteredCoF
// ) => {
//   let maxCoF = coFs.reduce((t, a) => {
//     if (t > a.score) return t;
//     else return a.score;
//   }, 0);

//   let minCoF = coFs.reduce((t, a) => {
//     if (t < a.score) return t;
//     else return a.score;
//   }, Infinity);

//   let maxPoF = poFs.reduce((t, a) => {
//     if (t > a.score) return t;
//     else return a.score;
//   }, 0);

//   let minPoF = poFs.reduce((t, a) => {
//     if (t < a.score) return t;
//     else return a.score;
//   }, Infinity);

//   let totalPrioritiesScore = priorities.reduce((t, a) => {
//     return t + a.score;
//   }, 0);

//   var sortedPriorities = priorities.sort(function (a, b) {
//     return a.index - b.index;
//   });

//   var setPriority =
//     sortedPriorities.length > 0 ? sortedPriorities[0] : null;

//   var poFRange = (enteredPoF.score - minPoF) / (maxPoF - minPoF);

//   var coFRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);

//   var priorityRange =
//     ((poFRange + coFRange) / 2) * totalPrioritiesScore;

//   let sumholder = 0;
//   sortedPriorities.forEach((c, i, arr) => {
//     if (
//       (priorityRange > sumholder) &
//       (priorityRange <= sumholder + c.score)
//     ) {
//       setPriority = c;
//     }
//     sumholder += c.score;
//   });

//   return setPriority || { name: "--" };
// };
