window.onload = function()
{ 
   
    const imgUrl1 = "img/ddwdf-0111.jpg"

    let ser1Wind = document.querySelector('.serv-left');
    let ser1WindTxt = document.getElementById("serv-left-txt");

    let ser2Wind = document.querySelector('.serv-mid');
    let ser2WindTxt = document.getElementById("serv-mid-txt");

    let ser3Wind = document.querySelector(".serv-right");
    let ser3WindTxt = document.getElementById("serv-right-txt");

    ser1Wind.onmouseenter = ser1WindEnter;
    ser1Wind.onmouseleave = ser1WindExit;

    ser2Wind.onmouseenter = ser2WindEnter;
    ser2Wind.onmouseleave = ser2WindExit;

    ser3Wind.onmouseenter = ser3WindEnter;
    ser3Wind.onmouseleave = ser3WindExit;

    let design = document.querySelector('.txt1');
    let coding = document.querySelector('.txt2');
    let marketing = document.querySelector('.txt3');
    let uiux = document.querySelector('.txt4');
    let system = document.querySelector('.txt5');

    let designSlider = document.querySelector('#designSliding');
    let codingSlider = document.querySelector('#codingSliding');
    let marketingSlider = document.querySelector('#marketingSliding');
    let uiuxSlider = document.querySelector('#uiuxSliding');
    let systemSlider = document.querySelector('#systemSliding');


    design.onmouseenter = designEnter;
    design.onmouseleave = designExit;

    coding.onmouseenter = codingEnter;
    coding.onmouseleave = codingExit;

    marketing.onmouseenter = marketingEnter;
    marketing.onmouseleave = marketingExit;

    uiux.onmouseenter = uiuxEnter;
    uiux.onmouseleave = uiuxExit;

    system.onmouseenter = systemEnter;
    system.onmouseleave = systemExit;

    function designEnter ()
    {
        designSliding.style.transform = "translate(-50VW)";
        design.style.transform = "translate(-50vh)";
        coding.style.transform = "translate(-40vh)";
        marketing.style.transform = "translate(-30vh)";
        uiux.style.transform = "translate(-20vh)";
        system.style.transform = "translate(-10vh)";

        design.style.transitionDelay = "0s";
        coding.style.transitionDelay = "0s";
        marketing.style.transitionDelay = "0s";
        uiux.style.transitionDelay = "0s";
        system.style.transitionDelay = "0s";
        
    }

    function designExit ()
    {

        designSliding.style.transform = "translate(0vh)";
        design.style.transform = "translate(0vh)";
        coding.style.transform = "translate(0vh)";
        marketing.style.transform = "translate(0vh)";
        uiux.style.transform = "translate(0vh)";
        system.style.transform = "translate(0vh)";
    }


    function codingEnter ()
    {
        
        codingSliding.style.transform = "translate(-50VW)";
        coding.style.transform = "translate(-40vh)";

        design.style.transform = "translate(-50vh)";
        marketing.style.transform = "translate(-30vh)";
        uiux.style.transform = "translate(-20vh)";
        system.style.transform = "translate(-10vh)";

        design.style.transitionDelay = "0.1s";
        coding.style.transitionDelay = "0s";
        marketing.style.transitionDelay = "0.1s";
        uiux.style.transitionDelay = "0.2s";
        system.style.transitionDelay = "0.3s";
    }
    function codingExit ()
    {   
        codingSliding.style.transform = "translate(50VW)";
        coding.style.transform = "translate(0vh)";

        design.style.transform = "translate(0vh)";
        marketing.style.transform = "translate(0vh)";
        uiux.style.transform = "translate(0vh)";
        system.style.transform = "translate(0vh)";

        
    }


    function marketingEnter ()
    {   
        marketingSliding.style.transform = "translate(-50VW)";
        marketing.style.transform = "translate(-30vh)";

        design.style.transform = "translate(-50vh)";
        coding.style.transform = "translate(-40vh)";
        uiux.style.transform = "translate(-20vh)";
        system.style.transform = "translate(-10vh)";

        design.style.transitionDelay = "0.2s";
        coding.style.transitionDelay = "0.1s";
        marketing.style.transitionDelay = "0s";
        uiux.style.transitionDelay = "0.1s";
        system.style.transitionDelay = "0.2s";
    }
    function marketingExit ()
    {
        marketingSliding.style.transform = "translate(0vh)";

        marketing.style.transform = "translate(0vh)";

        design.style.transform = "translate(0vh)";
        coding.style.transform = "translate(0vh)";
        uiux.style.transform = "translate(0vh)";
        system.style.transform = "translate(0vh)";
    }


    function uiuxEnter ()
    {
        uiuxSliding.style.transform = "translate(-50VW)";
        uiux.style.transform = "translate(-20vh)";
        design.style.transform = "translate(-50vh)";
        coding.style.transform = "translate(-40vh)";
        marketing.style.transform = "translate(-30vh)";
        system.style.transform = "translate(-10vh)";

        design.style.transitionDelay = "0.3s";
        coding.style.transitionDelay = "0.2s";
        marketing.style.transitionDelay = "0.1s";
        uiux.style.transitionDelay = "0s";
        system.style.transitionDelay = "0.1s";
    }
    function uiuxExit ()
    {
        uiuxSliding.style.transform = "translate(0vh)";

        design.style.transform = "translate(0vh)";
        coding.style.transform = "translate(0vh)";
        marketing.style.transform = "translate(0vh)"
        uiux.style.transform = "translate(0vh)";;
        system.style.transform = "translate(0vh)";
        
    }


    function systemEnter ()
    {
        systemSliding.style.transform = "translate(-50VW)";

        system.style.transform = "translate(-10vh)";
        design.style.transform = "translate(-50vh)";
        coding.style.transform = "translate(-40vh)";
        marketing.style.transform = "translate(-30vh)";
        uiux.style.transform = "translate(-20vh)";
    }
    function systemExit ()
    {
        systemSliding.style.transform = "translate(0vh)";

        system.style.transform = "translate(0vh)";

        design.style.transform = "translate(0vh)";
        coding.style.transform = "translate(0vh)";
        marketing.style.transform = "translate(0vh)";
        uiux.style.transform = "translate(0vh)";
    }


    function ser1WindEnter ()
    {
        ser1Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),"+'url("img/ddwdf-0111.jpg")';

        ser1WindTxt.style.transition  = "all 1s ease";
        ser1WindTxt.style.transform = "translateY(-400px)";


        let ser1WindTxtSub = document.getElementById("ser1P");
        ser1WindTxtSub.textContent += "Longer form of text to see it's functionality inside of the DIV";
        
        ser1WindTxtSub.style.transform = "translateY(-150px)";
        ser1WindTxtSub.style.opacity = "1";

    }

    function ser1WindExit ()
    {
        ser1Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),"+'url("img/ddwdf-0111.jpg")';

        ser1WindTxt.style.transform = "translateY(0px)";

        let list = document.getElementById("ser1P");
        list.textContent = " ";

        list.style.transform = "translateY(250px)";
        list.style.opacity = "0";
    }

    function ser2WindEnter ()
    {
        ser2Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),"+'url("img/tbswd-011.jpg")';


        ser2WindTxt.style.transition  = "all 1s ease";
        ser2WindTxt.style.transform = "translateY(-400px)";


        let ser2WindTxtSub = document.getElementById("ser2P");
        ser2WindTxtSub.textContent += "Longer form of text to see it's functionality inside of the DIV";
        
        ser2WindTxtSub.style.transform = "translateY(-250px)";
        ser2WindTxtSub.style.opacity = "1";

    }

    function ser2WindExit ()
    {
        ser2Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),"+'url("img/tbswd-011.jpg")';

        ser2WindTxt.style.transform = "translateY(0px)";

        let list = document.getElementById("ser2P");
        list.textContent = " ";

        list.style.transform = "translateY(250px)";
        list.style.opacity = "0";
    }

    function ser3WindEnter ()
    {

        ser3Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),"+'url("img/crf-0111.jpg")';

        ser3WindTxt.style.transition  = "all 1s ease";
        ser3WindTxt.style.transform = "translateY(-400px)";


        let ser3WindTxtSub = document.getElementById("ser3P");
        ser3WindTxtSub.textContent += "Longer form of text to see it's functionality inside of the DIV";
        
        ser3WindTxtSub.style.transform = "translateY(-150px)";
        ser3WindTxtSub.style.opacity = "1";

    }

    function ser3WindExit ()
    {
        ser3Wind.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),"+'url("img/crf-0111.jpg")';


        ser3WindTxt.style.transform = "translateY(0px)";

        let list = document.getElementById("ser3P");
        list.textContent = " ";

        list.style.transform = "translateY(250px)";
        list.style.opacity = "0";
    }

};