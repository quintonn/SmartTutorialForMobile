(function(window){
    console.log('ready');
    console.log('');
    console.log('------------------------------------------------------------');
    console.log(window.location.href);
    console.log('------------------------------------------------------------');
    console.log('');
    alert('pause');
    
    setTimeout(function()
    {
        window.location.href = '/close' + window.location.search;
    }, 10);
    // FHIR.oauth2.ready(onReady, onError);

    // function onReady()
    // {
    //     console.log('on ready');
    // }

    // function onError()
    // {
    //     console.log('onError');
    // }
})(window);