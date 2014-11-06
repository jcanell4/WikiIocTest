define([
    "dojo/_base/declare",
    "dojo/_base/lang"
], function(declare, lang) {
    var ret = declare("test.Test", [], {
        //Atributs especifics que accepta i interpreta el test de doh
        name: null
                /**
                 * Funció que s'executarà quan es passi el test
                 */
        , runTest: null

                /**
                 * Funció que s'executa abans de passar el test.
                 * Permet configurar coses.
                 */
        , setUp: undefined

                /**
                 * Funció que s'executa després de passar el test.
                 * Permet restablir els canvis que el test pugui haver realitzat.
                 */
        , tearDown: undefined

                /**
                 * Funció de testeig definida per l'usuari. Constituirà el nucli del test. 
                 * En objecte de tipus Test coincideixen testFunction i runTest, 
                 * però en altres classes no té perquè ser així.
                 */
        , _testFunction: null

                /*CONSTRUCTOR*/
        , constructor: function(att) {
            if (att) { //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
        }

        /*GETTERS*/
        , getName: function() {
            return this.name;
        }
        , getRunTest: function() {
            return this.runTest;
        }
        , getSetUp: function() {
            return this.setUp;
        }
        , getTearDown: function() {
            return this.tearDown;
        }

        /*SETTERS*/
        , setSetUp: function(func) {
            this.setUp = func;
        }
        , setTearDown: function(func) {
            this.tearDown = func;
        }
        /*Getter i Setter testFunction*/
        , getTestFunction: function() {
            return this._testFunction;
        }

        , setTestFunction: function(fName, f) {  //afegirem la funció amb un nom associat
            this.name = fName;
            this._testFunction = f;
            this.runTest = f;
        }


    });
    return ret;
});
