define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
   ,"test/AttBooleanChecker"
   ,"test/AttNumChecker"
   ,"test/HasAttributeChecker"
], function(declare, lang, ObjectChecker, AttRegexChecker,AttObjectChecker, 
                        AttBooleanChecker, AttNumChecker, HasAttributeChecker){
    var ret = declare("test.ProcessFunctionCmdChecker", [ObjectChecker], {
         amd:null
        ,processName:null
        ,params:null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att, amd, params){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.processName = att;
                }
                if(amd){
                    this.amd = amd;
                }
                this.params=[];
                if(params){
                    for (var key in params) {
                        if(typeof params[key] === "boolean"){
                            this.params.push(new AttBooleanChecker({
                                attributeName:key,
                                value:params[key]
                            }));
                        }else if(isNaN(params[key])){
                            this.params.push(new AttNumChecker({
                                attributeName:key,
                                value:params[key]
                            }));
                        }else if(typeof params[key] === "string"){
                            this.params.push(new AttRegexChecker({
                                attributeName:key,
                                regex:new RegExp(params[key])
                            }));
                        }else{
                            this.params.push(new HasAttributeChecker({
                                attributeName:key
                            }));
                        }
                    }
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
                            }),
                            new AttObjectChecker({
                                attributeName:"params",
                                checkers: new ObjectChecker(self.params),
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
