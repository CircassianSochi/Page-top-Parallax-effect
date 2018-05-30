var height = document.querySelector('svg').getBoundingClientRect().height;
addEventListener('scroll', function (e) {
    var percentage = Math.min(Math.max(pageYOffset / height, 0), 1);
    document.documentElement.style.setProperty('--pct', percentage);
});
//  link to open without iframe 
var inIframe = function () { try {
    return window.self !== window.top;
}
catch (e) {
    return true;
} };
if (inIframe())
    document.querySelector('.no-iframe').style.display = 'block';