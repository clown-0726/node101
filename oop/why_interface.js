class Desktop {
  constructor() {}

  getContent(param) {
    return "Get content from Desktop: " + param;
  }
}

class Laptop {
  constructor() {}

  getContent(param) {
    return "Get content from Laptop: " + param;
  }
}

function getComputer(cond) {
  if (cond == 1) {
    return new Desktop();
  } else if (cond == 2) {
    return new Laptop();
  } else {
    throw new Error("Wrong cond...");
  }
}

function main() {
  cond = 1;
  let c = getComputer(cond);
  let resStr = c.getContent("http://abc.com/");
  console.log(resStr);
}

main();
