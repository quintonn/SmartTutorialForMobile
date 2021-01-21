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
        console.log(window);
        console.log(window.opener);
        console.log(window.parent);
        window.parent.postMessage('xxx');//{event: 'done', data: window.location.search});
    }, 1000);
})(window);