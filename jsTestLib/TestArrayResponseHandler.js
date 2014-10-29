define([
    "dojo/_base/declare",
    "test/TestResponseHandler",
    "test/ArrayChecker"
], function(declare, TestResponseHandler, ArrayChecker){
    var ret = declare("test.TestArrayResponseHandler", [TestResponseHandler], {
        checker: null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        /*CONSTRUCTOR*/
        ,constructor: function(){ 
            this.checker=new ArrayChecker()
        }
        ,addChecker:function(checker){
            this.checker.addChecker(checker);
        }
    });
    return ret;
});
