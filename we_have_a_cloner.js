function we_have_a_cloner(obj) {
  var new_obj = {}, iterator;
  for (iterator in obj) {
    if (obj.hasOwnProperty(iterator)) {
      if (typeof obj[iterator] === 'object') {
        new_obj[iterator] = obj[iterator].constructor.toString().indexOf("Array") !== -1 ? obj[iterator].slice(0) : we_have_a_cloner(obj[iterator]);
      } else {
        new_obj[iterator] = obj[iterator];
      }
    }
  }
  return new_obj;
}

  var my_obj = {
    arr: [1,2,3],
    obj: {
      arr: [4,5,6],
      some_obj: {
        val: 'whoah'
      }
    }

  };

console.log(we_have_a_cloner(my_obj));