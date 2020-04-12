window.onload = function(){
  // 基本型
  // document.getElementById("cards").innerHTML = "New text!";
  // 定義 htnl 的內容
  var str="";
 
  for(var i=0;i<3;i+=1){
    str+=
      '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+ // sketch 將會塞入這裡 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }  
  // 將資料放入 id 為 cards 的 tag 裡面
  document.getElementById("cards").innerHTML = str;

  //sketch
  var brushSketch = function(p51){
    // inital of p5j(processing) structure
    // add all function with p5j header
    p51.setup = function(){
      p51.createCanvas(250, 250);

    }
p51.draw = function(){
  var sx=p51.map(p51.mouseX, 0, p51.width, 0, 255)
  var sx = p51.map(p51.mouseY, 0, p51.height, 0, 255);
  var nsize=p51.width/8+p51.cos(p51.mouseY*p51.PI/180)*p51.width/16;
  p51.fill(p51.mouseX-50,p51.mouseY*3/5,255-nsize,2*p51.mouseX/3);
  p51.stroke(p51.mouseX-20,p51.mouseY*3/5,200-nsize,2*p51.mouseX/5);
      p51.circle(p51.mouseX,p51.mouseY,nsize);
    
    // update of sketch
    
        
  
}


     
  

}
 

  new p5(brushSketch, 'sketch0');
  new p5(brushSketch, 'sketch1');
  new p5(brushSketch, 'sketch2');
 }
