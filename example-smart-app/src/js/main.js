(function(window){
    console.log('ready');
    setTimeout(function()
    {
        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test';
        
        var div = document.createElement('div');
        div.id = 'codeData';
        div.innerText = window.location.search;
        div.style.display = 'none';
        document.body.appendChild(div);

        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test' + window.location.search + '&arg=1';
        //window.close();
        window.opener.postMessage('xxx');//{event: 'done', data: window.location.search});
    }, 1000);
})(window);