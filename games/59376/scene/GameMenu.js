import { GAMEOPTIONS } from '../scene/GameOption.js'
import BlockNumber from '../scene/prefabs/blocknumber.js'
import Block from '../scene/prefabs/block.js'
import CustomText from '../scene/prefabs/customtext.js'
import Tween from './prefabs/tween.js'

let current_scene

export default class GameMenu extends Phaser.Scene {

    constructor() {
        super({ key: 'game_menu' })
    }

    create()
    {
        console.log(window.SDK_OPTIONS)
        current_scene= this
        this.bg= this.add.tileSprite(360,640,720,1280,'bg')

    //    console.log(Math.trunc(131072/1000) )
        UIDiamond(this);
        if(localStorage.getItem('diamond')==undefined) localStorage.setItem('diamond',GAMEOPTIONS.START_DIAMOND)
        if(localStorage.getItem('hscore')==undefined) localStorage.setItem('hscore',0)
        txtDiamond.text = localStorage.getItem('diamond')
        txtHightScore.text = localStorage.getItem('hscore')

        this.events.on("ads_completed_gamemenu", function(data){
                console.log('ads_completed_gamemenu')
                this.scene.start('game_play')           
        }, this);

    }

    update()
    {
        this.bg.tilePositionX -= 0.5

    }
}



let txtDiamond
let txtHightScore
let tw

function UIDiamond(scene) {

    tw= new Tween()
    let btnPlay = scene.add.image(0, 640, "btnPlay").setScale(1,0.9).setInteractive()
        btnPlay.on('pointerdown', function (pointer) {
            // Tween.tween(scene,btnPlay,'btnPlay')
            tw.BtnClickAnim(scene,btnPlay,'btnPlay')
        })
    tw.ObjectMove(scene,btnPlay,360,640)    
    

    let diamond_bg = scene.add.image(0, 0, "bgButton").setScale(0.8,0.7)
    let diamond_icon = new Block(scene,diamond_bg.x-60,diamond_bg.y,'diamond1').setScale(0.6)
        txtDiamond = new CustomText(scene, diamond_icon.x+80, diamond_icon.y, 'popin', 0, 40)
    let Diamond_Comtainer = new BlockNumber(scene, 120, 60, [diamond_bg,diamond_icon,txtDiamond])

    let crown_bg = scene.add.image(0, 0, "bgButton").setScale(0.8,0.7)
    let crown_icon = new Block(scene,crown_bg.x-60,crown_bg.y,'crown').setScale(0.5)
        txtHightScore = new CustomText(scene, crown_icon.x+80, crown_icon.y, 'popin', 0, 40)
    let Crown_Container = new BlockNumber(scene, 600, 60, [crown_bg,crown_icon,txtHightScore])

}