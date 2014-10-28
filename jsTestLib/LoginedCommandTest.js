define([
    "dojo/_base/declare",
    "dojo/_base/xhr",
    "test/CommandTest",
    "doh/runner"
], function(declare, xhr, CommandTest, doh){
    var sectok;
    var ret = declare("test.LoginedCommandTest", [CommandTest], {
				/**
        * Indica la url on loginar-se.
        */ 
        _urlToLogin: "/dokuwiki_30/lib/plugins/ajaxcommand/ajax.php?call=login"
        /**
        * Contindrà els paràmetres a usar per a loginar-se.
        */ 
        ,_parametersToLogin: {"do":"login", "u":"admin", "p":"admin"}

        /*GETTERS*/
        ,getUrlToLogin: function() {
               return this._urlToLogin
        }
        ,getParametersToLogin: function() {
               return this._parametersToLogin;
        }
        /*SETTERS*/
        ,setUrlToLogin: function(url) {
               this._urlToLogin = url;
        }
        ,setParametersToLogin: function(keyArgs) {
               this._parametersToLogin = keyArgs;
        }
        /**
         * @Override
         * Construeix una funció vàlida per pasarli a doh que
         * comprova si esta loguinat i si no, tracta de loguinar-se.
         * Un cop loguinat envia la comanda a testejar.
         */ 
        ,getTestFunction: function(){
           var self = this;
           return function(tester){
               var d = new doh.Deferred();
               if (!sectok){//TRY LOG IN
                   xhr.get({
                       url: self._urlToLogin
                      ,content: self._parametersToLogin
                      ,handleAs:"json"
                      ,load: function(response) {
                           var loginResult = response[0].value.loginResult
                           if (loginResult){
                                sectok = response[1].value;
                                self._parameters["sectok"]= sectok;
                                self._sendCommand(tester, d);
                            }
                            return response;
                      }
                      ,error: function(error){
                          tester.t(false, "User is logoff");
                          return error;
                      }
                   });
               }else{
                   self._parameters["sectok"]= sectok;
                   this._sendCommand(tester, d);
               }
               return d;
           };
        }
    });
    return ret;
});
