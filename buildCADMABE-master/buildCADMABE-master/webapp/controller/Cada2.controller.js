sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageBox} MessageBox
     */
    function (Controller, MessageBox) {
        "use strict";
        var oTable = new sap.ui.table.Table({
            title: "Table Example",
            visibleRowCount: 3
        });
        
        return Controller.extend("goscm.documentocad.controller.Cada2", {
            onInit: function () {

            },
            toNext: function(){
                var date = this.getView().byId("dtpic1").getValue();
                var numserie = this.getView().byId("input_Serie").getValue();
                if(date !== '' && numserie!== ''){
                    MessageBox.success("Todo en orden");
                    var oRouting = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouting.navTo("ScanView", null, true);
                }else{
                    MessageBox.error("Campos vacios");
                }
            }
        