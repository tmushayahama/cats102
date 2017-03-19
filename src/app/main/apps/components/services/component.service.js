(function ()
{
 'use strict';

 angular
         .module('app.components')
         .factory('ComponentService', ComponentService);

 /** @ngInject */
 function ComponentService(category, msApi, $q) {
  var service = {
   colors: {
    ear: {
     name: 'ear',
     options: category.colors.ear,
     selected: null
    },
    tail: {
     name: 'tail',
     options: category.colors.tail,
     selected: null
    },
    leg: {
     name: 'Leg',
     options: category.colors.leg,
     selected: null
    },
    foot: {
     name: 'foot',
     options: category.colors.foot,
     selected: null
    }
   }
  };


  // ******************************
  // Internal methods
  // ******************************

  function deferredHandler(data, deferred, defaultMsg) {
   var error = '';
   if (!data || typeof data !== 'object') {
    error = 'Error';
   }
   if (!error && data.result && data.result.error) {
    error = data.result.error;
   }
   if (!error && data.error) {
    error = data.error.message;
   }
   if (!error && defaultMsg) {
    error = defaultMsg;
   }
   if (error) {
    return deferred.reject(data);
   }
   return deferred.resolve(data);
  }

  /**
   * Get component data from the server
   *
   * @returns promise of the deferred response
   */
  function getComponents(listFormat) {
   // Create a new deferred object
   var deferred = $q.defer();

   msApi.request('component.components@get',
           {listFormat: listFormat},
           function (response) {
            deferredHandler(response, deferred);
           },
           function (response) {
            deferred.reject(response);
           }
   );

   return deferred.promise;
  }

  return service;

 }
})();