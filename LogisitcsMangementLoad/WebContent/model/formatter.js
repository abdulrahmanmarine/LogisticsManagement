sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "RELE":
					return "Success";
//					return resourceBundle.getText("invoiceStatusA");
				case "RELES":
					return "Warning";

//					return resourceBundle.getText("invoiceStatusB");

				default:
					return sStatus;
			}
		}
	};
});