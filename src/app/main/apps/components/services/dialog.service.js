(function ()
{
 'use strict';

 angular
         .module('app.components')
         .factory('DialogComponentService', DialogComponentService);

 /** @ngInject */
 function DialogComponentService($mdDialog, $document) {
  var service = {
   openSettingsDialog: openSettingsDialog,
  };

  //////////

  // ******************************
  // Internal methods
  // ******************************

  /**
   * Open settings dialog
   *
   * @param ev
   * @param settingsId
   */
  function openSettingsDialog(ev, settingsId) {
   $mdDialog.show({
    templateUrl: 'src/app/main/apps/components/dialogs/settings/settings-dialog.html',
    controller: 'ComponentSettingsDialogController',
    controllerAs: 'vm',
    //parent: $document.find('#explorer'),
    targetEvent: ev,
    clickOutsideToClose: false,
    escapeToClose: true,
    locals: {
    }
   });
  }


  return service;
 }
})();