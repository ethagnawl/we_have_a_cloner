we_have_a_cloner = (obj) ->
  new_obj = {}
  for key, val of obj
    if typeof obj[key] is 'object'
      if obj[key].constructor.toString().indexOf('Array') isnt -1
        new_obj[key] = obj[key][0...obj[key].length]
      else
        new_obj[key] = we_have_a_cloner(obj[key])
    else
      new_obj[key] = obj[key]
  new_obj
