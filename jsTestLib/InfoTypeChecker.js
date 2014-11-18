define([
    "dojo/_base/declare"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
   ,"test/HasAttributeChecker"
], function(declare, ObjectChecker, AttRegexChecker, AttObjectChecker, 
            HasAttributeChecker){
    var ret = declare("test.InfoTypeChecker", [ObjectChecker], {
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(params){
            var valueChecker;
            var paramCheckers = new Array();
            if(params){
                for(var key in params){
                    paramCheckers.push(
                        new AttRegexChecker({
                            attributeName:key,
                            regex:new RegExp(params[key])
                        })
                    )
                }
            }
            if(paramCheckers.length==0){
                valueChecker = new HasAttributeChecker({
                    attributeName:"value"
                });
            }else{
                valueChecker=new AttObjectChecker({
                    attributeName:"value",
                    checker: new AttObjectChecker({
                        attributeName:"params",
                        checker: new ObjectChecker({
                            checkers:paramCheckers
                        })                    
                    })
                });
            }
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/info/i}),
                valueChecker
            ];
        }
    });
    return ret;
});