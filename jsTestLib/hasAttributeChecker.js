define([
    "dojo/_base/declare",
    "dojo/_base/lang"
], function(declare, lang){
    var ret = declare("test.hasAttributeChecker", [], {
        ,attributeName: null
        
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
        /*SETTERS*/
        ,setAttributeName: function(attributeName){
            this.attributeName = attributeName;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName existeix.
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            if (this.attributeName !== null) {
                tester.t(this.response.hasOwnProperty(this.attributeName));
            }
        }
				
    });
    return ret;
});
