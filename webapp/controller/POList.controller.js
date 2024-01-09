sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("MyApp.controller.POList", {
        gotoDetail: function(oEvent){
            const oSource = oEvent.getSource();
            const sPath = oSource.getBindingContext().getPath();
            const lineClicked = sPath.split("/")[2];
            const router = this.getOwnerComponent().getRouter();
            router.navTo("Detail",{
                "line" : lineClicked,
            });

        }

        
    });
});