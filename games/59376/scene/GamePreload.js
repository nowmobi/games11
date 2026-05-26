export default class Preload extends Phaser.Scene {

    constructor() {
        super({ key: 'preload' })
    }

    preload() {

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(200, 1280/2, 320, 50);
        
        var width = 720;
        var height = 1280;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 30,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2+25,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(206, 1280/2+8, 300 * value, 30);
        });
        
        
        this.load.on('complete', function () {
            // progressBar.destroy();
            // progressBox.destroy();
            // loadingText.destroy();
            // percentText.destroy();
        })


        //load image
        this.load.image('block','assets/images/block.png')
        this.load.image('boder','assets/images/boder.png')
        this.load.image('diamond1','assets/images/diamond1.png')
        this.load.image('crown','assets/images/crown.png')
        this.load.image('hammer','assets/images/hammer.png')
        this.load.image('shadow','assets/images/anim1.png')


        //load UI image
        this.load.image('bg','assets/images/Background.png')
        this.load.image('bg2','assets/images/Background_2.png')
        this.load.image('btnPlay','assets/images/btnPlay.png')
        this.load.image('bgButton','assets/images/bgButton.png')
        this.load.image('btnBack','assets/images/btnBack.png')
        this.load.image('btnSetting','assets/images/btnSetting.png')
        this.load.image('btnClose','assets/images/btnClose.png')
        this.load.image('light','assets/images/light.png')
        this.load.image('btnSoundOn','assets/images/btnSoundOn.png')
        this.load.image('btnSoundOff','assets/images/btnSoundOff.png')



        //load font
        this.load.bitmapFont("popin", "assets/fonts/popin.png", "assets/fonts/popin.xml");

         //load audio
         this.load.audio('merge',"assets/audio/merge.wav")
         this.load.audio('drop',"assets/audio/drop.wav")
         this.load.audio('breaking',"assets/audio/breaking.mp3")
         this.load.audio('bg_music',"assets/audio/bg.mp3")

    }

    create()
    {
        this.music_bg=this.sound.add('bg_music')
        this.music_bg.play()
        this.music_bg.setLoop(true);
        this.scene.start('game_menu')
    }
}