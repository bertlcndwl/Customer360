sap.ui.define([
	"com/delaware/BDW/trac2019/controller/BaseController",
	"sap/ui/model/Filter"
], function (Controller, Filter) {
	"use strict";

	return Controller.extend("com.delaware.BDW.trac2019.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.BDW.trac2019.view.Detail
		 */
		onInit: function () {
			this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);
		},
		
		_onRoutingMatched: function(oEvent) {
			var that = this;
			var aFilters = [new Filter("customer", sap.ui.model.FilterOperator.EQ, oEvent.getParameter("arguments").customerID)];
			
			this.getModel("orders").read("/ZV_ZVT19_ORERS_JL", {
				filters: aFilters,
				success: function (oData) {
					that.getModel("ordersModel").setData(oData.results);
				},
				error: function (oData) {
					that.showError(oError);
				}
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.BDW.trac2019.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.BDW.trac2019.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.BDW.trac2019.view.Detail
		 */
		//	onExit: function() 
	});

});