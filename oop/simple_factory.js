/**
 * 简单工厂
 */
var XMLHttpFactory = function () {};
XMLHttpFactory.createFactory = function () {
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
  var XMLHttp = XMLHttpFactory.createFactory();
  console.log(XMLHttp);
};
ajaxHandler();
