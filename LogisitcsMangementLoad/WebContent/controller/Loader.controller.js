sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "../model/formatter",
   "sap/ui/core/routing/History"
], function (Controller, formatter, History) {
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
      }
      ,
     
      
      onAlert: function(sVal) {
    	  
    	  if(sVal== "Load"){
    		    alert("Clicked " + " with value " + sVal);
    	  }else  if(sVal== "UnLoad"){
    		    alert("Clicked " + " with value " + sVal);
    	  }else  if(sVal== "Process"){
    		    alert("Clicked " + " with value " + sVal);
    	  }else  if(sVal== "NotFound"){
    		    alert("Clicked " + " with value " + sVal);
    	  }
      
          
        }
   });
});