define([
    "dojo/_base/declare"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
   ,"test/HasAttributeChecker"
   ,"dojo/_base/lang"   
], function(declare, ObjectChecker, AttRegexChecker, AttObjectChecker, 
                HasAttributeChecker, lang){
    var ret = declare("test.HtmlTypeChecker", [ObjectChecker], {
        id:null
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
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
                                regex:new RegExp(self.id.replace(/:/g, "_"))}),
                            new AttRegexChecker({
                                attributeName:"ns",
                                regex:new RegExp(self.id)}),
                            new HasAttributeChecker({
                                attributeName:"title"}),
                            new HasAttributeChecker({
                                attributeName:"content"})
                        ]
                    })
                    
                })
            ];
        }
    });
    return ret;
});
