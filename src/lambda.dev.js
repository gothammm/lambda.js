(function() {
  console.log('bootstrap lambdajs');
  var global = this;
  global.lambda = {};
  var protoAttach = false;
  lambda.config = {
    init: function(attachToProto) {
      protoAttach = attachToProto && attachToProto === true ? true : false;
      this.isOfTypeAttached = protoAttach;
      if(this.isOfTypeAttached) {
        lambda._setActionsToArrayPrototype.set();
      }
    },
    isOfTypeAttached: protoAttach
  };
  lambda.exception = {
    throwEx: function(e) {
      console.log(e);
      throw e;
    }
  };
  lambda._actions = {
    _select: function(arr, props) {
      var i = 0,
          j,
          me = this,
          arrLength,
          propLength,
          isSingleProp = false,
          resultObj = {},
          result = [];
      
      //Basic validations.
      if(!arr) lambda.exception.throwEx("Array is undefined");
      if(!props) props = [];
      if(!arr.length && typeof(arr) == 'object') lambda.exception.throwEx("'arr' parameter must be of type Array");
      if(!props.length && typeof(props) == 'object') lambda.exception.throwEx("'props' parameter must be of type Array");
      
      arrLength = arr.length;
      propLength = props.length;
      if(props.length == 1) {
        isSingleProp = true;
      }
      
      for(; i <arrLength; i++) {
        var item = arr[i];
        if(isSingleProp) {
          var prop = me.first(props);
          var propItem = item[prop];
          if(propItem) {
            result.push(propItem);
          }
        }
        else {
          resultObj = {};
          for(j=0;j<propLength;j++) {
            var prop = props[j];
            var propItem = item[prop];
            if(propItem) {
              resultObj[prop] = propItem;
            }
          }
          result.push(resultObj);
        }
      }
      return result;
    },
    _first: function(arr) {
       //Basic validations.
      if(!arr) lambda.exception.throwEx("Array is undefined");
      if(!arr.length && typeof(arr) == 'object') lambda.exception.throwEx("'arr' parameter must be of type Array");
      if(arr.length > 0) {
        return arr[0];
      }
      return arr;
      
    },
    _getActions: function() {
      var me = this;
      return {
        select: me._select,
        first: me._first
      }
    }
  };
  lambda._setActionsToArrayPrototype = {
    actions: {
      collection: {},
      getSelectAction: function() {
        return this.collection.select;
      },
      getFirstAction: function() {
        return this.collection.first;
      }
    },
    set: function() {
      var actionsObj = lambda._actions._getActions();
      this.actions.collection = actionsObj;
      this._setForArraySelect();
      this._setForArrayFirst();
    },
    _setForArraySelect: function() {
      var actionsObj = this.actions;
      Array.prototype.select = function(props) {
        var me = this;
        return actionsObj.getSelectAction(me, props);
      }
    },
    _setForArrayFirst: function() {
      var actionsObj = this.actions;
      Array.prototype.first = function() {
        var me = this;
        return actionsObj.getFirstAction(me);
      }
    }
  };
  
  var actionsList = lambda._actions._getActions();
  lambda.select = actionsList.select;
  lambda.first = actionsList.first;
})();