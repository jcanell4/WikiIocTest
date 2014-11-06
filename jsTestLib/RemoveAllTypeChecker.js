define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"   
], function(declare, lang, ObjectChecker, AttRegexChecker){
    var ret = declare("test.RemoveAllTypeChecker", [ObjectChecker], {
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(){ 
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/removeall/i})
            ];
        }				
    });
    return ret;
});
