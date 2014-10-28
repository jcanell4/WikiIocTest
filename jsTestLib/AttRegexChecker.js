define([
    "dojo/_base/declare"
    ,"dojo/_base/lang"
], function(declare, lang){
    var ret = declare("test.AttRegexChecker", [], {
         attributeName: null
        ,regex: null
        
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
        ,getRegex: function(){
            return this.regex;
        }
        
        /*SETTERS*/
        ,setAttributeName: function(attributeName){
            this.attributeName = attributeName;
        }
        ,setRegex: function(regex){
            this.regex = regex;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            if (this.attributeName !== null & this.regex !== null) {
                tester.t(response[this.attributeName].match(this.regex));
            }
        }
				
    });
    return ret;
});
