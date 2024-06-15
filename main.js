


function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Zkk9Mc_Dp/model.json", modelReady)
    
}
function modelReady(){
    classifier.classify(gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("ans").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("acu").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("ans").innerHTML= "I can hear : "+results[0].label;
        document.getElementById("acu").innerHTML= "Accuracy :"+ (results[0].confidence*100).toFixed(2) + "%";


        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4")

        if(results[0].label == "Clap"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
             
            
        }
        else if( results[0].label == "Thumping"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if( results[0].label == "Snapping"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
        

    }
}



















