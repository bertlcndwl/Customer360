sap.ui.define([
	"com/delaware/BDW/trac2019/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("com.delaware.BDW.trac2019.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.BDW.trac2019.view.Master
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.BDW.trac2019.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.BDW.trac2019.view.Master
		 */
		onAfterRendering: function() {
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.BDW.trac2019.view.Master
		 */
		//	onExit: function() {
		//
		//	}
		
		onCustomerPress: function(oEvent) {
			var oSelectedCustomer = oEvent.getSource().getBindingContext().getObject();
			this.getModel("selectedCustomerModel").setData(oSelectedCustomer);
			this.getRouter().navTo("Detail", {
				
				customerID: oSelectedCustomer.CustomerNumber
			});
			this.getView().getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
		}
	});

});