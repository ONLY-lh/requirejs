require.config({
    // baseUrl: 'js/lib',
    paths: {
        jquery: 'lib/jquery.min',
        zepto: 'lib/zepto.min'
    }
});

require(['jquery', 'moduleA', 'moduleB', 'moduleC'], function($, moduleA, moduleB, moduleC) {
    const boxHtml = `大家好，我叫${moduleA.name}，我今年${moduleB.age}岁，我从事${moduleC.job}工作`;
    $('.box').html(boxHtml);
});