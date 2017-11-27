(function () {
  "use strict";
 
  var YAML = require('json2yaml')
    , ymlText
    ;
 
    ymlText = YAML.stringify({
      "foo": "bar"
    , "baz": "corge"
    });
 
    console.log(ymlText);
}());

