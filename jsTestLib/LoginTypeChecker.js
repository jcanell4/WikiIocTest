define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttNumChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, lang, ObjectChecker, AttNumChecker,  
                AttRegexChecker, AttObjectChecker){
    var ret = declare("test.LoginTypeChecker", [ObjectChecker], {
         loginRequest:false
        ,loginResult:false
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att, lrs){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.loginRequest = att;
                }
                if(lrs){
                    this.loginResult=lrs;
                }
            }
            var self=this;
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/login/i}),
                new AttObjectChecker({
                    attributeName:"value",
                    checker: new ObjectChecker({
                        checkers:[
                            new AttNumChecker({
                                attributeName:"loginRequest",
                                value:self.loginRequest}),
                            new AttNumChecker({
                                attributeName:"loginResult",
                                value:self.loginResult})
                        ]
                    })
                })
            ];
        }
    });
    return ret;
});
