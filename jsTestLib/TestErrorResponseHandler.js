define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/TestResponseHandler"
   ,"test/ArrayChecker"
   ,"test/ObjectChecker"
   ,"test/AttNumChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, lang, TestResponseHandler,ArrayChecker, 
            ObjectChecker, AttNumChecker,  AttRegexChecker, AttObjectChecker){
    var ret = declare("test.TestHttpErrorHandler", [TestResponseHandler], {
        errorCode:null
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                this.errorCode = att;
            }
            var errorCode = this.errorCode;
            this.checker = new ArrayChecker({
                size:1,
                checkers:[
                    new ObjectChecker({
                        checkers:[
                            new AttRegexChecker({
                                attributeName:"type",
                                regex:/error/i}),
                            new AttObjectChecker({
                                attributeName:"value",
                                checker: new ObjectChecker({
                                    checkers:[
                                        new AttNumChecker({
                                            attributeName:"code",
                                            value:errorCode})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
        }
        
        /**
         * Avalua el mètode check del checker amb la resposta que rep
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(error, tester) {
                tester.t(error.status==this.statusCode, "Status incorrect");
        }
				
    });
    return ret;
});
