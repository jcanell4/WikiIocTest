define([
    "dojo/_base/declare"
   ,"dojo/_base/lang"
   ,"test/ObjectChecker"
   ,"test/AttRegexChecker"
   ,"test/AttObjectChecker"
], function(declare, lang, ObjectChecker, AttRegexChecker, 
                    AttObjectChecker){
    var ret = declare("test.RemoveAllWidgetChildrenCmdChecker", [ObjectChecker], {
         id:null
        
        ,"-chains-": {
            constructor: "manual"  //evita la crida al constructor del pare
        }
        ,constructor: function(att){ 
            if(lang.isObject(att)){ //Se li pot pasar un objecte amb els mateixos noms d'atributs per fer una "fusió"
                lang.mixin(this, att);
            }else{
                if(att){
                    this.id = att;
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
                                regex:/remove_all_widget_children/i}),
                            new AttRegexChecker({
                                attributeName:"id",
                                regex:new RegExp(self.id),
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
