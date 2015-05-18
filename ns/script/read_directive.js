/**
 * @Date    : 15/5/18
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/18.
 */

var myDir = angular.module('ReadApp', []);

myDir.controller('MyCtrl', ['$scope', function($scope){
    $scope.loadData = function(){
        console.log("loading data....");
    };
}]);

myDir.controller('MyCtrlOther', ['$scope', function($scope){
    $scope.loadDataDate = function(){
        console.log("loading data...." + (new Date()));
    };
}]);

myDir.directive('loader', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attrs){
            element.bind('mouseenter', function(event){
                //scope.loadData();
                //scope.$apply("loadData()");
                scope.$apply(attrs.howtoload);
            });
        }
    };
});



myDir.directive('superman', function(){
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope){
            $scope.abilities = [];

            this.addStrength = function(){
                $scope.abilities.push('strength');
            };
            this.addSpeed = function(){
                $scope.abilities.push('speed');
            };
            this.addLight = function(){
                $scope.abilities.push('light');
            };
        },
        link: function(scope, element, attrs){
            element.addClass('btn btn-primary');
            element.bind('mouseenter', function(event){
                console.log(scope.abilities);
            });
        }
    };
});

myDir.directive('strength', function(){
    return {
        require: 'superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addStrength();
        }
    };
});

myDir.directive('speed', function(){
    return {
        require: 'superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addSpeed();
        }
    };
});

myDir.directive('light', function(){
    return {
        require: 'superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addLight();
        }
    };
});




myDir.directive('hello', function(){
    return {
        restrict: 'AE',
        scope: {}, //独立scope @
        template: '<div><input type="text" ng-model="userName" />{{userName}}</div>',
        repalce: true
    };
});


myDir.controller('MyScopeCtrl', ['$scope',function($scope){
    $scope.qq = "156880958"
}]);
myDir.directive('derek', function(){
    return {
        restrict: 'AE',
        template: '<button>{{selffirst}}</button>',
        link: function(scope, element, attrs){
            scope.selffirst = attrs.first;
        },
        replace: true
    };
});


myDir.controller('MyStringCtrl',['$scope', function($scope){
    $scope.str1 = "string-one";
    $scope.str2 = "string-two";
    $scope.str3 = "string-three";
}]);
myDir.controller('MyVarCtrl',['$scope', function($scope){
    $scope.testname = "baiwei";
}]);
myDir.controller('MyMethodCtrl',['$scope', function($scope){
    $scope.ctrlFlavor = "baiwei";
}]);
myDir.directive('drinkstring', function(){
    return {
        restrict: 'AE',
        scope: {
            much: '@'
        },
        template: '<div>{{much}}</div>',
        replace: true
    };
});

myDir.directive('drinkvar', function(){
    return {
        restrict: 'AE',
        scope: {
            flavor: '='//双向绑定
        },
        template: '<input type="text" ng-model="flavor" />',
        replace: true
    };
});


myDir.controller('myGreetCtrl', ['$scope', function($scope){
    $scope.sayHello = function(name){
        alert("Hello " + name);
    };
}]);
myDir.directive('greeting', function(){
    return {
        restrict: 'AE',
        scope: {
            greet: '&'
        },
        template: '<input type="text" ng-model="userName" /> <br />'+
                  '<button class="btn btn-default" ng-click="greet({name:userName})">greeting</button><br/>'
    };
});