sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"
],

function (Controller, ResourceModel) {
    "use strict";

    return Controller.extend("com.sfc.localization.controller.App", {
        onInit: function () {
            var i18nModel = new ResourceModel({
                bundleName: "com.sfc.localization.i18n.i18n",
                async: true
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        
        onButtonAction : function () {
            var oView = this.getView();
            var userInputValue = this.byId("inputUserName").getValue();
            oView.getModel("i18n").getResourceBundle().then(function (oResourceBundle) {
                var sMsg = oResourceBundle.getText("localizatoinTitle", [userInputValue]);
                oView.byId("textID").setText(sMsg);
            });
        }
    });
});
