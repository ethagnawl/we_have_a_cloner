(function() {
  var we_have_a_cloner;
  we_have_a_cloner = function(obj) {
    var key, new_obj, val;
    new_obj = {};
    for (key in obj) {
      val = obj[key];
      if (typeof obj[key] === 'object') {
        if (obj[key].constructor.toString().indexOf('Array') !== -1) {
          new_obj[key] = obj[key].slice(0, obj[key].length);
        } else {
          new_obj[key] = we_have_a_cloner(obj[key]);
        }
      } else {
        new_obj[key] = obj[key];
      }
    }
    return new_obj;
  };
}).call(this);
