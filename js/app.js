/**
 * @Date    : 15/5/16
 * @Author  : derek
 * @Version : v1.0.0
 * Change by derek on 15/5/16.
 */

var learnPatternApp = angular.module('learnPatternApp', ['ui.router']);

//路由
learnPatternApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            view: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls/main.html'
                }
            }
        })
        .state('index.jspattern', {
            url: '/jspattern',
            views: {
                'main@index': {
                    templateUrl: 'tpls/jspatternlist.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            //$state.go("index.usermng.addusertype");
                        }
                    }
                }
            }
        })
        .state('index.jspattern.preface', {
            url: '/preface',
            templateUrl: 'tpls/preface.html'
        })
        .state('index.jspattern.contents', {
            url: '/contents',
            templateUrl: 'tpls/contents.html'
        });
        //
        //.state('/index', {
        //    templateUrl: 'tpls/preface.html',
        //    controller: 'PrefaceCtrl'
        //})
        //.state('/coments', {
        //    templateUrl: 'tpls/contents.html',
        //    controller: 'ComentsCtrl'
        //})
        //.state('/introduction', {
        //    templateUrl: 'tpls/introduction.html',
        //    controller: 'IntroductionCtrl'
        //})
        //.state('/whatspattern', {
        //    templateUrl: 'tpls/whatspattern.html',
        //    controller: 'WhatspatternCtrl'
        //})
        //.state('/patternitytest', {
        //    templateUrl: 'tpls/patternitytest.html',
        //    controller: 'PatternitytestCtrl'
        //})
        //.state('/whitepattern', {
        //    templateUrl: 'tpls/whitepattern.html',
        //    controller: 'WhitepatternCtrl'
        //})
        //.state('/antipattern', {
        //    templateUrl: 'tpls/antipattern.html',
        //    controller: 'AntipatternCtrl'
        //})
        //.state('/categoriespattern', {
        //    templateUrl: 'tpls/categoriespattern.html',
        //    controller: 'CategoriespatternCtrl'
        //})
        //.state('/designpatterncate', {
        //    templateUrl: 'tpls/designpatterncate.html',
        //    controller: 'DesignpatterncateCtrl'
        //})
        //.state('/javascriptdesignpattern', {
        //    templateUrl: 'tpls/javascriptdesignpattern.html',
        //    controller: 'JavascriptdesignpatternCtrl'
        //})
        //.state('/javascriptmvpattern', {
        //    templateUrl: 'tpls/javascriptmvpattern.html',
        //    controller: 'JavascriptmvpatternCtrl'
        //})
        //.state('/modernmodular', {
        //    templateUrl: 'tpls/modernmodular.html',
        //    controller: 'ModernmodularCtrl'
        //})
        //.state('/designpatterninjquery', {
        //    templateUrl: 'tpls/designpatterninjquery.html',
        //    controller: 'DesignpatterninjqueryCtrl'
        //})
        //.state('/jqueryplugin', {
        //    templateUrl: 'tpls/jqueryplugin.html',
        //    controller: 'JquerypluginCtrl'
        //})
        //.state('/namespacingpattern', {
        //    templateUrl: 'tpls/namespacingpattern.html',
        //    controller: 'NamespacingpatternCtrl'
        //})
        //.state('/conclusion', {
        //    templateUrl: 'tpls/conclusion.html',
        //    controller: 'ConclusionCtrl'
        //})
        //.state('/references', {
        //    templateUrl: 'tpls/references.html',
        //    controller: 'ReferencesCtrl'
        //});


});