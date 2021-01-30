namespace SpriteKind {
    export const meet = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 200, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("boom", 500)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . 5 2 e e e e e e . . . 
        . . . . . 5 2 e e e e e e . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 300, 0)
    scene.cameraShake(3, 1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.hearts, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
tiles.setTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . 5 2 f 2 1 1 1 2 2 2 2 . . 
    . . . 5 2 f 4 4 4 4 4 4 4 4 . . 
    . . . . . . . . 4 4 2 2 2 . . . 
    . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . 5 2 f 9 1 1 9 9 9 9 . . . . 
        . . 5 2 f 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.x = randint(0, scene.screenWidth())
    mySprite2.y = randint(0, scene.screenHeight())
    mySprite2.follow(mySprite)
})
