define([
    "dojo/_base/declare"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/HasAttributeChecker"
], function(declare, ObjectChecker, AttRegexChecker, HasAttributeChecker){
    var ret = declare("test.MetaInfoTypeChecker", [ObjectChecker], {
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(){ 
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/metainfo/i}),
                new HasAttributeChecker({
                    attributeName:"value"
                })
            ];
        }
    });
    return ret;
});
