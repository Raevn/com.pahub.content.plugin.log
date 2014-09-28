
function load_plugin_log(data, folder) {
	model["log"] = {
		showDebugLog: ko.observable(false),
		showVerboseLog: ko.observable(false)
	}

	pahub.api.section.addSection("section-log", "LOG", path.join(folder, "log.png"), "header", 10);
	pahub.api.tab.addTab("section-log", "log", "", "", 10);
	
	pahub.api.resource.loadResource(path.join(folder, "log.html"), "get", {name: "HTML: log", mode: "async", success: function(resource) {
		pahub.api.tab.setTabContent("section-log", "log", resource.data);
	}});
}

function unload_plugin_log(data) {
	pahub.api.tab.removeTab("section-log", "log");
	pahub.api.section.removeSection("section-log");
	
	delete model["log"];
}