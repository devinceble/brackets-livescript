define(function (require, exports, module) {
    'use strict';

    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("livescript", {
      name: "Livescript",
      mode: "livescript",
      fileExtensions: ["ls"],
      blockComment: ["/*","*/"],
      lineComment: ["#", "#"]
    });
});