interview(function (err, res) {
  if (!err) {
    return console.log("cry");
  }

  console.log("smile");
});

function interview(cb) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      cb(null, "success");
    } else {
      cb(new Error("failed"));
    }
  }, 500);
}
