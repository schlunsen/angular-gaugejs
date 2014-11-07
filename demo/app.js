var app = angular.module('gauge', ['gaugejs']);

app.controller('test', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.animationTime = 10;
    $scope.value = 3000;
    $scope.maxValue = 3000;
	$scope.gaugeType = 'donut';

    $scope.gaugeOptions = {
        lines: 12,
        // The number of lines to draw
        angle: 0.15,
        // The length of each line
        lineWidth: 0.44,
        // The line thickness
        pointer: {
            length: 0.9,
            // The radius of the inner circle
            strokeWidth: 0.035,
            // The rotation offset
            color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#E0E0E0',
        // to see which ones work best for you
        generateGradient: true
    };
    
    $scope.donutGaugeOptions = {
        lines: 12,
        // The number of lines to draw
        angle: 0.15,
        // The length of each line
        lineWidth: 0.044,
        // The line thickness
        pointer: {
            length: 0.09,
            // The radius of the inner circle
            strokeWidth: 0.0035,
            // The rotation offset
            color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#E0E0E0',
        // to see which ones work best for you
        generateGradient: true
    };


}]);

