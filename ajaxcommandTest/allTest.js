define(["dojo/has", "doh/main", "require"], function(has, doh, require){
	if(doh.isBrowser){
		doh.register("loginTest", require.toUrl("./loginTest.html"), 15000);
		doh.register("pageTest", require.toUrl("./pageTest.html"), 15000);
                doh.register("commandreportTest", require.toUrl("./commandreportTest.html"), 15000);
	}
});
