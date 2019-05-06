var loader = require("./loader");

(function() {
  var fortune = {};

  var fortunes = loader.load();

  fortune.fortune = function(type) {
    const list = (type && fortunes.map[type]) || fortunes.list;
    var r = Math.floor(Math.random() * list.length);
    return list[r];
  };

  module.exports = fortune;
})();
