import Popup from "../popup/PopupHammer.js"

let popup
export default class Tween {
    constructor()
    {
        popup = new Popup()
        // this.scene=scene
        // this.tween = this.tweenAdd(scene,a,btnType)

    }

    BtnClickAnim(scene,a,btnType)
        {
            scene.tweens.add({
                targets: a,
                scale: { from : a.scale-0.15, to : a.scale},
                ease: 'Bounce',
                duration: 500,
                onComplete: onComplete.bind(scene,btnType),
            })
        }

    ObjectMove(scene,object,x,y){
        scene.tweens.add({
            targets: object,
            props: {
                x: { value: x, duration: 800, ease: 'Bounce' },
                y: { value: y, duration: 0, ease: 'Bounce.easeOut' }
            },
            // position: { from : a.scale-0.15, to : a.scale},
            // ease: 'Bounce',
            // duration: 500,
            // onComplete: onComplete.bind(scene,btnType),
        })
    }

}


function onComplete(btnType) {
    switch (btnType) {
        case 'btnHammer':
            console.log('hammer')
            popup.Active(this.scene)
            break

        case 'btnVideo':
            console.log('video ads')

            break;

        case 'btnClose':
           popup.Deactive()
            break;

        case 'btnSound':

                 break;

        case 'btnPlay':

            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') 
                {
                sdk.showBanner();
                console.log('show ads game menu')
                this.game.state = 0
                }
            else{

                const fx = this.cameras.main.postFX.addWipe(0.3, 1, 1);
                this.scene.transition({
                    target: 'game_play',
                    duration: 700,
                    moveBelow: true,
                    onUpdate: (progress) => {
                        fx.progress = progress;
                    }
                 });

            }
               

                break;
        default:
            break;
    }
    
}