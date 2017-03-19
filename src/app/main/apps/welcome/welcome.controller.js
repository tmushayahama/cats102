(function ()
{
 'use strict';

 angular
         .module('app.welcome')
         .controller('WelcomeController', WelcomeController);

 /** @ngInject */
 function WelcomeController(WelcomeService, DialogComponentService, $scope, $rootScope)
 {
  var vm = this;

  // Data
  //vm.dashboardData = DashboardData;
  vm.components = [];

  vm.myInterval = 5000;
  vm.noWrapSlides = false;
  vm.active = 0;

  //Methods
  //vm.openComponentSettings = ComponentDialogService.openComponentSettingsDialog;

  var pointerEventToXY = function (e) {
   var out = {x: 0, y: 0};

   if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    out.x = touch.pageX;
    out.y = touch.pageY;
   } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
    out.x = e.pageX;
    out.y = e.pageY;
   }
   return out;
  };

  $(document).bind('mousemove touchmove', function (ev) {
   var el = document.getElementById('ct-laser-pointer');
   var cat = document.getElementById('ct-cat');
   var offset = $('#ct-laser-pointer').offset();
   var x = pointerEventToXY(ev).x;
   var y = pointerEventToXY(ev).y;

   el.style.transform += 'translateX(' + x + 'px)';
   el.style.transform = 'translateY(' + y + 'px)';

   cat.style.transform += 'translateX(' + x + 'px)';
   cat.style.transform = 'translateY(' + y + 'px)';
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