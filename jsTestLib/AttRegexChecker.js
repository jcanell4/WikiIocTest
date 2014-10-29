define([
    "dojo/_base/declare"
    ,"test/AbstractAttChecker"
], function(declare, AbstractAttChecker){
    var ret = declare("test.AttRegexChecker", [AbstractAttChecker], {
        regex: null
        
        ,getRegex: function(){
            return this.regex;
        }
        
        ,setRegex: function(regex){
            this.regex = regex;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,_check: function(response, tester) {
            if(this.regex){
                tester.t(response[this.attributeName].match(this.regex));
            }
        }
				
    });
    return ret;
});
