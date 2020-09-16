let lang = {
    "html": "75%",
    "css": "90%",
    "javascript": "70%",
    "C++": "55%",
    "angular": "60%",
    "java": "85%",
    "csharp": "100%",
    "delphi": "60%"
};

var multiply = 4;

$.each(lang, function(language, pourcent) {

    var delay = 700;

    setTimeout(function() {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});