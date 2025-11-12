export const scene_second ={
      key:'second_scene',
    preload:preload,
    create:create,
    update:update
}
let player,sol;
let cursor;
function preload(){
    this.load.image('sol','assets/sol.png')
    this.load.image('player','assets/player.png')
}
function create(){
    sol = this.add.image(400,300,'sol');
    player = this.add.image(400,570,'player')
    this.physics.add.existing(player)
    player.body.setCollideWorldBounds(true)
    cursor = this.input.keyboard.addKeys({
        jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
        right:Phaser.Input.Keyboard.KeyCodes.D,
        left:Phaser.Input.Keyboard.KeyCodes.Q
    })
}
function update(){
    let speed = 200;
    player.body.setVelocity(0)

    if (cursor.jump.isDown) player.body.setVelocityY(-speed);
    if (cursor.right.isDown) player.body.setVelocityX(speed);
    if (cursor.left.isDown) player.body.setVelocityX(-speed);
}