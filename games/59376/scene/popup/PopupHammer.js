import CustomText from '../prefabs/customtext.js'
import Tween from '../prefabs/tween.js'
import {DeactivePopup} from '../GamePlay.js'

let popup_hammer
let tw
let mess='Select Any Block To Destroy'
let txt_mess

export default class Popup {
    constructor()
    {
        
    }

    

    Active(scene){
        if (popup_hammer != undefined) {
            popup_hammer.y=0
        }
        else{
            tw = new Tween()
            let top = scene.scene.add.rectangle(360,40,720,300,'0x000000')
                top.alpha=1
            let light = scene.scene.add.image(top.x,top.y+60,'light').setScale(0.4)
            let hammer_icon = scene.scene.add.image(light.x,light.y,'hammer').setScale(0.5)
            let bottom = scene.scene.add.rectangle(360,1150,720,300,'0x000000')
            bottom.alpha=1

            txt_mess = new CustomText(scene.scene, bottom.x, bottom.y, 'popin', mess, 40)
            
            let btnClose = scene.scene.add.image(670,50,'btnClose').setScale(0.7).setInteractive()
            btnClose.on('pointerdown', function (pointer) {
                tw.BtnClickAnim(scene.scene,btnClose,'btnClose')
            })
            popup_hammer= scene.scene.add.container(0,0,[top,light,hammer_icon,bottom,txt_mess,btnClose])
            popup_hammer.depth=3

        }
    }

    UpdateTextMess(){
        mess='No Diamond'
        txt_mess.updateText(mess)
    }

    Deactive()
    {
        popup_hammer.y=2000
        DeactivePopup()
       
    }
}


    
