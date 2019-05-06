var loader = require("./loader");

(function() {
  var fortune = {};

  var fortunes = loader.load();

  fortune.fortune = function(type) {
    console.log(Object.keys(fortunes.list));
    var r = type || Math.floor(Math.random() * fortunes.list.length);
    return fortunes.list[r];
  };

  module.exports = fortune;
})();
