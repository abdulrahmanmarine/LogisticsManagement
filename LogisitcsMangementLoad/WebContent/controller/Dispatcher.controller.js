sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "../model/formatter",
   "sap/ui/core/routing/History",
	"sap/ui/core/Fragment"
], function (Controller, formatter, History, Fragment) {
   "use strict";
   return Controller.extend("logisticsmanagementsystem.controller.Dispatcher", {
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
	     	   

	       },
	       
	      onNavButton: function(){
	    	  
	    	  var oHistory = History.getInstance();
	    	  
	    	  var sPreviousHash = oHistory.getPreviousHash();
	    	  
	    	  if(sPreviousHash !== undefined){
	    		  
	    		  window.history.go(-1);
	    	  }else{
		           var oRouter = this.getOwnerComponent().getRouter();
		           oRouter.navTo("Login")
	    	  }
	      },
	      
			onOpenAssignment : function (oEvent) {

				this._oDialogItem = new sap.ui.xmlfragment("assignmentFrag", "logisticsmanagementsystem.fragment.Assignment");
				this.getView().addDependent(this._oDialogItem);
				this._oDialogItem.open();

			}

   });
});