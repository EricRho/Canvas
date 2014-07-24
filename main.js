$(document).ready(function(){
  CanvasApp.init();
});

var CanvasApp = {
  init : function(){
    this.canvas = document.getElementById('#myCanvas');
    this.$inputText = $('#image-url');
    this.$submitBtn = $('#submitBtn');

    this.$submitBtn.click(function(event){
      CanvasApp.loadImage();
      event.preventDefault();
    });
  },

  loadImage : function(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj, 69, 50);
    };
    imageObj.src = this.$inputText.val();
  }
};
