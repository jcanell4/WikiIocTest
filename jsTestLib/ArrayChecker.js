define([
    "dojo/_base/declare"
    ,"dojo/_base/lang"
], function(declare, lang, doh){
    var ret = declare("test.ArrayChecker", [], {
         size: null
        ,minSize: null
        ,maxSize: null
        
        ,checkers: null
        
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
        ,getSize: function(){
            return this.size;
        }
        ,getMinSize: function(){
            return this.minSize;
        }
        ,getMaxSize: function(){
            return this.maxSize;
        }
        ,getCheckers: function() {
            return this.checkers;
        }
        
        /*SETTERS*/
        ,setSize: function(size){
            this.size = size;
        }
        ,setMinSize: function(minSize){
            this.minSize = minSize;
        }
        ,setMaxSize: function(maxSize){
            this.maxSize = maxSize;
        }
        ,setCheckers: function(checkers) {
            this.checkers = checkers;
        }
        
        /**
         * Avalua el mètode check del checker amb la resposta que rep
         * @param HashArray? response Resposta per validar.
         */ 
        ,check: function(response, tester) {
            console.log(response);
            if (this.size !== null) {
                tester.is(this.size, response.length);
            }
            if (this.minSize !== null & this.maxSize !== null) {
                tester.t(this.minSize <= response.length);
                tester.t(this.maxSize >= response.length);
            }
            
            /*Verificació de cada un dels ítems de l'array response 
             * fent servir cíclicament els checkers de l'atribut checkers. 
             * Si hi ha més ítems a response que a  checkers, cada ítem usarà un checker diferent fins que s'acabin. 
             * A partir d'allà es repetirà la invocació dels mètodes check dels checkers  
             * repetint l'ordre des del començament i fins que s'acabin els ítems de response.*/
            if (this.checkers.length>0) {
                var lon = this.checkers.length;
                for (i = 0; i < response.length; i++) {
                    console.log(response[i]);
                    console.log(this.checkers[i%lon]);
                    this.checkers[i%lon].check(response[i], tester);
                }
            }
        }
				
    });
    return ret;
});
