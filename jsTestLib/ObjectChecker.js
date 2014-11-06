define([
    "dojo/_base/declare",
    "dojo/_base/lang"
], function(declare, lang){
    var ret = declare("test.ObjectChecker", [], {
        checkers: null
        
        /*CONSTRUCTOR*/
        ,constructor: function(att){ 
            if(att){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
            if (this.checkers==null){
                this.checkers = new Array();
            }
        }
        
        /*GETTERS*/
        ,getCheckers: function() {
            return this.checkers;
        }
        /*SETTERS*/
        ,setCheckers: function(checkers) {
            this.checkers = checkers;
        }
        /**
         * Verifica cada checker amb les dades de response
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            if (this.checkers !== null){
               for(var i=0; i < this.checkers.length; i++){
                   this.checkers[i].check(response, tester);
               } 
            }
            
        }
				
    });
    return ret;
});
