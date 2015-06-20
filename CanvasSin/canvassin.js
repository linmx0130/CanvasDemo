( function() {
var drawing=document.getElementById("drawing");
drawing.width=320;
drawing.height=220;
if (drawing.getContext){
    c=drawing.getContext("2d");
}else{ return;}
c.strokeStyle="rgb(0,0,255)";
c.fillStyle="rgba(0,255,0,0.2)";
var getX=function(x){
    return 160+x;
};
var getY=function(y){
    return 110-y;
};

c.moveTo(getX(-150),getY(0));
c.beginPath();
for (var i= -150; i<=150 ;++i){
    var valueX= Math.PI/150*i;
    var valueY= Math.sin(valueX);
    c.lineTo(getX(valueX/Math.PI*150),getY(valueY*100));
}
c.moveTo(getX(-150),getY(0));
c.stroke();
c.fill();

} ) ();
