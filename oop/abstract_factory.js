/**
 * 抽象工厂父类
 */
var XMLHttpFactory = function () {};
XMLHttpFactory.prototype = {
  createFactory: function () {
    throw new Error("This is an abstract class");
  },
};

/**
 * 具体的工厂类，继承 XMLHttpFactory 类（原型继承的方式）
 */
var XHRHandler = function () {
  XMLHttpFactory.call(this);
};
XHRHandler.prototype = new XMLHttpFactory();
XHRHandler.prototype.constructor = XHRHandler;
// 重新定义 createFactory 方法
XHRHandler.prototype.createFactory = function () {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return XMLHttp;
};

/**
 * 调用测试
 */
var ajaxHandler = function () {
  var XMLHttp = new XHRHandler().createFactory();
  console.log(XMLHttp);
};
ajaxHandler();
