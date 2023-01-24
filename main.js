Status=""
objects=[]
video=""
function setup(){
canvas=createCanvas(450,420);
canvas.center();
video=createCapture(VIDEO);
video.size(450,420);
video.hide();
}
function draw(){
image(video,0,0,450,420);
if(Status !="")
{
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Status:Objects Detected";
    document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+objects.length;
   
    fill("#FF0000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
if(results[i].label==input_object_name){
    document.getElementById("status").innerHTML="object found"
}
else{
    document.getElementById("status").innerHTML="object not found"
}
}
}
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    input_object_name=document.getElementById("inputobjectname").value;
}
function modelLoaded(){
    console.log("Model Loaded!")
    Status=true;

}
function gotResult(error,results){
    if (error) {
       console.log(error); 
    }
    console.log(results);
    objects=results
}

