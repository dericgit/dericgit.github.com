/**
 * @Date    : 15/5/18
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/18.
 */

var ExpandModule = angular.module('exApp', []);

ExpandModule.directive('accordion', function(){
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function(){
            var expanders = [];

            this.getOption = function(selectedExpander){
                angular.forEach(expanders, function(expander){
                    if ( selectedExpander != expander ){
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function(expander){
                expanders.push(expander);
            };
        }
    };
});
ExpandModule.directive('expander', function(){
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        require: '^?accordion',
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link: function(scope, element, sttrs, accordionController){
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function(){
                scope.showMe = !scope.showMe;
                accordionController.getOption(scope);
            };
        }
    };
});

ExpandModule.controller('SomeController', ['$scope', function($scope){
    $scope.expanders = [
        {
            title: 'click me to expand',
            text: 'Hi there folks, i am the content that was hidden but is now shown'
        },
        {
            title: 'click this',
            text: 'i am even better text than you have seen previously'
        },
        {
            title: 'test',
            text: 'expander test it'
        }
    ];
}]);

