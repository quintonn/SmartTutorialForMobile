(function(window){
    console.log('ready');
    setTimeout(function()
    {
        console.log('redirecting');
        window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test';
    }, 10000);
})(window);