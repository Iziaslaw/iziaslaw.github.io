var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { create: create });

function create() {
var graphics2 = game.add.graphics(100, 100);

    // set a fill and line style
    graphics2.beginFill(0xFF3300);
    graphics2.lineStyle(10, 0xffd900, 0.8);
    
    // draw a shape
    graphics2.moveTo(50,50);
    graphics2.lineTo(250, 50);
    graphics2.lineTo(100, 100);
    graphics2.lineTo(250, 220);
    graphics2.lineTo(50, 220);
    graphics2.lineTo(50, 50);
    graphics2.endFill();
    
    // set a fill and line style again
    graphics2.lineStyle(10, 0xFF0000, 0.8);
    graphics2.beginFill(0xFF700B, 1);
    
    // draw a second shape
    graphics2.moveTo(210,300);
    graphics2.lineTo(450,320);
    graphics2.lineTo(570,350);
    graphics2.quadraticCurveTo(400, 0, 480,100);//квадратичная кривая Безье cpX,cpY
    graphics2.lineTo(330,120);
    graphics2.lineTo(410,200);
    graphics2.lineTo(210,300);
    graphics2.endFill();
    
    // draw a rectangle
    graphics2.lineStyle(2, 0x0000FF, 1);
    //graphics2.beginFill(0xFFFF0B, 0.5);
    graphics2.drawRect(150, 250, 100, 200);
    
    // draw a circle
    graphics2.lineStyle(0);
    graphics2.beginFill(0xFFFF0B, 0.5);
    graphics2.drawCircle(470, 200, 200);
    graphics2.endFill();

    graphics2.lineStyle(20, 0x33FF00);
    graphics2.moveTo(30,30);
    graphics2.lineTo(600, 300);

    var graphics = game.add.graphics(0, 0);

    graphics.beginFill(0xa9a904);
    graphics.lineStyle(4, 0xfd02eb, 1);
    
    graphics.drawCircle(0, 0, 100);
    graphics.anchor.set(0.5);
    graphics.endFill();
    
    game.physics.arcade.enable(graphics);

    graphics.body.velocity.x = 100;
    graphics.body.gravity.y = 100;
    graphics.body.bounce.set(1);//скорость отскока 1=100%
    graphics.body.collideWorldBounds = true;


    //window.graphics = graphics;
}
