(function(window){
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

    var sessionState = sessionStorage[state];

    setTimeout(function()
    {
        //window.location.href = '/close' + window.location.search + '&sessionstate='+btoa(sessionState);
        window.location.href = 'https://quintonn.github.io/SmartTutorialForMobile/qms/index.html' + window.location.search + '&sessionstate='+btoa(sessionState) + "&close=true";

        //window.location.href = 'https://quintonn.github.io/SmartTutorialForMobile/qms/index.html' + window.location.search + '&sessionstate='+btoa(sessionState);
    }, 10);
    
})(window);