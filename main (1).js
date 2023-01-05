var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textBox=document.getElementById("textbox");
var content;

function start()
{
    textBox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    textBox.innerHTML=Content;
    if (Content=="Toma mi selfie")
    {
        console.log("tomando selfie---");
        speak();
    }
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data="Tomando en 5 segundos"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
{
    img_id="selfie1"
    take_snapshot();
    speak_data="Toma mi selfie en 10 segundos"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
setTimeout(function()
{
    img_id="selfie2"
    take_shapshot();
    speak_data="Toma mi selfie en 15 segundos"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);
setTimeout(function()
{
    img_id="selfie3"
    take_snapshot();
}, 15000);
}


Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90,
});
camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>'; 
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>'; 
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>'; 
        }
      
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").scr;
    link.href=image
    link.click();
}