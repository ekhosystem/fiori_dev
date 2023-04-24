sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageBox} MessageBox
   */
  function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("goscm.documentocad.controller.MainView", {
      onInit: function () {},
      toNext: function () {
        var oRouting = sap.ui.core.UIComponent.getRouterFor(this);
        oRouting.navTo("RouteCadA2View", null, true);
      },
    });
  }
);
