define([
    "dojo/_base/declare"
    ,"test/AbstractAttChecker"
], function(declare, AbstractAttChecker){
    var ret = declare("test.AttNumChecker", [AbstractAttChecker], {
         value: null
        ,minValue: null
        ,maxValue: null
        
        ,getValue: function(){
            return this.value;
        }
        ,getMinValue: function(){
            return this.minValue;
        }
        ,getMaxValue: function(){
            return this.maxValue;
        }
        ,setValue: function(value){
            this.value = value;
        }
        ,setMinValue: function(minValue){
            this.minValue = minValue;
        }
        ,setMaxValue: function(maxValue){
            this.maxValue = maxValue;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,_check: function(response, tester) {
            var num = parseFloat(response[this.attributeName]);
            if(this.value !== null) {
                tester.t(num ==(this.value));
            }else{
                if(this.minValue!==null){
                    tester.t(num >= (this.minValue));
                }
                if(this.maxValue!==null){
                    tester.t(num <= (this.maxValue));
                }
            }
        }
				
    });
    return ret;
});
