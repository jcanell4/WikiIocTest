define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, lang, ObjectChecker, AttRegexChecker, 
                    AttObjectChecker){
    var ret = declare("test.JsInfoCmdChecker", [ObjectChecker], {
        
        "-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(){ 
            this.checkers = [
                new AttRegexChecker({
                    attributeName:"type",
                    regex:/command/i}),
                new AttObjectChecker({
                    attributeName:"value",
                    checker: new ObjectChecker({
                        checkers:[
                            new AttRegexChecker({
                                attributeName:"type",
                                regex:/jsinfo/i})
                        ]
                    })
                })
            ];
        }
    });
    return ret;
});
