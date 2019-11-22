$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Premier rectangle
  context.fillStyle = '#ADD8E6';
  context.fillRect( 108, 105, 84, 45);

  // Triangle
  context.beginPath();
  context.moveTo(192, 105);
  context.lineTo(108, 105);
  context.lineTo(150, 80);
  context.closePath();
  context.fillStyle = "#CD853F";
  context.fill();

  // Fenêtres
  context.fillStyle = '#CACACA';
  context.fillRect( 120, 110, 20, 10);
  context.fillStyle = '#CACACA';
  context.fillRect( 160, 110, 20, 10);
  // Porte
  context.fillStyle = '#CACACA';
  context.fillRect( 135, 130, 30, 20);
});
