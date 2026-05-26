!function() {
    "use strict";
    var e;
    !function(e) {
        e.version = "1.0.2";
        e.GameMsgEvent = class {}, e.MsgUrlDefine = {};
    }(e || (e = {}));
    var t = e;
    class i {}
    i.version = t.version, i.manifestFile = "version.json", i.user_unique_id = "test_user_1312527", 
    i.platform = ""//sdk.PlatformType.WEIXIN//sdk.PlatformType.WEIXIN, 
    i.server_url = "", i.server_url_common = "https://cdwaterbear.cn", 
    i.server_cfg_url = "https://cdn.cdwaterbear.cn/MoveHouse/config_wx.json", i.res_server_url = "", 
    i.local_share_title = "", i.local_share_image = "", i.ald_share_enable = !1, i.appSid = "", 
    i.appId = "wx3120b1de251b3b39", i.stat = "", i.saveDurSec = null, i.showBQ = !1, 
    i.channel_AdIds = {
        videoId: "adunit-39c14dc6ecbf729d",
        nativeAdId: [ "", "" ],
        bannerId: "adunit-ad1ba17dff7781a6",
        "bannerId-2": "adunit-09d78e28ccc89dd7",
        interstitialId: "adunit-aaabe85fe07242f0",
        appBoxId: "",
        blockId: "adunit-bd39c4f7b1a7d6b2",
        "blockId-4": "adunit-bec3a4a98c034e30",
        "blockId-25-1": "adunit-2f26743bbd4d9945",
        "blockId-25-2": "adunit-8571cce0557bb369",
        "blockId-3-1": "adunit-eb80e169ea95dcf4",
        "blockId-3-2": "adunit-17bdfaeacb4853d2"
    };
    class s extends Laya.Script {
        constructor() {
            super(), this.adWidth = 0, this.autoOpen = !1, this.adState = !0;
        }
        onEnable() {
            // if (!sdk.Sdk.instance.isHarvest()) return;
            let e = this.owner, t = new Laya.Point(e.x, e.y);
            this.stagePos = e.parent.localToGlobal(t), fx.EventCenter.instance.on(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.openCloseFunc), 
            this.autoOpen && this.showAd();
        }
        showAd() {
            // Laya.timer.callLater(this, () => {
            //     sdk.Sdk.instance.showBlockAd(this.customId, {
            //         left: this.stagePos.x,
            //         top: this.stagePos.y,
            //         width: this.adWidth
            //     }, 0), Laya.timer.callLater(this, () => {
            //         sdk.Sdk.instance.showBlockAd(this.customId, {
            //             left: this.stagePos.x,
            //             top: this.stagePos.y,
            //             width: this.adWidth
            //         }, 0);
            //     });
            // });
        }
        openCloseFunc(e) {
            // e.code != fx.BaseCode.PANEL_OPEN && e.code != fx.BaseCode.VIEW_OPEN || this.customId != i.channel_AdIds["blockId-4"] ? e.code != fx.BaseCode.PANEL_CLOSE && e.code != fx.BaseCode.VIEW_CLOSE || this.customId != i.channel_AdIds["blockId-4"] || this.showAd() : (sdk.Sdk.instance.hideBlockAd(this.customId), 
            Laya.timer.clearAll(this)
            // );
        }
        onDisable() {}
        onDestroy() {
            fx.EventCenter.instance.off(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.openCloseFunc), 
            // sdk.Sdk.instance.hideBlockAd(this.customId), 
            fx.EventCenter.instance.offAllCaller(this);
        }
        hideAd() {
            // sdk.Sdk.instance.hideBlockAd(this.customId, !1), setTimeout(() => {
            //     sdk.Sdk.instance.hideBlockAd(this.customId, !1);
            // }, 1e3), 
            // Laya.timer.clearAll(this);
        }
    }
    var n = Laya.Vector2, a = Laya.Vector3, o = Laya.Vector4, r = Laya.Sprite3D, h = Laya.MeshSprite3D;
    const l = {
        UI_HEAD: "res/head.png",
        UI_TIPS: "res/img_tips.png",
        UI_COINS_IMG: "res/img_coins.png",
        UI_DIAMOND_IMG: "res/img_diamond.png",
        UI_VIDEO_IMG: "res/img_video.png",
        UI_SHARE_IMG: "res/img_share.png",
        UI_SOUND_ON_IMG: "",
        UI_SOUND_OFF_IMG: "",
        UI_SHAKE_ON_IMG: "",
        UI_SHAKE_OFF_IMG: "",
        JSON_GAME_CFG: "json/gameCfg.json",
        TEX_SHADOW: "res3d/Textures/shadow.png",
        TEX_WATER: "res3d/Textures/water.png",
        TEX_WAVEN: "res3d/Textures/waves_n.png",
        LEVEL_ITEM: "scenes/prefab/LevelItem.json",
        PACK_ITEM: "res3d/packItem.lh"
    }, d = !0, c = "$GAME_STATE_CHANGE", g = "$GO_NEXT_STAGE", u = "$E_ON_ALL_ITEM_MOVED_TO_CAR", m = "$E_START_MOVE_ITEM", p = "$E_ON_ITEM_IN_CAR", f = "$E_ON_ITEM_IN_CAR_DRAG", S = "$E_ON_ITEM_ON_GROUND", I = "$E_ON_SCROLL_ITEM_LIST", C = "$E_ON_CLICK_ITEM", _ = "$E_HIDE_AD", y = "$E_PROP_CNT_CHANGED", E = "$E_PROP_USED", k = "$E_START_USE_PROP", L = "$E_HIDE_PROP_USE_BOX", x = "$E_CANCEL_USE_PROP";
    var v, w, R, O, b;
    !function(e) {
        e[e.E_COLLIDE_ENTER = 0] = "E_COLLIDE_ENTER", e[e.E_COLLIDE_EXIT = 1] = "E_COLLIDE_EXIT";
    }(v || (v = {})), function(e) {
        e[e.E_GAME_READY = 1] = "E_GAME_READY", e[e.E_GAME_START = 2] = "E_GAME_START", 
        e[e.E_GAME_PAUSE = 3] = "E_GAME_PAUSE", e[e.E_GAME_FINISH = 4] = "E_GAME_FINISH", 
        e[e.E_GAME_FAILED = 5] = "E_GAME_FAILED", e[e.E_GAME_OVER = 6] = "E_GAME_OVER";
    }(w || (w = {}));
    !function(e) {
        e[e.NONE = 0] = "NONE", e[e.DEFAULT = Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER] = "DEFAULT", 
        e[e.ALL = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER] = "ALL", e[e.GROUND = Laya.Physics3DUtils.COLLISIONFILTERGROUP_STATICFILTER] = "GROUND";
    }(R || (R = {}));
    class D extends fx.BaseData {

        
    }
    !function(e) {
        e[e.ON_GROUND = 0] = "ON_GROUND", e[e.IN_CAR = 1] = "IN_CAR";
    }(O || (O = {})), function(e) {
        e.Pack = "Pack", e.AutoFit = "AutoFit", e.MoreSpace = "MoreSpace";
    }(b || (b = {}));
    class A {}
    class P extends fx.UserInfoEntity {
        constructor() {
            super(!1), this.stageId = void 0, this.vibrateEnable = void 0, this.coins = void 0, 
            this.guideSteps = void 0, this.curCar = void 0, this.ownSkins = void 0, this.ugcShareSkinId = void 0, 
            this.ugcShareSkins = [], this.stageSkinInfo = [], this.stageSkins = [], this.isBreakingIce = !0, 
            this.signInToday = void 0, this.signInDays = void 0, this.turntableFreetime = void 0, 
            this.turntableCnt = void 0, this.turntableHasTakeIds = void 0, this.trySkinNum = void 0, 
            this.closeTryNum = void 0, this.keyNum = void 0, this.departureTime = void 0, this.isFirstSuper = void 0, 
            this.openMagnetAbility = void 0, this.isFirstTouch = void 0, this.roomId = 1, this.roomItemCnt = 0, 
            this.roomItemPlaces = [], this.roomItemBoxCnt = 0, this.stageId = 1, this.coins = 0, 
            this.vibrateEnable = !1, this.guideSteps = [], fx.Utils.warpObjectGetterSetter(this, this.dirty);
        }
        addCoins(e) {
            e && (this.coins += e);
        }
        useCoins(e) {
            e && (this.coins < e || (this.coins -= e));
        }
        save(e) {
            this.dirty(e);
        }
    }
    class N extends fx.BaseLogic {
        constructor() {
            super();
        }
        static get I() {
            return this._instance || (this._instance = new N()), this._instance;
        }
        onInitOnce() {
            fx.UserLogic.instance.init(P);
        }
        onInit() {
            this.player = this.getPlayerInfo();
        }
        getPlayerInfo() {
            return fx.UserLogic.instance.getUserInfo();
        }
        addCoins(e) {
            return !(!e || e < 0) && (this.player.coins += e, !0);
        }
        coinsEnough(e) {
            return null != e && this.player.coins >= e;
        }
        useCoins(e) {
            return !(null == e || e < 0 || !this.coinsEnough(e)) && (this.player.coins -= e, 
            !0);
        }
    }
    class T extends fx.BaseLogic {
        constructor() {
            super();
        }
        static get I() {
            return this._instance || (this._instance = new T()), this._instance;
        }
        onInitOnce() {
            this.timer3d = new Laya.Timer(!0);
            let e = fx.CfgMgr.instance;
            this.constantCfg = e.get("constant"), l.JSON_GAME_CFG && (this.gameCfg = e.get(l.JSON_GAME_CFG)), 
            this.stageCfg = new fx.BaseDataModel("stageCfg", D), this.stageCfg.recurisRaw(e => {
                if (void 0 === this.maxStageId && (this.maxStageId = e.id), this.maxStageId != e.id) return !1;
                this.maxStageId++;
            }), this.maxStageId--, this.initRoom();
        }
        onInit() {
            this.gameState = w.E_GAME_READY, this.setCurStageInfo(), this.itemCntInCar = 0, 
            this.curGridCnt = 0, this.curProp = null;
        }
        getTimer() {
            return this.timer3d;
        }
        getGameCfgJson() {
            return this.gameCfg;
        }
        getGameConstants() {
            return this.constantCfg;
        }
        setGameState(e) {
            if (this.gameState != e && this.gameState != w.E_GAME_OVER) {
                let t = this.gameState;
                this.gameState = e, this.event(c, t), e != w.E_GAME_FINISH && e != w.E_GAME_OVER || this.offAll();
            }
        }
        getGameState() {
            return this.gameState;
        }
        getCurStage() {
            return this.curStageInfo;
        }
        getStageCfg() {
            return this.stageCfg;
        }
        setCurStageInfo() {
            if (this.specStageId) this.curStageInfo = this.stageCfg.get(this.specStageId); else {
                let e = N.I.getPlayerInfo();
                fx.Utils.isNumber(e.stageId) || (e.stageId = 1);
                let t = e.stageId;
                this.curStageInfo = this.stageCfg.get(t);
            }
        }
        goNextStage(e) {
            e && (e = Number(e)), (this.gameState != w.E_GAME_READY || fx.Utils.isNumber(e) && this.curStageInfo.id != e) && (fx.Utils.isNumber(e) ? this.specStageId = e : this.stageIncreasing(), 
            this.init(), this.specStageId = null, N.I.init(), this.event(g));
        }
        stageIncreasing() {
            let e = this.curStageInfo.id;
            e && (e++, e > this.maxStageId && (e = this.maxStageId), N.I.getPlayerInfo().stageId = e);
        }
        postMessage(e) {
            let t = sdk.Sdk.instance.getOpenDataContext();
            t && t.postMessage(e);
        }
        revive() {
            this.setGameState(w.E_GAME_START);
        }
        clear() {}
        getMaxStageId() {
            return this.maxStageId;
        }
        isUsingProp() {
            return null != this.curProp;
        }
        initRoom() {
            this.roomList = [], this.roomCfgs = fx.CfgMgr.instance.get("roomCfg");
            for (const e in this.roomCfgs) {
                let t = this.roomCfgs[e];
                this.roomList.push(t), this.maxRoomId = t.id;
            }
            let e = N.I.getPlayerInfo();
            e.roomId > this.maxRoomId && (e.roomId = this.maxRoomId);
        }
        getRoomList() {
            return this.roomList;
        }
        getRoomCfg(e) {
            return this.roomCfgs[e];
        }
        getRoomMaxId() {
            return this.maxRoomId;
        }
        getCurRoom() {
            let e = N.I.getPlayerInfo().roomId;
            return this.getRoomCfg(e);
        }
        goNextRoom() {
            let e = N.I.getPlayerInfo().roomId, t = Math.min(this.maxRoomId, e + 1);
            N.I.getPlayerInfo().roomId = t, t != e && (N.I.getPlayerInfo().roomItemCnt = 0, 
            N.I.getPlayerInfo().roomItemPlaces = []);
        }
        getRoomItemCnt() {
            return N.I.getPlayerInfo().roomItemCnt || 0;
        }
        unlockRoomItem(e) {
            let t = this.getRoomItemCnt() + 1;
            N.I.getPlayerInfo().roomItemCnt = t;
            let i = N.I.getPlayerInfo().roomItemPlaces;
            i.push(e), N.I.getPlayerInfo().roomItemPlaces = i;
        }
        getRoomItemPlaces() {
            return N.I.getPlayerInfo().roomItemPlaces;
        }
        getRoomItemBoxCnt() {
            return N.I.getPlayerInfo().roomItemBoxCnt || 0;
        }
        changeRoomItemBoxCnt(e) {
            let t = this.getRoomItemBoxCnt() + e;
            t = Math.max(t, 0), N.I.getPlayerInfo().roomItemBoxCnt = t;
        }
    }
    class M extends fx.BaseStorage {
        constructor() {
            super("PropStorage"), this.list = [], fx.Utils.warpObjectGetterSetter(this, this.dirty);
        }
    }
    class U {
        constructor() {
            this._storage = new M(), this._storage.init(), this._mapData = {};
            for (const e of this._storage.list) this._mapData[e.id] = e;
            this._list = [], this._cfgs = fx.CfgMgr.instance.get("propCfg");
            for (const e in this._cfgs) {
                let t = this._cfgs[e];
                this._list.push(t);
            }
        }
        static get I() {
            return this._instance || (this._instance = new U()), this._instance;
        }
        getCfg(e) {
            return this._cfgs[e];
        }
        getList() {
            return this._list;
        }
        getCnt(e) {
            return this._mapData[e] ? this._mapData[e].cnt : 0;
        }
        getData(e) {
            if (!this._mapData[e]) {
                let t = new A();
                t.id = e, t.cnt = 0, this._storage.list.push(t), this._mapData[t.id] = t;
            }
            return this._mapData[e];
        }
        changeCnt(e, t) {
            let i = this.getData(e);
            i.cnt = Math.max(i.cnt + t, 0), this._storage.save(), fx.EventCenter.instance.event(y, [ e ]);
        }
        useProp(e) {
            this.changeCnt(e, -1), fx.EventCenter.instance.event(E, [ e ]);
        }
    }
    class B {
        constructor() {
            // this._videobindCtrlGId = -8888, this._videoStrategyInst = void 0,
            //  this.createVideoStrategy(), 
            // fx.EventCenter.instance.on(sdk.SdkEvent.E_REWARD_GAIN, this, this.onRewardGain), 
            // fx.EventCenter.instance.on(sdk.SdkEvent.E_SHARE_RESULT, this, this.onShareComplete);
        }
        static get I() {
            return this._instance || (this._instance = new B()), this._instance;
        }
        createVideoStrategy() {
            // this._videoStrategyInst = sdk.Sdk.instance.getRewardStrategyInst(),
            //  this._videoGainWayParams = new sdk.RewardGainWayParams({
            //     source: "",
            //     bindCtrlGId: this._videobindCtrlGId,
            //     id: sdk.Sdk.instance.getVideoId(),
            //     forever: !1
            // }), 
            // this._videoStrategyInst.setCurStrategy(sdk.GetRewardSDKWay.VIDEO, this._videoGainWayParams);
        }
        onRewardGain(e) {
            e.gid == this._videobindCtrlGId && this.onVideoComplete(e);
        }
        playVideo(e, t, i, s) {
            // this._videoCaller = t, this._videoCallBack = i, this._videoCbParam = s || [], this._videoGainWayParams.source = e, 
            // this._videoStrategyInst.runStrategy();
        }
        onVideoComplete(e) {
            if (this._videoCaller && !this._videoCaller.destroyed && this._videoCallBack) {
                let t = e.code == sdk.SdkCode.REWARD_GAIN_SUCCESS;
                this._videoCbParam.push(t), this._videoCallBack.apply(this._videoCaller, this._videoCbParam);
            }
            this._videoCaller = null, this._videoCallBack = null, this._videoCbParam = null;
        }
        shareVideo(e, t, i) {
            this._shareCaller = e, this._shareCallBack = t, this._shareCbParam = i, sdk.Sdk.isOnPC() ? this.onShareComplete({
                code: sdk.SdkCode.SHARE_SUCCESS
            }) : sdk.Sdk.instance.shareVideo();
        }
        onShareComplete(e) {
            if (this._shareCaller && !this._shareCaller.destroyed && this._shareCallBack) {
                let t = e.code == sdk.SdkCode.SHARE_SUCCESS;
                this._shareCbParam.push(t), this._shareCallBack.apply(this._shareCaller, [ this._shareCbParam ]);
            }
            this._shareCaller = null, this._shareCallBack = null, this._shareCbParam = null;
        }
        clipboardData(e) {
            sdk.Sdk.instance.clipboardData(e);
        }
        showInterstitial() {
           
            // sdk.Sdk.instance.showInterstitial(null, !0);
        }
    }
    var G, V = fx.BaseScene, F = fx.BaseView, H = fx.BaseDialog, z = Laya.ClassUtils.regClass;
    !function(e) {
        !function(e) {
            class t extends V {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/GameScene");
                }
            }
            e.GameSceneUI = t, z("ui.scenes.GameSceneUI", t);
            class i extends H {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/GameSuccessDialog");
                }
            }
            e.GameSuccessDialogUI = i, z("ui.scenes.GameSuccessDialogUI", i);
            class s extends V {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/MainScene");
                }
            }
            e.MainSceneUI = s, z("ui.scenes.MainSceneUI", s);
            class n extends H {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/PropDialog");
                }
            }
            e.PropDialogUI = n, z("ui.scenes.PropDialogUI", n);
            class a extends F {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/RewardDialog");
                }
            }
            e.RewardDialogUI = a, z("ui.scenes.RewardDialogUI", a);
            class o extends H {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/RoomFinishDialog");
                }
            }
            e.RoomFinishDialogUI = o, z("ui.scenes.RoomFinishDialogUI", o);
            class r extends V {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/RoomScene");
                }
            }
            e.RoomSceneUI = r, z("ui.scenes.RoomSceneUI", r);
        }(e.scenes || (e.scenes = {}));
    }(G || (G = {})), function(e) {
        !function(e) {
            !function(e) {
                class t extends H {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/settting/SettingDialog");
                    }
                }
                e.SettingDialogUI = t, z("ui.scenes.settting.SettingDialogUI", t);
            }(e.settting || (e.settting = {}));
        }(e.scenes || (e.scenes = {}));
    }(G || (G = {})), function(e) {
        !function(e) {
            !function(e) {
                class t extends F {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/skin/SkinView");
                    }
                }
                e.SkinViewUI = t, z("ui.scenes.skin.SkinViewUI", t);
            }(e.skin || (e.skin = {}));
        }(e.scenes || (e.scenes = {}));
    }(G || (G = {})), function(e) {
        !function(e) {
            !function(e) {
                class t extends F {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/WXExportAd/GameCenterView");
                    }
                }
                e.GameCenterViewUI = t, z("ui.scenes.WXExportAd.GameCenterViewUI", t);
                class i extends H {
                    constructor() {
                        super();
                    }
                    createChildren() {
                        super.createChildren(), this.loadScene("scenes/WXExportAd/MoreGameDialog");
                    }
                }
                e.MoreGameDialogUI = i, z("ui.scenes.WXExportAd.MoreGameDialogUI", i);
            }(e.WXExportAd || (e.WXExportAd = {}));
        }(e.scenes || (e.scenes = {}));
    }(G || (G = {}));
    class K extends G.scenes.PropDialogUI {
        constructor(e, t) {
            super(), this.propCfg = U.I.getCfg(t);
        }
        onAdd() {
            this.label_title.text = `${this.propCfg.name}`, this.img_icon.skin = this.propCfg.propIcon, 
            this.label_coin.text = `${this.propCfg.price}`, this.img_close.on(Laya.Event.CLICK, this, this.closeSelf), 
            this.btn_coin.on(Laya.Event.CLICK, this, this.onClickCoin), this.btn_video.on(Laya.Event.CLICK, this, this.onClickVideo);
        }
        onDestroy() {
            Laya.loader.clearTextureRes("res/atlas/res/propUI.atlas");
        }
        closeSelf() {
            fx.SceneManager.closePanel(this);
        }
        onClickCoin() {
            N.I.coinsEnough(this.propCfg.price) ? (N.I.useCoins(this.propCfg.price), U.I.changeCnt(this.propCfg.id, 1), 
            this.closeSelf()) : fx.Utils.showTips("not enough coins");
        }
        onClickVideo() {
            // B.I.playVideo("PropDialog", this, e => {
            //     e && (U.I.changeCnt(this.propCfg.id, 1), this.closeSelf());
            // });
            U.I.changeCnt(this.propCfg.id, 1), this.closeSelf()
        }
    }
    Laya.ClassUtils.regClass("PropDialog", K);
    class W extends Laya.Script {
        onAwake() {
            this.propList = U.I.getList().slice(), this.list = this.owner, this.list.repeatX = this.propList.length, 
            this.list.repeatY = 1, this.list.array = this.propList, this.list.renderHandler = new Laya.Handler(this, this.updateItem), 
            this.list.visible = !1, fx.EventCenter.instance.on(m, this, this.onStartMoveItem), 
            fx.EventCenter.instance.on(y, this, this.onPropCntChanged);
        }
        onDestroy() {
            fx.EventCenter.instance.offAllCaller(this);
        }
        onStartMoveItem() {
            this.list.visible = !0;
        }
        onPropCntChanged() {
            this.list.refresh();
        }
        updateItem(e) {
            if (!e.dataSource) return;
            let t = e.dataSource, i = U.I.getCnt(t.id);
            e.getChildByName("img_propIcon").skin = t.propIcon;
            let s = e.getChildByName("img_add"), n = e.getChildByName("img_num");
            if (i > 0) {
                s.visible = !1, n.visible = !0, n.getChildByName("label_num").text = `Use`;//x${i}
            } else s.visible = !0, n.visible = !1;
            e.on(Laya.Event.CLICK, this, this.onClickItem, [ e, i ]);
        }
        onClickItem(e, t) {
            if (T.I.curProp) return void fx.Utils.showTips("Using now");
            let i = e.dataSource;
            t > 0 ? fx.EventCenter.instance.event(k, [ i.id ]) : fx.SceneManager.openPanel(K, {
                from: "PropList",
                userArgs: [ i.id ]
            });
        }
    }
    class X extends Laya.Script {
        constructor() {
            super(), this.anchorCenter = !0, this.scaleX = .88, this.scaleY = .88;
        }
        onAwake() {
            let e = this.owner;
            this.anchorCenter && fx.Utils.resetAnchor(e, .5, .5), fx.Effect.btnScaleEff(this.owner, {
                x: this.scaleX,
                y: this.scaleY
            }), e.on(Laya.Event.MOUSE_DOWN, this, this.onClicked);
        }
        onClicked() {
            let e = this.soundId;
            e ? fx.SoundManager.instance.playSoundById(e) : fx.SoundManager.instance.playSoundById(4);
        }
    }
    class Y extends Laya.Script {
        onAwake() {
            this.ownerUI = this.owner, this.ownerUI.visible = !1, this.imgBg.visible = !1, this.img_propIcon = this.owner.getChildByName("img_propIcon"), 
            this.label_tips = this.owner.getChildByName("label_tips"), this.label_desc = this.owner.getChildByName("label_desc"), 
            this.owner.getChildByName("img_close").on(Laya.Event.CLICK, this, this.onClickClose), 
            fx.EventCenter.instance.on(k, this, this.onStartUseProp), fx.EventCenter.instance.on(L, this, () => {
                this.ownerUI.visible = !1, this.imgBg.visible = !1;
            });
        }
        onDestroy() {
            fx.EventCenter.instance.offAllCaller(this);
        }
        onClickClose() {
            this.ownerUI.visible = !1, this.imgBg.visible = !1, fx.EventCenter.instance.event(x);
        }
        onStartUseProp(e) {
            this.ownerUI.visible = !0;
            let t = U.I.getCfg(e);
            this.img_propIcon.skin = t.propIcon, this.label_desc.text = t.desc, t.propType == b.MoreSpace ? this.label_tips.text = "Tap anywhere on the screen" : this.label_tips.text = "Click on any furniture";
        }
    }
    class $ extends fx.BaseLogic {
        static get instance() {
            return this._instance || (this._instance = new $()), this._instance;
        }
        onInitOnce() {}
        onInit() {}
        isOpenClickBox() {
            // this.isHarvestIp(1);
        }
        isHarvestIp(e) {
            // if (!sdk.Sdk.instance.isHarvest()) return !1;
            // let t = !0,
            //  i = sdk.Sdk.instance.getServerJsonCfg();
            // return i && i[`touch_open_${e}`] || (t = !1), t && (this.judgeOdds(e) || (t = !1)), 
            // t;
        }
        touchNum(e) {
            // let t = sdk.Sdk.instance.getServerJsonCfg(), i = t && t[`touch_nums_${e}`];
            // return i || 1;
        }
        judgeOdds(e) {
            let t = !0, i = sdk.Sdk.instance.getServerJsonCfg(), s = i && i[`touch_odds_${e}`];
            if (i && s || (s = 10), s) {
                let e = 0;
                s >= 1 && (e = s / 100), Math.random() > e && (t = !1);
            } else t = !1;
            return t;
        }
        getDelay() {
            let e = sdk.Sdk.instance.getServerJsonCfg();
            return e && e.touch_delay ? e.touch_delay : 0;
        }
    }
    class j extends Laya.Script {
        constructor() {
            super(), this.touchId = 0, this.touchSign = !1, this.touchNumber = 1, this.touchindex = 0;
        }
        onEnable() {
            this._owner = this.owner;
            let e = this._owner.parent;
            this._owner.width = e.width, this._owner.height = e.height, this.touchNumber = $.instance.touchNum(this.touchId), 
            this.initUi(), fx.EventCenter.instance.on(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.openCloseFunc);
        }
        onDisable() {
            // this.hideBanner()
            // ,
             Laya.timer.clearAll(this);
        }
        onDestroy() {
            fx.EventCenter.instance.off(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.openCloseFunc);
        }
        openCloseFunc(e) {
            fx.BaseCode.PANEL_CLOSE, e.code;
        }
        initUi() {
            this.touchSign = !1, this._owner.offAll(Laya.Event.CLICK), this._owner.on(Laya.Event.CLICK, this, e => {
                if ($.instance.isHarvestIp(this.touchId) && (e.stopPropagation(), this.touchindex += 1, 
                this.touchindex >= this.touchNumber)) {
                    this._owner.offAll(Laya.Event.CLICK);
                    let e = $.instance.getDelay();
                    Laya.timer.once(1e3 * e, this, () => {
                        fx.EventCenter.instance.on(sdk.SdkEvent.E_AD_BANNER, this, this.bannerFunc);
                        let e = this._owner.parent.localToGlobal(new Laya.Point(this._owner.x, this._owner.y), !0);
                        sdk.Sdk.instance.showBanner(i.channel_AdIds["bannerId-2"], {
                            isPostLoadedShow: null,
                            forever: null,
                            widthScaleRate: .7,
                            top: e.y - 100
                        }), Laya.timer.once(2e3, this, this.hideBanner);
                    });
                }
            });
        }
        hideBanner() {
            // sdk.Sdk.instance.hideBanner(i.channel_AdIds["bannerId-2"]),
            //  fx.EventCenter.instance.off(sdk.SdkEvent.E_AD_BANNER, this, this.bannerFunc);
        }
        bannerFunc(e) {
            e.code == sdk.SdkCode.AD_BANNER_SUCCESS ? sdk.Sdk.instance.sendEvent("MISLEAD", {
                touchId: this.touchId,
                state: "成功"
            }) : sdk.Sdk.instance.sendEvent("MISLEAD", {
                touchId: this.touchId,
                state: "失败"
            });
        }
    }
    class J extends Laya.Script {
        constructor(e) {
            super(), this.rewardStrategyInst = void 0, e && (this.adId = e.adId, this.customStrategy = e.customStrategy);
        }
        onAwake() {
            this.owner.$_GID || (this.owner.$_GID = fx.Utils.getGID());
            let e = fx.Utils.getUIComponetRoot(this.owner);
            e || (e = "默认"), this.customStrategy || (this.customStrategy = "auto");
            let t = null;

            // "auto" === this.customStrategy ? t = sdk.GetRewardSDKWay.AUTO : "video" === this.customStrategy ? 
            // t = sdk.GetRewardSDKWay.VIDEO : "share" === this.customStrategy && (t = sdk.GetRewardSDKWay.SHARE);
            // let i = sdk.Sdk.instance.getVideoId();
            // this.rewardStrategyInst = sdk.Sdk.instance.getRewardStrategyInst(),
            //  this.rewardStrategyInst.setCurStrategy(t, new sdk.RewardGainWayParams({
            //     source: e,
            //     bindCtrlGId: this.owner.$_GID,
            //     id: i,
            //     forever: this.forever
            // }));
        }
        onEnable() {
            this.refreshSelf();
        }
        onDestroy() {
            // this.rewardStrategyInst.setCurStrategy(void 0, void 0);
        }
        onClick() {
            this.runStrategy();
        }
        getStrategy() {
            return this.rewardStrategyInst.getStrategy();
        }
        runStrategy() {
            this.rewardStrategyInst.runStrategy();
        }
        refreshSelf() {
            if ("auto" !== this.customStrategy) return;
            let e = this.owner, t = e;
            if (this.changeNodeName && (t = e.seekChildByName(this.changeNodeName), !t)) return void console.log("###RewardBtnScript 没有对应名字的子节点");
            if (!this.shareSkinRes || !this.videoSkinRes) return void console.log("###RewardBtnScript 无纹理资源");
            let i = l[this.videoSkinRes] ? l[this.videoSkinRes] : this.videoSkinRes, s = l[this.shareSkinRes] ? l[this.shareSkinRes] : this.shareSkinRes;
            sdk.GetRewardSDKWay.VIDEO === this.getStrategy() ? t.skin = i : t.skin = s;
        }
    }
    const q = "$E_SKIN_UNLOCK", Q = "$E_SKIN_CHANGE";
    var Z, ee, te, ie, se;
    !function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.SKIN_ADDFAIL_EXIST = 1] = "SKIN_ADDFAIL_EXIST", 
        e[e.SKIN_ADDFAIL_NOEXIST = 2] = "SKIN_ADDFAIL_NOEXIST", e[e.SKIN_ADD = 3] = "SKIN_ADD", 
        e[e.SKIN_ADD_VIDEOCNT = 4] = "SKIN_ADD_VIDEOCNT", e[e.SKIN_LOTTERY_NOTENOUGH = 5] = "SKIN_LOTTERY_NOTENOUGH", 
        e[e.SKIN_LOTTERY_UNKOWNGROUP = 6] = "SKIN_LOTTERY_UNKOWNGROUP", e[e.SKIN_LOTTERY_NOTENOUGH_COIN = 7] = "SKIN_LOTTERY_NOTENOUGH_COIN";
    }(Z || (Z = {}));
    !function(e) {
        e.Car = "Car";
    }(ee || (ee = {})), function(e) {
        e[e.UNKOWN = 0] = "UNKOWN", e[e.COINS = 1] = "COINS", e[e.DIAMOND = 2] = "DIAMOND", 
        e[e.SIGNIN = 3] = "SIGNIN", e[e.VIDEO = 4] = "VIDEO", e[e.TURNTABLE = 5] = "TURNTABLE", 
        e[e.ICEBREAK = 6] = "ICEBREAK", e[e.STAGEPROGRESS = 7] = "STAGEPROGRESS", e[e.GODGIVE = 8] = "GODGIVE", 
        e[e.EGG = 9] = "EGG", e[e.UGCSHARE = 10] = "UGCSHARE", e[e.FRAGMENT = 11] = "FRAGMENT", 
        e[e.TRY = 12] = "TRY", e[e.LOTTERY = 13] = "LOTTERY", e[e.SPECIAL = 14] = "SPECIAL", 
        e[e.DAYROLE = 15] = "DAYROLE", e[e.INITIAL = 999] = "INITIAL";
    }(te || (te = {}));
    !function(e) {
        e[e.E_GENERAL = 1] = "E_GENERAL", e[e.E_RARE = 2] = "E_RARE", e[e.E_EPIC = 3] = "E_EPIC", 
        e[e.E_LEGEND = 4] = "E_LEGEND";
    }(ie || (ie = {})), function(e) {
        e[e.LOCK = 0] = "LOCK", e[e.UNLOCK = 1] = "UNLOCK", e[e.TIMETRYUNLOCK = 2] = "TIMETRYUNLOCK";
    }(se || (se = {}));
    var ne;
    !function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WHITE = 1] = "WHITE", e[e.GREEN = 2] = "GREEN", 
        e[e.BLUE = 3] = "BLUE", e[e.PURPLE = 4] = "PURPLE", e[e.ORANGE = 5] = "ORANGE", 
        e[e.RED = 6] = "RED";
    }(ne || (ne = {}));
    class ae {
        constructor(e) {
            this.id = void 0, this.promotion = void 0, this.id = e, this.promotion = 0;
        }
    }
    class oe extends class {
        constructor() {
            this.id = void 0, this.state = void 0, this.videoCnt = void 0, this.endTryTime = void 0;
        }
        serialize() {
            let e = {}, t = Object.getOwnPropertyNames(this);
            for (let i = 0; i < t.length; ++i) {
                let s = t[i];
                this[s] && (e[s] = this[s]);
            }
            return e;
        }
        unserialize(e) {
            e.id && (this.id = e.id), this.state = se.UNLOCK, e.videoCnt && (e.endTryTime ? this.state = se.TIMETRYUNLOCK : this.state = se.LOCK, 
            this.videoCnt = e.videoCnt), e.endTryTime && (this.endTryTime = e.endTryTime);
        }
    } {
        constructor(e) {
            super(), e && (this.id = e);
        }
    }
    class re extends fx.BaseLogic {
        constructor() {
            super(), this._daySkins = [];
        }
        initCfg() {
            this._cfg = new Map(), this._ownSkins = [];
            for (const e in ee) this._cfg.set(ee[e], {});
            let e = fx.CfgMgr.instance.get("carCfg");
            for (const t in e) {
                e[t].type = ee.Car;
                let i = e[t].type;
                this._cfg.get(i)[t] = e[t];
            }
            this._skinCfg = {}, this._cfg.forEach((e, t) => {
                for (let t in e) {
                    let i = e[t];
                    this._skinCfg[Number(t)] = i, i.unlock.way == te.DAYROLE && this._daySkins.push(i);
                }
            }), this._curIds = new Map(), this._curTryIds = new Map();
        }
        get cfg() {
            return this._cfg;
        }
        static get I() {
            return this._inst || (this._inst = new re()), this._inst;
        }
        storageOwn() {
            return "ownSkins";
        }
        storageId(e) {
            return `cur${e}`;
        }
        onInitOnce() {
            this.initCfg(), this.initStorage();
            for (let e in this._skinCfg) {
                let t = this._skinCfg[e];
                t.unlock.way == te.INITIAL && this.unlockSkin(t.id);
            }
            let e = N.I.getPlayerInfo();
            for (const t in ee) {
                let i = ee[t], s = e[this.storageId(i)];
                if (!s || !this.getCfgById(s) || !this.isOwnSkin(s)) {
                    let e = this.getUnLockedSkinList(i);
                    e[0] && (s = e[0].id);
                }
                this.setCurSkin(i, s, !0);
            }
            this._storageOwnSkin();
        }
        initStorage() {
            let e = this.getOwnSkins(), t = N.I.getPlayerInfo()[this.storageOwn()];
            if (t) for (let i = 0; i < t.length; ++i) {
                let s = new oe();
                s.unserialize(t[i]), this.getCfgById(s.id) && e.push(s);
            }
        }
        getInitSkinCfg(e) {
            let t, i = this.cfg.get(e);
            if (i) {
                for (let e in i) {
                    let s = i[e];
                    if (s && te.INITIAL === s.unlock.way) {
                        t = s;
                        break;
                    }
                }
                return t;
            }
        }
        getFirstSkinCfg(e) {
            return this.getSkinList(e)[0];
        }
        getOwnSkins() {
            return this._ownSkins;
        }
        getCurSkinId(e) {
            let t = this._curIds.get(e);
            return this._curTryIds.get(e) && (t = this._curTryIds.get(e)), t;
        }
        getSkinPrice(e) {
            return this.getCfgById(e).unlock.num;
        }
        getSkinPriceWay(e) {
            return this.getCfgById(e).unlock.way;
        }
        getMatDay(e) {
            return this.getCfgById(e).unlock.day;
        }
        setCurSkinById(e) {
            let t = this.getCfgById(e);
            t && this.setCurSkin(t.type, e);
        }
        setCurSkin(e, t, i = !1) {
            let s = this.getCurSkinId(e);
            if (!t || t === s) return;
            this._curIds.set(e, t), N.I.getPlayerInfo()[this.storageId(e)] = t;
            let n = {
                oldId: s,
                curId: t,
                skinType: e
            };
            this.event(Q, n);
        }
        getCurTrySkinId(e) {
            return this._curTryIds.get(e);
        }
        setCurTrySkin(e, t) {
            if (this.getCurTrySkinId(e) == t) return;
            let i = this.getCurSkinId(e);
            this._curTryIds.set(e, t);
            let s = {
                oldId: i,
                curId: t,
                skinType: e
            };
            this.event(Q, s);
        }
        clearCurTrySkin() {
            for (const e in ee) this.setCurTrySkin(ee[e], void 0);
        }
        getSkinType(e) {
            return this.getCfgById(e).type;
        }
        getSkinById(e) {
            return this.getOwnSkins().filter((t, i, s) => e === t.id, this)[0];
        }
        isOwnSkin(e) {
            if (!e) return;
            let t = this.getSkinById(e);
            return !!t && t.state !== se.LOCK;
        }
        getCfgById(e) {
            if (!e) return;
            let t = this._skinCfg[e];
            return fx.Utils.cloneDeep(t);
        }
        getSkinList(e, t = !0) {
            let i = this.cfg.get(e);
            if (!i) return [];
            let s = [];
            for (let e in i) {
                let n = i[e];
                n && (t && s.push(n));
            }
            return s;
        }
        getLockedSkinList(e, t) {
            let i = [], s = this.getSkinList(e);
            for (const e of s) this.isOwnSkin(e.id) || null != t && t != e.unlock.way || i.push(e);
            return i;
        }
        getAllLockSkinCfg() {
            let e = [], t = fx.CfgMgr.instance.get("skinCfg");
            for (const i in t) this.isOwnSkin(t[i].id) || e.push(t[i]);
            return e;
        }
        getUnLockedSkinList(e, t) {
            let i = [], s = this.getSkinList(e);
            for (const e of s) this.isOwnSkin(e.id) && (null != t && t != e.unlock.way || i.push(e));
            return i;
        }
        getRandomSkinList(e) {
            let t = [], i = this.getSkinList(e);
            for (const e of i) e.unlock.way == te.COINS && t.push(e);
            return t;
        }
        getAllRandomList() {
            let e = [], t = this._skinCfg;
            for (const i in t) t[i].unlock.way == te.COINS && e.push(t[i]);
            return e;
        }
        getlockedTryList() {
            let e = [], t = this._skinCfg;
            for (const i in t) t[i].unlock.way != te.TRY || this.isOwnSkin(t[i].id) || e.push(t[i]);
            return e;
        }
        getUnLockedAllRandomList() {
            let e = this.getAllRandomList(), t = [];
            for (let i = 0; i < e.length; i++) this.isOwnSkin(e[i].id) && t.push(e[i]);
            return t;
        }
        getCurCrosshairByWeaponType(e) {
            let t = e + "_Ch";
            return this.getCurSkinCfg(t);
        }
        isCurSkin(e, t) {
            return this._curIds.get(e) == t;
        }
        getCurSkinCfg(e, t = !1) {
            let i = this.getCurSkinId(e), s = this.getCfgById(i);
            return !s && t && (s = this.getFirstSkinCfg(e)), s;
        }
        getCurSkinCfgById(e) {
            let t = this.getCfgById(e);
            if (t) return this.getCurSkinCfg(t.type);
        }
        getSkinInfo(e) {
            return this.getSkinById(e);
        }
        unlockSkin(e) {
            let t = this.getCfgById(e);
            if (!t) return;
            let i = t.type;
            if (!this._addSkin(e, i)) return;
            this._storageOwnSkin();
            let s = {
                id: e,
                skinType: i
            };
            this.event(q, s);
        }
        _storageOwnSkin() {
            let e = this.getOwnSkins();
            if (!e) return;
            let t = [];
            for (let i = 0; i < e.length; ++i) {
                let s = e[i];
                t.push(s.serialize());
            }
            N.I.getPlayerInfo()[this.storageOwn()] = t;
        }
        _addSkin(e, t) {
            let i = this.getCfgById(e);
            if (!i) return;
            if (this.isOwnSkin(e)) return;
            let s = this.getOwnSkins(), n = this.getSkinById(e);
            if (te.VIDEO === i.unlock.way || te.TRY === i.unlock.way) n ? n.videoCnt++ : (n = new oe(e), 
            s.push(n), n.state = se.LOCK, n.videoCnt = 1), n.videoCnt >= i.unlock.num && (n.state = se.UNLOCK, 
            n.videoCnt = void 0); else if (te.EGG === i.unlock.way) n ? (n.state = se.UNLOCK, 
            n.endTryTime = void 0, n.videoCnt = void 0) : (n = new oe(e), n.state = se.UNLOCK, 
            s.push(n)); else {
                if (n) return;
                n = new oe(e), n.state = se.UNLOCK, s.push(n);
            }
            return n;
        }
        get breakingIceSkinPools() {
            if (!this.cfg) return;
            if (this._breakingIceSkinPools) return this._breakingIceSkinPools;
            this._breakingIceSkinPools = [];
            let e = N.I.getPlayerInfo().stageId;
            for (let t in this._skinCfg) {
                let i = this._skinCfg[t];
                i && (i.unlock && (te.ICEBREAK !== i.unlock.way && te.GODGIVE !== i.unlock.way || this.isOwnSkin(i.id) || i.unlock.stageId && e >= i.unlock.stageId && this._breakingIceSkinPools.push(new ae(i.id))));
            }
            return this._breakingIceSkinPools;
        }
        set breakingIceSkinPools(e) {
            this._breakingIceSkinPools = e;
        }
        addBreakingIceRoleSkinPool() {
            let e = N.I.getPlayerInfo();
            if (!e) return;
            let t = e.stageId;
            if (t) for (let e in this._skinCfg) {
                let i = this._skinCfg[e];
                if (i && (i.unlock && (te.ICEBREAK === i.unlock.way || te.GODGIVE === i.unlock.way) && !this.isOwnSkin(i.id) && t >= i.unlock.stageId)) {
                    this.breakingIceSkinPools.filter((e, t, s) => e.id === i.id, this)[0] || this.breakingIceSkinPools.push(new ae(i.id));
                }
            }
        }
        removeBreakingIceSkinPool(e) {
            if (!this.breakingIceSkinPools) return;
            let t;
            this.breakingIceSkinPools.filter((i, s, n) => i.id === e && (t = s, !0), this), 
            null !== t && this.breakingIceSkinPools.splice(t, 1);
        }
        addBreakingIceSkin(e) {
            this.isOwnSkin(e) || (this.setCurSkin(this.getSkinType(e), e), this.unlockSkin(e), 
            this.removeBreakingIceSkinPool(e));
        }
        checkBreakingIceSkinTrigger() {
            let e = [];
            for (let t = 0; t < this.breakingIceSkinPools.length; ++t) {
                let i = this.breakingIceSkinPools[t];
                i && (this.getCfgById(i.id) && e.push(i));
            }
            if (e && e.length) return e = e.sort((e, t) => e.promotion - t.promotion), e[0].promotion++, 
            e[0].id;
        }
        getUgcShareCnt(e) {
            let t = N.I.getPlayerInfo();
            if (!t.ugcShareSkins) return 0;
            for (const i of t.ugcShareSkins) if (i[0] == e) return i[1];
            return 0;
        }
        getCurUgcShareSkin() {
            let e = N.I.getPlayerInfo(), t = e.ugcShareSkinId;
            if (t) {
                let e = t;
                if (!this.isOwnSkin(e)) return e;
            }
            e.ugcShareSkinId = void 0;
            let i = [], s = [];
            for (const e in ee) s = s.concat(this.getSkinList(ee[e]));
            for (const e of s) e && te.UGCSHARE === e.unlock.way && (this.isOwnSkin(e.id) || i.push(e));
            if (0 == i.length) return;
            i.sort((e, t) => e.unlock.order - t.unlock.order);
            let n = i[0];
            return e.ugcShareSkinId = n.id, n.id;
        }
        getUgcShareNeedCount(e) {
            let t = this.getCfgById(e), i = this.getUgcShareCnt(e);
            return Math.max(t.unlock.num - i, 0);
        }
        onUgcShareSuccess(e) {
            if (this.isOwnSkin(e)) return;
            let t = this.getCfgById(e);
            if (t.unlock.way != te.UGCSHARE) return;
            let i = this.getUgcShareCnt(e) + 1;
            return i >= t.unlock.num && this.unlockSkin(e), this.updateUgcShareStorage(e, i), 
            !!this.isOwnSkin(e) || void 0;
        }
        updateUgcShareStorage(e, t) {
            let i = N.I.getPlayerInfo(), s = i.ugcShareSkins, n = !1, a = [];
            if (s) for (const i of s) this.isOwnSkin(i[0]) || a.push(i), i[0] == e && (i[1] = t, 
            n = !0);
            n || this.isOwnSkin(e) || a.push([ e, t ]), i.ugcShareSkins = a;
        }
        getCurStageSkin() {
            let e = this._skinCfg;
            if (!e) return null;
            let t = N.I.getPlayerInfo(), i = t.stageSkinInfo, s = i[0];
            if (s) {
                let e = this.getCfgById(s);
                if (e) {
                    let t = null != i[1] ? i[1] : 0;
                    if (t >= e.unlock.num) this.setStageSkinProgress(s, t); else if (!this.isOwnSkin(s)) return {
                        skin: e,
                        progress: t
                    };
                }
            }
            let n = [], a = [];
            for (let t in e) {
                let i = e[t];
                i && (te.STAGEPROGRESS === i.unlock.way && (this.isOwnSkin(i.id) || (this.isStageSkinFinish(i.id) ? n.push(i) : a.push(i))));
            }
            if (0 == n.length && 0 == a.length) return null;
            0 == a.length && (re.isAllStageSkinUnlocked = !0);
            let o, sortFun = (e, t) => e.order - t.order;
            n.sort(sortFun), a.sort(sortFun);
            let r = 0;
            if (a.length > 0) o = a[0]; else {
                if (s) {
                    let e = !1;
                    for (const t of n) {
                        if (e) {
                            o = t;
                            break;
                        }
                        t.id == s && (e = !0);
                    }
                    o || (o = n[0]);
                } else o = n[0];
                o && (r = o.unlock.num);
            }
            return o ? (t.stageSkinInfo = [ o.id, 0 ], {
                skin: o,
                progress: r
            }) : null;
        }
        isStageSkinFinish(e) {
            return -1 != N.I.getPlayerInfo().stageSkins.indexOf(e);
        }
        setStageSkinProgress(e, t) {
            let i = this.getCfgById(e);
            if (!i) return;
            let s = N.I.getPlayerInfo();
            if (t >= i.unlock.num) {
                let t = s.stageSkins.slice();
                -1 == t.indexOf(e) && (t.push(e), s.stageSkins = t), s.stageSkinInfo = [ e, i.unlock.num ];
            } else s.stageSkinInfo = [ e, t ];
        }
        getLockedLotterId() {
            let e = [];
            for (const t in this._skinCfg) this.isOwnSkin(this._skinCfg[t].id) || this._skinCfg[t].unlock.way != te.LOTTERY || e.push(this._skinCfg[t].id);
            return e.length > 0 ? e[fx.Utils.getIntRandom(0, e.length - 1)] : null;
        }
        getRandomSkinId(e) {
            let t = re.I.getSkinList(e, !1);
            return t[fx.Utils.getIntRandom(0, t.length - 1)].id;
        }
        unlockAllSkin() {
            for (const e in this._skinCfg) {
                let t = this._skinCfg[e];
                if (t.unlock.num) for (let e = 0; e < t.unlock.num; e++) this.unlockSkin(t.id); else this.unlockSkin(t.id);
            }
        }
        getDayCfg(e) {
            for (let t = 0; t < this._daySkins.length; ++t) {
                let i = this._daySkins[t];
                if (i.unlock.day <= e && !this.isOwnSkin(i.id)) return i;
            }
        }
    }
    re.isAllStageSkinUnlocked = !1;
    class he {
        constructor() {
            this.items = [], this.itemMap = new Map();
            let e = fx.CfgMgr.instance.get("itemCfg");
            for (const t in e) {
                let i = e[t];
                this.itemMap.set(i.key, i), this.items.push(i.key), i.points = [];
                let s = i.typeShape.split(",");
                for (const e of s) {
                    if (!e.includes("_")) continue;
                    let t = e.split("_"), s = new a(Number(t[0]), Number(t[1]), Number(t[2]));
                    i.points.push(s);
                }
            }
        }
        static get I() {
            return this._instance || (this._instance = new he()), this._instance;
        }
        init() {}
        getCfg(e) {
            return this.itemMap.has(e) ? this.itemMap.get(e) : null;
        }
        getModelUrlByKey(e) {
            return `res3d/${e}.lh`;
        }
        getItems() {
            return this.items;
        }
    }
    class le {
        constructor() {}
        static get instance() {
            return le._instace || (le._instace = new le()), le._instace;
        }
        event(e, t) {
            // let i;
            // i = `${e}`, t ? sdk.Sdk.instance.sendEvent(i, t) : sdk.Sdk.instance.sendEvent(i);
        }
    }
    var de;
    !function(e) {
        e.BEFORE_LOADING = "BEFORE_LOADING", e.LOADING_COMPLETED = "LOADING_COMPLETED", 
        e.OPEN_MAIN = "OPEN_MAIN", e.START_GAME = "START_GAME", e.EXPORT_GAME = "EXPORT_GAME", 
        e.MISLEAD = "MISLEAD", e.SHARE = "SHARE", e.VIDEO_SHOP = "VIDEO_SHOP", e.VIDEO_SKIP = "VIDEO_SKIP";
    }(de || (de = {}));
    class ce extends G.scenes.settting.SettingDialogUI {
        constructor(e, t) {
            super(), this.from = void 0, this.cb = void 0, this.clicknum = 0, this.from = e, 
            this.cb = t;
        }
        onAwake() {
            // sdk.Sdk.instance.showInterstitial(), 
            this.updateSound(), this.updateVibrate(), this.lable_version.text = "Version:" + i.version, 
            this.img_version.on(Laya.Event.CLICK, this, this.clickImgVersion), this.img_sound.on(Laya.Event.CLICK, this, this.toggleSound), 
            this.img_close.on(Laya.Event.CLICK, this, this.onClickClose);
        }
        clickImgVersion() {
            this.clicknum++, this.clicknum >= ce.eggClickNumber && (this.eggFunc(), this.clicknum = 0);
        }
        eggFunc() {
            this.somethingShow || Laya.loader.load("res/settingRes/00.png", Laya.Handler.create(this, e => {
                var t = new Uint16Array(e), s = String.fromCharCode(...t);
                this.lable_version.text = "Version:" + i.version + `       ${s}`, this.somethingShow = !0;
            }), null, Laya.Loader.BUFFER);
        }
        onRemove() {
            Laya.loader.clearRes("res/atlas/res/settingRes.atlas");
        }
        toggleSound() {
            fx.SoundManager.instance.toggleAll(), this.updateSound();
        }
        updateSound() {
            let e = fx.SoundManager.instance.getToggleSoundFxStatus();
            this.img_sound.skin = e ? "res/settingRes/img_sound_on.png" : "res/settingRes/img_sound_off.png";
        }
        toggleVibrate() {
            N.I.getPlayerInfo().vibrateEnable = !N.I.getPlayerInfo().vibrateEnable, this.updateVibrate();
        }
        updateVibrate() {
            N.I.getPlayerInfo().vibrateEnable;
        }
        onClickClose() {
            fx.SceneManager.closePanel(this);
        }
    }
    ce.eggClickNumber = 5;
    class ge extends G.scenes.skin.SkinViewUI {
        constructor() {
            super(...arguments), this.canTouchAd = !0;
        }
        onAdd() {
            this.img_close.on(Laya.Event.CLICK, this, this.onClickClose), this.initList(), this.updateSkin3D(), 
            this.updateBottomBtn(), this.box_video.on(Laya.Event.CLICK, this, this.onClickVideo), 
            this.box_coin.on(Laya.Event.CLICK, this, this.onClickCoin), this.touchBox = this.img_close.getChildByName("touch_box")
            // sdk.Sdk.instance.hideBanner();
        }
        onDestroy() {
            Laya.loader.clearTextureRes("res/atlas/res/skin.atlas");
        }
        onClickClose() {
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0
            fx.SceneManager.popView();
            //  sdk.Sdk.instance.showBanner();
        }
        initList() {
            let e = re.I.getSkinList(ee.Car);
            this.list_car.vScrollBarSkin = "", this.list_car.repeatX = 3, this.list_car.repeatY = Math.ceil(e.length / 3), 
            this.list_car.array = e, this.list_car.renderHandler = new Laya.Handler(this, this.updateItem), 
            this.selectItem = null;
        }
        updateItem(e) {
            if (!e.dataSource) return;
            let t = e.dataSource, i = (re.I.getSkinById(t.id), re.I.isOwnSkin(t.id)), s = re.I.isCurSkin(ee.Car, t.id);
            e.getChildByName("img_car").skin = t.icon;
            let n = e.getChildByName("img_black");
            if (i) n.visible = !1; else {
                n.visible = !0, n.mask.skin = t.icon;
            }
            e.getChildByName("img_select").visible = s, e.on(Laya.Event.CLICK, this, this.onClickItem, [ e ]), 
            s && (this.usedItem = e);
        }
        onClickItem(e) {
            let t = e.dataSource;
            re.I.isOwnSkin(t.id) && (re.I.setCurSkin(ee.Car, t.id), this.usedItem && this.updateItem(this.usedItem), 
            this.updateItem(e)), this.selectItem = e, this.updateSkin3D(t), this.updateBottomBtn();
        }
        updateBottomBtn() {
            if (this.box_coin.visible = !1, this.box_video.visible = !1, !this.selectItem) return;
            let e = this.selectItem.dataSource, t = re.I.getSkinById(e.id);
            if (!re.I.isOwnSkin(e.id)) if (e.unlock.way == te.VIDEO) {
                this.box_video.visible = !0;
                let i = 0;
                t && t.videoCnt && (i = t.videoCnt), this.box_video.getChildByName("label_num").value = `${i}/${e.unlock.num}`;
            } else {
                this.box_coin.visible = !0, this.box_coin.getChildByName("label_coin").value = `${e.unlock.num}`;
            }
        }
        onClickVideo() {
            let e = this.selectItem.dataSource;

            this.canTouchAd = !1, 
            this.touchBox.visible = this.canTouchAd,
             re.I.unlockSkin(e.id), 

                this.selectItem && 
                (this.updateItem(this.selectItem),
                this.onClickItem(this.selectItem), 
                this.updateBottomBtn()) 
            // B.I.playVideo("SkinDialog", this, t => {
            //     t ? (this.canTouchAd = !1, this.touchBox.visible = this.canTouchAd, re.I.unlockSkin(e.id), 
            //     this.selectItem && (this.updateItem(this.selectItem), this.updateBottomBtn()), le.instance.event(de.VIDEO_SHOP, {
            //         type: "SUCCESS"
            //     })) : le.instance.event(de.VIDEO_SHOP, {
            //         type: "FAIL"
            //     });
            // });
        }
        onClickCoin() {
            let e = this.selectItem.dataSource;
            N.I.coinsEnough(e.unlock.num) ? (this.canTouchAd = !1, this.touchBox.visible = this.canTouchAd, 
            N.I.useCoins(e.unlock.num), re.I.unlockSkin(e.id), this.updateItem(this.selectItem), 
            this.updateBottomBtn()) : fx.Utils.showTips("Not enough coins");
        }
        createScene3d() {
            this.scene3d = new Laya.Scene3D(), this.box_scene3d.addChild(this.scene3d);
            let e = new Laya.Camera();
            e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
            
            
            e.transform.position = new a(0, 0, -16), 
            e.normalizedViewport = this.getViewPort(), 
            
            e.transform.position = new a(20, 0, -16),
            
            e.transform.lookAt(new a(0, 0, 0), a.Up), 
            this.scene3d.addChild(e);
            var t = this.scene3d.addChild(new Laya.DirectionLight());

           
            t.color = new Laya.Vector3(1, 1, 1);
            let i = new Laya.Quaternion();
            Laya.Quaternion.createFromYawPitchRoll(0, 180 * Math.PI / 180, 0, i), t.transform.localRotation = i;
        }
        getViewPort() {
            let e = this.box_scene3d.width;
            isNaN(this.box_scene3d.left) || isNaN(this.box_scene3d.left) || (e = Laya.stage.width - this.box_scene3d.left - this.box_scene3d.right);
            let t = this.box_scene3d.height;
            isNaN(this.box_scene3d.top) || isNaN(this.box_scene3d.bottom) || (t = Laya.stage.height - this.box_scene3d.top - this.box_scene3d.bottom);
            let i = this.box_scene3d.x;
            isNaN(this.box_scene3d.left) ? isNaN(this.box_scene3d.right) ? isNaN(this.box_scene3d.centerX) || (i = Laya.stage.width / 2 - this.box_scene3d.width / 2 + this.box_scene3d.centerX) : i = Laya.stage.width - this.box_scene3d.right - this.box_scene3d.width : i = this.box_scene3d.left;
            let s = this.box_scene3d.y;
            return isNaN(this.box_scene3d.top) ? isNaN(this.box_scene3d.bottom) || (s = Laya.stage.height - this.box_scene3d.bottom - t) : s = this.box_scene3d.top, 
            new Laya.Viewport(i / Laya.stage.width, s / Laya.stage.height, e / Laya.stage.width, t / Laya.stage.height);
        }
        updateSkin3D(e) {
            this.scene3d || this.createScene3d(), e || (e = re.I.getCurSkinCfg(ee.Car)), fx.Utils.create3dModel(e.model, this, e => {
                e && (this.modelSp && this.modelSp.destroy(),
                 this.modelSp = e.clone(), 
               
                this.scene3d.addChild(this.modelSp), 
                this.modelSp.transform.localPosition = new a(1, -1.4, 0), 
                // console.log("车车车;",this.modelSp.transform.localScale),
                // this.modelSp.transform.localScale = new a(45, 45, 45), 
                fx.Helper.rotateAnim(this.modelSp, 360, 6, 0, "y", !0));
            });
        }
    }
    Laya.ClassUtils.regClass("SkinView", ge);
    class ue extends Laya.Script {
        constructor() {
            super(), this.gridSize = {
                w: 68,
                h: 106
            }, this.phoneSize = {
                w: 0,
                h: 0
            }, this.screenSize = {
                w: 0,
                h: 0
            };
        }
        onAwake() {
            // let e = sdk.Sdk.instance.getSystemInfo();
            // e && (this.gridSize.w *= e.pixelRatio, this.gridSize.h *= e.pixelRatio, this.phoneSize.w = e.screenWidth * e.pixelRatio, 
            // this.phoneSize.h = e.screenHeight * e.pixelRatio, this.screenSize.w = e.screenWidth, 
            // this.screenSize.h = e.screenHeight), this.showAd();
        }
        onEnable() {
            // this.showAd(), Laya.timer.once(2e4, this, this.showAd)
            // , fx.EventCenter.instance.on(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.adFun);
        }
        onDestroy() {
            // Laya.timer.clear(this, this.showAd), fx.EventCenter.instance.off(fx.BaseEvent.E_PANEL_OPENCLOSE, this, this.adFun)
            // sdk.Sdk.instance.hideBlockAd(i.channel_AdIds.blockId, !0);
        }
        showAd() {
            // this.owner;
            // let e = this.getY();
            // sdk.Sdk.instance.hideBlockAd(i.channel_AdIds.blockId), 
            // Laya.timer.callLater(this, () => {
            //     sdk.Sdk.instance.showBlockAd(i.channel_AdIds.blockId, {
            //         left: 10,
            //         top: e
            //     }, 1), Laya.timer.callLater(this, () => {
            //         sdk.Sdk.instance.showBlockAd(i.channel_AdIds.blockId, {
            //             left: 10,
            //             top: e
            //         }, 1);
            //     });
            // });
        }
        againShowAd(e) {
            e.code == sdk.SdkCode.AD_NATIVE_CUSTOM_CLOSE && Laya.timer.once(15e3, this, () => {
                this.showAd();
            });
        }
        adFun(e) {
            // e.code == fx.BaseCode.PANEL_OPEN || e.code == fx.BaseCode.VIEW_OPEN ? sdk.Sdk.instance.hideBlockAd(i.channel_AdIds.blockId, !1) : e.code != fx.BaseCode.PANEL_CLOSE && e.code != fx.BaseCode.VIEW_CLOSE || this.showAd();
        }
        getY() {
            let e = this.owner, t = e.y;
            return isNaN(e.top) ? isNaN(e.bottom) ? isNaN(e.centerY) || (t = Laya.stage.height / 2 + e.centerY) : t = Laya.stage.height - e.bottom - e.height : t = e.top, 
            t;
        }
    }
    class me extends Laya.Script3D {
        constructor() {
            super(...arguments), this.lowFrameAnims = [], this.pushDelta = 0, this.popDelta = 0;
        }
        onAwake() {
            let e = (this.s3d = this.owner).getChildByName("Directional Light");
            fx.GraphicsCfg.enableShadow && (e.shadowMode = Laya.ShadowMode.SoftLow, e.shadowCascadesMode = Laya.ShadowCascadesMode.TwoCascades, 
            e.shadowResolution = 2048, e.shadowDistance = 50, e.shadowStrength = .5), this.light = e;
            let t = fx.Utils.getAllCameras();
            t.forEach(e => {
                e.enableHDR = fx.GraphicsCfg.enableHDR;
            }), this.defaultCamera = t[0];
        }
        getLight() {
            return this.light;
        }
        onUpdate() {}
    }
    class pe extends fx.PhysicsScript {
        constructor() {
            super(...arguments), this.min = new a(), this.max = new a(), this.temp2 = new a(), 
            this.impulse = new a(), this.bodyEnableRadius = 0;
        }
        init(e, t) {
            super.init(e), this.safeArea = t, this.enabled = !0;
        }
        enableBodyByRadius(e, t, i = !0) {
            this.origSp = e, this.bodyEnableRadius = t, this.bodyEnableOnce = i;
        }
        onUpdate() {
            if (this.isStatic() && !this.isSyncShape()) return;
            if (this.origSp && !this.origSp.destroyed) {
                let e = a.distanceSquared(this.obstacle.transform.position, this.origSp.transform.position), t = this.bodyEnableRadius;
                if (!(e < t * t)) return void super.onDisable();
                super.onEnable(), this.bodyEnableOnce && (this.origSp = null);
            }
            let e = this.body;
            !e.sleeping && e.parent ? (super.onUpdate(), this.safeArea && 0 == Laya.CollisionUtils.boxContainsPoint(this.safeArea, this.obstacle.transform.position) && this.onOutSide()) : this.impulse.toDefault();
        }
        onOutSide() {
            super.onDisable();
        }
        applyImpulse(e, t, i) {
            a.scalarLengthSquared(e) > 0 && (this.impulse.from(e), this.body.applyImpulse(e, t, i));
        }
        getImpulse() {
            return this.impulse;
        }
        setVelocity(e, t) {
            let i = this.body.linearVelocity;
            i.x = e.x, t || (i.y = e.y), i.z = e.z;
        }
        getVelocity() {
            let e = this.temp, t = this.body.linearVelocity;
            return e.setValue(t.x, t.y, t.z), e;
        }
        setSpeed(e) {
            let t = this.body.linearSpeed;
            t.x = e.x, t.y = e.y, t.z = e.z;
        }
        getSpeed() {
            let e = this.temp, t = this.body.linearSpeed;
            return e.setValue(t.x, t.y, t.z), e;
        }
        setPositionConstraint(e, t) {
            let i = this.offset;
            this.body.positionConstraint = [ e.x + i.x, t.x + i.x, e.y + i.y, t.y + i.y, e.z + i.z, t.z + i.z ];
        }
        clearForces() {
            this.setSpeed(a.ZERO), this.setVelocity(a.ZERO);
        }
        getBoundBox() {
            let e = this.min;
            e.from(this.boundBox.min);
            let t = this.max;
            t.from(this.boundBox.max);
            let i = this.obstacle.transform.position, s = this.obstacle.transform.rotation;
            a.transformQuat(e, s, e), a.transformQuat(t, s, t);
            let n = this.temp, o = this.temp2;
            return a.min(e, t, n), a.add(i, n, n), a.max(e, t, o), a.add(i, o, o), new Laya.BoundBox(n, o);
        }
        getColliderShape() {
            return this.option.shape;
        }
    }
    class fe extends Laya.Material {
        constructor() {
            super(), fe.initShader(), this.setShaderName("MultiplePassOutlineShader"), this._shaderValues.setNumber(fe.OUTLINEWIDTH, .01581197), 
            this._shaderValues.setNumber(fe.OUTLINELIGHTNESS, 1), this._shaderValues.setVector(fe.OUTLINECOLOR, new Laya.Vector4(1, 1, 1, 0));
        }
        static __init__() {}
        get albedoTexture() {
            return this._shaderValues.getTexture(fe.ALBEDOTEXTURE);
        }
        set albedoTexture(e) {
            this._shaderValues.setTexture(fe.ALBEDOTEXTURE, e);
        }
        get outlineColor() {
            return this._shaderValues.getVector(fe.OUTLINECOLOR);
        }
        set outlineColor(e) {
            this._shaderValues.setVector(fe.OUTLINECOLOR, e);
        }
        get outlineWidth() {
            return this._shaderValues.getNumber(fe.OUTLINEWIDTH);
        }
        set outlineWidth(e) {
            e = Math.max(0, Math.min(.05, e)), this._shaderValues.setNumber(fe.OUTLINEWIDTH, e);
        }
        get outlineLightness() {
            return this._shaderValues.getNumber(fe.OUTLINELIGHTNESS);
        }
        set outlineLightness(e) {
            e = Math.max(0, Math.min(1, e)), this._shaderValues.setNumber(fe.OUTLINELIGHTNESS, e);
        }
        static initShader() {
            if (this.isInit) return;
            this.isInit = !0, fe.__init__();
            var e = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, t = {
                u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                u_OutlineWidth: Laya.Shader3D.PERIOD_MATERIAL,
                u_OutlineColor: Laya.Shader3D.PERIOD_MATERIAL,
                u_OutlineLightness: Laya.Shader3D.PERIOD_MATERIAL,
                u_AlbedoTexture: Laya.Shader3D.PERIOD_MATERIAL
            }, i = Laya.Shader3D.add("MultiplePassOutlineShader"), s = new Laya.SubShader(e, t);
            i.addSubShader(s);
            s.addShaderPass('\n        #include "Lighting.glsl";\n\n        attribute vec4 a_Position;\n        attribute vec3 a_Normal;\n        \n        uniform mat4 u_MvpMatrix; \n        uniform float u_OutlineWidth;\n        \n        void main() \n        {\n           vec4 position = vec4(a_Position.xyz + a_Normal * u_OutlineWidth, 1.0);\n           gl_Position = u_MvpMatrix * position;\n           gl_Position=remapGLPositionZ(gl_Position);\n        }', "\n        #ifdef FSHIGHPRECISION\n            precision highp float;\n        #else\n           precision mediump float;\n        #endif\n        uniform vec4 u_OutlineColor; \n        uniform float u_OutlineLightness;\n    \n        void main()\n        {\n           vec3 finalColor = u_OutlineColor.rgb * u_OutlineLightness;\n           gl_FragColor = vec4(finalColor,0.0); \n        }").renderState.cull = Laya.RenderState.CULL_FRONT;
            s.addShaderPass('\n        #include "Lighting.glsl"\n        attribute vec4 a_Position; \n        attribute vec2 a_Texcoord0;\n        \n        uniform mat4 u_MvpMatrix;\n        uniform mat4 u_WorldMat;\n        \n        attribute vec3 a_Normal; \n        varying vec3 v_Normal; \n        varying vec2 v_Texcoord0; \n        \n        void main() \n        {\n           gl_Position = u_MvpMatrix * a_Position;\n           mat3 worldMat=mat3(u_WorldMat); \n           v_Normal=worldMat*a_Normal; \n           v_Texcoord0 = a_Texcoord0;\n           gl_Position=remapGLPositionZ(gl_Position); \n        }', "\n        #ifdef FSHIGHPRECISION\n            precision highp float;\n        #else\n            precision mediump float;\n        #endif\n        varying vec2 v_Texcoord0;\n        varying vec3 v_Normal;\n        \n        uniform sampler2D u_AlbedoTexture;\n        \n        \n        void main()\n        {\n           vec4 albedoTextureColor = vec4(1.0);\n           \n           albedoTextureColor = texture2D(u_AlbedoTexture, v_Texcoord0);\n           gl_FragColor=albedoTextureColor;\n        }");
        }
    }
    fe.ALBEDOTEXTURE = Laya.Shader3D.propertyNameToID("u_AlbedoTexture"), fe.OUTLINECOLOR = Laya.Shader3D.propertyNameToID("u_OutlineColor"), 
    fe.OUTLINEWIDTH = Laya.Shader3D.propertyNameToID("u_OutlineWidth"), fe.OUTLINELIGHTNESS = Laya.Shader3D.propertyNameToID("u_OutlineLightness");
    class Se extends fx.Helper {
        static crashSprite3D(e, t, i) {}
        static clearCrashBox() {}
        static crashSprite3dGravity(e, t, i, s = 90, n = !0, a = !1, o = 14, r = 16, h = 3e3) {}
        static clearCrashBoxGravity() {}
        static createMeshColliderShape(e, t) {
            let i = e.getComponent(Laya.PhysicsCollider);
            if (i) return;
            i = e.addComponent(Laya.PhysicsCollider);
            let s = new Laya.MeshColliderShape();
            return s.mesh = e.meshFilter.sharedMesh, i.colliderShape = s, t && (i.collisionGroup = t), 
            i;
        }
        static createBoxColliderShape(e, t, i) {
            let s = e.getComponent(Laya.PhysicsCollider);
            if (s) return;
            s = e.addComponent(Laya.PhysicsCollider);
            let n = fx.Utils.get3dLocalModelSize(e);
            i && (n.x *= i.x, n.y *= i.y, n.z *= i.z);
            let a = new Laya.BoxColliderShape(n.x, n.y, n.z);
            return s.colliderShape = a, t && (s.collisionGroup = t), s;
        }
        static setColliderShapeGroup(e, t, i) {
            let s = e.getComponent(Laya.PhysicsCollider);
            return s && (s.collisionGroup = t, i && (s.canCollideWith = i)), s;
        }
        static setRigidBodyCollideWith(e, t, i) {
            let s = e.getComponent(Laya.Rigidbody3D);
            return s && (i && (s.collisionGroup = i), s.canCollideWith = t), s;
        }
        static smoothProcMeshCollider(e, t) {
            let i = e.meshFilter.sharedMesh, s = e;
            if (i && !s.__smoothprocmeshcollider) {
                let n;
                s.__smoothprocmeshcollider = !0;
                const createFunc = () => {
                    let i = e.getComponent(Laya.PhysicsCollider);
                    if (!i) {
                        i = e.addComponent(Laya.PhysicsCollider);
                        let s = new Laya.MeshColliderShape();
                        s.mesh = e.meshFilter.sharedMesh, i.colliderShape = s, Se.setColliderShapeGroup(e, t);
                    }
                    s.__smoothprocmeshcollider = !1, e.off(Laya.Event.REMOVED, this, n);
                };
                let a = i;
                if (a._nativeTriangleMesh) createFunc(); else {
                    let t = Laya.Mesh, i = new Laya3D._physics3D.btTriangleMesh(), o = t._nativeTempVector30, r = t._nativeTempVector31, h = t._nativeTempVector32, l = a._tempVector30, d = a._tempVector31, c = a._tempVector32, g = a._vertexBuffer, u = a._getPositionElement(g), m = g.getData(), p = g.vertexDeclaration.vertexStride / 4, f = u.offset / 4, S = a._indexBuffer.getData(), I = 0;
                    const updateFunc = () => {
                        const e = Laya.Utils3D._convertToBulletVec3;
                        for (;I < S.length; I += 3) {
                            if (Laya.stage.getTimeFromFrameStart() > 30) return;
                            let t = S[I] * p + f, s = S[I + 1] * p + f, n = S[I + 2] * p + f;
                            l.setValue(m[t], m[t + 1], m[t + 2]), d.setValue(m[s], m[s + 1], m[s + 2]), c.setValue(m[n], m[n + 1], m[n + 2]), 
                            e(l, o, !0), e(d, r, !0), e(c, h, !0), i.addTriangle(o, r, h, !0);
                        }
                        a._nativeTriangleMesh = i, Laya.timer.clear(this, updateFunc), createFunc();
                    };
                    Laya.timer.frameLoop(1, this, updateFunc), n = (() => {
                        s.__smoothprocmeshcollider = !1, Laya.timer.clear(this, updateFunc);
                    }), e.once(Laya.Event.REMOVED, this, n);
                }
            }
        }
        static changeRigibodyToCollider(e) {
            let t = e.getComponent(Laya.Rigidbody3D);
            if (t) {
                let i = t.colliderShape.clone(), s = e.addComponent(Laya.PhysicsCollider);
                return s.colliderShape = i, t.enabled = !1, s;
            }
        }
        static changeColliderToRigibody(e) {
            let t = e.getComponent(Laya.PhysicsCollider);
            if (t) {
                let i = t.colliderShape.clone(), s = e.addComponent(Laya.Rigidbody3D);
                return s.colliderShape = i, t.enabled = !1, s;
            }
        }
        static playBombEff(e, t, i, s, n = !0, a = 0) {}
        static playMagEff(e, t, i) {}
        static playChainEff(e, t, i) {}
        static playInvolveEff(e, t, i, s = 1, n = 1, a, o) {
            return e.__involveNodes;
        }
        static playHoleEff(e, t, i, s, n, a, o, r) {}
        static playRollUpEff(e, t, i = 1, s) {}
        static playTornadoEff(e, t, i, s, n, a) {}
        static playThunderLightEff(e, t, i, s) {}
        static scaleAnim(e, t, i, s = 0, n) {
            let o = e;
            if (!o || o.__scale_anim) return;
            i *= 1e3, s *= 1e3;
            let r = new a(), h = e.transform.getWorldLossyScale();
            r.from(h);
            let l = new Laya.Handler(this, function() {
                e.transform.setWorldLossyScale(r);
            });
            o.__scale_anim = Laya.Tween.to(r, {
                x: t.x,
                y: t.y,
                z: t.z,
                update: l
            }, i, null, Laya.Handler.create(this, function() {
                Se.stopScaleAnim(e), n && n.run();
            }), s), e.once(Laya.Event.REMOVED, this, this.stopScaleAnim, [ e ]);
        }
        static stopScaleAnim(e) {
            let t = e, i = t.__scale_anim;
            i && (Laya.Tween.clear(i), e.off(Laya.Event.REMOVED, this, this.stopScaleAnim), 
            t.__scale_anim = null);
        }
        static enableMeshRender(e, t) {
            const anonymous = function(e) {
                let i = fx.Utils.getSpRenderer(e);
                i && (i.enable = t);
                let s = e.getChildren();
                for (const e of s) anonymous(e);
            };
            anonymous(e);
        }
        static filterAffectObstacles(e, t, i, s = !0, n, a, o) {
            return [];
        }
        static getColliderShape(e) {
            let t = e.getComponent(Laya.Rigidbody3D);
            if (t) return t.colliderShape;
            let i = e.getComponent(Laya.PhysicsCollider);
            return i ? i.colliderShape : void 0;
        }
        static initCollider(e, t, i, s = !0) {
            let n = e.getComponent(Laya.PhysicsCollider);
            n && (e.addComponent(pe).init({
                static: !0,
                kinematic: !1,
                belongsTo: t,
                collidesWith: i,
                shape: n.colliderShape,
                debug: d
            }), n.collisionGroup = t, s && n.destroy());
        }
        static getNearestSp(e, t) {
            let i = 1 / 0, s = null;
            for (const n of t) {
                if (n.destroyed) continue;
                let t = a.distanceSquared(n.transform.position, e);
                t < i && (s = n, i = t);
            }
            return s;
        }
        static fadeAnim(e, t, i, s) {
            let n = e.meshRenderer.sharedMaterial;
            if (0 == t) return void (n.albedoColorA = i);
            let a = this, exec = function(i, o) {
                e.__fade_anim = Laya.Tween.to(n, {
                    albedoColorA: o
                }, 1e3 * t, null, Laya.Handler.create(a, function() {
                    n.albedoColorA = o, s ? exec(o, i) : Se.stopFadeAnim(e);
                }));
            };
            exec(n.albedoColorA, i), e.once(Laya.Event.REMOVED, this, this.stopFadeAnim, [ e ]);
        }
        static stopFadeAnim(e) {
            let t = e, i = t.__fade_anim;
            i && (Laya.Tween.clear(i), t.off(Laya.Event.REMOVED, this, this.stopFadeAnim), t.__fade_anim = null);
        }
        static outlineEx(e) {
            fx.Utils.recurisNode(e, e => {
                e instanceof h && fx.Helper.outline(e, new o(1, 1, 0, 1), .015);
            });
        }
        static outline22(e, t, i) {
            let s = fx.Utils.getSpRenderer(e);
            if (s.material instanceof fe) return;
            let n = new fe();
            n.albedoTexture = s.material.albedoTexture, t && (n.outlineColor = t), i && (n.outlineWidth = i), 
            s.material = n;
        }
        static setLayer(e, t) {
            fx.Utils.recurisNode(e, e => {
                e.layer = t;
            });
        }
    }
    class Ie extends Laya.Script3D {
        constructor() {
            super(...arguments), this.originSize = new a(4, 4, 7);
        }
        onAwake() {
            this.topSp = this.owner.getChildByName("ding"), this.rightSp = this.owner.getChildByName("bian1"), 
            this.leftDoor = this.owner.getChildByName("men1"), this.rightDoor = this.owner.getChildByName("men2"), 
            this.initTopRedEffect();
        }
        init(e, t) {
            this.size = e, this.cb = t, this.updateSize(), this.open();
        }
        open() {
            this.leftDoor && this.rightDoor ? (fx.Helper.rotateAnim(this.leftDoor, -150, 1, 0, "y", !1, !0), 
            fx.Helper.rotateAnim(this.rightDoor, 150, 1, 0, "y", !1, !0), this.owner.timerOnce(1200, this, this.onOpenAnimEnd)) : this.leftDoor ? (fx.Helper.rotateAnim(this.leftDoor, -150, 1, 0, "x", !1, !0), 
            this.owner.timerOnce(1200, this, this.onOpenAnimEnd)) : this.owner.timerOnce(100, this, this.onOpenAnimEnd);
        }
        close() {
            this.leftDoor && (fx.Helper.stopRotateAnim(this.leftDoor), this.leftDoor.active = !0), 
            this.rightDoor && (fx.Helper.stopRotateAnim(this.rightDoor), this.rightDoor.active = !0), 
            this.rightSp.active = !0, this.topSp && (this.topSp.active = !0), this.owner.clearTimer(this, this.onOpenAnimEnd), 
            this.leftDoor && this.rightDoor ? (fx.Helper.rotateAnim(this.leftDoor, 150, 1, 0, "y", !1, !0), 
            fx.Helper.rotateAnim(this.rightDoor, -150, 1, 0, "y", !1, !0)) : this.leftDoor && fx.Helper.rotateAnim(this.leftDoor, 150, 1, 0, "x", !1, !0), 
            this.owner.timerOnce(1200, this, this.onCloseAnimEnd);
        }
        updateSize() {
            this.originScale || (this.originScale = this.owner.transform.localScale.clone());
            let e = this.originScale, t = e.x / this.originSize.x * this.size.x, i = e.y / this.originSize.y * this.size.y, s = e.z / this.originSize.z * this.size.z;
            this.owner.transform.localScale = new a(t, i, s);
            let n = new a();
            n.x = -.5 * (this.size.x - this.originSize.x), n.y = -.5 * (this.size.y - this.originSize.y), 
            n.z = .84 * (this.size.z - this.originSize.z), this.owner.transform.localPosition = n;
        }
        onOpenAnimEnd() {
            this.isOpened = !0, this.leftDoor && (this.leftDoor.active = !1), this.rightDoor && (this.rightDoor.active = !1), 
            this.rightSp.active = !1, this.topSp && (this.topSp.active = !1), this.cb.runWith([ "OnOpen" ]);
        }
        onCloseAnimEnd() {
            let e = this.owner.transform.position;
            new fx.Sequence3D().pos(e.x, e.y, e.z + 50, 2e3, !1, Laya.Ease.sineIn).exec(Laya.Handler.create(this, this.onDriveEnd)).run(this.owner), 
            this.cb.runWith([ "OnClose" ]);
        }
        onDriveEnd() {
            this.owner.active = !1, T.I.setGameState(w.E_GAME_FINISH);
        }
        initTopRedEffect() {
            if (this.topSp && this.topSp instanceof h) {
                this.topRedSp = this.topSp.clone(), this.owner.addChild(this.topRedSp);
                let e = this.topSp.meshRenderer.material.clone();
                e.albedoColor = new o(1, 0, 0, .6), this.topRedSp.meshRenderer.material = e, e.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, 
                this.topRedSp.active = !1;
            }
        }
        playTopEffect() {
            if (!this.topRedSp) return;
            this.topRedSp.active = !0, this.owner.clearTimer(this, this.stopTopEffect), this.owner.timerOnce(1e3, this, this.stopTopEffect), 
            this.topRedSp.meshRenderer.material.albedoColorA = .6, Se.stopFadeAnim(this.topRedSp), 
            Se.fadeAnim(this.topRedSp, .5, 0, !0);
        }
        stopTopEffect() {
            this.topRedSp && (this.topRedSp.active = !1, Se.stopFadeAnim(this.topRedSp));
        }
        upHeight() {
            let e = this.owner.transform.localScale.clone();
            this.size.y += 1, this.updateSize();
            let t = this.owner.transform.localScale.clone();
            this.owner.transform.localScale = e.clone(), fx.Helper.scaleAnim(this.owner, t, 1);
        }
    }
    class Ce {
        constructor(e) {
            this.tempV1 = new a(), this.data = {}, this.items = [], this.size = e.clone();
        }
        addItem(e) {
            this.items.includes(e) ? this.removeItemGrid(e) : this.items.push(e), this.addItemGrid(e);
        }
        removeItem(e) {
            let t = this.items.indexOf(e);
            -1 != t && (this.items.splice(t, 1), this.removeItemGrid(e));
        }
        addItemGrid(e) {
            for (const t of e.points) {
                let i = e.gridPos.x + t.x, s = e.gridPos.y + t.y, n = e.gridPos.z + t.z;
                this.data[i] || (this.data[i] = {}), this.data[i][n] || (this.data[i][n] = {}), 
                this.data[i][n][s] = e;
            }
        }
        removeItemGrid(e) {
            for (const t of e.points) {
                let i = e.gridPos.x + t.x, s = e.gridPos.y + t.y, n = e.gridPos.z + t.z;
                this.data[i] || (this.data[i] = {}), this.data[i][n] || (this.data[i][n] = {}), 
                this.data[i][n][s] = null;
            }
        }
        isEmpty(e, t, i) {
            return !this.getItem(e, t, i);
        }
        getItem(e, t, i) {
            return this.data[e] && this.data[e][i] && this.data[e][i][t] ? this.data[e][i][t] : null;
        }
        getEmptyHeight(e, t) {
            let i = 0;
            for (;i < this.size.y; ++i) {
                let s = !0;
                for (const n of t.points) {
                    let t = e.x + n.x, a = n.y + i, o = e.z + n.z;
                    if (!this.isEmpty(t, a, o)) {
                        s = !1;
                        break;
                    }
                }
                if (s) return i;
            }
            return i;
        }
        isValid(e, t) {
            let i = !0, s = !1;
            for (const n of t.points) {
                let t = e.x + n.x, a = e.y + n.y, o = e.z + n.z;
                if (a >= this.size.y || !this.isEmpty(t, a, o)) {
                    i = !1;
                    break;
                }
                if (t >= this.size.x || !this.isEmpty(t, a, o)) {
                    i = !1;
                    break;
                }
                0 != a && this.isEmpty(t, a - 1, o) || (s = !0);
            }
            return !(!i || !s);
        }
        getValidPos(e) {
            let t = e.angle;
            if (e.angle = e.perfectAngle, e.updateModel(), this.isValid(e.perfectGridPos, e)) return e.perfectGridPos.clone();
            let i = [ 0, 90, 180, 270 ];
            for (const t of i) {
                e.angle = t, e.updateModel();
                for (let t = 0; t < this.size.x; ++t) for (let i = 0; i < this.size.z; ++i) for (let s = 0; s < this.size.y; ++s) if (this.tempV1.setValue(t, s, i), 
                this.isValid(this.tempV1, e)) return this.tempV1.clone();
            }
            return e.angle = t, e.updateModel(), null;
        }
    }
    class _e extends Laya.Script3D {
        constructor() {
            super(...arguments), this.angle = 0, this.state = O.ON_GROUND, this.points = [], 
            this.gridPos = new a(), this.perfectGridPos = new a(), this.perfectAngle = 0;
        }
        onAwake() {}
        init(e) {
            this.cfg = e, this.size = new a(e.width, e.height, e.length), this.modelSp = this.owner.getChildAt(0), 
            this.updateModel();
        }
        updateModel() {
            this.size.clone();
            this.modelSp.transform.localRotationEuler = new a(0, this.angle, 0);
            let e = this.angle / 90 % 2 == 0 ? this.cfg.width : this.cfg.length, t = this.angle / 90 % 2 == 0 ? this.cfg.length : this.cfg.width;
            this.size = new a(e, this.cfg.height, t);
            let i = new a();
            0 == this.angle ? (i.x = this.size.x / 2 - .5, i.z = .5 - this.size.z / 2) : 90 == this.angle ? (i.x = .5 - this.size.x / 2, 
            i.z = .5 - this.size.z / 2) : 180 == this.angle ? (i.x = .5 - this.size.x / 2, i.z = this.size.z / 2 - .5) : 270 == this.angle && (i.x = this.size.x / 2 - .5, 
            i.z = this.size.z / 2 - .5), this.modelSp.transform.localPosition = i, this.updatePoints();
        }
        updatePoints() {
            let e = this.cfg.points, t = Math.rad(this.angle), i = Math.cos(t), s = Math.sin(t);
            this.points = [];
            let n = 0, o = 0;
            for (const t of e) {
                let e = t.x * i - t.z * s, r = t.x * s + t.z * i;
                e = Math.floor(e + .1), r = Math.floor(r + .1), this.points.push(new a(e, t.y, r)), 
                n = Math.min(n, e), o = Math.min(o, r);
            }
            for (const e of this.points) e.x -= n, e.z -= o;
        }
        rotate() {
            this.angle += 90, this.angle >= 360 && (this.angle = 0), this.updateModel();
        }
        move(e) {
            let t = this.owner.transform.localPosition;
            t.x += e, this.owner.transform.localPosition = t, this.posX = t.x;
        }
        getPositionOffset() {
            this.size.x;
        }
    }
    class ye extends Laya.Script3D {
        constructor() {
            super(...arguments), this.items = [], this.space = .4, this.rightPos = 0;
        }
        init(e) {
            this.scene3d = this.owner.scene, this.itemParent = new r(), this.owner.addChild(this.itemParent), 
            this.itemParent.transform.localPosition = new a();
            for (const t of e) {
                let e = t.split("_"), i = e[0], s = he.I.getCfg(i), n = this.createItem(s), o = Number(e[1]), r = Number(e[2]), h = Number(e[3]);
                n.perfectGridPos = new a(o, r, h), n.perfectAngle = 90 * Number(e[4]);
            }
        }
        createItem(e) {
            let t = new r();
            this.itemParent.addChild(t);
            let i = he.I.getModelUrlByKey(e.key), s = Laya.loader.getRes(i).clone();
            t.addChild(s);
            let n = t.addComponent(_e);
            n.init(e), this.items.push(n), n.posX = this.rightPos - n.size.x / 2, 0 != this.rightPos && (n.posX -= this.space);
            let o = new a();
            return o.x = n.posX, n.owner.transform.localPosition = o, this.rightPos = n.posX - n.size.x / 2, 
            n;
        }
        scroll(e) {
            Laya.Tween.clearAll(this.itemParent);
            let t = this.itemParent.transform.localPosition;
            t.x -= e / 30, t.x = Math.clamp(t.x, 0, -this.rightPos), this.itemParent.transform.localPosition = t;
        }
        removeItem(e) {
            let t = this.items.indexOf(e);
            -1 != t && (this.items.splice(t, 1), this.updateItemsPosition());
        }
        addItem(e, t) {
            if (this.items.includes(e)) return;
            let i, s;
            if (fx.Utils.add3dModelTo(e.owner, this.itemParent), e.owner.transform.localRotation = new Laya.Quaternion(), 
            null == t && (t = Math.min(this.items.length, 1)), this.items.splice(t, 0, e), 0 == t) i = -e.size.x / 2, 
            s = 0; else {
                let t = this.items[0];
                i = t.posX - t.size.x / 2 - e.size.x / 2 - this.space, s = this.space;
            }
            e.posX = i;
            let n = e.owner.transform.localPosition;
            n.setValue(i, 0, 0), e.owner.transform.localPosition = n, this.updateItemsPosition();
        }
        updateItemsPosition() {
            this.rightPos = 0;
            for (let e = 0; e < this.items.length; ++e) {
                let t = this.items[e];
                t.posX = this.rightPos - t.size.x / 2, 0 != this.rightPos && (t.posX -= this.space);
                let i = new a();
                i.x = t.posX, t.owner.transform.localPosition = i, this.rightPos = t.posX - t.size.x / 2;
            }
        }
    }
    class Ee extends Laya.Script3D {
        constructor() {
            super(...arguments), this.tempV1 = new a(), this.redFlagPool = [], this.greenFlagPool = [], 
            this.carItems = [], this.mouseDownPos = new n(), this.mouseLastPos = new n(), this.downItem = null, 
            this.isScroll = !1, this.dragItem = null, this.downY = null, this.canHandle = !1, 
            this.canDrag = !0, this.packItem = null, this.fitItem = null, this.isFinish = !1;
        }
        init(e) {
            this.uiRoot = e, this.stageInfo = T.I.getCurStage(), this.scene3d = this.owner, 
            this.camera = this.scene3d.getChildByName("Main Camera").getChildByName("Main Camera"), 
            this.camera.enableHDR = !1;
            let t = this.scene3d.getChildByName("Level");
            this.itemRoot = t.getChildByName("ItemRoot"), this.carParent = t.getChildByName("CarParent"), 
            this.inTheCarItemRoot = t.getChildByName("InTheCarItemRoot"), this.redFlagPrefab = this.scene3d.getChildByName("RedFlag"), 
            this.redFlagPrefab.active = !1, this.greenFlagPrefab = this.scene3d.getChildByName("GreenFlag"), 
            this.greenFlagPrefab.active = !1, this.flagParent = new r(), t.addChild(this.flagParent), 
            this.flagParent.transform.position = this.inTheCarItemRoot.transform.position.clone(), 
            this.flagParent.transform.rotation = this.inTheCarItemRoot.transform.rotation.clone(), 
            this.winEffect = this.scene3d.getChildByName("Win Effect"), this.winEffect.active = !1, 
            this.propBg = this.scene3d.getChildByName("PropBg"), this.propBg.active = !1, this.propPackSp = this.scene3d.getChildByName("PropPack"), 
            this.propPackSp.active = !1, this.initCar(), this.initItems(), this.enableMouseEvent(!0), 
            fx.EventCenter.instance.on(k, this, this.onStartUseProp), fx.EventCenter.instance.on(x, this, this.onCancelUsePorp);
        }
        onDestroy() {
            this.enableMouseEvent(!1), fx.EventCenter.instance.offAllCaller(this);
        }
        initCar() {
            let e = this.stageInfo.car.split("_"), t = new a(Number(e[0]), Number(e[1]), Number(e[2])), i = re.I.getCurSkinCfg(ee.Car);
            this.grid = new Ce(t), fx.Utils.create3dModel(i.model, this, e => {
                if (!e) return;
                let i = e.clone();
                this.carParent.addChild(i), this.carScript = i.addComponent(Ie), this.carScript.init(t, Laya.Handler.create(this, this.onCarEvent, null, !1));
            });
        }
        initItems() {
            let e = 0, t = [], i = [], s = this.stageInfo.item.split(",");
            for (const n of s) {
                let s = n.split("_")[0], a = he.I.getCfg(s);
                t.push(n);
                let o = he.I.getModelUrlByKey(s);
                i.includes(o) || i.push(o), e += a.count;
            }
            T.I.totalGridCnt = e, Laya.loader.create(i, Laya.Handler.create(this, e => {
                e && (this.itemList = this.itemRoot.addComponent(ye), this.itemList.init(t), this.checkReady());
            }));
        }
        checkReady() {
            this.isReady() && (this.canHandle = !0, fx.Utils.showTips("Start"), fx.EventCenter.instance.event(m));
        }
        isReady() {
            return !(!this.carScript || !this.itemList);
        }
        isDrag() {
            return null != this.dragItem;
        }
        onCarEvent(e) {
            "OnOpen" == e ? this.checkReady() : "OnClose" == e && fx.Utils.add3dModelTo(this.inTheCarItemRoot, this.carScript.owner);
        }
        enableMouseEvent(e) {
            e ? (this.scene3d.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEx), this.scene3d.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEx), 
            this.scene3d.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEx), this.scene3d.on(Laya.Event.MOUSE_OUT, this, this.onMouseUpEx)) : (this.scene3d.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEx), 
            this.scene3d.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEx), this.scene3d.off(Laya.Event.MOUSE_UP, this, this.onMouseUpEx), 
            this.scene3d.off(Laya.Event.MOUSE_OUT, this, this.onMouseUpEx));
        }
        onMouseDownEx(e) {
            if (!this.canHandle) return;
            this.isMouseDown = !0, this.mouseDownPos.setValue(e.stageX, e.stageY), this.mouseLastPos.setValue(e.stageX, e.stageY);
            let t = new a(e.stageX, e.stageY, 0), i = this.rayCastInfo(t);
            if (i.succeeded) {
                let e = i.collider.owner.parent;
                if (e) {
                    let t = e.getComponent(_e);
                    this.downItem = t;
                }
            }
        }
        onMouseMoveEx(e) {
            if (!this.isMouseDown) return;
            let t = e.stageX - this.mouseDownPos.x, i = e.stageY - this.mouseDownPos.y;
            if (this.isDrag()) this.onDragItem(e); else if (this.canDrag && !this.isScroll && this.downItem && (Math.abs(i) > 20 || this.downItem.state == O.IN_CAR)) this.downItem.state == O.ON_GROUND && this.setItemInCarDrag(this.downItem), 
            this.dragItem = this.downItem, this.dragX = e.stageX, this.dragY = e.stageY, fx.SoundManager.instance.playSoundById(9); else if (this.isScroll || Math.abs(t) > 50) {
                this.isScroll = !0;
                let t = e.stageX - this.mouseLastPos.x;
                this.itemList.scroll(t), fx.EventCenter.instance.event(I);
            }
            this.mouseLastPos.setValue(e.stageX, e.stageY);
        }
        onMouseUpEx(e) {
            if (!this.isMouseDown) return;
            let t = T.I.curProp;
            t && t.propType == b.MoreSpace ? this.useProp() : (this.isDrag() && (this.dragItem.gridPos.y + this.dragItem.size.y > this.grid.size.y ? (this.setItemOnGround(this.dragItem), 
            this.carScript.playTopEffect()) : this.dragItem.state == O.ON_GROUND && this.setItemInCar(this.dragItem), 
            this.dragItem.state == O.IN_CAR && fx.SoundManager.instance.playSoundById(10)), 
            this.isScroll || !this.downItem || this.isDrag() || this.onClickItem(this.downItem)), 
            this.isMouseDown = !1, this.isScroll = !1, this.downItem = null, this.dragItem = null, 
            this.clearFlag();
        }
        clearDrag() {
            this.isMouseDown = !1, this.isScroll = !1, this.downItem = null, this.dragItem = null, 
            this.clearFlag();
        }
        rayCastInfo(e, t = -1, i = 2147483647) {
            let s = new Laya.Vector2(e.x, e.y), n = new Laya.Ray(new a(), new a());
            this.camera.viewportPointToRay(s, n);
            let o = new Laya.HitResult();
            return this.scene3d.physicsSimulation.rayCast(n, o, i, void 0, t), o;
        }
        onClickItem(e) {
            if (e.state != O.ON_GROUND) return;
            if (T.I.curProp) return void this.useProp();
            let t = e.size.x;
            e.rotate();
            let i = e.size.x, s = this.itemList.items, n = s.indexOf(e), a = t - i;
            e.move(a / 2);
            for (let e = n + 1; e < s.length; ++e) s[e].move(a);
            let o = s[s.length - 1];
            o && (this.itemList.rightPos = o.posX - o.size.x / 2), fx.EventCenter.instance.event(C);
        }
        setItemInCarDrag(e) {
            this.itemList.removeItem(e), fx.Utils.add3dModelTo(e.owner, this.inTheCarItemRoot), 
            e.owner.transform.localRotation = new Laya.Quaternion(), this.setItemCarGrid(e, new a()), 
            fx.EventCenter.instance.event(f);
        }
        setItemInCar(e, t) {
            e.state != O.IN_CAR && (e.state = O.IN_CAR, this.itemList.removeItem(e), this.carItems.push(e), 
            e.owner.parent != this.inTheCarItemRoot && (fx.Utils.add3dModelTo(e.owner, this.inTheCarItemRoot), 
            e.owner.transform.localRotation = new Laya.Quaternion(), t && (this.updateItemGridPositionInCar(e, t), 
            this.grid.addItem(e))), T.I.itemCntInCar = this.carItems.length, T.I.curGridCnt += e.cfg.count, 
            fx.EventCenter.instance.event(p), 0 == this.itemList.items.length && this.finish());
        }
        setItemOnGround(e) {
            e.state = O.ON_GROUND, this.itemList.addItem(e, 1), this.grid.removeItem(e);
            let t = this.carItems.indexOf(e);
            -1 != t && (this.carItems.splice(t, 1), T.I.curGridCnt -= e.cfg.count), T.I.itemCntInCar = this.carItems.length, 
            fx.EventCenter.instance.event(S);
        }
        onDragItem(e) {
            let t = 0, i = 0, s = 60, n = e.stageX - this.dragX, a = this.dragY - e.stageY;
            n > s ? t = Math.floor(n / s) : n < -60 && (t = -Math.floor(Math.abs(n) / s)), a > s ? i = Math.floor(a / s) : a < -60 && (i = -Math.floor(Math.abs(a) / s)), 
            0 == t && 0 == i || (this.tempV1.from(this.dragItem.gridPos), this.tempV1.x += t, 
            this.tempV1.z += i, this.setItemCarGrid(this.dragItem, this.tempV1), 0 != t && (this.dragX = e.stageX), 
            0 != i && (this.dragY = e.stageY), this.dragItem.state == O.IN_CAR && (this.tempV1.z >= 0 && (this.downY = null), 
            this.tempV1.z < 0 && (null == this.downY ? this.downY = e.stageY : e.stageY - this.downY > 100 && (this.setItemOnGround(this.dragItem), 
            this.clearDrag())))), this.updateDragFlag();
        }
        setItemCarGrid(e, t) {
            t.x < 0 || t.x + e.size.x > this.carScript.size.x || t.z < 0 || t.z + e.size.z > this.carScript.size.z || (this.grid.removeItem(e), 
            t.y = this.grid.getEmptyHeight(t, e), this.updateItemGridPositionInCar(e, t), this.grid.addItem(e));
        }
        updateItemGridPositionInCar(e, t) {
            e.gridPos.from(t);
            let i = new a(-t.x, t.y, t.z), s = e.size.x / 2 - .5, n = e.size.z / 2 - .5;
            i.x -= s, i.z += n, e.owner.transform.localPosition = i;
        }
        updateDragFlag() {
            if (this.clearFlag(), !this.dragItem) return;
            let e = {}, t = this.dragItem.gridPos, i = this.dragItem.points;
            for (const s of i) {
                let i = t.x + s.x, n = t.y + s.y, a = t.z + s.z;
                e[i] || (e[i] = {}), (null == e[i][a] || n < e[i][a]) && (e[i][a] = n);
            }
            for (const t in e) for (const i in e[t]) {
                let s = Number(t), n = Number(i), a = e[s][n], o = !0;
                if (a > 0 && this.grid.isEmpty(s, a - 1, n)) {
                    o = !1;
                    for (let e = a - 1; e >= 0; --e) {
                        if (!this.grid.isEmpty(s, e, n)) {
                            a = e + 1;
                            break;
                        }
                        if (0 == e) {
                            a = 0;
                            break;
                        }
                    }
                }
                this.createFlag(s, a, n, o);
            }
        }
        createFlag(e, t, i, s) {
            let n = s ? this.greenFlagPool.pop() : this.redFlagPool.pop();
            n || (n = s ? this.greenFlagPrefab.clone() : this.redFlagPrefab.clone()), n.name = s ? "Green" : "Red", 
            n.active = !0, this.flagParent.addChild(n);
            let o = new a(-e, t - .5, i);
            n.transform.localPosition = o;
        }
        clearFlag() {
            let e = this.flagParent.getChildren();
            for (const t of e) t.active = !1, "Green" == t.name ? this.greenFlagPool.push(t) : this.redFlagPool.push(t);
            this.flagParent.removeChildren();
        }
        finish() {
            console.log("跳关！")
            if (this.isFinish) return;
            this.canHandle = !1, 
            this.isFinish = !0,
             this.carScript.close();
            let e = this.winEffect.clone();
            e.active = !0, 
            this.scene3d.addChild(e), 
            fx.SoundManager.instance.playSoundById(8), 
            fx.EventCenter.instance.event(u);
        }
        onStartUseProp(e) {
            this.canDrag = !1;
            let t = U.I.getCfg(e);
            T.I.curProp = t, t.propType != b.Pack && t.propType != b.AutoFit || (this.propBg.active = !0);
        }
        onCancelUsePorp() {
            this.canDrag = !0, this.canHandle = !0, this.propBg.active = !1, T.I.curProp = null;
        }
        useProp() {
            this.canDrag = !0, this.propBg.active = !1;
            let e = T.I.curProp;
            fx.EventCenter.instance.event(L), e.propType != b.Pack || 1 != this.downItem.cfg.count ? e.propType == b.Pack ? (U.I.useProp(e.id), 
            this.startPackItem(this.downItem)) : e.propType == b.AutoFit ? this.startAutoFitItem(this.downItem) : e.propType == b.MoreSpace && this.startUpCarHeight() : fx.Utils.showTips("It's already minimal");
        }
        startPackItem(e) {
            this.canHandle = !1, this.packItem = e, this.packItemPosition = e.owner.transform.position.clone();
            let t = e.owner.transform.position, i = this.propPackSp.getChildByName("PropPackPoint").transform.position.clone();
            fx.Helper.moveAnim(e.owner, t, i, 1, 0, !1, !1, Laya.Handler.create(this, this.onPackItemMove1)), 
            fx.Helper.scaleAnim(e.owner, new a(1.5, 1.5, 1.5), 1, 0);
        }
        onPackItemMove1() {
            let e = this.packItem;
            fx.Helper.stopScaleAnim(e.owner), this.propPackSp.active = !0;
            let t = this.propPackSp.getChildByName("packItem");
            Se.addAnimatorScript(t, t, Laya.Handler.create(this, this.onPackAnimStateChange, null, !1));
            let i = t.getComponent(Laya.Animator);
            fx.Utils.playAnimator3d(i, "packItem", 1, !1, 0);
            let s = e.owner.transform.position, n = t.transform.position.clone();
            fx.Helper.moveAnim(e.owner, s, n, 1, 0, !1, !1), fx.Helper.scaleAnim(e.owner, new a(.01, .01, .01), 1, 0);
        }
        onPackAnimStateChange(e) {
            e.code == fx.BaseCode.E_ANIM_STOP && this.onPackItemMove2();
        }
        onPackItemMove2() {
            this.propPackSp.active = !1;
            let e = this.propPackSp.getChildByName("packItem"), t = new r();
            this.scene3d.addChild(t);
            let i = Laya.loader.getRes(l.PACK_ITEM).clone();
            t.addChild(i), t.transform.position = e.transform.position.clone(), t.transform.rotation = e.transform.rotation.clone();
            let s = t.addComponent(_e), n = he.I.getCfg("packItem");
            s.init(n);
            let a = t.transform.position, o = this.packItemPosition;
            fx.Helper.moveAnim(t, a, o, 1, 0, !1, !1, Laya.Handler.create(this, () => {
                let e = this.itemList.items.indexOf(this.packItem);
                this.itemList.removeItem(this.packItem), this.itemList.addItem(s, e), this.packItem.owner.destroy(), 
                this.clearProp();
            }));
        }
        startAutoFitItem(e) {
            this.fitItem = e, this.fitItemPosition = e.owner.transform.position.clone(), this.canHandle = !1, 
            this.fitItem = e;
            let t = e.owner.transform.position, i = t.clone();
            i.y += 20, fx.Helper.moveAnim(e.owner, t, i, 1, 0, !1, !1, Laya.Handler.create(this, this.onFitItemMove1));
        }
        onFitItemMove1() {
            let e = T.I.curProp, t = this.grid.getValidPos(this.fitItem);
            if (t) {
                U.I.useProp(e.id), this.setItemInCar(this.fitItem, t);
                let i = this.fitItem.owner.transform.position, s = i.clone();
                s.y += 20, fx.Helper.moveAnim(this.fitItem.owner, s, i, 1, 0, !1, !1, Laya.Handler.create(this, () => {
                    this.clearProp();
                }));
            } else this.fitItem.owner.transform.position = this.fitItemPosition.clone(), fx.Utils.showTips("No suitable place"), 
            this.clearProp();
        }
        startUpCarHeight() {
            let e = T.I.curProp;
            T.I.curProp = null, this.isUpCar ? fx.Utils.showTips("You can only use it once per level") : (this.isUpCar = !0, 
            U.I.useProp(e.id), this.carScript.upHeight(), this.grid.size.y += 1);
        }
        clearProp() {
            this.packItem = null, this.fitItem = null, this.canHandle = !0, T.I.curProp = null;
        }
    }
    class ke extends G.scenes.GameSuccessDialogUI {
        onAwake() {
            this.coin = T.I.getCurStage().coin, this.img_get.on(Laya.Event.CLICK, this, this.onClickGet), 
            this.img_videoGet.on(Laya.Event.CLICK, this, this.onClickVideoGet),
             this.label_coin.value = `x${this.coin}`
            // this.on(sdk.SdkEvent.E_REWARD_GAIN, this, e => {
            //     this.img_share.$_GID === e.gid && (sdk.SdkCode.REWARD_GAIN_SUCCESS === e.code ? le.instance.event(de.SHARE, {
            //         from: "GameSuccessDialog",
            //         type: "SUCCESS"
            //     }) : sdk.SdkCode.REWARD_GAIN_FAIL === e.code && le.instance.event(de.SHARE, {
            //         from: "GameSuccessDialog",
            //         type: "FAIL"
            //     }));
            // });
        }
        onEnable() {
            // YYGGames.gameBanner.visible = !0
            // sdk.Sdk.instance.showInterstitial(null, !1);
        }
        onDestroy() {
            Laya.loader.clearTextureRes("res/atlas/res/gameEnd.atlas");
        }
        closeSelf() {
            // YYGGames.gameBanner.visible = false
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = !0
            T.I.goNextStage(), fx.SceneManager.closePanel(this);
            let e = Laya.ClassUtils.getRegClass("MainScene");
            fx.SceneManager.changeScene(e, {
                from: "GameSuccessDialog"
            })
            // , sdk.Sdk.instance.hideBanner();
        }
        onClickGet() {
            N.I.addCoins(this.coin), this.closeSelf();
        }
        onClickVideoGet() {
            // B.I.playVideo("GameSuccessDialog", this, e => {
            //     e && (N.I.addCoins(2 * this.coin), this.closeSelf());
            // });
            N.I.addCoins(2 * this.coin), this.closeSelf()
        }
    }
    Laya.ClassUtils.regClass("GameSuccessDialog", ke);
    class Le extends Laya.Script3D {
        onAwake() {
            fx.EventCenter.instance.on(m, this, this.guideMoveItem), fx.EventCenter.instance.on(f, this, this.onItemInCarDrag), 
            fx.EventCenter.instance.on(p, this, this.onItemInCar), fx.EventCenter.instance.on(I, this, this.onScrollItemList), 
            fx.EventCenter.instance.on(C, this, this.onClickItem);
        }
        onDestroy() {
            fx.EventCenter.instance.offAllCaller(this);
        }
        init(e) {
            this.uiRoot = e;
        }
        onItemInCarDrag() {
            this.guideDragNode && (this.guideDragNode.visible = !1), this.guideClickItem();
        }
        onItemInCar() {}
        onScrollItemList() {
            this.guideScrollNode && (this.guideScrollNode.visible = !1);
        }
        onClickItem() {
            this.isGuideDrag && (this.guideClickNode && (this.guideClickNode.visible = !1), 
            this.guideScrollList());
        }
        guideMoveItem() {
            this.guideDragNode = new Laya.Box(), this.uiRoot.addChild(this.guideDragNode), this.guideDragNode.pos(this.uiRoot.width / 2, this.uiRoot.height - 400), 
            fx.Utils.createPrefab("scenes/prefab/GuideDrag.json", Laya.Handler.create(this, e => {
                if (e && this.guideDragNode.visible && (this.guideDragNode.addChild(e), e.x = -150, 
                e._aniList)) {
                    e._aniList[0].play(0, !0);
                }
            }));
        }
        guideClickItem() {
            this.guideClickNode || (this.isGuideDrag = !0, this.guideClickNode = new Laya.Box(), 
            this.uiRoot.addChild(this.guideClickNode), this.guideClickNode.pos(this.uiRoot.width / 2, this.uiRoot.height - 400), 
            fx.Utils.createPrefab("scenes/prefab/GuideClickItem.json", Laya.Handler.create(this, e => {
                if (e && this.guideClickNode.visible && (this.guideClickNode.addChild(e), e._aniList)) {
                    e._aniList[0].play(0, !0);
                }
            })));
        }
        guideScrollList() {
            this.guideScrollNode || (this.guideScrollNode = new Laya.Box(), this.uiRoot.addChild(this.guideScrollNode), 
            this.guideScrollNode.pos(this.uiRoot.width / 2, this.uiRoot.height - 400), fx.Utils.createPrefab("scenes/prefab/GuideScrollList.json", Laya.Handler.create(this, e => {
                if (e && this.guideScrollNode.visible && (this.guideScrollNode.addChild(e), e._aniList)) {
                    e._aniList[0].play(0, !0);
                }
            })));
        }
    }
    class xe extends G.scenes.GameSceneUI {
        constructor() {
            super();
        }
        static getRes() {
            return this.scenePath = "res3d/Game.ls", [ this.scenePath, l.PACK_ITEM ];
        }
        onAdd() {
            // sdk.Sdk.instance.showBanner()
            // , 
            T.I.init();
            let e = Laya.loader.takeRes(xe.scenePath);
            this.scene3d = e, e.size(this.width, this.height), this.addChildAt(e, 0), e.addComponent(me), 
            this.init3D(), this.initUI();
        }
        initUI() {
            this.btn_skipLevel.on(Laya.Event.CLICK, this, this.onClickSkipLevel), this.btn_skipLevel.visible = !1, 
            fx.Effect.breathEff(this.btn_skipLevel, 1300, 1.1), 
            this.btn_nextLevel.on(Laya.Event.CLICK, this, this.onClickNextLevel), 
            this.btn_nextLevel.visible = !1, fx.Effect.breathEff(this.btn_nextLevel, 1300, 1.1), 
            this.img_close.on(Laya.Event.CLICK, this, this.onClickClose), this.img_restart.on(Laya.Event.CLICK, this, this.onClickRestart), 
            this.updateStar(), this.updateProgress();
        }
        init3D() {
            if (this.gameScript = this.scene3d.addComponent(Ee), this.gameScript.init(this), 
            1 == T.I.getCurStage().id) {
                this.scene3d.addComponent(Le).init(this);
            }
        }
        onEnter() {
            this.on(c, this, this.onGameStateChange), this.on(m, this, this.onStartMoveItem), 
            this.on(u, this, this.onAllItemMovedToCar), this.on(p, this, this.onItemInCar), 
            this.on(S, this, this.onItemOnGround), this.enableMouseEvent(!0);
        }
        onExit() {
            this.enableMouseEvent(!1);
        }
        enableMouseEvent(e = !0) {
            e ? (this.scene3d.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.scene3d.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), 
            this.scene3d.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.scene3d.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp)) : (this.scene3d.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
            this.scene3d.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.scene3d.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            this.scene3d.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp));
        }
        onGameStateChange(e) {
            switch (T.I.getGameState()) {
              case w.E_GAME_FINISH:
                this.finished();
                break;

              case w.E_GAME_FAILED:
                this.onFailed();
                break;

              case w.E_GAME_OVER:
                this.gameOver();
                break;

              case w.E_GAME_PAUSE:
                break;

              case w.E_GAME_START:
                e == w.E_GAME_FAILED ? this.revive() : this.start();
            }
        }
        onMouseDown(e) {}
        onMouseMove(e) {}
        onMouseUp(e) {}
        start() {}
        finished() {
            this.timerOnce(1e3, this, () => {
                this.box_4.getComponent(s).hideAd(), fx.SceneManager.openPanel(ke);
            });
        }
        onFailed() {}
        gameOver() {}
        revive() {}
        onClickSkipLevel() {
            //激励
            this.gameScript.finish()
            // B.I.playVideo("SkipLevel", this, e => {
            //     e && !this.gameScript.isFinish ? (this.gameScript.finish(), le.instance.event(de.VIDEO_SKIP, {
            //         type: "SUCCESS"
            //     })) : e || le.instance.event(de.VIDEO_SKIP, {
            //         type: "FAIL"
            //     });
            // });
        }
        onClickNextLevel() {
            console.log("")
            this.gameScript.finish();
        }
        onClickClose() {
            let e = Laya.ClassUtils.getRegClass("MainScene");
            fx.SceneManager.changeScene(e);
        }
        onClickRestart() {
            fx.SceneManager.changeScene(xe);
        }
        onStartMoveItem() {
            this.btn_skipLevel.visible = !0;
        }
        onAllItemMovedToCar() {
            this.btn_skipLevel.visible = !1, this.btn_nextLevel.visible = !1;
        }
        onItemInCar() {
            this.updateStar(), this.updateProgress();
        }
        onItemOnGround() {
            this.updateStar(), this.updateProgress();
        }
        updateStar() {
            let e = T.I.itemCntInCar;
            this.label_star.text = `${e}`;
        }
        updateProgress() {
            let e = T.I.curGridCnt / T.I.totalGridCnt;
            this.box_progress.getChildByName("panel_progress").width = this.box_progress.width * e, 
            e >= .8 && (this.btn_skipLevel.visible = !1, this.btn_nextLevel.visible = !0);
        }
    }
    var ve;
    Laya.ClassUtils.regClass("GameScene", xe), function(e) {
        e.Skin = "Skin", e.Coin = "Coin", e.Diamond = "Diamond", e.Prop = "Prop";
    }(ve || (ve = {}));
    class we {
        constructor(e, t, i, s) {
            this.type = e, this.value = t, this.value2 = i, this.cntRate = s || 1;
        }
        getCnt() {
            switch (this.type) {
              case ve.Skin:
                return 1;

              case ve.Coin:
              case ve.Diamond:
                return this.value;

              case ve.Prop:
                return this.value2;
            }
        }
    }
    class Re {
        static get I() {
            return this._instance || (this._instance = new Re()), this._instance;
        }
        addRewards(e) {
            for (const t of e) this.addReward(t);
        }
        addReward(e, t = !1) {
            switch (e.type) {
              case ve.Skin:
                this.addSkin(e.value, t);
                break;

              case ve.Coin:
                this.addCoin(e.value * e.cntRate, t);
                break;

              case ve.Diamond:
                this.addDiamond(e.value * e.cntRate, t);
                break;

              case ve.Prop:
                this.addProp(e.value, e.value2 * e.cntRate, t);
            }
        }
        addSkin(e, t = !1) {
            if (re.I.unlockSkin(e), t) {
                let t = re.I.getCfgById(e);
                t && fx.Utils.showTips(`Reward ${t.name}`);
            }
        }
        addCoin(e, t = !1) {
            N.I.addCoins(e), t && fx.Utils.showTips(`Reward ${e}`);
        }
        addDiamond(e, t = !1) {}
        addProp(e, t, i = !1) {
            U.I.changeCnt(e, t);
            let s = U.I.getCfg(e);
            i && fx.Utils.showTips(`Reward ${s.name} x${t}`);
        }
        getRewardIcon(e) {
            let t = e.type;
            if (t == ve.Coin) return "res/img_pack_coin.png";
            if (t == ve.Diamond) return "res/img_diamond.png";
            if (t == ve.Prop) {
                return U.I.getCfg(e.value).propIcon;
            }
        }
        getRewardName(e) {
            let t = e.type;
            if (t == ve.Coin) return "金币";
            if (t == ve.Diamond) return "钻石";
            if (t == ve.Prop) {
                return U.I.getCfg(e.value).name;
            }
        }
    }
    class Oe extends G.scenes.RewardDialogUI {
        constructor(e, t, i) {
            super(), this.rewardDatas = t instanceof we ? [ t ] : t, this.cb = i;
        }
        static getRes() {
            return [ "scenes/prefab/RewardCardItem.json" ];
        }
        onAdd() {
            this.img_get.on(Laya.Event.CLICK, this, this.onClickGet),
             this.img_videoGet.on(Laya.Event.CLICK, this, this.onClickVideoGet), 
            this.initUI();
        }
        onDestroy() {
            Laya.loader.clearTextureRes("res/atlas/res/rewardUI.atlas"), this.cb && this.cb.run();
        }
        closeSelf() {
            fx.SceneManager.popView();
        }
        onClickGet() {
            this.getReward(!1);
        }
        onClickVideoGet() {
            // B.I.playVideo("RewardDialog", this, e => {
            //     e && this.getReward(!0);
            // });
            this.getReward(!0);
        }
        getReward(e) {
            if (e) for (const e of this.rewardDatas) e.cntRate = 2;
            Re.I.addRewards(this.rewardDatas), fx.Utils.showTips("Congratulations"), this.closeSelf();
        }
        getPos(e) {
            let t = this.width, i = this.height;
            if (1 == (e = Math.clamp(e, 1, 4))) return [ new n(t / 2, i / 2) ];
            if (2 == e) {
                let e = [];
                return e.push(new n(t / 2 - 150, i / 2)), e.push(new n(t / 2 + 150, i / 2)), e;
            }
            if (3 == e) {
                let e = [];
                return e.push(new n(t / 2 - 225, i / 2)), e.push(new n(t / 2 + 225, i / 2)), e.push(new n(t / 2, i / 2)), 
                e;
            }
            if (4 == e) {
                let e = [];
                return e.push(new n(t / 2 - 225, i / 2)), e.push(new n(t / 2 + 225, i / 2)), e.push(new n(t / 2, i / 2 - 270)), 
                e.push(new n(t / 2, i / 2)), e;
            }
        }
        initUI() {
            let e = this.width, t = this.height, i = this.getPos(this.rewardDatas.length), s = Math.min(this.rewardDatas.length, 4);
            for (let n = s - 1; n >= 0; --n) {
                let a = this.rewardDatas[n], o = fx.Utils.createPrefab("scenes/prefab/RewardCardItem.json");
                this.addChild(o);
                let r = o.getChildByName("label_name"), h = o.getChildByName("img_icon"), l = o.getChildByName("label_cnt");
                r.text = Re.I.getRewardName(a), h.skin = Re.I.getRewardIcon(a), l.text = `+${a.getCnt()}`;
                let d = i[n];
                o.pos(e / 2, t / 2), o.scale(.5, .5);
                let c = n, g = 800 * n, u = 800;
                Math.abs(o.x - d.x) < 5 && Math.abs(o.y - d.y) < 5 && (u = 0), new fx.Sequence().scaleOut(1, 1e3, Laya.Ease.backOut).delay(g).exec(Laya.Handler.create(this, () => {
                    c == s - 2 && 4 == s && this.moveTitle();
                })).pos(d.x, d.y, u).scaleOut(.8, 500).run(o);
            }
        }
        moveTitle() {
            new fx.Sequence().move(0, -175, 800).run(this.img_title);
        }
    }
    Laya.ClassUtils.regClass("RewardDialog", Oe);
    class be extends G.scenes.RoomFinishDialogUI {
        constructor(e, t, i) {
            super(), this.rewardData = t, this.cb = i;
        }
        onAdd() {
            this.img_get.on(Laya.Event.CLICK, this, this.onClickGet);
        }
        onDestroy() {
            Laya.loader.clearTextureRes("res/atlas/res/roomFinish.atlas");
        }
        onClickGet() {
            fx.SceneManager.closePanel(this), fx.SceneManager.pushView(Oe, {
                from: "RoomFinishDialog",
                userArgs: [ this.rewardData, this.cb ]
            });
        }
    }
    Laya.ClassUtils.regClass("RoomFinishDialog", be);
    class De extends G.scenes.RoomSceneUI {
        static getRes() {
            return this.scenePath = T.I.getCurRoom().path, [ this.scenePath ];
        }
        onAdd() {
            this.curRoomId = T.I.getCurRoom().id, this.curItemIndex = T.I.getRoomItemCnt();
            let e = Laya.loader.takeRes(De.scenePath);
            this.scene3d = e, e.size(this.width, this.height), this.addChildAt(e, 0), this.roomRoot = e.getChildBySubName("Room");
            let t = this.roomRoot.getChildByName("Directional Light");
            fx.GraphicsCfg.enableShadow && (t.shadowMode = Laya.ShadowMode.SoftLow, t.shadowCascadesMode = Laya.ShadowCascadesMode.TwoCascades, 
            t.shadowResolution = 2048, t.shadowDistance = 50, t.shadowStrength = .5), this.mainCamera = this.roomRoot.getChildByName("Main Camera"), 
            this.mainCamera.enableHDR = !1, this.orthographicCamera = this.scene3d.getChildByName("OrthographicCamera"), 
            this.orthographicCamera.enableHDR = !1, this.itemBox = this.scene3d.getChildByName("ItemBox"), 
            this.itemBox.active = !1, this.confettiParticle = this.scene3d.getChildByName("Confetti_blast_multicolor"), 
            this.confettiParticle.active = !1;
            let i = this.scene3d.getChildByName("PlaceholderMaterialCube");
            this.placeholderMaterial = i.meshRenderer.material, this.initItems(), this.initUI(), 
            this.curRoomId >= T.I.getRoomMaxId() && this.curItemIndex >= this.roomItems.length ? fx.Utils.showTips("All the rooms have been built. ") : this.tryUnlockItem(!0);
        }
        initUI() {
            this.boxOpenTips.visible = !1, this.img_back.on(Laya.Event.CLICK, this, this.onClickBack);
        }
        onClickBack() {
            let e = Laya.ClassUtils.getRegClass("MainScene");
            fx.SceneManager.changeScene(e);
        }
        initItems() {
            let e = this.roomRoot.getChildByName("Room Items");
            this.roomItems = e.getChildren();
            let t = T.I.getRoomItemPlaces().slice();
            for (let e = 0; e < this.roomItems.length; ++e) {
                let i = this.roomItems[e];
                if (e < this.curItemIndex) {
                    i.active = !0;
                    let e = i.getChildrenBySubName("PlaceHolder");
                    for (const t of e) t.active = !1;
                    let s = 0;
                    t.length > 0 && (s = t.shift()), s = Math.min(s, e.length - 1), s = Math.max(s, 0);
                    let n = i.getChildByName("model");
                    n.transform.localPosition = e[s].transform.localPosition.clone(), n.transform.localRotation = e[s].transform.localRotation.clone();
                } else i.active = !1;
            }
        }
        tryUnlockItem(e = !1) {
            if (this.curItemIndex >= this.roomItems.length) return T.I.goNextRoom(), void (e || this.onFinish());
            let t = T.I.getRoomItemBoxCnt();
            t <= 0 ? fx.Utils.showTips("Go finish your moving collection") : (this.boxOpenTips.visible = !0, 
            this.itemBox.active = !0, this.label_itemCnt.text = `Furniture x${t}`, this.itemBox.transform.localRotation = new Laya.Quaternion(), 
            fx.Helper.stopRotateAnim(this.itemBox), fx.Helper.rotateAnim(this.itemBox, -360, 4, 0, "y", !0), 
            Laya.Tween.clearAll(this.itemBox), this.itemBox.transform.localScale = new a(.1, .1, .1), 
            new fx.Sequence3D().scaleOut(1, 1, 1, 1e3, !0).run(this.itemBox), this.on(Laya.Event.CLICK, this, this.onClick));
        }
        playConfetti(e, t) {
            let i = this.confettiParticle.clone();
            i.stop(), i.active = !0, this.scene3d.addChild(i), null != t && Se.setLayer(i, t), 
            i.transform.position = e.clone(), Se.playParticleSp(i, !1), fx.AutoReleaseManager.instance.add(i, !0, 1e3);
        }
        onClick() {
            this.boxOpenTips.visible = !1, Laya.Tween.clearAll(this.itemBox), new fx.Sequence3D().scaleOut(.5, .5, .5, 300, !0, Laya.Ease.sineIn).scaleOut(1.2, 1.2, 1.2, 300, !0, Laya.Ease.sineIn).hide().exec(Laya.Handler.create(this, this.onBoxOpend)).run(this.itemBox), 
            this.off(Laya.Event.CLICK, this, this.onClick);
        }
        onBoxOpend() {
            this.playConfetti(this.itemBox.transform.position, this.itemBox.layer);
            let e = new r();
            this.tempItemSp = e, this.scene3d.addChild(e);
            let t = this.roomItems[this.curItemIndex].getChildByName("model").clone();
            e.addChild(t), t.active = !0;
            let i = fx.Utils.get3dModelCenter(t, !0), s = fx.Utils.get3dLocalModelSize(t);
            a.scale(i, -1, i), t.transform.localPosition = i;
            let n = new Laya.Quaternion();
            s.y < .1 ? Laya.Quaternion.createFromYawPitchRoll(Math.PI, Math.PI / 4, 0, n) : Laya.Quaternion.createFromYawPitchRoll(Math.PI, 0, 0, n), 
            t.transform.localRotation = n;
            let o = 1, h = Math.max(s.x, s.y);
            h > 1 && (o = 1 / h), Se.setLayer(e, this.itemBox.layer), e.transform.position = this.itemBox.transform.position.clone(), 
            e.transform.localScale = new a(.2 * o, .2 * o, .2 * o);
            let l = this.itemBox.transform.position.clone();
            l.y = -1.8, new fx.Sequence3D().scaleOut(o, o, o, 500, !0).delay(500).pos(l.x, l.y, l.z, 1e3).run(e), 
            new fx.Sequence3D().delay(1300).rotateTo(-360, 1200, a.Up, !0, Laya.Ease.backOut).exec(Laya.Handler.create(this, this.showSelect)).run(e);
        }
        showSelect() {
            let e = this.roomItems[this.curItemIndex];
            e.active = !0, e.getChildByName("model").active = !1;
            let t = e.getChildrenBySubName("PlaceHolder");
            for (const e of t) {
                let t = e.getChildByName("arrow parent").getChildByName("arrow aimation holder");
                fx.Helper.rotateAnim(t, -360, 2, 0, "y", !0);
                let i = t.transform.localPosition, s = i.clone();
                s.y += .3, fx.Helper.moveAnim(t, i, s, 1, 0, !0, !0);
                let n = fx.Utils.get3dModelCenter(e, !0, null, [ "arrow parent" ]), a = fx.Utils.get3dLocalModelSize(e, null, [ "arrow parent" ]), o = new Laya.BoxColliderShape(a.x, a.y, a.z);
                o.localOffset = n;
                let r = e.addComponent(Laya.PhysicsCollider);
                r.colliderShape = o, r.collisionGroup = 2, this.setPlaceHolderMaterial(e);
            }
            this.enableMouseEvent(!0);
        }
        setPlaceHolderMaterial(e) {
            fx.Utils.recurisNode(e, e => {
                if (e.name.includes("arrow parent")) return -1;
                e instanceof h && (e.meshRenderer.material = this.placeholderMaterial.clone());
            });
        }
        enableMouseEvent(e) {
            e ? this.scene3d.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown) : this.scene3d.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        onMouseDown(e) {
            let t = new a(e.stageX, e.stageY, 0), i = this.rayCastInfo(t, 2);
            if (i.succeeded) {
                let e = i.collider.owner, t = e.parent, s = t.getChildrenBySubName("PlaceHolder");
                for (const e of s) e.active = !1;
                let n = s.indexOf(e);
                T.I.unlockRoomItem(n), T.I.changeRoomItemBoxCnt(-1), this.curItemIndex++;
                let a = t.getChildByName("model");
                a.active = !0, a.transform.localRotation = s[n].transform.localRotation.clone();
                let o = s[n].transform.position.clone(), r = o.clone();
                r.y += 1, a.transform.position = r, new fx.Sequence3D().pos(o.x, o.y, o.z, 500, !1, Laya.Ease.backOut).run(a), 
                new fx.Sequence3D().delay(100).scaleOut(1, .8, 1, 200, !1).scaleOut(1, 1, 1, 200, !1).exec(Laya.Handler.create(this, this.tryUnlockItem, [ !1 ])).run(a), 
                this.playConfetti(r), this.tempItemSp.destroy();
            }
        }
        rayCastInfo(e, t = -1, i = 2147483647) {
            let s = new Laya.Vector2(e.x, e.y), n = new Laya.Ray(new a(), new a());
            this.mainCamera.viewportPointToRay(s, n);
            let o = new Laya.HitResult();
            return this.scene3d.physicsSimulation.rayCast(n, o, i, void 0, t), o;
        }
        onFinish() {
            let e = new we(ve.Coin, 50);
            fx.SceneManager.openPanel(be, {
                from: "RoomScene",
                userArgs: [ e, Laya.Handler.create(this, () => {
                    let e = Laya.ClassUtils.getRegClass("MainScene");
                    fx.SceneManager.changeScene(e);
                }) ]
            });
        }
    }
    Laya.ClassUtils.regClass("RoomScene", De);
    class Ae extends G.scenes.MainSceneUI {
        constructor(e) {
            super(), this.hideAd = !1, this.from = e;
        }
        static getRes() {
            return [ l.LEVEL_ITEM ];
        }
        onAdd() {
            this.img_setting.on(Laya.Event.CLICK, this, this.onClickSetting), this.img_car.on(Laya.Event.CLICK, this, this.onClickCar), 
            this.img_startGame.on(Laya.Event.CLICK, this, this.onClickStartGame), this.img_room.on(Laya.Event.CLICK, this, this.onClickRoom), 
            this.checkRoomItemBox(), this.checkGift();
            let e = this.img_room.getChildByName("img_dot");
            T.I.getRoomItemBoxCnt() > 0 ? (e.visible = !0, fx.Effect.breathEff(e, 1e3, 1.2, !0)) : e.visible = !1, 
            this.timer.once(200, this, () => {
                // sdk.Sdk.instance.showBanner();
            }), 
            T.I.getCurStage().id % 2 == 0 
            // && sdk.Sdk.instance.showInterstitial();
            console.error("gggg")
            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                sdk.showBanner();
                console.error("gggg222")
                }
            if (Laya.LocalStorage.getItem("soundsound") == 0
            || Laya.LocalStorage.getItem("soundsound") == null) {
                         this.issoundOff  = false;
                         Laya.SoundManager.playMusic("new/bgm.mp3")
                         this.onSoundBtn.skin = "new/on.png";
                     }
                     else {
                         this.issoundOff  = true;
                         Laya.SoundManager.stopMusic("new/bgm.mp3")
                         this.onSoundBtn.skin = "new/off.png";
                     };
                 
                     this.onSoundBtn.on(Laya.Event.CLICK, this, ()=>{
                        this.issoundOff = !this.issoundOff;
                        if (!this.issoundOff) {
                            Laya.LocalStorage.setItem("soundsound", 0);
                            Laya.SoundManager.playMusic("new/bgm.mp3")
                            this.onSoundBtn.skin = "new/on.png";
                        }
                        else {
                            Laya.LocalStorage.setItem("soundsound", 1);
                            Laya.SoundManager.stopMusic("new/bgm.mp3");
                            this.onSoundBtn.skin = "new/off.png";
                        }
                     });



        }
        onEnable() {
            Adapter.hideLoading()
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible =!0
            // this.from && "loading" === this.from ? (sdk.Sdk.instance.showInterstitial(), this.timerOnce(1e3, this, () => {
            //     sdk.Sdk.instance.showInterstitial();
            // })) :
            //  this.from && "GameSuccessDialog" === this.from && sdk.Sdk.instance.isHarvest() 
            //  && this.box_25.getComponent(s).showAd()
            // fx.EventCenter.instance.on(sdk.SdkEvent.E_AD_NATIVE_CUSTOM, this, this.adfunc), 
            // fx.EventCenter.instance.on(fx.BaseEvent.E_APP_ON_RESUME, this, () => {
            //     sdk.Sdk.instance.showInterstitial();
            // }), fx.EventCenter.instance.on(_, this, () => {
            //     this.hideAd = !0;
            // });
        }
        onRemove() {
            // fx.EventCenter.instance.off(sdk.SdkEvent.E_AD_NATIVE_CUSTOM, this, this.adfunc);
        }
        onClickSetting() {
            fx.SceneManager.openPanel(ce);
        }
        onClickCar() {
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
            fx.SceneManager.pushView(ge);
        }
        onClickStartGame() {
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
           //插屏
            fx.SceneManager.changeScene(xe), le.instance.event(de.START_GAME)
            // , sdk.Sdk.instance.hideBanner();


        }
        onClickRoom() {
            // YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
            fx.SceneManager.changeScene(De);
        }
        checkRoomItemBox() {
            if ("GameSuccessDialog" == this.from) {
                let e = T.I.getCurStage().id;
                e != T.I.getMaxStageId() && e % 2 != 0 || this.collectRoomItemBox();
            }
        }
        collectRoomItemBox() {
            T.I.changeRoomItemBoxCnt(4), this.frameOnce(2, this, () => {
                let e = new Laya.Point(this.img_room.width / 2, this.img_room.height / 2);
                e = this.img_room.localToGlobal(e);
                let t = new Laya.Image("res/game/img_crunch.png");
                this.addChild(t), t.anchorX = t.anchorY = .5, t.pos(Laya.stage.width / 2, Laya.stage.height / 2), 
                new fx.Sequence().move(-10, -50, 300).pos(e.x, e.y, 1e3).exec(Laya.Handler.create(this, () => {
                    t.destroy();
                })).run(t);
            });
        }
        checkGift() {
            
            if ("GameSuccessDialog" == this.from) {
                let e = T.I.getCurStage().id;
                if (e != T.I.getMaxStageId() && e % 10 == 0) {
                    let e = new Laya.Image("res/img_gift_blue.png");
                    this.addChild(e), e.anchorX = e.anchorY = .5, e.scale(.44, .44), e.pos(Laya.stage.width / 2 - 100, Laya.stage.height / 2), 
                    new fx.Sequence().parallel(2).scaleOut(2.5, 800).pos(Laya.stage.width / 2, Laya.stage.height / 2, 800).exec(Laya.Handler.create(this, () => {
                        let t = [ new we(ve.Coin, 50), new we(ve.Prop, 20001, 1), new we(ve.Prop, 20002, 1), new we(ve.Prop, 20003, 1) ];
                        fx.SceneManager.pushView(Oe, {
                            from: "RoomFinishDialog",
                            userArgs: [ t ]
                        }), e.destroy();
                    })).run(e);
                }
            }
        }
        adfunc(e) {
            // e.code == sdk.SdkCode.AD_NATIVE_CUSTOM_SUCCESS ? (e.adId == i.channel_AdIds["blockId-25-1"] && (this.hideAd = !0, 
            // this.box_4.getComponent(s).hideAd(), this.GridAd.getComponent(ue).adFun({
            //     code: 0
            // })
            // // ,
            // //  sdk.Sdk.instance.hideBanner()
            //  )
            // , e.adId != i.channel_AdIds["blockId-3-1"] && e.adId != i.channel_AdIds["blockId-3-2"] || sdk.Sdk.instance.hideBlockAd(e.adId), 
            // e.adId == i.channel_AdIds["blockId-25-2"] && "GameCenterView" != fx.SceneManager.getCurViewRgeName() && sdk.Sdk.instance.hideBlockAd(e.adId), 
            // e.adId == i.channel_AdIds.blockId && this.hideAd && (this.hideAd = !1, this.GridAd.getComponent(ue).adFun({
            //     code: 0
            // }))) : e.code != sdk.SdkCode.AD_NATIVE_CUSTOM_CLOSE && e.code != sdk.SdkCode.AD_NATIVE_CUSTOM_CLOSE || e.adId == i.channel_AdIds["blockId-25-1"] && (this.box_4.getComponent(s).showAd(), 
            // this.GridAd.getComponent(ue).adFun({
            //     code: 1
            // }), sdk.Sdk.instance.showBanner());
        }
    }
    Laya.ClassUtils.regClass("MainScene", Ae);
    function __decorate(e, t, i, s) {
        var n, a = arguments.length, o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s); else for (var r = e.length - 1; r >= 0; r--) (n = e[r]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
        return a > 3 && o && Object.defineProperty(t, i, o), o;
    }
    class Pe extends Laya.Script {
        constructor() {
            super(...arguments), this.input = new n();
        }
        onAwake() {
            this.list = this.owner.seekChildByName("list"), this.initList();
            let e = this.owner.getChildByName("img_bg");
            e.visible = !1, this.b_input = this.owner.seekChildByName("b_input"), this.b_input.visible = !1, 
            this.textinput = this.owner.seekChildByName("textinput"), this.owner.seekChildByName("btn_sure").on(Laya.Event.CLICK, this, this.onClickSure), 
            this.owner.getChildByName("lb_gm").on(Laya.Event.CLICK, this, () => {
                this.list.visible = !this.list.visible, e.visible = !e.visible;
            }), this.owner.getChildByName("lb_log").on(Laya.Event.CLICK, this, () => {
                fx.Utils.isOnPC() || (this.p_log.visible = !this.p_log.visible, e.visible = !e.visible, 
                this.p_log.visible && this.p_log.scrollTo(0, this.p_log.contentHeight - this.p_log.height));
            });
            let t = this.owner.getChildByName("p_log");
            t.height = 0, t.visible = !1, t.vScrollBarSkin = null, this.p_log = t;
        }
        initList() {
            let e = window.GM, t = [], i = Object.getOwnPropertyNames(e), s = [ "init", "enableLog" ];
            for (let n = 0; n < i.length; ++n) {
                let a = i[n];
                "function" == typeof e[a] && -1 == s.indexOf(a) && t.push(e[a]);
            }
            this.list.array = t, this.list.renderHandler = new Laya.Handler(this, this.updateItem), 
            this.list.visible = !1, this.list.vScrollBarSkin = null;
        }
        updateItem(e, t) {
            let i = e.dataSource, s = e.seekChildByName("label_item"), n = i.toString(), a = n.indexOf(")");
            -1 != a && (n = n.substring(0, a + 1)), s.text = n, s.on(Laya.Event.CLICK, this, () => {
                this.curFun = i, this.b_input.visible = !0, this.list.visible = !1;
            });
        }
        onClickSure() {
            let e = window.GM, t = this.textinput.text.split(",");
            this.curFun ? this.curFun.call(e, ...t) : fx.Utils.showTips("no function"), this.b_input.visible = !1, 
            this.owner.getChildByName("img_bg").visible = !1;
        }
        log(e, ...t) {}
        onKeyUp(e) {
            switch (e.keyCode) {
              case 119:
              case 81:
                break;

              case 32:
                this.jump();
                break;

              default:
                this.stopMove();
            }
        }
        onUpdate() {}
        moveForward(e) {
            this.input.y = e;
            fx.Utils.getDefault3dScene().getChildByName("Player");
        }
        moveRight(e) {
            this.input.x = e;
            fx.Utils.getDefault3dScene().getChildByName("Player");
        }
        stopMove() {
            this.input.setValue(0, 0);
            let e = fx.Utils.getDefault3dScene();
            if (!e) return;
            e.getChildByName("Player");
        }
        lookForward(e) {
            fx.Utils.getDefault3dScene().getChildByName("Player");
        }
        lookRight(e) {
            fx.Utils.getDefault3dScene().getChildByName("Player");
        }
        jump() {
            fx.Utils.getDefault3dScene().getChildByName("Player");
        }
    }
    let Ne = null;
    function explainFun(e) {
        return function(t, i, s) {
            let n = s.value;
            "function" == typeof n && (n.toString = (() => e));
        };
    }
    class Te {
        static enableLog() {
            let e = [], t = console.log, i = this;
            const logFunc = (s, ...n) => {
                if (Ne) {
                    let t = Ne.getComponent(Pe);
                    if (e.length > 0) {
                        for (let i = 0; i < e.length; i += 2) {
                            let s = e[i], n = e[i + 1];
                            t.log(s, n);
                        }
                        e.clear();
                    }
                    t.log(s, ...n);
                } else for (const t of n) e.push(s, t);
                t(...n);
                let a = i.logType(s);
                this.logsArray.push(new Date(+new Date() + 288e5).toISOString().replace(/T/, " ").replace(/\..+/, "") + " - [" + a + "] " + n), 
                "ERROR" == a && i.postLog();
            };
            fx.Utils.isOnPC() || (console.log = logFunc.bind(this, "#C0C0C0"), console.warn = logFunc.bind(this, "#FFFBE5"), 
            console.error = logFunc.bind(this, "#FF0000"));
        }
        static init() {
            window.GM = Te;
            const e = "scenes/prefab/GMBox.json";
            Laya.loader.load(e, Laya.Handler.create(this, () => {
                let t = fx.Utils.createPrefab(e);
                t.zOrder = 999, Ne = t, Laya.stage.addChild(t);
            })), setTimeout(() => {
                Laya.timer.loop(1e3, this, () => {
                    let e = Laya.Stat.gpuMemory;
                    e = Math.floor(e / 1048576 * 100) / 100, e >= 50 && !this.sDisableGpu && fx.Utils.showTips("GPU内存过大！！！");
                });
            }, 1e3);
        }
        static showStat() {
            Laya.Stat.show();
        }
        static hideStat() {
            Laya.Stat.hide();
        }
        static hideDebugBounds() {
            fx.Physics.World.showDebugBounds = !1;
            let e = fx.Utils.getDefault3dScene().getChildren();
            for (const t of e) "debugBounds" == t.name && (t.active = !1);
        }
        static clearLocalStorage() {
            Laya.LocalStorage.clear();
        }
        static clearServerData() {
            sdk.Sdk.instance.saveToServer({});
        }
        static postLog() {
            if (this.logsArray.length <= 0) return console.log("未获取到日志信息"), !1;
            let e = new Laya.HttpRequest(), t = "default", s = "default";
            if ("" != i.server_cfg_url) {
                t = i.server_cfg_url.split("/", 4)[3];
                let e = i.server_cfg_url.split("_", 5);
                e[e.length - 1] = e[e.length - 1].split(".", 1)[0], s = "";
                for (let t = 1; t < e.length; t++) s += e[t], null != e[t + 1] && (s += "_");
            }
            let n = {
                logs: this.logsArray,
                gameName: t,
                channel: s
            };
            e.send("http://192.168.0.179:9530/createlog", JSON.stringify(n), "post", "text");
        }
        static logType(e) {
            let t;
            switch (e) {
              case "#C0C0C0":
                t = "LOG";
                break;

              case "#FFFBE5":
                t = "WARN";
                break;

              case "#FF0000":
                t = "ERROR";
            }
            return t;
        }
        static disableGPUTips() {
            Te.sDisableGpu = !0;
        }
        static openRewardDialog(e) {
            e = Number(e), !isNaN(e) && e || (e = 1);
            let t = [];
            for (let i = 0; i < e; ++i) {
                let e = new we(ve.Coin, 50);
                t.push(e);
            }
            fx.SceneManager.pushView(Oe, {
                from: "RoomFinishDialog",
                userArgs: [ t ]
            });
        }
        static addRoomItemBox(e) {
            e = Number(e), T.I.changeRoomItemBoxCnt(e);
        }
    }
    Te.sDisableGpu = !1, Te.enterLoadingTime = 0, Te.logsArray = [], __decorate([ explainFun("显示性能面板") ], Te, "showStat", null), 
    __decorate([ explainFun("隐藏性能面板") ], Te, "hideStat", null), __decorate([ explainFun("隐藏物理调试线框") ], Te, "hideDebugBounds", null), 
    __decorate([ explainFun("清除本地存档") ], Te, "clearLocalStorage", null), __decorate([ explainFun("清空服务器存档") ], Te, "clearServerData", null), 
    __decorate([ explainFun("发送日志到内网FTP--\x3ehttp://192.168.0.179/logs/") ], Te, "postLog", null), 
    __decorate([ explainFun("禁用内存过高提示") ], Te, "disableGPUTips", null);
    var Me, Ue, Be;
    !function(e) {
        e[e.EXPORT_HOT = 1] = "EXPORT_HOT", e[e.EXPORT_LIKE = 2] = "EXPORT_LIKE", e[e.EXPORT_MOREGAME = 3] = "EXPORT_MOREGAME", 
        e[e.EXPORT_EXCLUDE = 4] = "EXPORT_EXCLUDE";
    }(Me || (Me = {}));
    class Ge extends fx.BaseLogic {
        constructor() {
            super(), this.isOpenStageId = void 0, this.startGameTime = 0, this.server_appcfg_url = "", //https://cdn.cdwaterbear.cn/WXMiniProgramJump/config_miniProgram.json
            this.jsonData = void 0, this.miniProgramJumpData = void 0;
        }
        static getInstance() {
            return this.instance || (this.instance = new Ge()), this.instance;
        }
        onInitOnce() {
            this.getWXMiniJump();
        }
        onInit() {}
        getWXMiniJump() {
            let e = new Laya.HttpRequest();
            e.http.timeout = 1e4;
            let t = [];
            e.once(Laya.Event.COMPLETE, this, e => {
                if (e && (this.jsonData = e, this.jsonData && this.jsonData.navigateAppList)) {
                    let e = fx.Utils.cloneArray(this.jsonData.navigateAppList);
                    for (let s = 0; s < e.length; s++) {
                        const n = e[s];
                        n && (i.appId != n.appId && t.push(n), this.navigateAppList = t);
                    }
                }
            }), e.once(Laya.Event.ERROR, this, e => {
                console.log(`数据获取失败：${JSON.stringify(e)}`);
            }), e.send(this.server_appcfg_url, null, "GET", "json", [ "Content-Type", "application/x-www-urlencoded" ]);
        }
        getJumpData(e) {
            let t, s = e, n = [];
            1 == e ? (n = this.getCarouselIcon(), 0 == n.length && (n = this.navigateAppList)) : n = sdk.Sdk.instance.getServerJsonCfgNavigateApplist(), 
            n || this.navigateAppList || 1 == e || (n = this.navigateAppList);
            for (const e in n) if (n.hasOwnProperty(e)) {
                const i = n[e];
                if (!i.type) break;
                t = i.type;
            }
            !t && this.navigateAppList && 1 != e && (n = this.navigateAppList);
            let a = [];
            if (s) {
                for (const t in n) if (n.hasOwnProperty(t)) {
                    const s = n[t];
                    s.type ? e == s.type && i.appId != s.appId && a.push(s) : i.appId != s.appId && a.push(s);
                }
            } else for (const e in n) if (n.hasOwnProperty(e)) {
                const t = n[e];
                i.appId != t.appId && a.push(t);
            }
            return a.length > 0 ? a : null;
        }
        navigateApp(e, t = !1) {
            if (e && e.appId) {
                let i = e.type;
                t && (i = 3), sdk.Sdk.instance.navigateApp({
                    appId: e.appId,
                    success: () => {
                        sdk.Sdk.instance.sendEvent("EXPORT_GAME", {
                            name: e.name,
                            type: i + ""
                        });
                    }
                });
            }
        }
        getGameTime() {
            let e = fx.Utils.getTime() - this.startGameTime, t = sdk.Sdk.instance.getServerJsonCfg();
            return !(!t || !t.gameTime) && e >= 60 * t.gameTime * 1e3;
        }
        judgeBottomGridOdds() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // if (!e || !e.bottomGridOdds) return !1;
            // {
            //     let t = 0;
            //     if (e.bottomGridOdds >= 1 && (t = e.bottomGridOdds / 100), Math.random() > t) return !1;
            // }
            return !0;
        }
        judgeCenterGridOdds() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // if (!e || !e.centerGridOdds) return !1;
            // {
            //     let t = 0;
            //     if (e.centerGridOdds >= 1 && (t = e.centerGridOdds / 100), Math.random() > t) return !1;
            // }
            return !0;
        }
        getCloseBtnTime() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // return e && e.closeBtnTime ? e.closeBtnTime : 0;
            return 0 
        }
        duplicateRemoval(e) {
            let t, i = [];
            if (e) {
                for (let s = 0; s < e.length; s++) if (t = !0, 0 == s) i[s] = e[s]; else {
                    for (let n = 0; n < i.length; n++) e[s].appId == i[n].appId && (t = !1);
                    t && i.push(e[s]);
                }
                return i;
            }
            return e;
        }
        judgeBannerOdds() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // if (!e || !e.bannerOdds) return !1;
            // {
            //     let t = 0;
            //     if (e.bannerOdds >= 1 && (t = e.bannerOdds / 100), Math.random() > t) return !1;
            // }
            return !0;
        }
        getExportGameList() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // if (e && e.exportGameList) {
            //     let t = [];
            //     for (let i in e.exportGameList) t.push(e.exportGameList[i]);
            //     return t;
            // }
            return null;
        }
        getCarouselIcon() {
            // let e = sdk.Sdk.instance.getServerJsonCfg();
            // return e && e.carouselIconList ? e.carouselIconList : [];
        return []
        }
    }
    class Ve extends Laya.Script {
        constructor() {
            super(), this.packages = [ "res", "res3d", "sound" ], this.count = this.packages.length;
        }
        onEnable() {
            let e = this.owner.getChildByName("pb_progress");
            e.value = 0, this.pb_progress = e, fx.Utils.isOnMiniGame() ? this.loadNext() : this.loginServer();
        }
        onDisable() {
            fx.EventCenter.instance.offAllCaller(this);
        }
        loadNext() {
            if (0 == this.packages.length) return console.log("分包加载完成！"), void this.loginServer();
            let e = this.packages.shift(), t = sdk.Sdk.instance.loadSubpackage({
                name: e,
                success: this.onLoadSuccess.bind(this)
            });
            if (!t) return void this.loadNext();
            let i = this.count, s = i - this.packages.length - 1;
            t.onProgressUpdate(e => {
                let t;
                t = e.progress > 1 ? (.01 * e.progress + s) / i : (e.progress + s) / i, this.pb_progress.value = t, 
                console.log(e, t);
            });
        }
        onLoadSuccess(e) {
            console.log(e), this.loadNext();
        }
        loginServer() {
            // fx.EventCenter.instance.once(sdk.SdkEvent.E_SDK_INIT_OK, this, e => {
                console.log("SDK 初始化完成！"), this.complete(e);
            // }), sdk.Sdk.instance.init();
        }
        complete(e) {
            le.instance.event(de.LOADING_COMPLETED, {
                delatTime: "" + (fx.Utils.getTime() - Te.enterLoadingTime)
            }), this.pb_progress.value = 1, N.I.init(), T.I.init(), re.I.init(), he.I.init(), 
            Ge.getInstance().init(), fx.Utils.isOnMiniGame() && (sdk.Sdk.isOnWeiXin() ? i.channel_AdIds.videoId.length > 0 && (sdk.Sdk.instance.adIds = i.channel_AdIds) : sdk.Sdk.instance.adIds = i.channel_AdIds, 
            sdk.Sdk.instance.preloadVideo(), sdk.Sdk.instance.preloadInterstitial(), sdk.Sdk.instance.preloadBanner(null, {
                forever: null,
                widthScaleRate: .7,
                adIntervals: 60
            })), Laya.timer.callLater(this, function() {
                console.log("切换游戏场景！"), fx.SceneManager.changeScene(Ae, {
                    from: "loading"
                }), le.instance.event(de.OPEN_MAIN);
            });
        }
    }
    class Fe extends Laya.Script {
        onAwake() {
            this.list_level = this.owner, this.initList();
        }
        initList() {
            let e = T.I.getMaxStageId(), t = T.I.getCurStage().id, i = 50 * Math.floor((t - 1) / 50) + 1, s = Math.min(i + 49, e), n = 0, a = [];
            for (let e = s; e >= i; --e) e == t && (n = a.length), a.push({
                stageId: e,
                isLast: e == s
            });
            for (let e = 0; e < 2; ++e) a.push({
                isTemp: !0
            });
            for (let e = 0; e < a.length; ++e) {
                let t = fx.Utils.createPrefab(l.LEVEL_ITEM);
                t.dataSource = a[e], this.list_level.addChild(t), 
                t.y = 227 * e - 170,
                 this.updateItem(t, e);
            }
            this.list_level.vScrollBarSkin = "", this.owner.frameOnce(2, this, () => {
                this.destroyed || this.list_level.scrollTo(0, 227 * (n - 2));
            });
        }
        updateItem(e, t) {
            if (!e.dataSource) return;
            if (e.dataSource.isTemp) return void (e.visible = !1);
            e.visible = !0;
            let i = e.dataSource.stageId, s = e.dataSource.isLast, n = T.I.getCurStage().id, a = e.getChildByName("img_di");
            a.skin = i == n ? "res/game/img_level_cur.png" : i > n ? "res/game/img_level_lock.png" : "res/game/img_level_old.png", 
            a.getChildByName("label_stage").value = `${i}`;
            let o = a.getChildByName("img_lock");
            o.visible = i >= n, s && (o.visible = !1), e.getChildByName("panel_progress").visible = i < n;
            let r = e.getChildByName("box_gift");
            r.visible = i % 10 == 0 && i > n;
        }
    }
    class He extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.CoinsChange("coins"), fx.EventCenter.instance.on(fx.BaseEvent.E_PROP_CHANGED, this, this.CoinsChange);
        }
        onEnable() {
            let e = this.owner;
            if (fx.SceneManager.getCurDialogRegName()) {
                let t = (Laya.stage.height - Laya.stage.designHeight) / 2;
                t > 0 && (e.top = 50 - t);
            }
        }
        CoinsChange(e) {
            if ("coins" === e) {
                let e = this.owner && this.owner.parent;
                if (e && !e.destroyed) {
                    let e = this.owner.getChildByName("coins_num");
                    e && (e.value = N.I.getPlayerInfo().coins + "");
                }
            }
        }
        onDisable() {
            fx.EventCenter.instance.off(fx.BaseEvent.E_PROP_CHANGED, this, this.CoinsChange);
        }
    }
    class ze extends Laya.Script {
        constructor() {
            super(), this.isUseExportId = !1, this.isHarvest = !0, this.isUseReverseOrder = !1, 
            this.gameIndex = -1;
        }
        onEnable() {
            let e = this.owner;
            this.dataArray = [];
            let t = Ge.getInstance().getJumpData(1);
            if (!t) return void (e.visible = !1);
            this.dataArray.length <= 0 && (this.dataArray = t), this.isUseReverseOrder && this.dataArray.reverse();
            let i = e.getChildByName("iconBg");
            this.gameIcon = i.getChildByName("gameIcon"), this.gameName = e.getChildByName("gameName"), 
            this.hotImg = e.getChildByName("hotImg"), fx.Effect.breathEff(this.hotImg, 1500, 1.1), 
            e.on(Laya.Event.MOUSE_DOWN, this, () => {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`Cilck ：${this.dataArray[this.gameIndex].name}`) : (console.log(this.dataArray[this.gameIndex].appId), 
                Ge.getInstance().navigateApp(this.dataArray[this.gameIndex]));
            }), this.updataFunc(), Laya.timer.loop(3e3, this, this.updataFunc);
        }
        onDisable() {}
        updataFunc() {
            this.gameIndex += 1, this.gameIndex >= this.dataArray.length && (this.gameIndex = 0), 
            "111" !== this.gameName.text && this.shake(), this.gameIcon.skin = this.dataArray[this.gameIndex].icon, 
            this.gameName.text = this.dataArray[this.gameIndex].name, this.hotImg.visible = !0;
        }
        shake() {
            let e = this.owner;
            new fx.Sequence([ {
                t: "to",
                target: e,
                props: {
                    rotation: -15
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: 15
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: -10
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: 10
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: -5
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: 5
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: e,
                props: {
                    rotation: 0
                },
                duration: 100,
                ease: Laya.Ease.backOut
            } ], !1).run();
        }
    }
    class Ke extends G.scenes.WXExportAd.GameCenterViewUI {
        constructor() {
            super(), this.gridSize = {
                w: 360,
                h: 352
            }, this.phoneSize = {
                w: 0,
                h: 0
            }, this.screenSize = {
                w: 0,
                h: 0
            }, this.isShowGrid = !1;
        }
        onAdd() {
            // sdk.Sdk.instance.showInterstitial(),
             this.dataArray = Ge.getInstance().duplicateRemoval(Ge.getInstance().getJumpData()), 
            this.img_closeBtn.visible = !1, this.img_closeBtn.on(Laya.Event.CLICK, this, () => {
                fx.SceneManager.popView();
            }), this.img_maskBg.width = Laya.stage.width, this.img_maskBg.height = Laya.stage.height;
            let e = sdk.Sdk.instance.getSystemInfo();
            e && (this.gridSize.w *= e.pixelRatio, this.gridSize.h *= e.pixelRatio, this.phoneSize.w = e.screenWidth * e.pixelRatio, 
            this.phoneSize.h = e.screenHeight * e.pixelRatio, this.screenSize.w = e.screenWidth, 
            this.screenSize.h = e.screenHeight);
        }
        onEnter() {
            sdk.Sdk.instance.isHarvest() && Ge.getInstance().getGameTime() && Ge.getInstance().judgeCenterGridOdds() ? this.showGrid() : this.showExportCenter(), 
            this.timer.once(1e3 * Ge.getInstance().getCloseBtnTime(), this, () => {
                this.img_closeBtn.visible = !0;
            });
        }
        onRemove() {
            // this.isShowGrid && sdk.Sdk.instance.hideBlockAd(i.channel_AdIds["blockId-25-2"], !1);
        }
        showGrid() {
            this.img_adBg.skin = "", this.gameList.visible = !1, this.isShowGrid = !0;
            let e = Laya.stage.width / 2 - 310, t = (this.img_adBg.localToGlobal(new Laya.Point(this.img_adBg.x, this.img_adBg.y), !0), 
            this.getY() - 50);
            Laya.timer.callLater(this, () => {
                sdk.Sdk.instance.showBlockAd(i.channel_AdIds["blockId-25-2"], {
                    left: e,
                    top: t,
                    width: 300
                }, 1), Laya.timer.callLater(this, () => {
                    sdk.Sdk.instance.showBlockAd(i.channel_AdIds["blockId-25-2"], {
                        left: e,
                        top: t,
                        width: 300
                    }, 1);
                });
            });
        }
        showExportCenter() {
            if (this.dataArray && this.dataArray.length > 0) {
                let e = [];
                for (;e.length < 20; ) {
                    const t = this.dataArray[fx.Utils.getIntRandom(0, this.dataArray.length - 1)];
                    if (0 == e.length) t.redPoint = fx.Utils.getIntRandom(1, 6) <= 3, e.push(t); else {
                        let i = !0;
                        for (let s = 0; s < e.length; s++) e[s].appId == t.appId && (i = !1);
                        i && (t.redPoint = fx.Utils.getIntRandom(1, 6) <= 3, e.push(t));
                    }
                }
                this.gameList.dataSource = e, this.gameList.renderHandler = new Laya.Handler(this, this.cellUpdata);
            } else fx.SceneManager.popView();
        }
        cellUpdata(e, t) {
            let i = e.dataSource;
            if (!i) return;
            let s = e.getChildByName("gameIcon"), n = e.getChildByName("gameName");
            s && (s.skin = i.icon), n && i.name && (n.text = i.name), e.offAll(Laya.Event.CLICK), 
            e.on(Laya.Event.CLICK, this, function(e) {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`Click： ${e.name}`) : Ge.getInstance().navigateApp(e, !0);
            }, [ i ]);
        }
        onDestroy() {}
        getY() {
            let e = this.img_adBg.y;
            return isNaN(this.img_adBg.top) ? isNaN(this.img_adBg.bottom) ? isNaN(this.img_adBg.centerY) || (e = this.phoneSize.h / 2 + this.img_adBg.centerY - this.img_adBg.height / 2) : e = this.phoneSize.h - this.img_adBg.bottom - this.img_adBg.height : e = this.img_adBg.top, 
            e;
        }
    }
    Laya.ClassUtils.regClass("GameCenterView", Ke);
    class We extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.owner.on(Laya.Event.CLICK, this, () => {
                fx.EventCenter.instance.event(_), fx.SceneManager.pushView(Ke);
            });
        }
        onDisable() {}
    }
    class Xe extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            // sdk.Sdk.instance.showBanner();
        }
        onDestroy() {
            // sdk.Sdk.instance.hideBanner();
        }
    }
    class Ye extends fx.BaseEventDispatcher {
        constructor() {
            super(), this._record_time = 0, this.maxRecordTime = 120
            // , fx.EventCenter.instance.on(sdk.SdkEvent.E_SHARE_RESULT, this, this.giveRewardEvent);
        }
        get record_time() {
            return this._record_time;
        }
        set record_time(e) {
            this._record_time = e;
        }
        get maxRecordTime() {
            return this._maxRecordTime;
        }
        set maxRecordTime(e) {
            this._maxRecordTime = e;
        }
        static get I() {
            return this._instance || (this._instance = new Ye()), this._instance;
        }
        giveRewardEvent(e) {
            e.code == sdk.SdkCode.SHARE_SUCCESS ? Laya.timer.once(2e3, this, () => {
                N.I.getPlayerInfo().addCoins(300), fx.Utils.showTips("分享成功，获得300金币~");
            }) : (e.code, sdk.SdkCode.SHARE_FAILED);
        }
    }
    !function(e) {
        e[e.NOT_RECORD = 1] = "NOT_RECORD", e[e.START_RECORD = 2] = "START_RECORD", e[e.SUCCESS_RECORD = 3] = "SUCCESS_RECORD";
    }(Ue || (Ue = {})), function(e) {
        e.NOT_RECORD = "res/record_2.png", e.START_RECORD = "res/record_3.png", e.SUCCESS_RECORD = "res/record_1.png";
    }(Be || (Be = {}));
    const $e = "$GAME_RECORD";
    var je;
    !function(e) {
        e[e.E_RECORD_READY = 0] = "E_RECORD_READY", e[e.E_RECORD_START = 1] = "E_RECORD_START", 
        e[e.E_RECORD_FAILED = 2] = "E_RECORD_FAILED", e[e.E_RECORD_REVIVE = 3] = "E_RECORD_REVIVE", 
        e[e.E_RECORD_FINISH = 4] = "E_RECORD_FINISH";
    }(je || (je = {}));
    class Je extends Laya.Script {
        constructor() {
            super(), this.eventName = [ sdk.SdkEvent.E_RECORD_VIDEO_START, sdk.SdkEvent.E_RECORD_VIDEO_END, sdk.SdkEvent.E_RECORD_VIDEO_PAUSE, sdk.SdkEvent.E_RECORD_VIDEO_RESUME, sdk.SdkEvent.E_SHARE_RESULT, $e ], 
            this.funcName = [ "start_video", "end_video", "pause_video", "resume_video", "share_success", "onGameRecordEvent" ], 
            this.isFinish = !1;
        }
        onAwake() {
            this._owner = this.owner, this.shareImg = this._owner.getChildByName("shareImg"), 
            this.shareTime = this._owner.getChildByName("shareTime"), this.shareTime.visible = !1, 
            this.playStage = Ue.NOT_RECORD;
        }
        onEnable() {
            this._owner.on(Laya.Event.CLICK, this, e => {
                if (e.stopPropagation(), fx.Utils.isOnPC()) if (this.playStage == Ue.NOT_RECORD) this.start_video(120); else if (this.playStage == Ue.START_RECORD) {
                    if (Ye.I.record_time >= Ye.I.maxRecordTime - 3) return void fx.Utils.showTips("请耐心录制3秒以上~");
                    this.end_video(!1);
                } else this.playStage == Ue.SUCCESS_RECORD && fx.EventCenter.instance.event(sdk.SdkEvent.E_SHARE_RESULT, {
                    code: sdk.SdkCode.SHARE_SUCCESS
                }); else if (this.playStage == Ue.NOT_RECORD) sdk.Sdk.instance.startRecord(Ye.I.maxRecordTime); else if (this.playStage == Ue.START_RECORD) {
                    if (Ye.I.record_time >= Ye.I.maxRecordTime - 3) return void fx.Utils.showTips("请耐心录制3秒以上~");
                    sdk.Sdk.instance.stopRecord();
                } else this.playStage == Ue.SUCCESS_RECORD && sdk.Sdk.instance.shareVideo();
            });
            for (let e = 0; e < this.eventName.length; e++) {
                const t = this.eventName[e], i = this.funcName[e];
                fx.EventCenter.instance.on(t, this, this[i]);
            }
        }
        onDestroy() {
            for (let e = 0; e < this.eventName.length; e++) {
                const t = this.eventName[e], i = this.funcName[e];
                fx.EventCenter.instance.off(t, this, this[i]);
            }
            this.isFinish || this.end_record();
        }
        loop() {
            Ye.I.record_time -= 1, this.shareTime.text = Ye.I.record_time.toString() + "s", 
            Ye.I.record_time <= 0 && (this.shareTime.visible = !1, sdk.Sdk.instance.stopRecord(!0));
        }
        start_video(e) {
            Ye.I.record_time = Ye.I.maxRecordTime = e, this.shareImg.source = Laya.loader.getRes(Be.START_RECORD), 
            this.playStage = Ue.START_RECORD, this.shareTime.text = Ye.I.record_time.toString() + "s", 
            Laya.timer.loop(1e3, this, this.loop), this.shareTime.visible = !0;
        }
        end_video(e) {
            Ye.I.record_time >= Ye.I.maxRecordTime - 3 ? (this.shareImg.source = Laya.loader.getRes(Be.NOT_RECORD), 
            this.playStage = Ue.NOT_RECORD) : (this.shareImg.source = Laya.loader.getRes(Be.SUCCESS_RECORD), 
            this.playStage = Ue.SUCCESS_RECORD), Laya.timer.clear(this, this.loop), this.shareTime.visible = !1, 
            Ye.I.record_time = Ye.I.maxRecordTime, this.shareTime.text = Ye.I.record_time.toString() + "s";
        }
        pause_video() {
            Laya.timer.clear(this, this.loop);
        }
        resume_video() {
            this.shareImg.source = Laya.loader.getRes(Be.START_RECORD), this.playStage = Ue.START_RECORD, 
            this.shareTime.text = Ye.I.record_time.toString() + "s", Laya.timer.loop(1e3, this, this.loop), 
            this.shareTime.visible = !0;
        }
        share_success(e) {
            e.code == sdk.SdkCode.SHARE_SUCCESS ? (this.shareImg.source = Laya.loader.getRes(Be.NOT_RECORD), 
            this.playStage = Ue.NOT_RECORD) : (e.code, sdk.SdkCode.SHARE_FAILED);
        }
        resumeBtnStage() {
            this.shareImg.source = Laya.loader.getRes(Be.NOT_RECORD), this.playStage = Ue.NOT_RECORD, 
            sdk.Sdk.instance.stopRecord(!0);
        }
        onGameRecordEvent(e) {
            let t = sdk.Sdk.instance.getSystemInfo();
            if (e == je.E_RECORD_START && t && "V1934A" == t.model) this._owner.visible = !0; else if (fx.Utils.isOnPC() || "devtools" !== t.appName) switch (e) {
              case je.E_RECORD_READY:
                this.resumeBtnStage(), console.log("游戏准备~");
                break;

              case je.E_RECORD_START:
                this.start_record(), console.log("游戏开始~");
                break;

              case je.E_RECORD_FAILED:
                this.pause_record(), console.log("游戏失败~");
                break;

              case je.E_RECORD_REVIVE:
                this.resume_record(), console.log("游戏复活~");
                break;

              case je.E_RECORD_FINISH:
                this.isFinish = !0, this.end_record(), console.log("游戏结束~");
            }
        }
        start_record() {
            console.log("playStage:", this.playStage), this.playStage != Ue.START_RECORD && (this._owner.visible = !0, 
            fx.Utils.isOnPC() ? this.start_video(120) : sdk.Sdk.instance.startRecord());
        }
        end_record() {
            this._owner.visible = !1, this.playStage == Ue.START_RECORD && (fx.Utils.isOnPC() ? this.end_video(!1) : sdk.Sdk.instance.stopRecord(!0));
        }
        pause_record() {
            fx.Utils.isOnPC() ? this.pause_video() : sdk.Sdk.instance.record_pause();
        }
        resume_record() {
            fx.Utils.isOnPC() ? this.resume_video() : sdk.Sdk.instance.record_resume();
        }
    }
    class qe extends Laya.Script {
        constructor() {
            super(), this.array = [];
        }
        onEnable() {
            if (this.likeData = Ge.getInstance().getJumpData(2), this.array = Ge.getInstance().getExportGameList(), 
            this.array) this.getDataCallback(); else {
                this.owner.visible = !1;
            }
        }
        getDataCallback() {
            if (!this || !this.owner) return;
            let e = this.owner;
            if (this.likeData && this.likeData.length > 0) {
                this.likeList_1 = e.getChildByName("likeList_1");
                let t = [];
                for (let e = 0; e < this.array.length; e++) for (const i in this.likeData) this.array[e] == this.likeData[i].appId && t.push(this.likeData[i]);
                this.likeList_1.dataSource = t, this.likeList_1.renderHandler = new Laya.Handler(this, this.cellHandler);
            } else e.visible = !1;
        }
        cellHandler(e, t) {
            let i = e.dataSource;
            if (!i && !this.owner) return;
            let s = e.getChildByName("gameIcon"), n = e.getChildByName("gameName");
            s && (s.skin = i.icon, n && (n.text = i.name)), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, function(e) {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`Click ：${e.name}`) : Ge.getInstance().navigateApp(e);
            }, [ i ]);
        }
        onDisable() {}
        onClick() {}
        onUpdate() {}
    }
    class Qe extends Laya.Script {
        constructor() {
            super(), this.touchDownSign = !1, this.touchPoint = new Laya.Point(), this.moveDiff_1 = new Laya.Point(), 
            this.moveDiff_2 = new Laya.Point(), this.curAdID = 1;
        }
        onEnable() {
            let e = this.owner;
            if (e.parent.height != Laya.stage.height) {
                let t = (e.parent.height - Laya.stage.height) / 2;
                e.bottom += t, e.parent.mouseThrough = !0;
            }
            this.likeData = Ge.getInstance().getJumpData(2), this.getDataCallback();
        }
        getDataCallback() {
            if (!this || !this.owner) return;
            let e = this.owner;
            if (this.likeData && this.likeData.length > 0) {
                e.on(Laya.Event.MOUSE_DOWN, this, this.touchEvent), e.on(Laya.Event.MOUSE_MOVE, this, this.touchEvent), 
                e.on(Laya.Event.MOUSE_UP, this, this.touchEvent), e.on(Laya.Event.MOUSE_OUT, this, this.touchEvent), 
                this.likeList_1 = e.getChildByName("likeList_1"), this.likeList_2 = e.getChildByName("likeList_2");
                let t = [], i = [];
                for (;t.length + i.length < 10; ) for (const e in this.likeData) if (this.likeData.hasOwnProperty(e)) {
                    const s = this.likeData[e];
                    if (!(t.length + i.length < 10)) break;
                    t.length < 5 ? t.push(s) : i.push(s);
                }
                this.likeList_1.dataSource = t, this.likeList_2.dataSource = i, this.likeList_1.renderHandler = new Laya.Handler(this, this.cellHandler), 
                this.likeList_2.renderHandler = new Laya.Handler(this, this.cellHandler);
            } else e.visible = !1;
        }
        cellHandler(e, t) {
            let i = e.dataSource;
            if (!i && !this.owner) return;
            let s = e.getChildByName("gameIcon");
            s && (s.skin = i.icon), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, function(e) {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`Click ：${e.name}`) : Ge.getInstance().navigateApp(e);
            }, [ i ]);
        }
        touchEvent(e) {
            let t = this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
            switch (e.type) {
              case Laya.Event.MOUSE_DOWN:
                this.touchDownSign = !0, this.touchPoint = t, this.moveDiff_1.x = t.x - this.likeList_1.x, 
                this.moveDiff_2.x = t.x - this.likeList_2.x;
                break;

              case Laya.Event.MOUSE_MOVE:
                this.touchDownSign && (this.likeList_1.x = t.x - this.moveDiff_1.x, this.likeList_2.x = t.x - this.moveDiff_2.x, 
                t.x - this.touchPoint.x <= 0 ? this.likeList_1.x <= -this.likeList_1.width ? this.likeList_1.x = this.likeList_2.x + this.likeList_2.width + 20 : this.likeList_2.x <= -this.likeList_2.width && (this.likeList_2.x = this.likeList_1.x + this.likeList_1.width + 20) : this.likeList_1.x >= Laya.stage.width ? this.likeList_1.x = this.likeList_2.x - this.likeList_1.width - 20 : this.likeList_2.x >= Laya.stage.width && (this.likeList_2.x = this.likeList_1.x - this.likeList_2.width - 20));
                break;

              case Laya.Event.MOUSE_UP:
                this.touchDownSign && (this.touchDownSign = !1);
                break;

              case Laya.Event.MOUSE_OUT:
                this.touchDownSign = !1;
            }
        }
        onDisable() {}
        onClick() {}
        onUpdate() {
            !this.touchDownSign && this.likeData && (this.likeList_1.x -= .75, this.likeList_2.x -= .75, 
            this.likeList_1.x <= -this.likeList_1.width && (this.likeList_1.x = this.likeList_2.x + this.likeList_2.width + 20), 
            this.likeList_2.x <= -this.likeList_2.width && (this.likeList_2.x = this.likeList_1.x + this.likeList_1.width + 20));
        }
    }
    class Ze {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("modules/WXExportAd/CustomAd.ts", s), e("script/PropList.ts", W), e("script/ScaleEffectBtn.ts", X), 
            e("script/PropUseScript.ts", Y), e("modules/TouchAdModules/TouchAdScript.ts", j), 
            e("script/RewardBtnScript.ts", J), e("script/LoadingScript.ts", Ve), e("script/LevelListScript.ts", Fe), 
            e("script/BoxCoinScript.ts", He), e("modules/WXExportAd/NewGridAd.ts", ue), e("modules/WXExportAd/CarouselScript.ts", ze), 
            e("modules/WXExportAd/MoreGameBtnScript.ts", We), e("script/AdScript/Banner.ts", Xe), 
            e("common/GMScript.ts", Pe), e("script/RecordScript.ts", Je), e("modules/WXExportAd/FlxedLikeScript.ts", qe), 
            e("modules/WXExportAd/LikeScript.ts", Qe);
        }
    }
    Ze.width = 750, Ze.height = 1334, Ze.scaleMode = "showall", Ze.screenMode = "none", 
    Ze.alignV = "middle", Ze.alignH = "center", Ze.startScene = "scenes/LoadingScene.scene", 
    Ze.sceneRoot = "", Ze.debug = !1, Ze.stat = !1, Ze.physicsDebug = !1, Ze.exportSceneToJson = !0, 
    Ze.init();
    class et extends fx.AppBase {
        constructor() {
            let e = Ze;
            if (!e.stat && fx.Utils.isOnPC() && (e.stat = 0),
             e.stat && Te.enableLog(),
            //  sdk.Sdk.sInit(i), 
            super(e, i.manifestFile), e.stat && Te.init(),
             fx.Utils.isOnMiniGame() && !fx.Utils.isOnPC()
              && i.res_server_url) {
                Laya.URL.basePath = i.res_server_url;
                let e = sdk.Sdk.instance.getMiniAdapter();
                e && (e.AutoCacheDownFile = !0, e.remotefiles = []);
            }
            Laya.MouseManager.multiTouchEnabled = !1;
        }
        onLoaded() {
            // sdk.Sdk.instance.sendEvent(de.BEFORE_LOADING, {
                startTime: "" + (fx.Utils.getTime() - Te.enterLoadingTime)
            // }), 
            fx.CfgMgr.instance.loadJson(l.JSON_GAME_CFG, Laya.Handler.create(this, () => {
                if (console.log("Config Load Completed !"), this.launch(), i.showBQ) {
                    let e = "";
                    [ "8", "4", "5", "7", "4", "F", "5", "C", "6", "7", "4", "3", "5", "F", "5", "2", "6", "2", "1", "0", "9", "0", "F", "D", "6", "C", "3", "4", "7", "1", "8", "A", "4", "E", "9", "2", "5", "2", "A", "8", "7", "9", "D", "1", "6", "2", "8", "0", "6", "7", "0", "9", "9", "6", "5", "0", "5", "1", "6", "C", "5", "3", "F", "8", "6", "2", "4", "0", "6", "7", "0", "9" ].forEach((t, i) => {
                        i % 4 == 0 && (e += "%", e += "u"), e += t;
                    });
                    let t = new Laya.Label(unescape(e));
                    Laya.stage.addChild(t), t.right = 0, t.top = 0, t.alpha = .4, t.fontSize = 20, t.color = "#ffffff", 
                    t.zOrder = 1e3;
                }
            }));
        }
        initGraphicsSetting(e) {
            super.initGraphicsSetting(e), fx.Utils.isOnPC() && (fx.GraphicsCfg.enableShadow = !0, 
            fx.GraphicsCfg.enableMultiLight = !0);
        }
    }
    new et();
}();