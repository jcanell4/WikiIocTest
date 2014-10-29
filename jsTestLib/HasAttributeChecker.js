define([
    "dojo/_base/declare"
    ,"test/AbstractAttChecker"
], function(declare, AbstractAttChecker){
    var ret = declare("test.HasAttributeChecker", [AbstractAttChecker], {
        /**
         * Verifica si l'atribut de response anomenat com attributeName existeix.
         * @param HashArray? response Resposta per validar.
         */ 
        _check: function(response, tester) {
            tester.t(this.response.hasOwnProperty(this.attributeName));
        }
				
    });
    return ret;
});
