(function(window){
    console.log('ready');
    setTimeout(function()
    {
        window.location.href = '/close' + window.location.search;
    }, 10);
})(window);