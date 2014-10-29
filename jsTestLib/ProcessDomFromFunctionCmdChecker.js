define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
   ,"test/AttBooleanChecker"
], function(declare, lang, ObjectChecker, AttRegexChecker, 
                    AttObjectChecker, AttBooleanChecker){
    var ret = declare("test.ProcessDomFromFunctionCmdChecker", [ObjectChecker], {
         amd:null
        ,processName:null
        ,id:null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att, id, amd){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.processName = att;
                }
                if(amd){
                    this.amd = amd;
                }
                if(id){
                    this.id= id;
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
                                regex:/process_dom_from_function/i}),
                            new AttBooleanChecker({
                                attributeName:"amd",
                                value:self.amd,
                                __optional__:true
                            }),
                            new AttRegexChecker({
                                attributeName:"id",
                                regex:new RegExp(self.id),
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
