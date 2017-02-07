$(function() {

    tabIndent.renderAll();

    $(".tabIndent").on("keydown", function(event) {

        if(event.which === 9) {

            event.preventDefault();
        }
    });

    $(".tabIndent").on("blur", function() {

        $(this).val($.trim($(this).val()));
    });
    

    $(document).on("keydown", function(event) {

        if (event.ctrlKey && event.which === 13) {

            $("#runAnchor").click();
        }

    });

 
    $("#navLst li").click(function() {
        
        $(this).toggleClass("activated");
        
        if ($(this).is("#htmlBt")) {
            
            $("#htmlA").toggleClass("dispNone");
        }
        
        else if ($(this).is("#cssBt")) {
            
            $("#cssA").toggleClass("dispNone");
        }
        
        else if ($(this).is("#jsBt")) {
            
            $("#jsA").toggleClass("dispNone");
        }
        
        else if ($(this).is("#resultBt")) {
            
            $("#resultA").toggleClass("dispNone");
        }
        
        
        var articleNum = $("article[class='dispNone']");
        var articleNumLen = articleNum.length;

        switch (articleNumLen) {

            case 0:
                $("#sectCode article").css("width", "24.7%");
                break;

            case 1: 
                $("#sectCode article").css("width", "32.9%");
                break;

            case 2: 
                $("#sectCode article").css("width", "49.3%");
                break;

            case 3: 
               $("#sectCode article").css("width", "100%");
                break;
        }
        
        
    });



    $("#htmlA").click(function(){
        $("#htmlI").focus();
    });

    $("#cssA").click(function(){
        $("#cssI").focus();
    });

    $("#jsA").click(function(){
        $("#jsI").focus();
    });


    $("#smallF").on("click", function() {

         $(".textareaCode").css("font-size", "1em")
    });

    $("#normalF").on("click", function() {

         $(".textareaCode").css("font-size", "1.2em")
    });

    $("#bigF").on("click", function() {

         $(".textareaCode").css("font-size", "1.4em")
    });

    
    var resultFrame = (function() {

        var createFrame = document.createElement("iframe");

        createFrame.width = "100%";
        createFrame.height = "98%";

        createFrame.frameBorder="0"

        return createFrame;

    })();

    
    $("#runAnchor").on("click", function() {

        var myHtml = $("#htmlI").val();

        var myCss = $("#cssI").val();

        var myJs = $("#jsI").val();

        var frameContent = "<!doctype html><head><meta charset='utf-8'><title>Result</title><style>" + myCss + "</style></head><body>" + myHtml + "<script>" + myJs + "</script></body></html>"

        $("#resultA").append(resultFrame);

        resultFrame.contentWindow.document.open();
        resultFrame.contentWindow.document.write(frameContent);
        resultFrame.contentWindow.document.close();
        
        $("body, #sectCode").animate({ scrollTop: 0 }, 1);
    });


});


