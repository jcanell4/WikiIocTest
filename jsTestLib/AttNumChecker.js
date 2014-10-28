define([
    "dojo/_base/declare"
    ,"dojo/_base/lang"
], function(declare, lang){
    var ret = declare("test.AttNumChecker", [], {
         attributeName: null
        ,value: null
        ,minValue: null
        ,maxValue: null
        
        /*CONSTRUCTOR*/
        ,constructor: function(att){ 
            if(att){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
        }
        
        /*GETTERS*/
        ,getAttributeName: function(){
            return this.attributeName;
        }
        ,getValue: function(){
            return this.value;
        }
        ,getMinValue: function(){
            return this.minValue;
        }
        ,getMaxValue: function(){
            return this.maxValue;
        }
        /*SETTERS*/
        ,setAttributeName: function(attributeName){
            this.attributeName = attributeName;
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
        ,check: function(response, tester) {
            if (this.attributeName !== null){
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
        }
				
    });
    return ret;
});
