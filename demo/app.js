var app = angular.module('gauge', ['gaugejs']);

app.controller('test', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.animationTime = 10;
    $scope.value = 1000;
    $scope.maxValue = 2000;
    
    $scope.gaugeOptions = {
        lines: 12,
        // The number of lines to draw
        angle: 0.15,
        // The length of each line
        lineWidth: 0.4,
        // The line thickness
        pointer: {
            length: 0.7,
            // The radius of the inner circle
            strokeWidth: 0.035,
            // The rotation offset
            color: '#666666' // Fill color
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

