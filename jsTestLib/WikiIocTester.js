define([
    "dojo/_base/declare",
    "doh/runner",
    "dojo/_base/lang",
    "dojo/json",
    "test/Test"
], function(declare, doh, lang, json, Test){
    var ret = declare("test.TestWikiIoc", [], {
				/**
				 * Conté la funcionalitat de doh/runner.
				 */ 
         runner: doh
         /**
          * Array que contindrà tots els tests a enregsitrar i executar.
          */ 
        ,_tests: null
        
        /*CONSTRUCTOR*/
        ,constructor: function(att){
						if(att){//Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
            if(this._tests==null){
                this._tests=new Array();
            }
        }
         /**
          * Enregistra tests per testejar amb doh.
          * @param String *param1* Nom del test
          * @param (Function | CommandTest | Array | Array) *param2* Funció/ns o test/s a enregistrar.
          */
         ,register: function(param1, param2){
							if (param2 === undefined) {
								this._register(param1);
							}else {
								if (lang.isArray(param2)){//ARRAYS
									if (lang.isFunction(param2[0])) {
										this._registerArrayFunction(param1, param2);
									}else {
										this._registerArrayTest(param1, param2);
									}
								}else {//No ARRAYS
									if (lang.isFunction(param2)){
										this._registerFunction(param1, param2);
									}else {
										this._registerTest(param1, param2);
									}
								}
							}
         }
        ,run: function(){
            this.runner.run();
        }
        
        /**
          * Enregistre l'array de l'atribut tests com objectes de test a executar.
          * @param String name Nom del grup de test.
          */
        ,_register: function(name){
            this.runner.register(name, this._tests);
            this._tests = new Array();//new empty group function Test.
         }
         /**
          * Enregistra la funció que rep per paràmetre.
          * @param String name Nom del test.
          * @param Function func Funció per testejar amb doh.
          */ 
         ,_registerFunction: function(testName, func) {
						this.runner.register(testName, [func]);
				 }
				 /**
				  * Enregistra l'objecte Test o derivat que rep per paràmetre.
				  * @param String name Nom del test.
				  * @param Test test Objecte Test o derivat per enregistrar.
				  */ 
				 ,_registerTest: function(testName, test) {
						this.runner.register(testName, [test]);
				 }
				 /**
				  * Enregistra les funcions que es reben per paràmetre.
				  * @param String name Nom del test.
				  * @param Array arrayFunctionTest Conjunt de funcions per enregistrar.
				  */ 
				 ,_registerArrayFunction: function(testName, arrayFunctionTest) {
						this.runner.register(testName, arrayFunctionTest);
				 }
				 /**
				  * Enregistra els objectes Test o derivats que es reben per paràmetre.
				  * @param String name Nom del test.
				  * @param Array arrayTest Conjunt d'objectes Test per enregistrar.
				  */ 
				 ,_registerArrayTest: function(testName, arrayTest) {
						this.runner.register(testName, arrayTest);
				 }

        /**
        * Add test to Tester
        * @param (CommandTest | Array) *param1* CommandTest object | Array of configuration params
        * [@param] function *param2* Optional function test. Used with Array of configuration params
        */ 
        ,addTest: function(param1, param2){
						if (param2 !== undefined) {
								this._addTestFunction(param1, param2);
						}else {
								if (lang.isArray(param1)) {
										if (lang.isFunction(param1[0])){
											this._addArrayFunction(param1);
										}else {
											this._addArrayTest(param1);
										}
								}else{
										this._addTest(param1);
								}
						}
				}
        /**
         * Afegeix a l'atribut tests un objecte Test amb el nom i la funció dels paràmetres.
         * @param String testName Nom del test.
         * @param Function func Funció a testejar amb doh.
         */ 
        ,_addTestFunction: function(testName, func) {
						var test = new Test();
						test.setTestFunction(testName, func);
						this._tests.push(test);
				}
				/**
				 * Afegeix a l'atribut tests l'objecte Test passat per paràmetre.
				 * @param Test test Objecte test a afegir.
				 */ 
				,_addTest: function(test) {
						this._tests.push(test);
				}
				/**
				 * Afegeix a l'atribut tests cada un dels items de l'array del paràmetre.
				 * @param Array arrayFunctionTest Conjunt de funcions per afegir al parametre implicit.
				 */ 
				,_addArrayFunction: function(arrayFunctionTest) {
						this._tests = this._tests.concat(arrayFunctionTest);
				}
				/**
				 * Afegeix a l'atribut tests cada un dels items de l'array del paràmetre.
				 * @param Array arrayTest Conjunt de Test per afegir al parametre implicit.
				 */ 
				,_addArrayTest: function(arrayTest) {
						this._tests = this._tests.concat(arrayTest);
				}
                
    });
    return ret;
});
