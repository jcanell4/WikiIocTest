define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttBooleanChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, lang, ObjectChecker, AttBooleanChecker,  
                AttRegexChecker, AttObjectChecker){
    var ret = declare("test.LoginTypeChecker", [ObjectChecker], {
         loginRequest:false
        ,loginResult:false
        ,username:null
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att, lrs, uid){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.loginRequest = att;
                }
                if(lrs){
                    this.loginResult=lrs;
                }
                if(uid){
                    this.username=uid;
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
                            new AttBooleanChecker({
                                attributeName:"loginRequest",
                                value:self.loginRequest}),
                            new AttBooleanChecker({
                                attributeName:"loginResult",
                                value:self.loginResult}),
                            new AttRegexChecker({
                                attributeName:"userId",
                                regex:new RegExp(self.username),
                                __optional__:true
                            })
                        ]
                    })
                })
            ];
        }
    });
    return ret;
});
