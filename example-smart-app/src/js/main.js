(function(window){
    console.log('ready');
    // setTimeout(function()
    // {
    //     window.location.href = '/close' + window.location.search;
    // }, 10);
    FHIR.oauth2.ready(onReady, onError);

    function onReady()
    {
        console.log('on ready');
    }

    function onError()
    {
        console.log('onError');
    }
})(window);