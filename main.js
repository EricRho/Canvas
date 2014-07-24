$(document).ready(function(){
  CanvasApp.init();
});

var CanvasApp = {
  init : function(){
    this.canvas = document.getElementById('myCanvas');
    this.$inputText = $('#image-url');
    this.$submitBtn = $('#submitBtn');

    var that = this;
    this.$submitBtn.click(function(){
      that.loadImage(that.$inputText.val());
    });
  },

  loadImage : function(url){
    var context = this.canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0, 578, 400);
    };
    imageObj.src = url;
  }
};
