define([
    "dojo/_base/declare"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, ObjectChecker, AttRegexChecker, AttObjectChecker){
    var ret = declare("test.TitleTypeChecker", [ObjectChecker], {
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(params){
            var paramCheckers = new Array();
            for(var key in params){
                paramCheckers.push(
                    new AttRegexChecker({
                        attributeName:key,
                        regex:params[key]
                    })
                )
            }
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/info/i}),
                new AttObjectChecker({
                    attributeName:"value",
                    checker: new AttObjectChecker({
                        attributeName:"params",
                        checker: new ObjectChecker({
                            checkers:paramCheckers
                        })                    
                    })
                })
            ];
        }
        /*
        ,constructor: function(att){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.id = att;
                }
            }            
            var self=this;
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/html/i}),
                new AttObjectChecker({
                    attributeName:"value",
                    checker: new ObjectChecker({
                        checkers:[
                            new AttRegexChecker({
                                attributeName:"id",
                                value:self.id.replace(/:/g, "_")}),
                            new AttRegexChecker({
                                attributeName:"ns",
                                value:self.id}),
                            new HasAttributeChecker({
                                attributeName:"title"}),
                            new HasAttributeChecker({
                                attributeName:"content"})
                        ]
                    })
                    
                })
            ];
        }*/
    });
    return ret;
});
