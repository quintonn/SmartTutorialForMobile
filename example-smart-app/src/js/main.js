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
    console.log(btoa(sessionState));
   
    setTimeout(function()
    {
        console.log(window.location.search);
        //window.location.href = '/close' + window.location.search + '&sessionstate='+btoa(sessionState);
        window.location.href = 'https://quintonn.github.io/SmartTutorialForMobile/qms/index.html' + window.location.search + '&sessionstate='+btoa(sessionState);
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