"use strict";
(function () {
  function toHankaku(str) {
    var hankaku = str.replace(/[!-~]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
    return hankaku
      .replace(/ /g, "　")
      .replace(/~/g, "～")
      .replace(/〜/g, "～")
      .replace(/@/g, "＠");
  }

  var hankaku = document.getElementById("hankaku");
  var zenkaku = document.getElementById("zenkaku");
  var btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    zenkaku.value = toHankaku(hankaku.value);
  });

  //参考 https://webllica.com/change-double-byte-to-half-width/ 2019年8月9日参照
})();
