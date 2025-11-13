export const scene_second ={
      key:'second_scene',
    preload:preload,
    create:create,
    update:update
}
let player,sol,sky;
let cursor,jump;
let max_width;
function preload(){
    this.load.image('sol','assets/sol2.png')
    this.load.image('player','assets/player.png')
    this.load.image('sky','assets/sky.png')
    this.load.audio('jump','audio/jump.mp3')
}
function create(){
  
    sky = this.add.image(400,300,'sky')
    player = this.add.image(400,380,'player')  
  
    
    jump = this.sound.add('jump')
    if (player.x <400){
         this.cameras.main.startFollow(player)

    }else{
        this.cameras.main.stopFollow(player)
    }
  this.physics.add.existing(player)
    
    player.body.setGravityY(1000)

  
     sol = this.physics.add.staticGroup();
    for (let i = 0; i < 5; i++) {
          let mat = Phaser.Math.FloatBetween(1300,1400)
          max_width =i * 864
        let s = sol.create(max_width, mat, 'sol').setOrigin(0,1);
        s.refreshBody();
    }

    this.physics.add.collider(player,sol)
    cursor = this.input.keyboard.addKeys({
        jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
        right:Phaser.Input.Keyboard.KeyCodes.D,
        left:Phaser.Input.Keyboard.KeyCodes.Q
    })
}
function update(){
    let speed = 200;
    
player.body.setVelocityX(0) //initialisation
    if (cursor.jump.isDown && player.body.blocked.down) {
        
        player.body.setVelocityY(-500  )
        jump.play()
    };
    if (cursor.right.isDown){
        player.body.setVelocityX(speed);
        
    }
    
    if (cursor.left.isDown){
         player.body.setVelocityX(-speed);
       
    }
    if (player.x >400 ){
         this.cameras.main.startFollow(player)
        
    }else{
        this.cameras.main.stopFollow(player)
    }
    if (player.x == max_width-400){
            this.cameras.main.stopFollow(player)
        }
   
   
}