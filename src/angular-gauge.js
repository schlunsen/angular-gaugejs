/*global window:false, angular:false, Gauge:false*/
/**
 * angular-gaugejs version 0.1
 * License: MIT.
 * Copyright (C) 2014, Rasmus Schlünsen
 */

(function(angular) {
    'use strict';

    angular.module('gaugejs', [])
    .directive('gaugejs', [function() {
        return {
            restrict: 'AC',
            scope: {
                'animationTime': '=',
                'value': '=',
                'options': '=',
                'maxValue': '='
            },
            controller: function($scope, $element) {
                $scope.gauge = new Gauge($element[0]);
                $scope.gauge.maxValue = $scope.maxValue;

                $scope.gauge.setTextField(document.getElementById("gauge-value"));

                $scope.$watchCollection('[options, value]', function(newValues){
                    $scope.gauge.setOptions(newValues[0]);
                    if (!isNaN(newValues[1])){
                        $scope.gauge.set(newValues[1]);
                    }
                });
            },
        };
    }]);

})(window.angular);
