import {scene_second as scene2} from './game.js';
const scene1 = {
    key:'first_scene',
    preload:preload,
    create:create,
    update:update
}
const config = {
    width:800,
    height:600,
    type:Phaser.CANVAS,
    parent:'game_phaser',
    physics:{
        default:'arcade',
        arcade : {gravity:{y:0},debug:true}
    },
    scene : [scene1,scene2]
}
const game = new Phaser.Game(config)

function preload(){
    this.load.image('fond','assets/paysagegame.png')
}
function create(){
    this.add.image(380,195,'fond')
    var titre= this.add.text(400,100,'LITTLE ADVENTURE',{
        fontSize:'70px',
        color:'#001affff',
        padding: { x: 10, y: 5 }

    }).setOrigin(0.5)
    var text= this.add.text(400,300,'START',{
        fontSize:'50px',
        color:'#ffffff',
        backgroundColor:"#001dc2ff",
        padding: { x: 10, y: 5 }

    }).setInteractive().setOrigin(0.5)
    text.on('pointerdown',()=>{
        this.scene.start('second_scene')
    })
}
function update(){

}