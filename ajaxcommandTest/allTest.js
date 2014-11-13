define(["dojo/has", "doh/main", "require"], function(has, doh, require){
    if(doh.isBrowser){
        doh.register("commandreportTest", require.toUrl("./commandreportTest.html"), 25000);
        doh.register("auth_commandreportTest", require.toUrl("./auth_commandreportTest.html"), 25000);
        doh.register("loginTest", require.toUrl("./loginTest.html"), 25000);
        doh.register("pageTest", require.toUrl("./pageTest.html"), 25000);
    }
});
