define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "doh/runner"
], function(declare, lang, doh){
    var ret = declare("test.TestResponseHandler", [], {
        checker: null
        
        /*CONSTRUCTOR*/
        ,constructor: function(att){ 
            if(att){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
        }
        
        /*GETTERS*/
        ,getChecker: function(){
            return this.checker;
        }
        /*SETTERS*/
        ,setChecker: function(checker){
            this.checker = checker;
        }
        
	,getRunTest: function(){
		var self=this;
         	return function(response, tester){
			self.check(response, tester);
		};
        }
        
        /**
         * Avalua el mètode check del checker amb la resposta que rep
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            this.checker.check(response, tester);
        }
				
    });
    return ret;
});
