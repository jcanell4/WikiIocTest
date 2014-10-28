define(["dojo/has", "doh/main", "require"], function(has, doh, require){
	if(doh.isBrowser){
		//doh.register("ioc.prv_doh.html", require.toUrl("./prv_doh2.html"), 15000);
		doh.register("ioc.prv_doh_TestWikiIoc.html", require.toUrl("./prv_doh_TestWikiIoc.html"), 15000);
	}
});
