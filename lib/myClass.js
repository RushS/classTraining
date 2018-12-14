var Class = function (args){
    var Parent = function (...params){
        if(typeof args != 'undefined' && typeof args.initalize === 'function'){
            // args.initalize(this);
            // args.initalize.apple(this,[...params]);
            // args.initalize.apply(this,...params);
            args.initalize.call(this,...params);
        }
    };

    Parent.prototype = args;
    Parent.extends = function (childArgs) {
        var Child = function(){
            Parent.initalize.apply(this, childArgs);
        }
        
    }


    return Parent;
}
module.exports = Class;