define([
    "dojo/_base/declare"
    ,"test/AbstractAttChecker"
], function(declare, AbstractAttChecker){
    var ret = declare("test.AttBooleanChecker", [AbstractAttChecker], {
         value: null
        
        ,getValue: function(){
            return this.value;
        }
        ,setValue: function(value){
            this.value = value;
        }
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,_check: function(response, tester) {
            if(this.value !== null) {
                tester.t(response[this.attributeName]==(this.value));
            }
        }
				
    });
    return ret;
});
