    //import Phaser from 'phaser'
    import GamePlay from './scene/GamePlay.js'
    import Preload from './scene/GamePreload.js'
    import GameMenu from './scene/GameMenu.js'
    // import eventsCenter from './scene/prefabs/EventsCenter.js'
        
    let game
    window.onload = function() {
    let config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "game",
            width:720,
            height:1280,
        }, 
        backgroundColor: '#000000',

        scene: [Preload,GameMenu,GamePlay]
    }
    game = new Phaser.Game(config);

    game.state = -1

    window.SDK_OPTIONS = {
        gameId: "pn2lkci8w2ty65o0ivrn9qguwjmj68mh",
        onEvent: function (event) {
        const currentScene = game.scene.getScenes(true)[0]; // Get the first active scene
        if (!currentScene) return;
    
        switch (event.name) {
            case "SDK_GAME_PAUSE":
            console.log("Pausing current scene:", currentScene);
            currentScene.sound.mute = true;
            break;
    
            case "SDK_GAME_START":
            console.log("Resuming current scene:", currentScene);
            currentScene.sound.mute = false;
            currentScene.scene.resume();
            if (game.state==0) {
                currentScene.events.emit("ads_completed_gamemenu");
            }
            if (game.state==1) {
                currentScene.events.emit("ads_completed_gameplay");
            }
            if (game.state==2) {
                currentScene.events.emit("ads_completed_gameover");
            }
            break;
        }
        },
    };
    
    
        // Inject SDK script dynamically
        (function (d, s, id) {
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://api.gamemonetize.com/sdk.js";
        const fjs = d.getElementsByTagName(s)[0];
        fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "gamemonetize-sdk");

    }


