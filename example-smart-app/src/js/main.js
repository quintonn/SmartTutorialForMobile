(function(window){
    console.log('ready');
    setTimeout(function()
    {
        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test';
        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test' + window.location.search + '&arg=1';
        //window.close();
        window.location.href = '/close' + window.location.search;
    }, 1000);
})(window);