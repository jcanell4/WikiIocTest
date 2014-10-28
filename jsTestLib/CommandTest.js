define([
    "dojo/_base/declare",
    "dojo/_base/xhr",
    "doh/runner",
    "test/Test",
    "dojo/_base/lang"
], function(declare, xhr, doh, Test, lang){
    var ret = declare("test.CommandTest", [Test], {
         /**
          * És la url del ajaxcommand a testejar
          */
         _url: null
         
         /**
          * Mètode usat per enviar la petició. Per defecte val get.
          */
        ,_method: "get"
        
        /**
         * HashArray dels parametres de configuració de la comanda ajax
         */ 
        ,_parameters: null
        
        /**
         * Atribut opcional. Pot ser doncs undefined. 
         * En cas de prendre un valor contindrà un objecte de tipus TestResponseHandler 
         * que actua com una extensió de la classe CommandTets, com un plugin que li afegeix funcionalitat extra. 
         * Aquesta opció és incompatible amb l'assignació d'una funció tets a través de setTestFunction. 
         * La selecció d'una d'elles invalida l'altra
         */ 
        ,_responseHandler: undefined
        
        /*CONSTRUCTOR*/
        ,constructor: function(att){ 
           
            if(att){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }
            if(this._parameters==null){
                this._parameters=new Array();
            }
        }
        
        /*GETTERS*/
        ,getUrl: function() {
					return this._url;
				}
				,getMethod: function() {
					return this._method;
				}
				,getParameters: function() {
					return this._parameters;
				}
        ,getResponseHandler: function() {
					return this._responseHandler;
				}
				
				/*SETTERS*/
				,setUrl: function(url) {
					this._url = url;
				}
				,setMethod: function(method) {
					this._method = method;
				}
				,setParameters: function(parameters) {
					this._parameters = parameters;
				}
				
				/**
				 *  Assigna el valor de l'atribut _responseHandler.
				 *  També substitueix el valor de _testFunction per l'execució del mètode runTest de l'objecte _responseHandler.
				 */ 
        ,setResponseHandler: function(rName, responseHandler) {
					this._responseHandler = responseHandler;
					this._testFunction = responseHandler.getRunTest();
					this.runTest = this.getTestFunction();
					this.name = rName;
				}
				
				/**
				 * Posa l'atribut de  _responseHandler a undefined i fa una crida a setTestFunction del pare.
				 */ 
				,setTestFunction: function(fName, f) {
					this._responseHandler = undefined;
					this.inherited(arguments);//super()
					this.runTest = this.getTestFunction();
				}
				
        
        ,addParameter: function(key, value){
            this._parameters[key] = value;
        }
        /**
         * @Override
         * Construeix una funció vàlida per pasar-li a doh i que la pugui testejar.
         */ 
        ,getTestFunction: function (){
            var self = this;
            return function(tester){
                    var d = new doh.Deferred();
                    self._sendCommand(tester, d);
                    return d;
                };
        }
        /**
         * Construeix la comanda a testejar per doh amb la funció definida per l'usuari(_testFunction)
         */
        ,_sendCommand: function(tester, deferred){
            var self = this;
            var td = xhr.get({
                url: self._url,
                method: self._method,
                handleAs:"json",
                content: self._parameters
            });
            td.then(deferred.getTestCallback(function(response){
                    self._testFunction(response, tester);
            }),deferred.getTestCallback(function(error){
                    self._testFunction(error, tester);
            }));

        }

    });
    return ret;
});
