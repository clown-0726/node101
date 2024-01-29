var promise = interview(1)
  .then((res) => {
    return interview(2);
  })
  .then((res) => {
    return interview(3);
  })
  .then((res) => {
    console.log("smile");
  })
  .catch((err) => {
    console.log("cry at" + err.round + " round");
  });

function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("success");
      } else {
        var round = new Error("failed");
        error.round = round;
        reject(error);
      }
    }, 500);
  });
}
