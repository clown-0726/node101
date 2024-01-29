// console.log(
//   (async function () {
//     return "4";
//   })()
// );

// console.log(function () {
//   return new Promise((resolve, reject) => {
//     resolve("4");
//   });
// }());

// (function () {
//   const result = (async function () {
//     try {
//       var content = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject(new Error(8));
//         }, 500);
//       });
//     } catch (e) {
//       console.log("error", e.message);
//     }

//     console.log(content);
//     return 4;
//   })();

//   setTimeout(() => {
//     console.log(result);
//   }, 800);
// })();

(async () => {
  try {
    // await interview(1);
    // await interview(2);
    // await interview(3);

    await Promise.all([interview(1), interview(2)]);
  } catch (e) {
    return console.log("cry at " + e.round);
  }
  console.log("smile");
})();

function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("success");
      } else {
        var error = new Error("failed");
        error.round = round;
        reject(error);
      }
    }, 500);
  });
}
