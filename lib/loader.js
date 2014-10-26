function loadScript(url, callback){
    console.log("Load " + url);
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function preloadModules($mod) {
    var $max = $mod.length;
    var $curr = 0;
    for (var i = 0; i < $max; i++) {
        var moduleFolder = $mod[i].toLowerCase().replace('module', '');
        loadScript("modules/" + moduleFolder + "/module.js", function(){
            $curr++;
            if ($curr >= $max) {
                console.log("All module loaded successful!");
                loadScript('js/app.js', function(){
                    angular.bootstrap(document, [$app]); // Run our Angular app after finish loading
                })
            }
        });
    }
}

function bulkLoad($files) {
    console.log("Call bulk load");
    for (var i = 0; i < $files.length; i++) {
        loadScript($files[i], function(){});
    }
}

if (angular.isDefined($modules)) {
    preloadModules($modules); // Start loading
}