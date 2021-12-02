
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox =document.getElementById("textbox");
var time = 5;
function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}


recognition.onresult = function run(event){
    console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);
Textbox.innerHTML =  Content;


if(Content == "take my selfie")
{
    console.log("Taking your Selfie ---");
    speak();
}
   
    

}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(my_camera);
   
    

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}


camera = document.getElementById("my_camera");
Webcam.set({
    width:360,
    height:250,
    image_format: "jpeg",
    jpeg_quality: 90

});


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<image id="selfie_image" src="'+data_uri+'"/>';

    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
