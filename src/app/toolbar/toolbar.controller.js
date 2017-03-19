(function ()
{
 'use strict';

 angular
         .module('app.toolbar')
         .controller('ToolbarController', ToolbarController);

 /** @ngInject */
 function ToolbarController($rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, $auth, localStorageService, msNavigationService, DialogComponentService)
 {
  var vm = this;

  // Data
  $rootScope.global = {
   search: ''
  };

  vm.bodyEl = angular.element('body');

  // Methods
  vm.openSettingsDialog = DialogComponentService.openSettingsDialog;
  vm.toggleSidenav = toggleSidenav;
  vm.logout = logout;
  vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
  vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
  //////////

  // init();

  /**
   * Initialize
   */
  function init()
  { }


  /**
   * Toggle sidenav
   *
   * @param sidenavId
   */
  function toggleSidenav(sidenavId)
  {
   $mdSidenav(sidenavId).toggle();
  }



  /**
   * Logout Function
   */
  function logout()
  {
   $auth.logout();
   localStorageService.remove('user');
   $rootScope.authenticated = false;
   $state.go('app.welcome');
  }



  /**
   * Toggle horizontal mobile menu
   */
  function toggleHorizontalMobileMenu()
  {
   vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
  }

  /**
   * Toggle msNavigation folded
   */
  function toggleMsNavigationFolded()
  {
   msNavigationService.toggleFolded();
  }
 }

})();