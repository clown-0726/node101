const glob = require("glob");

// 下面是阻塞式 IO
if (false) {
  var result = null;
  console.time("glob");
  result = glob.sync(__dirname + "/**/*");
  console.log(result);
}

// 下面是非阻塞式 IO
if (true) {
  var result = null;
  console.time("glob");
  glob(__dirname + "/**/*", function (err, res) {
    result = res;
    console.log("got result");
  });
  console.timeEnd("glob");
  console.log(1 + 1);
}
