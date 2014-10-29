define([
    "dojo/_base/declare"
    ,"test/AbstractAttChecker"
], function(declare, AbstractAttChecker){
    var ret = declare("test.AttObjectChecker", [AbstractAttChecker], {
        checker:null
        ,getChecker: function(){
            return this.checker;
        }
        ,setChecker: function(checker){
            this.checker = checker;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,_check: function(response, tester) {
            if(this.checker){
                this.checker.check(response[this.attributeName], tester);
            }
        }
				
    });
    return ret;
});