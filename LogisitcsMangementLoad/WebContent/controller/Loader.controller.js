sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "../model/formatter"
], function (Controller, formatter) {
   "use strict";
   return Controller.extend("logisticsmanagementsystem.controller.Loader", {
	   formatter: formatter,
	   onInit : function(){
		   
	   },
	   
      onPlanSelects : function (oEvent) {
         // show a native JavaScript alert
    	  
    	   //for plan
    	   var selectedPlan = this.getView().byId("invoiceList").getSelectedItem().getBindingContext("plan").getObject();    	   
    	   var planModel = new sap.ui.model.json.JSONModel(selectedPlan);
    	   this.getView().setModel(planModel, "selectedPlan");
    	   
    	   
    	   
    	   //for materials list
    	   var ItemArray = selectedPlan.PlanToItems.results;
    	   var oItems = new sap.ui.model.json.JSONModel(ItemArray);
    	   this.getView().setModel(oItems, "LPConfitems");
    	   

      }
   });
});