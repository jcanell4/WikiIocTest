define(["doh/main", "require"], function(doh, require){
    if(doh.isBrowser){
        doh.register("commandreportTest", require.toUrl("./commandreportTest.html"), 25000);
        doh.register("auth_commandreportTest", require.toUrl("./auth_commandreportTest.html"), 25000);
        doh.register("loginTest", require.toUrl("./loginTest.html"), 25000);
        doh.register("pageTest", require.toUrl("./pageTest.html"), 25000);
        doh.register("new_pageTest", require.toUrl("./new_pageTest.html"), 25000);
        doh.register("saveTest", require.toUrl("./saveTest.html"), 25000);
        
        doh.register("editTest", require.toUrl("./editTest.html"), 25000);
        doh.register("cancelTest", require.toUrl("./cancelTest.html"), 25000);
    }
});
