define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
   ,"test/AttBooleanChecker"
], function(declare, lang, ObjectChecker, AttRegexChecker, 
                    AttObjectChecker, AttBooleanChecker){
    var ret = declare("test.ProcessFunctionCmdChecker", [ObjectChecker], {
         amd:null
        ,processName:null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att, amd){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.processName = att;
                }
                if(amd){
                    this.amd = amd;
                }
            }
            var self=this;
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
                                regex:/process_function/i}),
                            new AttBooleanChecker({
                                attributeName:"amd",
                                value:self.amd,
                                __optional__:true
                            }),
                            new AttRegexChecker({
                                attributeName:"processName",
                                regex:new RegExp(self.processName),
                                __optional__:true
                            })
                        ]
                    })
                })
            ];
        }
    });
    return ret;
});
