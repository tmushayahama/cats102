(function ()
{
 'use strict';

 angular
         .module('app.toolbar',
                 ['app.components'])
         .config(config);

 /** @ngInject */
 function config($translatePartialLoaderProvider)
 {
  $translatePartialLoaderProvider.addPart('src/app/toolbar');
 }
})();
