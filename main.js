$(document).ready(function(){
  CanvasApp.init();
});

var CanvasApp = {
  init : function(){
    this.canvas = document.getElementById('myCanvas');
    this.$inputText = $('#image-url');
    this.$submitBtn = $('#submitBtn');

    this.$submitBtn.click(function(event){
      CanvasApp.loadImage();
      event.preventDefault();
    });
    this.doodle();
  },

  loadImage : function(){
    var context = this.canvas.getContext('2d');
    var imageObj = new Image();
    imageObj.src = this.$inputText.val();

    imageObj.onload = function() {
      var bestHeight = (578 * imageObj.height) / imageObj.width;
      context.drawImage(imageObj, 0, 0, 578, bestHeight);
    };
  },

  doodle: function() {
    var $canvas = $('#myCanvas');
    var clickX = [];
    var clickY = [];
    var clickDrag = [];
    var paint;

    function addClick(x, y, dragging) {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.strokeStyle = "#ffffff";
      context.lineJoin = "round";
      context.lineWidth = 5;

      clickX.forEach(function(elem, index) {
        context.beginPath();
        if(clickDrag[index]) {
          context.moveTo(clickX[index-1], clickY[index-1]);
        } else {
          context.moveTo(elem, clickY[index]);
        }
        context.lineTo(elem, clickY[index]);
        context.closePath();
        context.stroke();
      });
    }

    $canvas.mousedown(function(event) {
      var mouseX = event.pageX - this.offsetLeft;
      var mouseY = event.pageY - this.offsetTop;
      paint = true;
      addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
      redraw();
    });
    $canvas.mousemove(function(event) {
      if (paint) {
        addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
        redraw();
      }
    });
    $canvas.mouseup(function(event) {
      paint = false;
    });
    $canvas.mouseleave(function(event) {
      paint = false;
    });

  },

};
