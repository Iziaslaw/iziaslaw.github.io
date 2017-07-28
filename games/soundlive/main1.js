var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameDiv', { preload: preload, create: create, update: update });

var bmd;
var map;
var layer;
var marker;
var currentTile = 0;
var cursors;
var player;
var facing = 'left';
var jumpTimer = 0;
var jumpButton;

function preload() {

//    game.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

}

function create() {

    game.stage.backgroundColor = '#2d2d2d';

    //  Creates a blank tilemap
    map = game.add.tilemap();

    //  This is our tileset - it's just a BitmapData filled with a selection of randomly colored tiles
    //  but you could generate anything here
    bmd = game.make.bitmapData(32 * 25, 32 * 2);

    var colors = Phaser.Color.HSVColorWheel();

    var i = 0;

    for (var y = 0; y < 2; y++)
    {
        for (var x = 0; x < 25; x++)
        {
            bmd.rect(x * 32, y * 32, 32, 32, colors[i].rgba);
            i += 6;
        }
    }

    //  Add a Tileset image to the map
    map.addTilesetImage('tiles', bmd);

    //  Creates a new blank layer and sets the map dimensions.
    //  In this case the map is 40x30 tiles in size and the tiles are 32x32 pixels in size.
    layer = map.create('level1', 40, 30, 32, 32);

    //  Populate some tiles for our player to start on
    map.putTile(30, 2, 10, layer);
    map.putTile(60, 3, 10, layer);
    map.putTile(9, 5, 20, layer);

    map.setCollisionByExclusion([0]);

    //  Create our tile selector at the top of the screen
    createTileSelector();

    
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.input.addMoveCallback(updateMarker, this);

}

function update() {

    if (cursors.left.isDown)
    {
        
    }
    else if (cursors.right.isDown)
    {
        
    }
        
}

function pickTile(sprite, pointer) {

    var x = game.math.snapToFloor(pointer.x, 32, 0);
    var y = game.math.snapToFloor(pointer.y, 32, 0);

    currentTileMarker.x = x;
    currentTileMarker.y = y;

    x /= 32;
    y /= 32;

    currentTile = x + (y * 25);

}

function updateMarker() {

    marker.x = layer.getTileX(game.input.activePointer.worldX) * 32;
    marker.y = layer.getTileY(game.input.activePointer.worldY) * 32;

    if (game.input.mousePointer.isDown && marker.y > 32)
    {
        map.putTile(currentTile, layer.getTileX(marker.x), layer.getTileY(marker.y), layer);
    }

}

function createTileSelector() {

    //  Our tile selection window
    var tileSelector = game.add.group();

    var tileSelectorBackground = game.make.graphics();
    tileSelectorBackground.beginFill(0x000000, 0.8);
    tileSelectorBackground.drawRect(0, 0, 800, 66);
    tileSelectorBackground.endFill();

    tileSelector.add(tileSelectorBackground);

    var tileStrip = tileSelector.create(1, 1, bmd);
    tileStrip.inputEnabled = true;
    tileStrip.events.onInputDown.add(pickTile, this);

    //  Our painting marker
    marker = game.add.graphics();
    marker.lineStyle(2, 0x000000, 1);
    marker.drawRect(0, 0, 32, 32);

    //  Our current tile marker
    currentTileMarker = game.add.graphics();
    currentTileMarker.lineStyle(1, 0xffffff, 1);
    currentTileMarker.drawRect(0, 0, 32, 32);

    tileSelector.add(currentTileMarker);

}