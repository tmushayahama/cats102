(function ()
{
 'use strict';
 angular
         .module('fuse')
         // .constant('_', window._)
         .constant('category',
                 {
                  "Speed": 1,
                  "Stamina": 2,
                  "Interested": 3,
                  "Reaction": 4,
                  "colors": {
                   "ear": [
                    {
                     "name": "chocolate",
                     "value": "#cea18b"
                    },
                    {
                     "name": "romantic",
                     "value": "#F00",
                    },
                    {
                     "name": "foresty",
                     "value": "#0F0",
                    }
                   ],
                   "tail": [
                    {
                     "name": "chocolate",
                     "value": "#cea18b"
                    },
                    {
                     "name": "romantic",
                     "value": "#F00",
                    },
                    {
                     "name": "foresty",
                     "value": "#0F0",
                    }
                   ],
                   "leg": [
                    {
                     "name": "romantic",
                     "value": "#F00",
                    },
                    {
                     "name": "foresty",
                     "value": "#0F0",
                    }
                   ],
                   "foot": [
                    {
                     "name": "bluish",
                     "value": "#00F",
                    },
                    {
                     "name": "romantic",
                     "value": "#F00",
                    },
                    {
                     "name": "foresty",
                     "value": "#0F0",
                    }
                   ]
                  }
                 });
})();
