/**
 * @Date    : 15/5/16
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/16.
 */

var learnPatternCtrls = angular.module('learnPatternCtrls', []);

learnPatternCtrls.controller('HighLightCtrl', ['$scope', function($scope){
    $scope.highlight = function(){
        console.log("aaaaaa")
        SyntaxHighlighter.highlight();
    };

    SyntaxHighlighter.highlight();
}]);

//PrefaceCtrl
learnPatternCtrls.controller('PrefaceCtrl', ['$scope', function($scope){}]);

//ComentsCtrl
learnPatternCtrls.controller('ComentsCtrl', ['$scope', function($scope){}]);

//IntroductionCtrl
learnPatternCtrls.controller('IntroductionCtrl', ['$scope', function($scope){}]);

//WhatspatternCtrl
learnPatternCtrls.controller('WhatspatternCtrl', ['$scope', function($scope){}]);

//WhitepatternCtrl
learnPatternCtrls.controller('WhitepatternCtrl', ['$scope', function($scope){}]);

//AntipatternCtrl
learnPatternCtrls.controller('AntipatternCtrl', ['$scope', function($scope){}]);

//CategoriespatternCtrl
learnPatternCtrls.controller('CategoriespatternCtrl', ['$scope', function($scope){}]);

//DesignpatterncateCtrl
learnPatternCtrls.controller('DesignpatterncateCtrl', ['$scope', function($scope){}]);

//JavascriptdesignpatternCtrl
learnPatternCtrls.controller('JavascriptdesignpatternCtrl', ['$scope', function($scope){}]);

//JavascriptmvpatternCtrl
learnPatternCtrls.controller('JavascriptmvpatternCtrl', ['$scope', function($scope){}]);

//ModernmodularCtrl
learnPatternCtrls.controller('ModernmodularCtrl', ['$scope', function($scope){}]);

//DesignpatterninjqueryCtrl
learnPatternCtrls.controller('DesignpatterninjqueryCtrl', ['$scope', function($scope){}]);

//DesignpatterninjqueryCtrl
learnPatternCtrls.controller('DesignpatterninjqueryCtrl', ['$scope', function($scope){}]);

//JquerypluginCtrl
learnPatternCtrls.controller('JquerypluginCtrl', ['$scope', function($scope){}]);

//NamespacingpatternCtrl
learnPatternCtrls.controller('NamespacingpatternCtrl', ['$scope', function($scope){}]);

//ConclusionCtrl
learnPatternCtrls.controller('ConclusionCtrl', ['$scope', function($scope){}]);

//ReferencesCtrl
learnPatternCtrls.controller('ReferencesCtrl', ['$scope', function($scope){}]);