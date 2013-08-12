/*
核心启动类，开始加载各个业务类和公共类
*/
//新增underscore.js
//开始加载三个产品引导JS
require.config({
    //设置JS加载的基础路径
    baseUrl: 'js',
    //设置别名
    paths: {
        'jquery': 'thridjs/jquery-1.8.3',
        'json': 'thridjs/json2',
        'tmpl': 'thridjs/jquery.tmpl.min',
        'report': 'report/report',
        'util': 'util/util',
        'ztree': 'thridjs/ztree/js/jquery.ztree.all-3.4.min',
        'hr': 'hr/hr',
        'workflow': 'workflow/workflow',
        'pm': 'pm/pm',
        'app': 'app/app',
        'jqueryui': 'thridjs/jquery-ui-1.9.2.custom.min',
        //'jqueryselect': 'thridjs/jquery.multiselect',
        'jqueryPlumb': 'thridjs/jquery.jsPlumb-1.3.16-all-min',
        'GridCust': 'thridjs/GridCust',
        'underscore': 'thridjs/underscore-min',
        'ckeditor': 'thridjs/ckeditor/ckeditor',
        'dialog':'thridjs/dialog/js/dialog',
        'boostrap': 'thridjs/bootstrap.min'
    },
    //设置依赖关系
    shim: {
        'base': ['jqueryPlumb'],
        'json':['jquery'],
        'tmpl': ['jquery'],
        'dialog': ['jquery'],
        'boostrap':['jquery'],
        'jqueryui': ['jquery'],
        //'jqueryselect': ['jqueryui'],
        'jqueryPlumb': ['jqueryui'],
        'util': ['base', 'tmpl', 'json', 'underscore','dialog','boostrap'],
        'GridCust': ['util', 'ckeditor'],
        'report': ['hr','ztree', 'GridCust'],
        'ztree': ['jquery'],
        'hr': ['util', 'ztree'],
        'workflow': ['util'],
        'pm': ['util'],
        'app': ['util']
    }
});
require(['report', 'pm', 'workflow']);

