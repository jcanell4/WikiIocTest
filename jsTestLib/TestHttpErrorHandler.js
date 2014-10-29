define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "test/TestResponseHandler"
], function(declare, lang, TestResponseHandler){
    var ret = declare("test.TestHttpErrorHandler", [TestResponseHandler], {
        statusCode: null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                this.statusCode = att;
            }
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
