define(["doh/main", "require"], function(doh, require){
    if(doh.isBrowser){
        doh.register("prv", require.toUrl("./imageDetailTest.html"), 25000);
    }
});
