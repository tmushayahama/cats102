(function ()
{
 'use strict';

 angular
         .module('app.components')
         .controller('ComponentSettingsDialogController', ComponentSettingsDialogController);

 /** @ngInject */
 function ComponentSettingsDialogController(category, $scope, $document, $mdDialog, fuseTheming, fuseGenerator, msUtils, ComponentService)
 {
  var vm = this;

  // Data
  vm.colors = ComponentService.colors;
  vm.selectedPart = {};
  vm.category = category;
  vm.tabColorIndex = {
   options: [{
     index: 0,
    }, {
     index: 1}
   ],
   selected: 0,
  };
  vm.tabColorIndex.title = "Select";




  // Methods
  vm.closeDialog = closeDialog;
  vm.selectType = selectType;
  vm.backSelectType = backSelectType;
  vm.selectColor = selectColor;


  init();

  //////////



  /**
   * Close Dialog
   */
  function closeDialog()
  {
   $mdDialog.hide();
  }

  function selectType(colors) {
   vm.tabColorIndex.selected = 1;
   vm.selectedPart = colors;
   vm.tabColorIndex.title = vm.selectedPart.name + ' Color';
  }

  function selectColor(color) {
   vm.selectedPart.selected = color;
  }



  function backSelectType() {
   vm.tabColorIndex.selected = 0;
   //vm.colors[type].selected = color;
  }


  function init() {
  }

 }
})();