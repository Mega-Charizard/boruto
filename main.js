function startClassifiction()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cZ_hUG7qJ/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log("gotResults");
}


function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "accuracy - " + (results[0].confidence * 100).toFixed(2)+" %";
    

    document.getElementById("result_label").style.color = 
    "rgb("+ random_number_r + 
    "," + random_number_g + 
    "," + random_number_b + ")";

    document.getElementById("result_confidence").style.color = 
    "rgb("+ random_number_b + 
    "," + random_number_g + 
    "," + random_number_r + ")";

    img1 = document.getElementById("doggo");
    img2 = document.getElementById("kitty");
    img3 = document.getElementById("bear");


    if (results[0].label== "meow")
    {
        img3.src = "meep.jpg";
        img2.src = "kitty.gif";
        img1.src = "doggo.jpg";
        
    }
  
    else if (results[0].label== "woof")
    {
        img3.src = "meep.jpg";
        img2.src = "kitty.jpg";
        img1.src = "doggo.gif";

    }

    else
    {
        img3.src = "y.gif";
        img2.src = "kitty.jpg";
        img1.src = "doggo.jpg";
    }
    }
}