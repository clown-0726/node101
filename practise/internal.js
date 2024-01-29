const EventEmitter = require("events");
let os = require("os");

console.log(os.arch());
console.log(os.cpus());

class Geektime extends EventEmitter {
  constructor() {
    super();

    setInterval(() => {
      this.emit("newlesson", { price: Math.random() * 100 });
    }, 3000);
  }
}

const geektime = new Geektime();
geektime.addListener("newlesson", (res) => {
  console.log("yeah!", res);
});
