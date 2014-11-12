define([
    "dojo/_base/declare"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, ObjectChecker, AttRegexChecker, AttObjectChecker){
    var ret = declare("test.TitleTypeChecker", [ObjectChecker], {
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(params){
            var paramCheckers = new Array();
            for(var key in params){
                paramCheckers.push(
                    new AttRegexChecker({
                        attributeName:key,
                        regex:new RegExp(params[key])
                    })
                )
            }
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/info/i}),
                new AttObjectChecker({
                    attributeName:"value",
                    checker: new AttObjectChecker({
                        attributeName:"params",
                        checker: new ObjectChecker({
                            checkers:paramCheckers
                        })                    
                    })
                })
            ];
        }
    });
    return ret;
});
