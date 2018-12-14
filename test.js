var Class = require('./lib/myClass.js');
var should = require('should');

describe('my own framework', function() {
    it('should have class', function(){
        var Person = new Class();        
        var p = new Person();
        Person.should.be.ok;
        // var p = function(){};
        // p.should.be.ok;
    });

    it('should have method', function(){
        var Person = new Class({
            myMethod: function() {}
        })

        var p = new Person();
        p.should.have.properties('myMethod');
    });

    it('should have initalize', function(){
        var Person = new Class({
            initalize: function (name, age) {
                this.name = name;
                this.age = age;
            }
        });

        var p1 = new Person('Person1', 11);
        var p2 = new Person('Person2', 23);

        p1.name.should.eql('Person1');
        p1.age.should.eql(11);
        p2.name.should.eql('Person2');
        p2.age.should.eql(23);
    });

    it('should can be extended', function(){
        var Person = new Class({
            initalize: function(name){
                this.name = name;
            },
            method: function() {

            }
        });

        var Student = Person.extends({
            myMethod: function () { }
        });

        var p1 = new Person('Eric');
        var p2 = new Student('Wendy');

        p1.should.have.properties('method');
        p2.should.have.properties('myMethod', 'method');
        p2.name.should.eql('Wendy');
    });
});