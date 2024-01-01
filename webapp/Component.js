sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent,ResourceModel) {
    "use strict";
    return UIComponent.extend("MyApp.Component", {
        metadata : {
            rootView: {
                viewName: "MyApp.view.MyView",
                type: "XML"
            },
        },
        init: function(){
            UIComponent.prototype.init.apply(this,arguments);
            const resourcemodel = new ResourceModel({
                bundleName: "MyApp.i18n.i18n"
        }) ;
            this.setModel(resourcemodel,"i18n");
        }
    });
});
