const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var character = "sprites/ff.png";
var npc = ["sprites/woman.png", "sprites/buisnessman.png", "sprites/cook.png", "sprites/pyrotechie.png"];
var gameState = [0,1,2,3,4,5,6,7,8];
var fire = "sprites/fire.png";
var bg = ["sprites/bgs/bg1.png", "sprites/bgs/bg2.jpg", "sprites/bgs/bg3.jpg", "sprites/bgs/bg4.jpg", "sprites/bgs/bg5.png", "sprites/bgs/bg6.jpg", "sprites/bgs/bg7.png", "sprites/bgs/bg8.jpg"];

function setup() {
    createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    gameState=0;
    npc = "sprites/woman.png",(920,240,70,70);
    bg="sprites/bgs/bg1.png";

    gameState=1;
    fire.random(600-1100,50-850);
    bg="sprites/bgs/bg2.jpg";
    character=createSprite(700,240,70,70);
    if(e.keyCode == 32){
        fire.hide();
    }

    gameState=2;
    npc = "sprites/buisnessman.png",(920,240,70,70);
    bg="sprites/bgs/bg3.jpg";

    gameState=3;
    fire.random(600-1100,50-850);
    bg="sprites/bgs/bg4.jpg";
    character=createSprite(700,240,70,70);
    if(e.keyCode == 32){
        fire.hide();
    }

    gameState=4;
    npc = "sprites/cook.png",(920,240,70,70);
    bg="sprites/bgs/bg5.png";

    gameState=5;
    fire.random(600-1100,50-850);
    bg="sprites/bgs/bg6.jpg";
    character=createSprite(700,240,70,70);
    if(e.keyCode == 32){
        fire.hide();
    }

    gameState=6;
    npc = "sprites/cook.png",(920,240,70,70);
    bg="sprites/bgs/bg7.png";

    gameState=7;
    fire.random(600-1100,50-850);
    bg="sprites/bgs/bg8.jpg";
    character=createSprite(700,240,70,70);
    if(e.keyCode == 32){
        fire.hide();
    }

    gameState=8;
    Text("YOU SAVED THE CITY FROM FIRE!",400,450);
}

function draw() {
    character.display();
    npc.display();
    fire.display();
    bg.display();
}