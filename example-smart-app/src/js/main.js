(function(window){
    console.log('ready');
    setTimeout(function()
    {
        alert('Processing...');
        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test';
        
        var div = document.createElement('div');
        div.id = 'codeData';
        div.innerText = window.location.search;
        div.style.display = 'none';
        document.body.appendChild(div);

        //window.location.href = 'https://a9e3fef6f57b.ngrok.io/api/test' + window.location.search + '&arg=1';
        //window.close();
        window.postMessage('done', '*', 'xyz');
    }, 3000);
})(window);