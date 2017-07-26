var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv', { preload: preload, create: create, update: update});
    
var background;
var button,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18;

var flag = true;    
var emitter, rocket,kick; 
var srain;    

    var c,c1,c2,c3,c4,c5,c6;
    var ee = false;
    var h,ha,x,y;
    var cc1,cc2,cc3,cc4,cx2,cx4,cy2,cy3,cy4,c1sx,c1sy,c2sx,c2sy,c4sy,c6sx,c6sy,c2ang,c4ang;
var ball;var butColW,butColH,butBlH;
var bu1,bu2,bu3,bu4,bu5,bu6,bu7,bu8,bu9,bu10,bu11;

function preload() {
    game.load.spritesheet('buttonB', 'images/piano_keys_black.png', 26, 30);
    game.load.spritesheet('buttonC', 'images/piano_keys_color.png',28,60 );
    game.load.audio('piano', 'audio/piano_c3-c5.mp3');
    
//    game.load.spritesheet('face', 'image/char_1/face_2_128_128.png', 128, 128);
//    game.load.spritesheet('eyeb', 'image/char_1/eyebrow_2_32_12.png', 32, 12);
//    game.load.spritesheet('eye', 'image/char_1/eye_2_32_32.png', 32, 32);
//    game.load.spritesheet('mouth', 'image/char_1/mouth_2_36_26.png', 36, 26);
    //game.load.spritesheet('pokemons', 'image/pokemons_493.png', 71, 70);//493
    
}
    
function create() {
    
    game.world.setBounds(0, 0, 800, 450);
 butColW = game.world.width / 11;
 butColH = game.world.height / 3;
 butBlH = game.world.height / 6;    

    game.physics.arcade.gravity.y = 100;
    
    bu1 = game.add.sprite(0, game.world.height - 10, 'buttonC', 15);
    button1 = game.add.button(0, game.world.height , 'buttonC', null, this, 16, 17, 15);
    button1.name = 'a3';
    button1.key = 6;
    //button1.scale.setTo(4, 4);
    button1.width = butColW;
    button1.height = butColH;
    button1.events.onInputDown.add(music);
    //button1.anchor.setTo(0.5, 0.5);
    //button2.angle = 24;
    //button3.width = 300;

    bu2 = game.add.sprite(button1.x + butColW , button1.y, 'buttonC', 18);
    button2 = game.add.button(button1.x + butColW , button1.y, 'buttonC', null, this, 19, 20, 18);
    button2.name = 'b3';
    button2.key = 7;
    //button2.scale.setTo(4, 4);
    button2.width = butColW;
    button2.height = butColH;
    button2.events.onInputDown.add(music);    
    
    bu3 = game.add.sprite(button1.x + butColW *2, button1.y, 'buttonC', 0);
    button3 = game.add.button(button1.x + butColW *2, button1.y, 'buttonC', null, this, 1, 2, 0);
    button3.name = 'c4';
    button3.key = 1;
    //button3.scale.setTo(4, 4);
    button3.width = butColW;
    button3.height = butColH;
    //button3.events.onInputOver.add(music);
    //button3.events.onInputOut.add(music);
    button3.events.onInputDown.add(music);
    //button3.events.onInputUp.add(function(){pianoAll.stop(batton.name)});
    
    bu4 = game.add.sprite(button1.x + butColW *3, button1.y, 'buttonC', 3);
    button4 = game.add.button(button1.x + butColW *3, button1.y, 'buttonC', null, this, 4, 5, 3);
    button4.name = 'd4';
    button4.key = 2;
    //button4.scale.setTo(4, 4);
    button4.width = butColW;
    button4.height = butColH;
    //button4.addKey(Phaser.Keyboard.W);
    button4.events.onInputDown.add(music);
    
    bu5 = game.add.sprite(button1.x + butColW *4, button1.y, 'buttonC', 6);
    button5 = game.add.button(button1.x + butColW *4, button1.y, 'buttonC', null, this, 7, 8, 6);
    button5.name = 'e4';
    button5.key = 3;
    //button5.scale.setTo(4, 4);
    button5.width = butColW;
    button5.height = butColH;
    button5.events.onInputDown.add(music);
    
    bu6 = game.add.sprite(button1.x + butColW *5, button1.y, 'buttonC', 9);
    button6 = game.add.button(button1.x + butColW *5, button1.y, 'buttonC', null, this, 10, 11, 9);
    button6.name = 'f4';
    button6.key = 4;
    //button6.scale.setTo(4, 4);
    button6.width = butColW;
    button6.height = butColH;
    button6.events.onInputDown.add(music);
    
    bu7 = game.add.sprite(button1.x + butColW *6, button1.y, 'buttonC', 12);
    button7 = game.add.button(button1.x + butColW *6, button1.y, 'buttonC', null, this, 13, 14, 12);
    button7.name = 'g4';
    button7.key = 5;
    //button7.scale.setTo(4, 4);
    button7.width = butColW;
    button7.height = butColH;
    button7.events.onInputDown.add(music);
    
    bu8 = game.add.sprite(button1.x + butColW *7, button1.y, 'buttonC', 15);
    button8 = game.add.button(button1.x + butColW *7, button1.y, 'buttonC', null, this, 16, 17, 15);
    button8.name = 'a4';
    button8.key = 6;
    //button8.scale.setTo(4, 4);
    button8.width = butColW;
    button8.height = butColH;
    button8.events.onInputDown.add(music);
    
    bu9 = game.add.sprite(button1.x + butColW *8, button1.y, 'buttonC', 18);
    button9 = game.add.button(button1.x + butColW *8, button1.y, 'buttonC', null, this, 19, 20, 18);
    button9.name = 'b4';
    button9.key = 7;
    //button9.scale.setTo(4, 4);
    button9.width = butColW;
    button9.height = butColH;
    button9.events.onInputDown.add(music);
    
    bu10 = game.add.sprite(button1.x + butColW *9, button1.y, 'buttonC', 0);
    button10 = game.add.button(button1.x + butColW *9, button1.y, 'buttonC', null, this, 1, 2, 0);
    button10.name = 'c5';
    button10.key = 1;
    //button10.scale.setTo(4, 4);
    button10.width = butColW;
    button10.height = butColH;
    button10.events.onInputDown.add(music);
    
    bu11 = game.add.sprite(button1.x + butColW *10, button1.y, 'buttonC', 3);
    button11 = game.add.button(button1.x + butColW *10, button1.y, 'buttonC', null, this, 4, 5, 3);
    button11.name = 'd5';
    button11.key = 2;
    //button11.scale.setTo(4, 4);
    button11.width = butColW;
    button11.height = butColH;
    button11.events.onInputDown.add(music);
    
    button12 = game.add.button(button1.x + butColW/2, button1.y, 'buttonB', null, this, 0, 1, 2);
    button12.name = 'a#3';
    //button12.scale.setTo(4, 4);
    button12.width = butColW;
    button12.height = butBlH;
    button12.events.onInputDown.add(music1);
    
    button13 = game.add.button(button1.x + butColW/2 + butColW *2, button1.y, 'buttonB', null, this, 0, 1, 2);
    button13.name = 'c#4';
    //button13.scale.setTo(4, 4);
    button13.width = butColW;
    button13.height = butBlH;
    button13.events.onInputDown.add(music1);
    
    button14 = game.add.button(button1.x + butColW/2 + butColW * 3, button1.y, 'buttonB', null, this, 0, 1, 2);
    button14.name = 'd#4';
    //button14.scale.setTo(4, 4);
    button14.width = butColW;
    button14.height = butBlH;
    button14.events.onInputDown.add(music1);
    
    button15 = game.add.button(button1.x + butColW/2 + butColW *5, button1.y, 'buttonB', null, this, 0, 1, 2);
    button15.name = 'f#4';
    //button15.scale.setTo(4, 4);
    button15.width = butColW;
    button15.height = butBlH;
    button15.events.onInputDown.add(music1);
    
    button16 = game.add.button(button1.x + butColW/2 + butColW *6, button1.y, 'buttonB', null, this, 0, 1, 2);
    button16.name = 'g#4';
    //button16.scale.setTo(4, 4);
    button16.width = butColW;
    button16.height = butBlH;
    button16.events.onInputDown.add(music1);
    
    button17 = game.add.button(button1.x + butColW/2 + butColW *7, button1.y, 'buttonB', null, this, 0, 1, 2);
    button17.name = 'a#4';
    //button17.scale.setTo(4, 4);
    button17.width = butColW;
    button17.height = butBlH;
    button17.events.onInputDown.add(music1);
    
    button18 = game.add.button(button1.x + butColW/2 + butColW * 9, button1.y, 'buttonB', null, this, 0, 1, 2);
    button18.name = 'c#5';
    //button18.scale.setTo(4, 4);
    button18.width = butColW;
    button18.height = butBlH;
    button18.events.onInputDown.add(music1);
    //text buttons
    var tb1 = game.add.text(button3.x + butColW/2, button1.y + 100, "C", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb2 = game.add.text(button4.x + butColW/2, button1.y + 100, "D", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb3 = game.add.text(button5.x + butColW/2, button1.y + 100, "E", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb4 = game.add.text(button6.x + butColW/2, button1.y + 100, "F", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb5 = game.add.text(button7.x + butColW/2, button1.y + 100, "G", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb6 = game.add.text(button8.x + butColW/2, button1.y + 100, "A", { font: "15px Arial", fill: "#79646a", align: "center" });
    var tb7 = game.add.text(button9.x + butColW/2, button1.y + 100, "B", { font: "15px Arial", fill: "#79646a", align: "center" });
    
    ball = game.add.graphics(0, 0);

    ball.beginFill(0xa9a904);
    ball.lineStyle(4, 0xfd02eb, 1);
    
    ball.drawCircle(0, 0, 100);
    ball.anchor.set(0.5);
    ball.endFill();
    
    game.physics.arcade.enable(ball);

    ball.body.velocity.x = 100;
    ball.body.gravity.y = 100;
    ball.body.bounce.set(1);//скорость отскока 1=100%
    ball.body.collideWorldBounds = true;
    
    pianoAll = game.add.audio('piano');
    pianoAll.allowMultiple = true;
    

//    pianoAll.addMarker('c301', 0, 0.9);
//    pianoAll.addMarker('c302', 1, 0.9);
//    pianoAll.addMarker('c303', 2, 0.9);
//    pianoAll.addMarker('c304', 3, 0.9);
//    pianoAll.addMarker('c305', 4, 0.9);
//    pianoAll.addMarker('c306', 5, 0.9);
//    pianoAll.addMarker('c307', 6, 0.9);
//    pianoAll.addMarker('c308', 7, 0.9);
//    pianoAll.addMarker('c309', 8, 0.9);
    pianoAll.addMarker('a3',  9,  0.8);
    pianoAll.addMarker('a#3', 10, 0.8);
    pianoAll.addMarker('b3',  11, 0.8);
    pianoAll.addMarker('c4',  12, 0.8);
    pianoAll.addMarker('c#4', 13, 0.8);
    pianoAll.addMarker('d4',  14, 0.8);
    pianoAll.addMarker('d#4', 15, 0.8);
    pianoAll.addMarker('e4',  16, 0.8);
    pianoAll.addMarker('f4',  17, 0.8);
    pianoAll.addMarker('f#4', 18, 0.8);
    pianoAll.addMarker('g4',  19, 0.8);
    pianoAll.addMarker('g#4', 20, 0.8);
    pianoAll.addMarker('a4',  21, 0.8);
    pianoAll.addMarker('a#4', 22, 0.8);
    pianoAll.addMarker('b4',  23, 0.8);
    pianoAll.addMarker('c5',  24, 0.8);
    pianoAll.addMarker('c#5', 25, 0.8);
    pianoAll.addMarker('d5',  26, 0.8);
//    pianoAll.addMarker('c504', 27, 0.9);
//    pianoAll.addMarker('c505', 28, 0.9);
//    pianoAll.addMarker('c506', 29, 0.9);
//    pianoAll.addMarker('c507', 30, 0.9);
//    pianoAll.addMarker('c508', 31, 0.9);
//    pianoAll.addMarker('c509', 32, 0.9);
//    pianoAll.addMarker('c510', 33, 0.9);
//    pianoAll.addMarker('c511', 34, 0.9);
//    pianoAll.addMarker('c512', 35, 0.9);
    
    cursors = game.input.keyboard.createCursorKeys();
    //button.events.onInputDown.add(music, this);
    //game.input.onDown.add();
}    
    
    
function music(button) {
    pianoAll.play(button.name);
   
    
    
    
        
        ee = true;
    
     
    }
    function music1(button) {
        pianoAll.play(button.name);
        
        rocket = game.add.emitter(button.x + butColW, 400, 2);
        rocket.makeParticles('buttonB', [0,1,2], 15, true, true);
        //rocket.minRotation = 0;
	    //rocket.maxRotation = 0;
        rocket.setRotation(0,0);
        rocket.setScale(1,1,5,5);//setSize(wigth,height)
        rocket.minParticleSpeed.setTo(0, -1400);
        rocket.maxParticleSpeed.setTo(0, -1400);
        //rocket.setYSpeed(-1500);
        rocket.bounce.setTo(0.5, 0.5);
        rocket.gravity = 0;
        
        game.physics.enable(rocket, Phaser.Physics.ARCADE);
        
        rocket.start(true, 3500,null, 1);
    }
    
    function update() {
        
        
        if(ee) {
        //game.physics.arcade.collide(emitter);
        //c1.y = 1;
            
                game.physics.arcade.collide(kick, ball);
                game.physics.arcade.collide(rocket, ball);
                game.physics.arcade.overlap(rocket, ball, collision, null, this);

        }
        
    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
        //music('c4');
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
        
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.E)) {
        
    }    
    }
    function collision(roc, emi) {
        
        
    }