//import * as test from './js/SquareText.js'
const Random = Phaser.Math.Between

import { GAMEOPTIONS } from '../scene/GameOption.js'
import BlockNumber from '../scene/prefabs/blocknumber.js'
import Block from '../scene/prefabs/block.js'
import CustomText from '../scene/prefabs/customtext.js'
import Tween from './prefabs/tween.js'
import Popup from './popup/PopupHammer.js'
import eventsCenter from './prefabs/EventsCenter.js'
// const eventsCenter = new Phaser.Events.EventEmitter()



let fieldArray
let fieldGroup
let groupBlock = []
let groupBoder=[]
let grBlockNumber
let grObjMerge = []
let countNextTurn = 0
let selectBn = false
let bnIsMoving = false
let isMerging = false
let startFill = false
let txtHightScore,txtDiamond
let txtScore
let score = 0
let number_diamond=0
let hightScore = 0
let b
let tw,popup

let use_hammer=false
let check_sound=true

let lstValue=[]
let lstColor=[]
let current_scene
let block_select

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));




export default class GamePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'game_play' })
    }

    create() {
        this.game.state = 1
        current_scene=this
        tw = new Tween()
        popup= new Popup()
        this.bg= this.add.tileSprite(360,640,720,1280,'bg2')
        this.bg.alpha=0.5

        lstValue=GAMEOPTIONS.value
        lstColor=GAMEOPTIONS.colors

        selectBn = true

        
        CreateGrid(this)
        createBorderBlock(this)
        CreateBlockNumber(this)


        //Create UI
        UIDiamond(this)
        UIHigthScore(this)
        UIScore(this)
        UIItem(this)
        UISound(this)



        this.events.on("ads_completed_gameplay", function(data){
           
                console.log('ads_completed_gameplay')
                if(block_select!=undefined)
                {
                    SelectBlock(current_scene,block_select)
                }
        }, this);

        this.events.on("ads_completed_gameover", function(data){
           
            console.log('ads_completed_gameover')
            this.scene.restart()
           
    }, this);
    }


    tileDestination(pos) {
        let a = pos * (GAMEOPTIONS.tileSize + GAMEOPTIONS.tileSpacing) + GAMEOPTIONS.tileSize / 2 + GAMEOPTIONS.tileSpacing + 100
        return a
    }

    update() {
        this.bg.tilePositionX -= 0.5

        if (!isMerging && startFill && grObjMerge.length == 0) {
            FindAll(this)
        }
    }

    
}

function Ads_Complete()
{
    console.log('ddddlkk')
}


export function DeactivePopup()
{
    use_hammer=false
    startFill=true
}


function CreateGrid(scene) {
    fieldArray = [];
    fieldGroup = scene.add.group();

    for (var i = 0; i < GAMEOPTIONS.row; i++) {
        fieldArray[i] = [];
        for (var j = 0; j < GAMEOPTIONS.colum; j++) {
            let block = scene.add.image(scene.tileDestination(j), scene.tileDestination(i) + 125, "block").setScale(0.5)
            block.alpha = 0.3;
            block.tint = '0x6e85d8'
            block.visible = 1;
            block.setDataEnabled();
            block.data.set('i', i)
            block.data.set('j', j)

            if (i == 7) {
                block.tint = '0x6e85d8'
                block.alpha = 0;
            }
            block.setInteractive().on('pointerdown', function () { GetBlockIndex(this.scene, this) });
            fieldGroup.add(block);
            fieldArray[i][j] = {
                tileNumber: null,
                tile: block,
                tileValue: 0,
                //canMerge:true
            }
        }
    }
}

function createBorderBlock(scene) {
    groupBoder=[]
    let pos = 260
    for (let i = 0; i < 3; i++) {
        let boder = new Block(scene, pos, 1100, 'boder').setScale(0.5)
        // boder.setInteractive().on('pointerdown', function () { SelectBlock(scene, this) });
        boder.alpha=0.3
        groupBoder.push(boder)
        pos += 110
    }

}

 async function CreateBlockNumber(scene) {
    let pos = 260
    for (let i = 0; i < 3; i++) {
        await delay(300)
        let r = Random(1, 100)
        if (r > 0 && r <= 20) r = 0
        if (r > 20 && r <= 40) r = 1
        if (r > 40 && r <= 60) r = 2
        if (r > 60 && r <= 70) r = 3
        if (r > 70 && r <= 80) r = 4
        if (r > 80 && r <= 100) r = 5
        if (r > 90 && r <= 93) r = 6
        if (r > 93 && r <= 96) r = 7
        if (r > 96 && r <= 100) r = 8

        countNextTurn++
        let block = NewBlock(scene,0,0,'block',lstColor[r],lstValue[r],pos)
        block.setSize(100,100)
        block.setInteractive().on('pointerdown', function () { SelectBlock(scene, this) });
        block.setDataEnabled()
        block.data.set('id',i)
        block.data.set('can_select',true)
        block.data.set('value', lstValue[r])
        groupBlock.push(block)

        scene.tweens.add({
            targets: block,
            scale: { from: 0.5, to: 0.95 },
            ease: 'Elastic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1500,
            repeat: 0,            // -1: infinity
        });
        pos += 110
    }
}


function NewBlock(scene,x,y,img,tint,txtValue,pos)
{
    let bn = scene.add.image(x,y,img).setScale(0.4)
        bn.tint = tint
    
       
        if (txtValue >1000 && txtValue < 1000000)
        {
            txtValue=Math.trunc(txtValue/1000)+"K"
    
        }
        if (txtValue >1000000){
            txtValue=Math.trunc(txtValue/1000000)+'M'
        }
    let text = new CustomText(scene, bn.x, bn.y, 'popin', txtValue, 40)
    let shadow = scene.add.image(bn.x, bn.y, "shadow").setScale(0.4).setAngle(180)
        shadow.alpha=0
    let block = scene.add.container(pos, 1100, [bn, text,shadow]);
    return block
}


function SelectBlock(scene, bn) {
    console.log(use_hammer)
    block_select=bn
    if (use_hammer){
        if (number_diamond>=150){
            fieldArray[bn.data.get('i')][bn.data.get('j')].tileValue = 0
            startFill=true
            use_hammer=false
            popup.Deactive()
            number_diamond=number_diamond-150
            localStorage.setItem('diamond',number_diamond)
            txtDiamond.updateText(number_diamond)
            let tint = bn.first.tint
            scene.add.particles(0,0,'block',{
                x: bn.x,
                y: bn.y,
                speed: { min: -600, max: 600 },
                alpha: { min: 0, max: 0.5 },
                angle: { min: 0, max: 360 },
                scale: { start: 0.3, end: 0 },
                blendMode: 'SCREEN',
                //active: false,
                frequency: 5,
                lifespan: 600,
                gravityY: 800,
                quantity: 5,
                color:[tint],
                // tint: tint,
                maxParticles : 15
            });
            SoundPlay(scene,'breaking')
            DestroyObj(bn)

        }
        else{
            // popup.UpdateTextMess()
            use_hammer=false
            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                scene.game.state = 1
                sdk.showBanner();
                number_diamond= parseInt(number_diamond)+150
                localStorage.setItem('diamond',number_diamond)
                txtDiamond.updateText(number_diamond)
                use_hammer=true
                console.log('tttt')
                }
            else{
                popup.UpdateTextMess()
            }
        }
    }
    else{
       
            if (bn.data.get('can_select')==false) return
            b= bn
            groupBoder.forEach(element => {
                element.alpha=0.3
            });
            groupBoder[bn.data.get('id')].alpha=1
        
    }
   
}

function GetBlockIndex(scene, block) {
    if (selectBn) bnIsMoving = true

    let a = fieldArray[7][block.data.get('j')].tile
    let c = getEndObject(block.data.get('j'),b,scene)

    if (b != null && c != null) {
        
        countNextTurn--
        if (countNextTurn == 0) {
            CreateBlockNumber(scene)
        }
        b.setPosition(a.x, a.y)

        MoveObject(scene, b, c.tile)
    }
    else {
        bnIsMoving = false
    }


}

function getEndObject(colum,bn,scene) {
    let e
    for (let i = 0; i < GAMEOPTIONS.row; i++) {
        if (fieldArray[i][colum].tileValue == 0 && i <7) {
            e = fieldArray[i][colum]
            return e
        }
        if(i==7)
        {
            let tile = fieldArray[6][colum].tile
            if(fieldArray[6][colum].tileValue==bn.data.get('value')){

                countNextTurn--
                if (countNextTurn == 0) {
                    CreateBlockNumber(scene)
                }
                const index = groupBlock.indexOf(bn);
                if (index > -1) { // only splice array when item is found
                    groupBlock.splice(index, 1); // 2nd parameter means remove one item only
                }
                bn.destroy()
                let v = Math.log2(fieldArray[6][colum].tileNumber.data.get('value'))
                    v = Math.pow(2, v + 1)
                UpdateValueBn(scene,fieldArray[6][colum].tileNumber,fieldArray[6][colum].tile,v)
                //return e
            }
        }
    }
}



function MoveObject(scene, bn, endObj) {
    // console.log(bn)
    // console.log(endObj)

    isMerging = true
    bnIsMoving = true
    groupBoder.forEach(element => {
        element.alpha=0.3
    });

    let t = scene.tweens.getTweensOf(bn);
    if (t.length > 0) {
        t[0].remove()
    }
    scene.tweens.add({
        targets: bn,
        y: { from: bn.y, to: endObj.y },
        ease: 'Linear',
        duration: 150,
        onComplete: function () {
            const index = groupBlock.indexOf(bn);
            if (index > -1) { // only splice array when item is found
                groupBlock.splice(index, 1); // 2nd parameter means remove one item only
            }

            bn.setScale(1.15)
            b = null
            fieldArray[endObj.data.get('i')][endObj.data.get('j')].tileNumber = bn
            fieldArray[endObj.data.get('i')][endObj.data.get('j')].tileValue = bn.data.get('value')  
            let shadow =  bn.last;
            shadow.alpha=0.5
            bn.data.set('can_select',false)
            bn.data.set('i',endObj.data.get('i'))
            bn.data.set('j',endObj.data.get('j'))

            setTimeout(function(){shadow.alpha=0},300) 
            createParticel(scene,bn)
            checkMerge(scene, endObj)
        }
    });

}

function canMerge(obj) {
    let i = obj.data.get('i')
    let j = obj.data.get('j')
    if(i<=0) return true
    if(topObj(i,j).tileValue>0) return true
    return false
}

function checkMerge(scene, endObj) {
    isMerging = true
    grObjMerge =[]
    let i = endObj.data.get('i')
    let j = endObj.data.get('j')
    let bn = fieldArray[i][j]
   

    //check top
    if (i > 0) {
        let top = topObj(i,j)
        if (bn.tileValue === top.tileValue) 
        {
            top.tileValue = 0
            grObjMerge.push(top.tileNumber)
        }
    }

    //check left
    if (j > 0) {

        let left = leftObj(i,j)
        if (left != null) {
            if (bn.tileValue === left.tileValue) {
                left.tileValue = 0
                grObjMerge.push(left.tileNumber)
            }
        }
    }

    //check right
    if (j < GAMEOPTIONS.colum - 1) {
        let right = rightObj(i,j)
        if (right != null) {
            if (bn.tileValue === right.tileValue) {
                right.tileValue = 0
                grObjMerge.push(right.tileNumber)
            }
        }
    }

    MergeObj(scene, bn.tileNumber, endObj)
}

function MergeObj(scene, bn, endObj) {
    let i =endObj.data.get('i')
    let j =endObj.data.get('j')
    if (grObjMerge.length == 0) {
        SoundPlay(scene,'drop')   
        isMerging = false
        bnIsMoving = false
        selectBn = false
        
        if(checkGameOver(scene))
            {
                console.log(' game over')  
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') 
                    {
                    scene.game.state = 2
                    sdk.showBanner();
                    console.log('show ads game over')
                    }
            } 
        return
    }

    let t = scene.tweens
    let v = Math.log2(bn.data.get('value'))
    v = Math.pow(2, v + grObjMerge.length)
    //console.log(v)
    bn.data.set('value', v)
    fieldArray[i][j].tileValue = v
    for (const e of grObjMerge) {
        t.add({
            targets: e,
            x: { from: e.x, to: bn.x },
            y: { from: e.y, to: bn.y },
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: GAMEOPTIONS.timeMerge,
            onComplete: function () {
                SoundPlay(scene,'merge')   
                SaveDiamond(scene,bn.x,bn.y)

                const index = grObjMerge.indexOf(e);
                if (index > -1) { // only splice array when item is found
                    grObjMerge.splice(index, 1); // 2nd parameter means remove one item only
                }
                DestroyObj(e)
            }
        })
    }


    setTimeout(function () {
        isMerging = false
        startFill = true
        UpdateValueBn(scene,bn,endObj, v)
    }, GAMEOPTIONS.timeMerge * grObjMerge.length);
}


function DestroyObj(e) {
    e.destroy()
}

function UpdateValueBn(scene,bn, obj, v) {
    let i =obj.data.get('i')
    let j =obj.data.get('j')
    let v_show =0
    bnIsMoving = false
    selectBn = false
    if (v>lstValue[lstValue.length-1]){
        lstValue.shift()
        lstValue.push(v)
        let color = lstColor[0]
        lstColor.shift()
        lstColor.push(color)
    }

    for (let i = 0; i < lstValue.length; i++) {
        if (lstValue[i] == v) {
            bn.list[0].tint = lstColor[i]
        }
    }


    SaveHSCore(v)

    if (v <1000)
    {
        bn.list[1].updateText(v)
    }
    if (v >1000 && v < 1000000)
    {

        v_show=Math.trunc(v/1000)
        bn.list[1].updateText(v_show+'K')

    }
    if (v >1000000){
        v_show=Math.trunc(v/1000000)
        bn.list[1].updateText(v_show+'M')
    }
    
    bn.data.set('value', v)
    fieldArray[i][j].tileValue = v
    if(topObj(i,j) == null || topObj(i,j).tileValue !=0)
    {
        checkMerge(scene,obj) 
    }
    
}

function SaveHSCore(v)
{
    score+=v
    if(score>hightScore)
    {
        hightScore = score
        txtHightScore.updateText(hightScore)
        localStorage.setItem('hscore',hightScore)
    } 
    txtScore.updateText(score)

   

}

function SaveDiamond(scene,x,y){
    let r = Random(1, 100)
    if (r<=50){
        for (let i =0;i <5; i++){
            setTimeout(function () {
                let diamond = scene.add.image(x,y,'diamond1').setScale(0.5)
                x=x+Random(0,5)
                y=y+Random(0,5)
                scene.tweens.add({
                    targets: diamond,
                    props: {
                        x: { value: 580, duration: 500, ease: 'Bounce' },
                        y: { value: 55, duration: 500, ease: 'Bounce' }
                    },
                    onComplete: function (){ diamond.destroy()}                
                })
                number_diamond++;
                txtDiamond.updateText(number_diamond)
                
            },i*100)
           
        }
    }
    localStorage.setItem('diamond',number_diamond)
}

function FindAll(scene) {
    for (var j = 0; j < GAMEOPTIONS.colum; j++) {
        for (var i = 0; i < GAMEOPTIONS.row; i++) {
            let obj = fieldArray[i][j]
            if (i > 0 && obj.tileValue > 0 && topObj(i, j).tileValue == 0) {
                let end = getEndObject(j)
                fieldArray[i][j].tileValue = 0
                end.tileValue = obj.tileValue
                MoveObject(scene, obj.tileNumber, end.tile)
                return
            }          
        }
    }
    startFill = false
}

function topObj(i, j) {
    if (i <= 0) return null
    return fieldArray[i - 1][j]
}

function leftObj(i, j) {
    if (j <= 0) return null
    return fieldArray[i][j - 1]
}

function rightObj(i, j) {
    if (j >= GAMEOPTIONS.colum) return null
    return fieldArray[i][j + 1]
}

//UI

function UIDiamond(scene) {
    number_diamond = localStorage.getItem('diamond')
    let b = scene.add.rectangle(0, 0, 150, 40).setStrokeStyle(2, 0xffffff);
    let d = new Block(scene,b.x-50,b.y+3,'diamond1')
    txtDiamond = new CustomText(scene, b.x+5, b.y+3, 'popin', number_diamond, 30)
    let btndiamond = new BlockNumber(scene, 620, 50, [b, d,txtDiamond])
        btndiamond.setSize(b.width, b.height )
}

function UIHigthScore(scene) {
    hightScore = localStorage.getItem('hscore')
    let b               = scene.add.rectangle(0, 0, 150, 40).setStrokeStyle(2, 0xffffff);
    let d               = new Block(scene,b.x-50,b.y,'crown').setScale(0.25)
        txtHightScore   = new CustomText(scene, d.x+60, d.y+3, 'popin', hightScore, 30)
        txtHightScore.align= 'left'
    let btndiamond      = new BlockNumber(scene, 100, 50, [b, d,txtHightScore])
        btndiamond.setSize(b.width, b.height )
}

function UIScore(scene) {
        txtScore = new CustomText(scene,360, 50, 'popin', 0, 40) 
        let t = scene.add.rectangle(360, 200, 720, 5,'0x40394A')
        let b = scene.add.rectangle(360, 1000, 720, 5,'0x40394A')

}

function UISound(scene)
{

    let btnSoundBoder = new Block(scene,650,120,'boder').setScale(0.3).setInteractive()
    let btnSound = new Block(scene,btnSoundBoder.x,btnSoundBoder.y,'btnSoundOn')
        btnSound.setScale(0.3)
        btnSoundBoder.on('pointerdown', function (pointer) {

            scene.tweens.add({
                targets: btnSound,
                scale: { from : btnSound.scale-0.15, to : btnSound.scale},
                ease: 'Bounce',
                duration: 500,
                onComplete: function(){
                    if (check_sound){
                        scene.sound.stopAll();
                        check_sound=false
                        btnSound.setTexture('btnSoundOff')
                    }
                    else{
                        check_sound=true
                        SoundPlay(scene,'bg_music')
                        btnSound.setTexture('btnSoundOn')
                    }
                },
            })
        })
}

function checkGameOver(scene) {
    let gameover = true
    for (let i = 0; i < GAMEOPTIONS.colum; i++) {
        if (fieldArray[6][i].tileValue == 0) {
            return false
        }
    }
    if(gameover)
    {   
        groupBlock.forEach(element => {
            console.log(element.data.list.value)
            for (let i = 0; i < GAMEOPTIONS.colum; i++) {
                console.log(fieldArray[6][i].tileValue)
                if (fieldArray[6][i].tileValue === element.data.list.value) {   
                    gameover=false
                    return 
                }
            }
        });
    }
        
    console.log(gameover)
    return gameover
}

function UIItem(scene) {
    //item 1
    let btnHammer = new Block(scene,80,120,'boder').setScale(0.3).setInteractive()
    let hammer_icon = new Block(scene,btnHammer.x,btnHammer.y,'hammer').setScale(0.2)
    let diamon_icon = new Block(scene,btnHammer.x+20, btnHammer.y+47,'diamond1').setScale(0.3)
    let txtHammer   = new CustomText(scene, btnHammer.x-15, btnHammer.y+50, 'popin','-150', 20)
        btnHammer.on('pointerdown', function (pointer) {
                use_hammer= true
                tw.BtnClickAnim(scene,hammer_icon,'btnHammer')
            })
}

function SoundPlay(scene,music_name)
{
    if (!check_sound) return
    if (music_name =='bg_music')
    {
        let music_bg= scene.sound.add(music_name)
        music_bg.play()
        music_bg.setLoop(true)
    }
    else{
        scene.sound.play(music_name);
    }

}

function createParticel(scene,e) {
    scene.add.particles(0,0,'block',{
        x: e.x,
        y: e.y,
        speed: { min: -600, max: 600 },
        alpha: { min: 0, max: 0.5 },
        angle: { min: 0, max: 360 },
        scale: { start: 0.1, end: 0 },
        blendMode: 'SCREEN',
        //active: false,
        frequency: 5,
        lifespan: 600,
        gravityY: 800,
        quantity: 3,
        // tint: e.tint,
        maxParticles : 15
    });
}








