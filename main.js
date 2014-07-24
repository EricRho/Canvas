$(document).ready(function(){
  CanvasApp.init();
});

var CanvasApp = {
  init : function(){
    this.$canvas = $('#myCanvas');
    this.$inputText = $('#image-url');
    this.$submitBtn = $('#submitBtn');

    this.$submitBtn.submit(function(){
      var context = $this.$canvas.getContext('2d');
      var image = new Image();
      image.src = this.$inputText.val();
      context.drawImage(image, 0, 0);
    });
  }
};
