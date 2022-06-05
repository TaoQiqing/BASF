/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"basf/basf/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
