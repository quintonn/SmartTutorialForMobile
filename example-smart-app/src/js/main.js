(function(window){
    console.log('ready');
    console.log('');
    console.log('------------------------------------------------------------');
    console.log(window.location.href);
    console.log('------------------------------------------------------------');
    console.log('');

    var state = '';
    var queryParams = window.location.search.substring(1).split('&');
    for (var i = 0; i < queryParams.length; i++)
    {
        var parts = queryParams[i].split('=');
        if (parts[0] == 'state')
        {
            state = parts[1];
            break;
        }
    }

    console.log('state = ' + state);

    var sessionState = sessionStorage[state];
    console.log(sessionState);

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