var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameDiv', { preload: preload, create: create, update: update, render: render });

//var m;    
var emitter, emitter2;
var timer = 0;
var total = 0;
var timer1 = 0;
var total1 = 0; 
var timer2 = 0;
var total2 = 0;
    var timerBeat = 0;
var totalBeat = 0;
    var timerBass = 0;
var totalBass = 0;
    var fW = 16;
    var fH = 16;
var cursor;var cursorTw;

function preload() {

    game.load.image('city', 'images/castle.jpg');
    game.load.image('boy', 'images/boy_with_flute.png');
    //game.load.spritesheet('stone', 'image/stones.png', 150, 110);
    game.load.spritesheet('notes', 'images/note_50_100.png', 50, 100);
    //game.load.audio('org', 'audio/church_organ04_c3_b5.ogg');
    //game.load.audio('flu', 'audio/flute_c3_b5.ogg');
    game.load.audio('piano', '../soundgame/audio/piano_c3-c5.mp3');
    game.load.audio('beat', 'audio/beat_fl_2.mp3');
    game.load.audio('bass', 'audio/choir_ooh_fl.ogg');
    game.load.image('flame', 'images/flame_camin.png');
    game.load.spritesheet('rain', 'images/rain.png', 17, 17);
    game.load.spritesheet('button', 'images/buttons3_1_mystic.png', 80, 20);

}
    var pp; // = Math.floor(Math.random() * 38);
var button1,button2,button3,button4,button5,button6,tb1,tb2,tb3,tb4,tb5,tb6,tb7,tb8;
    
var text;
var text1;    
var tilesprite; 
var count = 0;    
var city, boy, quake;
var pianoAll;
var start = false;
    var start1 = false;
    var textNoteN = 0;
    
var arPS = [];
    var arPP = [];
    var arH = [];
var pN =0;
    var pS =0;   
var note,note1, noteX, textNote; 
var lineX;
var lineY, lineOk;
    var play = false;
    var playBeat = false;
    var playBass = false;
    var startBeat = false;
    var startBass = false;
var sounds = ['c301','c302','c303','c304','c305','c306','c307','c308','c309','c310','c311','c312','c401','c402','c403','c404','c405','c406','c407','c408','c409','c410','c411','c412','c501','c502','c503','c504','c505','c506','c507','c508','c509','c510','c511','c512','silense']; 
    
    var bass,beat;
    var beatP = [];
    var beatS = [];
    var bassP = [];
    var bassS = [];
    var pN_bass = 0;
    var pS_bass = 0;
    var pN_beat = 0;
    var pS_beat = 0;
    var long = '32/4sec';
    var soundName1 = 'CHOIR ON';
    var soundName2 = 'KICK ON';
    var longN = 1;
        //var lineX;    
function create() {
game.stage.backgroundColor = '#58225a'; 
    
var board = [
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD', 
        'F1F1',
        'F1F1',
        'ADAD',
        'F1F1',
        'ADAD',
        'F1F1'        

    ];

    game.create.texture('board', board, fW * 16, fH);
    game.add.sprite(fW, fH, 'board');//.anchor.y = 1;
        
    var cursorMap = ['3'];
    game.create.texture('cursor', cursorMap, fW , fH);
    cursor = game.add.sprite(fW, fH * 37, 'cursor');
    
    
        
game.physics.startSystem(Phaser.Physics.ARCADE);
    
    var margin = 50;
  // and set the world's bounds according to the given margin
  var x = -margin;
  var y = -margin;
  var w = game.world.width + margin * 2;
  var h = game.world.height + margin * 2;
  // it's not necessary to increase height, we do it to keep uniformity
  game.world.setBounds(x, y, w, h);
  
  // we make sure camera is at position (0,0)
  game.world.camera.position.set(0);
  
  // include some props on the scene
  city = game.add.tileSprite(x, y, w, h, 'city');
  //city.scale.set(0.9);
  boy = game.add.sprite(930, 280, 'boy', 0);
    boy.scale.set(0.7);
    boy.alpha = 0.6;
//emitter2 искры камина
    emitter = game.add.emitter(350, 500, 200);
    emitter.makeParticles('flame');

    emitter.setRotation(0, 0);
    emitter.setAlpha(0.2, 0.6);
    emitter.setScale(0.5, 1);
    emitter.gravity = -200;
    emitter.start(false, 1500, 100);
    
    emitter2 = game.add.emitter(1050, 0, 400);

	emitter2.width = game.world.width / 4;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	emitter2.makeParticles('rain');

	emitter2.minParticleScale = 0.1;
	emitter2.maxParticleScale = 0.5;

	emitter2.setYSpeed(500, 700);
	emitter2.setXSpeed(-100, -90);

	emitter2.minRotation = 0;
	emitter2.maxRotation = 0;

	emitter2.start(false, 1600, 5, 0);          //    
   
button1 = game.add.button(0, 720, 'button', but1, this, 0, 1, 2);
    button1.name = 'pic2';
    button1.anchor.setTo(0, 1.0);
    button1.scale.setTo(2.0, 3.0);
    //button2.angle = 24;
    //button3.width = 300;

    button2 = game.add.button(button1.x + button1.width * 1, 720, 'button', but2, this, 0, 1, 2);
    button2.name = 'pic3';
    button2.anchor.setTo(0, 1.0);
    button2.scale.setTo(2.0, 3.0);
   
    button3 = game.add.button(button1.x + button1.width * 2, 720, 'button', but3, this, 0, 1, 2);
    button3.name = 'pic4';
    button3.anchor.setTo(0, 1.0);
    button3.scale.setTo(2.0, 3.0);
    
    button4 = game.add.button(button1.x + button1.width * 3, 720, 'button', but4, this, 0, 1, 2);
    button4.name = 'pic5';
    button4.anchor.setTo(0, 1.0);
    button4.scale.setTo(2.0, 3.0);

    button5 = game.add.button(button1.x + button1.width * 4, 720, 'button', but5, this, 0, 1, 2);
    button5.name = 'pic';
    button5.anchor.setTo(0, 1.0);
    button5.scale.setTo(2.0, 3.0);

    button6 = game.add.button(button1.x + button1.width * 5, 720, 'button', but6, this, 0, 1, 2); 
    button6.name = 'pic7';
    button6.anchor.setTo(0, 1.0);
    button6.scale.setTo(2.0, 3.0);
    button7 = game.add.button(button1.x + button1.width * 6, 720, 'button', but7, this, 0, 1, 2);
    button7.name = 'pic8';
    button7.anchor.setTo(0, 1.0);
    button7.scale.setTo(2.0, 3.0);

    button8 = game.add.button(button1.x + button1.width * 7, 720, 'button', but8, this, 0, 1, 2); 
    button8.name = 'pic9';
    button8.anchor.setTo(0, 1.0);
    button8.scale.setTo(2.0, 3.0);
    
    tb1 = game.add.text(button1.x + 10, button1.y - 40, "DESTROY", { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb2 = game.add.text(button2.x + 10, button2.y - 40, "CREATE", { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb3 = game.add.text(button3.x + 10, button3.y - 40, "PLAY", { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb4 = game.add.text(button4.x + 10, button4.y - 40, "TABS", { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb5 = game.add.text(button5.x + 10, button5.y - 40, soundName1, { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb6 = game.add.text(button6.x + 10, button6.y - 40, soundName2, { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb7 = game.add.text(button7.x + 10, button7.y - 40, long, { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    tb8 = game.add.text(button8.x + 10, button8.y - 40, "", { font: "25px mv boli", fill: "#5c18c7", align: "center" });
    
    beat = game.add.audio('beat');
    beat.allowMultiple = true;
    bass = game.add.audio('bass');
    bass.allowMultiple = true;
    secs = 0.0;
    duration = 2.0;
    for (i=1; i<=13; i++, secs++) beat.addMarker(i, secs++, duration);
    secs = 0.0;
    duration = 2.0;
    for (i=1; i<=16; i++, secs++) bass.addMarker(i, secs++, duration);
    
    

    pianoAll = game.add.audio('piano');
    pianoAll.allowMultiple = true;
    
    pianoAll.addMarker('c301', 0, 0.9);
    pianoAll.addMarker('c302', 1, 0.9);
    pianoAll.addMarker('c303', 2, 0.9);
    pianoAll.addMarker('c304', 3, 0.9);
    pianoAll.addMarker('c305', 4, 0.9);
    pianoAll.addMarker('c306', 5, 0.9);
    pianoAll.addMarker('c307', 6, 0.9);
    pianoAll.addMarker('c308', 7, 0.9);
    pianoAll.addMarker('c309', 8, 0.9);
    pianoAll.addMarker('c310', 9, 0.9);
    pianoAll.addMarker('c311', 10, 0.9);
    pianoAll.addMarker('c312', 11, 0.9);
    pianoAll.addMarker('c401', 12, 0.9);
    pianoAll.addMarker('c402', 13, 0.9);
    pianoAll.addMarker('c403', 14, 0.9);
    pianoAll.addMarker('c404', 15, 0.9);
    pianoAll.addMarker('c405', 16, 0.9);
    pianoAll.addMarker('c406', 17, 0.9);
    pianoAll.addMarker('c407', 18, 0.9);
    pianoAll.addMarker('c408', 19, 0.9);
    pianoAll.addMarker('c409', 20, 0.9);
    pianoAll.addMarker('c410', 21, 0.9);
    pianoAll.addMarker('c411', 22, 0.9);
    pianoAll.addMarker('c412', 23, 0.9);
    pianoAll.addMarker('c501', 24, 0.9);
    pianoAll.addMarker('c502', 25, 0.9);
    pianoAll.addMarker('c503', 26, 0.9);
    pianoAll.addMarker('c504', 27, 0.9);
    pianoAll.addMarker('c505', 28, 0.9);
    pianoAll.addMarker('c506', 29, 0.9);
    pianoAll.addMarker('c507', 30, 0.9);
    pianoAll.addMarker('c508', 31, 0.9);
    pianoAll.addMarker('c509', 32, 0.9);
    pianoAll.addMarker('c510', 33, 0.9);
    pianoAll.addMarker('c511', 34, 0.9);
    pianoAll.addMarker('c512', 35, 0.9);
    pianoAll.addMarker('silense', 36, 0.9);
    
    cursors = game.input.keyboard.createCursorKeys();



}
    

function dropPiano () { 
    var s = Math.floor(Math.random() * 10);
    var ss = [250,500,500, 1000,250,250,125,125,125,125,125];
    if(start === false) {
        pp = Math.floor(Math.random() * 36);
    }else if(pp <= 0) {
        pp += game.rnd.integerInRange(3, 6);
    }else if(pp >= 35){
        pp -= game.rnd.integerInRange(3, 6);
    }else{pp += game.rnd.integerInRange(-4, 4)};
    var p = sounds[pp];
    pianoAll.play(p);
    pianoAll.volume = 0.5;
    
    start = true;
    
    
emitter = game.add.emitter(20 + (pp * 5), 580 - pp, 250);//(game.world.centerX,game.world.centerY, 200);//(0 + (pp *2), 300 + pp, 250);

    emitter.makeParticles('notes', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 100, true, true);
    
    emitter.minParticleScale = 0.5;
    emitter.maxParticleScale = 1.0;
    emitter.minParticleSpeed.setTo(-200, -300);
    emitter.maxParticleSpeed.setTo(200, -400);
    emitter.gravity = 150;
    emitter.bounce.setTo(0.5, 0.5);
    emitter.angularDrag = 30;

    emitter.start(true, 4000,null, 1);//(true, 4000, null, 1);
    
    total1++;
    timer1 = game.time.now + ss[s];//скорость


}   
        
    
    
function createArray() {
    var sumLenNote = 0;
        while(sumLenNote < 4000 * longN){//for(var i=0;i<16;i++){
            var s = Math.floor(Math.random() * 10);
    var ss = [250,500,500, 1000,250,250,125,125,125,125,125];
    if(start === false) {
        pp = Math.floor(Math.random() * 36);
    }else 
        if(pp <= 0) {
        pp += game.rnd.integerInRange(3, 6);
    }else if(pp <= 3) {
        pp += game.rnd.integerInRange(2, 5);
    }else if(pp >= 33){
        pp -= game.rnd.integerInRange(2, 5);
    }else if(pp >= 36){
        pp -= game.rnd.integerInRange(3, 6);
    }else{pp += game.rnd.integerInRange(-4, 4)};
    var p = sounds[pp];
    //pianoAll.play(p);
    //pianoAll.volume = 0.5;
    
    start = true;
    sumLenNote += ss[s];
    if(sumLenNote <= 4000 * longN){        
    arH.push(pp);        
    arPS.push(ss[s]);
    arPP.push(p);
    }else{sumLenNote -= ss[s]
         }
        }
    }
    function createNote() {
        lineX  = game.add.graphics(fW,fH);
        lineY  = game.add.graphics(fW,fH);
        lineOk = game.add.graphics(fW,fH);
        note   = game.add.graphics(fW,fH);
        note1  = game.add.graphics(fW,fH);
                    
        for (var y = 0; y < 19; y++)
    {
        lineX.lineStyle(1, 0x56a71c, 1);
        lineX.moveTo(0, fH * 2 * y);  
        lineX.lineTo(fW * 64, fH * 2 * y);
    }
        for (var x = 0; x < 65; x++)
        {
            lineY.lineStyle(1, 0x56a71c, 1);
            lineY.moveTo(0 + fW * x, 0 );  
            lineY.lineTo(0 + fW * x, fH * 36); 
        }
        for (var ok = 0; ok < 4; ok++)
        {
            lineOk.lineStyle(3, 0xebd1c0, 1);
            lineOk.moveTo(0, fH * 12 * ok );  
            lineOk.lineTo( fW * 64, fH * 12 * ok); 
        }
            noteX = 0;
            start1 = true;
        for (var i = 0; i<arPP.length;i++) {
            if(arH[i] === 36) {
            //note1.beginFill(0xbfb7b2, 1);                
            note1.lineStyle(2, 0x041506, 1);
            note1.drawRect(noteX + 10, 540 - 390 , arPS[i] * 0.152 - 10, 240);
                 }else {
            note.lineStyle(2, 0x28582e, 1);         
            note.beginFill(0xFF700B, 1);         
            note.drawRect(noteX , fH * 35 - arH[i] * fH, 0.008 * arPS[i] * fW , fH);
            note.lineStyle(1, 0xe26c23, 1);
                     
        //var textNote = game.add.text(noteX + 51, 598 - arH[i] * 15 , arPP[i], { font: "10px Arial", fill: "#0a2f84", align: "center" });
        textNoteN += 1;             
                 }
            noteX += 0.008 * arPS[i] * fW;
        }
        
    }
function dropPiano1 () { 
    
    if(pN >= arPP.length -1){
        pN = 0;
        pS = 0;
    }else{pN++;
         pS++;}
    
    pianoAll.play(arPP[pN]);
    pianoAll.volume = 0.2;
    cursor.x = cursor.x + 0.008 * arPS[pS - 1] * fW;
    cursor.y = fH * 35 - arH[pN] * fH;
    
//    emitter = game.add.emitter(50 + arH[pN] * 36, 580 , 250);//(game.world.centerX,game.world.centerY, 200);//(0 + (pp *2), 300 + pp, 250);
//
//    emitter.makeParticles('notes', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 100, true, true);
//    
//    emitter.minParticleScale = 0.5;
//    emitter.maxParticleScale = 1.0;
//    emitter.minParticleSpeed.setTo(-200, -300);
//    emitter.maxParticleSpeed.setTo(200, -400);
//    emitter.gravity = -50;
//    emitter.bounce.setTo(0.5, 0.5);
//    emitter.angularDrag = 30;
//
//    emitter.start(true, 1500,null, 1);//(true, 4000, null, 1);
    
    total1++;
    timer1 = game.time.now + arPS[pS];//скорость
    
}   

function dropBass() {
    if(pS_bass >= bassS.length -1){
        pN_bass = 0;
        pS_bass = 0;
    }else{pN_bass++;
         pS_bass++;}
    
    bass.play(bassP[pN_bass]);
    bass.volume = 0.4;
    
    
    timerBass = game.time.now + bassS[pS_bass];//скорость
}
function dropBeat() {
    if(pS_beat >= beatS.length -1){
        pN_beat = 0;
        pS_beat = 0;
    }else{pN_beat++;
         pS_beat++;}
    
    beat.play(beatP[pN_beat]);
    beat.volume = 0.5;
    
    
    timerBeat = game.time.now + beatS[pS_beat];
}
    
    function but1() {
        arH.length = 0;
        arPP.length = 0;
        arPS.length = 0;
        pN = 0;
        pS = 0;
        play = false;
    }
    function but2() {
        if(arPP.length === 0) {
        start = false;
            createArray();
        }
    }
    function but3() {
        if (play === false) {
            play = true;
        }else{play = false;}
                      
    }
    function but4() {
        if(start1 == true){
        note.destroy();
        note1.destroy();            
        lineX.destroy();
        lineY.destroy();
            lineOk.destroy();
            //textNote.remove();
            //textNote.destroy();
        }
        if(arPP.length !== 0) {
        for(var i =0;i<1;i++) {
            createNote();
              }
        }
    }
    function but5() {
        bassP.length = 0;
        bassS.length = 0;
        startBass === false;
        pp = 0;
        
        if (playBass === false) {
            
            var sumLenNote = 0;
        while(sumLenNote < 4000 * longN){//for(var i=0;i<16;i++){
    var s = Math.floor(Math.random() * 5);
    var ss = [250,500,500, 1000,1000];
    if (startBass === false) {
        pp = Math.floor(Math.random() * 16) + 1;
    }else if(pp <= 0) {
        pp += game.rnd.integerInRange(2, 4);
    }else if(pp <= 2) {
        pp += game.rnd.integerInRange(1, 3);
    }else if(pp >= 14){
        pp -= game.rnd.integerInRange(1, 3);
    }else if(pp >= 16){
        pp -= game.rnd.integerInRange(2, 4);
    }else{pp += game.rnd.integerInRange(-3, 3)};
    
    //pianoAll.play(p);
    //pianoAll.volume = 0.5;
    
    startBass = true;
    sumLenNote += ss[s];
    if(sumLenNote <= 4000 * longN){        
            
    bassS.push(ss[s]);
    bassP.push(pp);
    }else{sumLenNote -= ss[s]
         }
        }
            
            soundName1 = 'CHOIR OFF';
            playBass = true;
        }else{playBass = false;
              soundName1 = 'CHOIR ON'
             }
        
    }
    function but6() {
        beatP.length = 0;
        beatS.length = 0;
        
        startBeat === false;
        pp = 0;
        
        if (playBeat === false) {
            
            var sumLenNote = 0;
        while(sumLenNote < 2000 * longN){//for(var i=0;i<16;i++){
    var s = Math.floor(Math.random() * 4);
    var ss = [500,500, 1000, 1000];
    if (startBass === false) {
        pp = Math.floor(Math.random() * 13) + 1;
    }else if(pp <= 0) {
        pp += game.rnd.integerInRange(2, 4);
    }else if(pp <= 2) {
        pp += game.rnd.integerInRange(1, 3);
    }else if(pp >= 14){
        pp -= game.rnd.integerInRange(1, 3);
    }else if(pp >= 16){
        pp -= game.rnd.integerInRange(2, 4);
    }else{pp += game.rnd.integerInRange(-3, 3)};
    
    //pianoAll.play(p);
    //pianoAll.volume = 0.5;
    
    startBeat = true;
    sumLenNote += ss[s];
    if(sumLenNote <= 2000 * longN){        
            
    beatS.push(ss[s]);
    beatP.push(pp);
    }else{sumLenNote -= ss[s]
         }
        }    
            soundName2 = 'KICK OFF';
            playBeat = true;
        }else{playBeat = false;
             soundName2 = 'KICK ON';}
        
    }
    function but7() {
        if(long === '32/4sec'){
            long = '64/8sec';
            longN = 2;
            
        }else{
            long = '32/4sec';
            longN = 1;
        } 
    }
    function but8() {
        
    }
    
function update() {
//    if (play && cursor.x <= fW * 32 * longN) {
//        //cursor.x += 0.008 * arPS[pS] * fW;//0.008 * arPS[pN] * fW * pN;
//        cursor.y = fH * 37;
//    }else {
//    };
    if(pN === 0) {
        cursor.x = fW;
        //cursor.y = fH * 37;
        
    }

    tb7.text = long;
    tb5.text = soundName1;
    tb6.text = soundName2;
    
    if (cursors.up.isDown)
    {
        //game.camera.y -= 2;
    }
    else if (cursors.down.isDown)
    {
        //game.camera.y += 2;
    }

    if (cursors.left.isDown)
    {
        //game.camera.x -= 2;
    }
    else if (cursors.right.isDown)
    {
        //game.camera.x += 2;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
    addQuake();
    
        
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.F)) {
        
         
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.D)) { 
        
 
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.G)) {
    
    
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.L)) {
    
if (total1 < 900 && game.time.now > timer1 && arPP.length !== 0)
    {
        
        dropPiano1();
    }
    }if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
        arH.length = 0;
        arPP.length = 0;
        arPS.length = 0;
        pN = 0;
        pS = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.C)) {
        if(arPP.length === 0) {
        start = false;
            createArray();
            
        }
    }
    
if (play && game.time.now > timer1)
    {
                if(arPP.length !== 0) {
                    dropPiano1();
                }
    
    }
if (playBass && game.time.now > timerBass)
    {
                if(bassP.length !== 0) {
                    dropBass();
                }
    
    }
if (playBeat && game.time.now > timerBeat)
    {
                if(beatP.length !== 0) {
                    dropBeat();
                }
    
    }
    
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.V)) {
 //
        
if (total1 < 900 && game.time.now > timer1)
    {
                if(arPP.length !== 0) {
                    dropPiano1();
                }
    }
    }

    
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.B)) {
        if(start1 === true){
        note.destroy();
        note1.destroy();            
        lineX.destroy();
        lineY.destroy();
            lineOk.destroy();
            //textNote.remove();
            //textNote.destroy();
        }else{
            start1 = true;
            
        }
        if(arPP.length !== 0) {
        for(var i =0;i<1;i++) {
            createNote();
              }
        }
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.K)) {
        
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.J)) { 
        
    }
}
    
        
    function render() {

    //game.debug.cameraInfo(game.camera, 32, 32);

}
    //Хотел заставить компьютер производить и играть красивую музыку, но то что получилось повергло меня в шок... МУЗЫКА от которой можно сойти с ума. Слабонервным не смотреть! [music for crazy]