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
            views: {
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

                        $scope.contentsList = [
                            {
                                "name": "序言",
                                "action": "preface"
                            },
                            {
                                "name": "目录",
                                "action": "contents"
                            },
                            {
                                "name": "简介",
                                "action": "introduction"
                            },
                            {
                                "name": "什么是模式",
                                "action": "whatspattern"
                            },
                            {
                                "name": "patternitytest",
                                "action": "patternitytest"
                            },
                            {
                                "name": "设计模式的结构",
                                "action": "structurepattern"
                            },
                            {
                                "name": "编写设计模式",
                                "action": "writepattern"
                            },
                            {
                                "name": "反模式",
                                "action": "antipattern"
                            },
                            {
                                "name": "设计模式的分类",
                                "action": "categoriespattern"
                            },
                            {
                                "name": "设计模式分类概览表",
                                "action": "designpatterncate"
                            },
                            {
                                "name": "JavaScript设计模式",
                                "action": "javascriptdesignpattern"
                            },
                            {
                                "name": "JavaScript mv*模式",
                                "action": "javascriptmvpattern"
                            },
                            {
                                "name": "最新模块化JavaScript设计模式",
                                "action": "modernmodular"
                            },
                            {
                                "name": "jQuery中的设计模式",
                                "action": "designpatterninjquery"
                            },
                            {
                                "name": "jQuery插件设计模式",
                                "action": "jqueryplugin"
                            },
                            {
                                "name": "JavaScript空间命名模式",
                                "action": "namespacingpattern"
                            },
                            {
                                "name": "总结",
                                "action": "conclusion"
                            },
                            {
                                "name": "参考",
                                "action": "references"
                            }
                        ];
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
        })
        .state('index.jspattern.introduction', {
            url: '/introduction',
            templateUrl: 'tpls/introduction.html'
        })
        .state('index.jspattern.whatspattern', {
            url: '/whatspattern',
            templateUrl: 'tpls/whatspattern.html'
        })
        .state('index.jspattern.patternitytest', {
            url: '/patternitytest',
            templateUrl: 'tpls/patternitytest.html'
        })
        .state('index.jspattern.structurepattern', {
            url: '/structurepattern',
            templateUrl: 'tpls/structurepattern.html'
        })
        .state('index.jspattern.writepattern', {
            url: '/writepattern',
            templateUrl: 'tpls/writepattern.html'
        })
        .state('index.jspattern.antipattern', {
            url: '/antipattern',
            templateUrl: 'tpls/antipattern.html'
        })
        .state('index.jspattern.categoriespattern', {
            url: '/categoriespattern',
            templateUrl: 'tpls/categoriespattern.html'
        })
        .state('index.jspattern.designpatterncate', {
            url: '/designpatterncate',
            templateUrl: 'tpls/designpatterncate.html'
        })
        .state('index.jspattern.javascriptdesignpattern', {
            url: '/javascriptdesignpattern',
            templateUrl: 'tpls/javascriptdesignpattern.html'
        })
        .state('index.jspattern.javascriptmvpattern', {
            url: '/javascriptmvpattern',
            templateUrl: 'tpls/javascriptmvpattern.html'
        })
        .state('index.jspattern.modernmodular', {
            url: '/modernmodular',
            templateUrl: 'tpls/modernmodular.html'
        })
        .state('index.jspattern.designpatterninjquery', {
            url: '/designpatterninjquery',
            templateUrl: 'tpls/designpatterninjquery.html'
        })
        .state('index.jspattern.jqueryplugin', {
            url: '/jqueryplugin',
            templateUrl: 'tpls/jqueryplugin.html'
        })
        .state('index.jspattern.namespacingpattern', {
            url: '/namespacingpattern',
            templateUrl: 'tpls/namespacingpattern.html'
        })
        .state('index.jspattern.conclusion', {
            url: '/conclusion',
            templateUrl: 'tpls/conclusion.html'
        })
        .state('index.jspattern.references', {
            url: '/references',
            templateUrl: 'tpls/references.html'
        })





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
        //.state('/writepattern', {
        //    templateUrl: 'tpls/writepattern.html',
        //    controller: 'WritepatternCtrl'
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