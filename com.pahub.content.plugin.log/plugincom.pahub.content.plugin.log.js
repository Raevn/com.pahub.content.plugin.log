
function load_plugin_log(data, folder) {
	model["log"] = {
		show_debug_log: ko.observable(false),
		show_verbose_log: ko.observable(false)
	}

	pahub.api.section.addSection("section-log", "", path.join(folder, "log.png"), "header", 10);
	pahub.api.tab.addTab("section-log", "log", "", "", 10);
	
	pahub.api.resource.loadResource(path.join(folder, "log.html"), "get", {name: "HTML: log", mode: "async", success: function(resource) {
		pahub.api.tab.setTabContent("section-log", "log", resource.data);
	}});
	
	//pahub.api.setting.addSettingGroup("log", "Log Settings [Debug]");
	pahub.api.setting.addSetting("log", "plugin.log.show_verbose_log", model.log.show_verbose_log, "boolean", null, false, "show_verbose_log", null, {});
	pahub.api.setting.addSetting("log", "plugin.log.show_debug_log", model.log.show_debug_log, "boolean", null, false, "show_debug_log", null, {});
}

function unload_plugin_log(data) {
	pahub.api.tab.removeTab("section-log", "log");
	pahub.api.section.removeSection("section-log");
	
	delete model["log"];
}