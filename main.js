Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
    
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){

  Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="final_pic"src="'+data_uri+'"/>'

  }) ; 
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ygGh5As6M/model.json',model_loaded);

function model_loaded(){
    console.log("model_loaded");
}

function identify_image(){
    img=document.getElementById("final_pic");

classifier.classify(img,got_result);
}

function got_result(error,results){
    if(error){
        console.error(error);
    }else{

        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}