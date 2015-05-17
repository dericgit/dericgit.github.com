/**
 * @Date    : 15/5/16
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/16.
 */

var learnPatternApp = angular.module('learnPatternApp', ['ngRoute', 'ui.router', 'ngAnimate', 'learnPatternCtrls']);

//路由
learnPatternApp.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('/index', {
            templateUrl: 'tpls/preface.html',
            controller: 'PrefaceCtrl'
        })
        .state('/coments', {
            templateUrl: 'tpls/coments.html',
            controller: 'ComentsCtrl'
        })
        .state('/introduction', {
            templateUrl: 'tpls/introduction.html',
            controller: 'IntroductionCtrl'
        })
        .state('/whatspattern', {
            templateUrl: 'tpls/whatspattern.html',
            controller: 'WhatspatternCtrl'
        })
        .state('/patternitytest', {
            templateUrl: 'tpls/patternitytest.html',
            controller: 'PatternitytestCtrl'
        })
        .state('/whitepattern', {
            templateUrl: 'tpls/whitepattern.html',
            controller: 'WhitepatternCtrl'
        })
        .state('/antipattern', {
            templateUrl: 'tpls/antipattern.html',
            controller: 'AntipatternCtrl'
        })
        .state('/categoriespattern', {
            templateUrl: 'tpls/categoriespattern.html',
            controller: 'CategoriespatternCtrl'
        })
        .state('/designpatterncate', {
            templateUrl: 'tpls/designpatterncate.html',
            controller: 'DesignpatterncateCtrl'
        })
        .state('/javascriptdesignpattern', {
            templateUrl: 'tpls/javascriptdesignpattern.html',
            controller: 'JavascriptdesignpatternCtrl'
        })
        .state('/javascriptmvpattern', {
            templateUrl: 'tpls/javascriptmvpattern.html',
            controller: 'JavascriptmvpatternCtrl'
        })
        .state('/modernmodular', {
            templateUrl: 'tpls/modernmodular.html',
            controller: 'ModernmodularCtrl'
        })
        .state('/designpatterninjquery', {
            templateUrl: 'tpls/designpatterninjquery.html',
            controller: 'DesignpatterninjqueryCtrl'
        })
        .state('/jqueryplugin', {
            templateUrl: 'tpls/jqueryplugin.html',
            controller: 'JquerypluginCtrl'
        })
        .state('/namespacingpattern', {
            templateUrl: 'tpls/namespacingpattern.html',
            controller: 'NamespacingpatternCtrl'
        })
        .state('/conclusion', {
            templateUrl: 'tpls/conclusion.html',
            controller: 'ConclusionCtrl'
        })
        .state('/references', {
            templateUrl: 'tpls/references.html',
            controller: 'ReferencesCtrl'
        });

    $urlRouterProvider.otherwise('/index');
});