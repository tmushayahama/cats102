(function ()
{
 'use strict';

 angular
         .module('app.welcome')
         .controller('WelcomeController', WelcomeController);

 /** @ngInject */
 function WelcomeController(WelcomeService, $scope, $rootScope)
 {
  var vm = this;

  // Data
  //vm.dashboardData = DashboardData;
  vm.components = [];

  vm.myInterval = 5000;
  vm.noWrapSlides = false;
  vm.active = 0;

  $(document).bind('mousemove', function (ev) {
   var el = document.getElementById('ct-laser-pointer');
   var offset = $('#ct-laser-pointer').offset();
   el.style.transform = 'translateY(' + (ev.clientY - offset.top) + 'px)';
   el.style.transform += 'translateX(' + (ev.clientX - offset.left) + 'px)';
  });

  init();

  // Returns a random number between min (inclusive) and max (exclusive)
  function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
  }

  function shuffleSampleGroups() {
   var result = [];
   var group = [];
   var count = 0;
   var n = getRandom(1, 4);

   angular.forEach(vm.components.samples, function (sample) {
    group.push(sample.component);
    count++;
    if (count === n) {
     result.push(group);
     group = [];
     n = getRandom(1, 5);
     count = 0;
    }
   });
   return result;
  }

  function init() {
   WelcomeService.getComponents(5).then(function (data) {
    vm.components = data;
    // vm.displayComponents = shuffleSampleGroups();
    angular.forEach(vm.components.recommendations, function (recommendation) {
     angular.forEach(recommendation.recommendationComponents, function (recommendationComponent) {
      if (recommendationComponent.component.component_picture_url || recommendationComponent.component.component_picture_url === 'default.png') {
       recommendationComponent.component.component_placeholder_style = {background: $rootScope.generateBackgroundPattern()};
      }
     });
    });
   });
  }
 }
})();