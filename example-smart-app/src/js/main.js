(function(window){
    console.log('ready');
    setTimeout(function()
    {
        alert('redirecting');
        alert(window.location);
        alert(window.location.href);
        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test';
        window.location = 'https://a9e3fef6f57b.ngrok.io/api/test' + window.location.search + '&arg=1'
    }, 3000);
})(window);