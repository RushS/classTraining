var Class = function (args){
    var Parent = function (...params){
        if(typeof args != 'undefined' && typeof args.initalize === 'function'){
            // args.initalize(this);
            // args.initalize.apply(this,...params);
            args.initalize.call(this,...params);
        }
    };

    Parent.prototype = args;
    Parent.extends = function (childArgs) {
        var Child = function(){
            args.initalize.apply(this, childArgs);
        }

        var template = function() {};
        template.prototype = Parent.prototype;
        Child.prototype = new template();

        return Child;
    }


    return Parent;
}
module.exports = Class;