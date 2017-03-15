(function ()
{
 'use strict';

 angular
         .module('app.toolbar',
                 [])
         .config(config);

 /** @ngInject */
 function config($translatePartialLoaderProvider)
 {
  $translatePartialLoaderProvider.addPart('src/app/toolbar');
 }
})();
