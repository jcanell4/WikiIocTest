define([
    "dojo/_base/declare"
    ,"dojo/_base/lang"
], function(declare, lang){
    var ret = declare("test.AttObjectChecker", [], {
         attributeName: null
        ,checker:null
        
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
        ,getChecker: function(){
            return this.checker;
        }
        
        /*SETTERS*/
        ,setAttributeName: function(attributeName){
            this.attributeName = attributeName;
        }
        ,setChecker: function(checker){
            this.checker = checker;
        }
        
        /**
         * Verifica si l'atribut de response anomenat com attributeName coincideix amb el patró regular regex.
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            if (this.attributeName !== null){
                this.checker.check(response[this.attributeName], tester);
            }
        }
				
    });
    return ret;
});
