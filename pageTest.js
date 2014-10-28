define(["dojo/has", "doh/main", "require"], function(has, doh, require){
	if(doh.isBrowser){
		doh.register("pageTest", require.toUrl("./pageTest.html"), 15000);
	}
});
