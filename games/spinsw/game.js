var game = new Phaser.Game(1000, 620, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('bullet', 'images/bullet.png');
    //game.load.image('bullet', 'images/spin_glass.png');
    game.load.image('enemyBullet', 'images/enemy-bullet.png');
    game.load.spritesheet('invader', 'images/spin1.png', 100, 100);
    game.load.image('ship', 'images/spin_ufo1.png');
    game.load.image('glass', 'images/spin_glass.png');
    game.load.spritesheet('kaboom', 'images/explode.png', 128, 128);
    game.load.image('starfield2', 'images/kosmos.jpg');
    game.load.image('starfield', 'images/kosmos2.jpeg');
    game.load.image('background', 'images/background2.png');
    game.load.spritesheet('car', 'images/emojione.png', 638 / 11, 275 / 5);
    game.load.image('logo', 'images/spinner_big.png');
    game.load.audio('beat1', 'audio/beat1.mp3');
    game.load.audio('beat2', 'audio/beat2.mp3');
    game.load.audio('beat3', 'audio/beat3.mp3');
    game.load.audio('beat4', 'audio/beat4.mp3');
    game.load.audio('music', 'audio/spin_sw_music1.mp3');
    
}

var car;        
var player;
var aliens;
var bullets, bullets2;
var bulletTime = 0;
var cursors;
var fireButton;
var explosions, explosions2;
var starfield;
var score = 0;
var scoreS = 0;        
var scoreString = '';
var scoreStringS = '';        
var scoreText;
var scoreTextS;        
var lives, livesS;
var enemyBullet;
var firingTimer = 0;
var stateText;
var livingEnemies = [];
   
var aliGlass;
        
var pX = 500;
var pY = 570;        
var tween1;  
var logo;        
var logS = false;        
        
var lX = 200; 
var lK = 10;   
var lSpeed = 125;        
//var aliGlas, alien;        

document.body.oncontextmenu = function() { fireBullet2 (); return false; };
//z.addEventListener("mousemove",function(){});

function create() {
    
    

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  The scrolling starfield background
    starfield = game.add.sprite(0, 0, 'starfield');
    starfield.name = starfield;

    logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5);
    logo.scale.setTo(0.01);
    game.add.tween(logo.scale).to( { x: 1, y: 1 }, 10000, Phaser.Easing.Linear.None, true, 1, 1000, true);
    game.add.tween(logo).to( { angle: 1440 }, 10000, Phaser.Easing.Linear.None, true, 500, 1000, true);
    //logo.fixedToCamera = true;
    music = game.add.audio('music');
    music.allowMultiple = true;
    beat1 = game.add.audio('beat1');
    beat1.allowMultiple = true;
    beat2 = game.add.audio('beat2');
    beat2.allowMultiple = true;
    beat3 = game.add.audio('beat3');
    beat3.allowMultiple = true;
    beat4 = game.add.audio('beat4');
    beat4.allowMultiple = true;
    //  Our bullet group
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    //bullets.setAll.bulletAngleOffset = 90;
    //bullets.scale.setTo(0.1);
    bullets.setAll('scale.x', 0.6);
    bullets.setAll('scale.y', 0.6);
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
    
    bullets2 = game.add.group();
    bullets2.enableBody = true;
    bullets2.physicsBodyType = Phaser.Physics.ARCADE;
    bullets2.createMultiple(30, 'glass');
    //bullets2.setAll.bulletAngleOffset = 90;
    bullets2.setAll('scale.x', 0.06);
    bullets2.setAll('scale.y', 0.06);
    bullets2.setAll('anchor.x', 0.5);
    bullets2.setAll('anchor.y', 1);
    bullets2.setAll('outOfBoundsKill', true);
    bullets2.setAll('checkWorldBounds', true);

    // The enemy's bullets
    enemyBullets = game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'enemyBullet');
    enemyBullets.setAll('anchor.x', 0.5);
    enemyBullets.setAll('anchor.y', 1);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);


    //  The baddies!
    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;
    
    aliGlass = game.add.group();
    aliGlass.enableBody = true;
    aliGlass.physicsBodyType = Phaser.Physics.ARCADE;


    

    //  An explosion pool
    explosions = game.add.group();
    explosions.createMultiple(30, 'kaboom');
    explosions.forEach(setupInvader, this);
    
//    explosions2 = game.add.group();
//    explosions2.createMultiple(30, 'glass');
//    explosions2.forEach(setupInvader2, this);

    //  And some controls to play the game with
    game.input.onDown.add(removeLogo, this);
    cursors = game.input.keyboard.createCursorKeys();
    //fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
}
function removeLogo () {

    game.input.onDown.remove(removeLogo, this);
    logo.kill();
    
    music.play();
    createAliens();
    createPlayer();
    createScore();
    starfield.loadTexture('starfield2');
    logS = true;
}
    
function createPlayer() {
    //  The hero!
    car = game.add.sprite(pX,pY, 'car');
    car.anchor.set(0.5);
    car.scale.setTo(0.6);
    
    glass = game.add.sprite(pX,pY, 'glass');
    glass.anchor.setTo(0.5);
    glass.scale.setTo(0.12);
    
    player = game.add.sprite(pX, pY, 'ship');
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.6);
    player.angle = -90;
    game.physics.enable(player, Phaser.Physics.ARCADE);
    
}
        
function createAliens () {

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < lK; x++)
        {
            var alien = aliens.create(x * 65 + 50, y * 65 + 10, 'invader',game.rnd.integerInRange(0, 7));
            alien.anchor.setTo(0.5, 0.5);
            alien.scale.set(0.5);
            //alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            //alien.play('fly');
            //alien.body.moves = false;
            var rotSpin = game.rnd.realInRange(-700, 700);
        alien.body.angularVelocity = rotSpin;
            
        var aliGlas = aliGlass.create(alien.body.x, alien.body.y, 'glass');
        aliGlas.anchor.setTo(0.5);
        aliGlas.scale.setTo(0.13);   
        aliGlas.alpha = 0;    
        }
    }

    aliens.x = lX;
    aliens.y = 50;
    aliGlass.x = lX;
    aliGlass.y = 50;
    
    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = game.add.tween(aliens).to( { x: lX + 100 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    var tween = game.add.tween(aliGlass).to( { x: lX + 100 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    
    //  When the tween loops it calls descend
    tween.onLoop.add(descend, this);
}
    function createScore() {
        //  The score
    scoreString = 'Уничтожено: ';
    scoreText = game.add.text(10, 0, scoreString + score, { font: '30px Arial', fill: '#d81d1d' });
    scoreText.stroke = "#94ce5a";
    scoreText.strokeThickness = 2;
    scoreText.setShadow(2, 2, "#4ee866", 2, false, false);

    scoreStringS = 'Остановленных: ';
    scoreTextS = game.add.text(300, 0, scoreStringS + scoreS, { font: '30px Arial', fill: '#080000' });
    scoreTextS.stroke = "#94ce5a";
    scoreTextS.strokeThickness = 2;
    scoreTextS.setShadow(2, 2, "#4ee866", 2, false, false);
    //  Lives
    lives = game.add.group();
    livesS = game.add.text(game.world.width - 350, 0, 'Попыток: ', { font: '30px Arial', fill: '#078383' });
    livesS.stroke = "#b9d960";
    livesS.strokeThickness = 2;
    livesS.setShadow(2, 2, "#4ee866", 2, false, false);           
    //  Text
    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '50px Arial Black', fill: 'rgba(6, 27, 42, 0.84)' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;
    stateText.stroke = "rgba(135, 203, 67, 0.83)";
    stateText.strokeThickness = 16;
    stateText.setShadow(2, 2, "#d5db32", 2, true, false);
    stateText.align = 'center';

    for (var i = 0; i < 3; i++) 
    {
        var ship = lives.create(game.world.width - 160 + (50 * i), 25, 'car',10);
        ship.anchor.setTo(0.5, 0.5);
        //ship.angle = 90;
        ship.alpha = 0.5;
    }
    }    

function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

}
function setupInvader2 (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    //invader.animations.add('glass');

}        

function descend() {

    aliens.y += 10;
    

}

function update() {
    //aliGlas.x = alien.x + 500;
        
    if(logS === true) {car.x = player.x ;
    car.y = player.y ;
    glass.x = player.x;
    glass.y = player.y;
    
    player.rotation = game.physics.arcade.angleToPointer(player);

    //  Scroll the background
    //starfield.tilePosition.y += 2;

    if (player.alive)
    {
        //  Reset the player, then check for movement keys
        player.body.velocity.setTo(0, 0);

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
        }

        //  Firing?
        if (game.input.activePointer.leftButton.isDown)
        {
            fireBullet();
        }
        if (game.input.activePointer.rightButton.isDown)
        {
            fireBullet2();
        }

        if (game.time.now > firingTimer)
        {
            enemyFires();
        }
    }

        //  Run collision
        game.physics.arcade.overlap(bullets2, aliens, collisionHandler2, null, this);
        game.physics.arcade.overlap( aliGlass, aliens, collisionHandler3, null, this);
        game.physics.arcade.overlap(bullets, aliGlass, collisionHandler4, null, this);
        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
    }

}

function render() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game.debug.body(aliens.children[i]);
    // }

}

function collisionHandler (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    bullet.kill();
    if(alien.body.angularVelocity === 0){
        alien.kill();
        beat4.play();
    score += 1;
    scoreText.text = scoreString + score;
    
    scoreS -= 1; 
    scoreTextS.text = scoreStringS + scoreS;    
    }else{beat1.play()}

    //  Increase the score

    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('kaboom', 30, false, true);

    if (aliens.countLiving() == 0)
    {
//        score += 1000;
//        scoreText.text = scoreString + score;

        lX -= 25;
        lK += 1;
        lSpeed +=25;
        
        music.stop();
        
        enemyBullets.callAll('kill',this);
        stateText.text = " В этой битве мы победили, \n но война ещё не закончена. \n Кликни чтобы продолжить!";
        stateText.visible = true;
        
        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }

}
function collisionHandler2 (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    bullet.kill();
    
    //alien.kill();
if(alien.body.angularVelocity < 0 ||alien.body.angularVelocity > 0){
    alien.body.angularVelocity = 0;
    //aliGlas.kill();
    
    scoreS += 1;
    scoreTextS.text = scoreStringS + scoreS;
    
}
    //  Increase the score

    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
//explosion = game.add.sprite(alien.body.x, alien.body.y, 'glass');
//explosion.anchor.setTo(0.5);
//explosion.scale.setTo(0.18);
    //explosion.animation.add(alien.body.x, alien.body.y);
    //explosion.play('glass', 30, false, true);

    

}        
function collisionHandler3 (aliGlas, alien) {   
    if(alien.body.angularVelocity === 0) {
        aliGlas.alpha = 1;
    }
    
}     
function collisionHandler4 (bullet, aliGlas) {   
    if(aliGlas.alpha === 1) {
        aliGlas.kill();
    }
    
}        

function enemyHitsPlayer (player,bullet) {
    
    bullet.kill();
    beat4.play();

    live = lives.getFirstAlive();

    if (live)
    {
        live.kill();
    }

    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
    explosion.reset(player.body.x, player.body.y);
    explosion.play('kaboom', 30, false, true);

    // When the player dies
    if (lives.countLiving() < 1)
    {
        player.kill();
        enemyBullets.callAll('kill');
        
tween1 = game.add.tween(player).to( { y: 550 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
lX = 200;
lK =10; 
lSpeed = 125;        
        
        stateText.text=" НЕУДАЧНАЯ ПОПЫТКА \n в следующий раз повезёт. \n Кликни чтобы начать заново!";
        stateText.visible = true;
        
        music.stop();
        car.frame = 34;
        
        score = 0;//сброс очков
        scoreS = 0;
        scoreText.text = scoreString + score;
        scoreTextS.text = scoreStringS + scoreS;
        
        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }

}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    livingEnemies.length=0;

    aliens.forEachAlive(function(alien){

        // put every living enemy in an array
        livingEnemies.push(alien);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {
        
        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(enemyBullet,player,lSpeed);
        firingTimer = game.time.now + 2000;
    }

}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        beat3.play();
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            length = this.player.height * 0.65;
        x = this.player.x + (Math.cos(this.player.rotation - 0.45) * length);
        y = this.player.y + (Math.sin(this.player.rotation - 0.45) * length) ;
            bullet.reset(x, y );
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 700;
            
            bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);}
        }
    

}
function fireBullet2 () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets2.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
           length = this.player.height * 0.75;
        x = this.player.x + (Math.cos(this.player.rotation + 0.85) * length);
        y = this.player.y + (Math.sin(this.player.rotation + 0.85) * length) ;
            bullet.reset(x, y );
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 700;
            
            bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);}
        }
    

}        

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function restart () {
    if(player !== null ){
        player.kill();
    }
    car.kill();
    glass.kill();
        
    //  A new level starts
    
    //resets the life count
    lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    aliens.removeAll();
    aliGlass.removeAll();
    createAliens();

    //revives the player
    createPlayer();
    music.play();
//player.revive();
    //car.revive();
    //hides the text
    stateText.visible = false;

}
