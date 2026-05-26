(function () {
    "use strict";
    class PlatDebug extends Laya.Sprite {
        constructor(view) {
            super();
            this._view = view;
            this.graphics.drawRect(0, 0, 200, 200, "#FFFFFF");
            this.size(200, 200);

            this._k = "visible";
            this._v = false;
            this._i = 0;

            this.on(Laya.Event.CLICK, this, this.OnDo);
            Laya.timer.loop(1, this, () => {
                this.parent && this.parent.setChildIndex(this, this.parent.numChildren - 1);
            });
        }
        OnDo() {
            console.log(this._k, this._v, this._i);
            this._view.getChildAt(this._i)[this._k] = this._v;
        }

    }

    class PlatPriv extends Laya.Image {
        static Create(x, y, p, w = NaN, h = NaN) {
            PlatPriv.Ins = PlatPriv.Ins || new PlatPriv(w, h);
            PlatPriv.Ins.pos(x, y);
            PlatPriv.Ins.p = p;
            p.addChild(PlatPriv.Ins);
            this.zOrder = 1000000000000;
            return PlatPriv.Ins;
        }
        static Check() {
            return PlatPriv.Ins.Check();
        }

        constructor(w = NaN, h = NaN) {
            super();
            this._tab = new Laya.Image();
            this.addChild(this._tab);

            this._txt = new Laya.Image();
            this._txt.skin = "zxtw/priv/priv_link_txt.png";
            this._txt.pos(45, -3);
            this.addChild(this._txt);
            this.zOrder = 1000000000000;
            this._tab.on(Laya.Event.CLICK, this, this.OnTab);
            this._txt.on(Laya.Event.CLICK, this, this.OnTxt);

            this._keys = "saveKeys_priv";
            this._s = Laya.LocalStorage.getItem(this._keys) || "0";
            this._s = parseInt(this._s);
            this.SetTab();

            this._w = w;
            this._h = h;
        }

        SetTab() {
            // this._tab.skin = this._s ? "zxtw/priv/priv_tab_y.png" : "zxtw/priv/priv_tab_n.png";
        }

        OnTab() {
            this._s = this._s ? 0 : 1;
            Laya.LocalStorage.setItem(this._keys, this._s ? "1" : "0");
            this.SetTab();
        }

        OnTxt() {
            if (!this._page) {
                this._page = new PlatPrivPage(new Laya.Handler(this, this.OnPage));
                this._page.Init(this._w ? this._w : Laya.stage.width * 0.8, this._h ? this._h : Laya.stage.height * 0.8);
                this._page.pos((Laya.stage.width - this._page.width) * 0.5, (Laya.stage.height - this._page.height) * 0.5);
            }
            this.p.addChild(this._page);
        }
        OnPage(v) {
            this._s = v ? 0 : 1;
            this.OnTab();
        }

        Check() {
            return this._s ? true : (this.OnTxt(), false)
        }

        onDestroy() {
            PlatPriv.Ins = null;
        }

        get priv() {
            return this._s;
        }
    }

    class PlatPrivPage extends Laya.Image {
        constructor(call) {
            super();

            this.sizeGrid = "20,20,20,20";
            this.skin = "zxtw/priv/priv_bg.png";

            this._txtTitle = new Laya.Text;
            this._txtTitle.fontSize = 60;
            this._txtTitle.text = "隐私协议";
            this._txtTitle.y = 30;
            this.addChild(this._txtTitle);
            this.zOrder = 1000000000000;
            this._btnY = new Laya.Image();
            this._btnY.skin = "zxtw/priv/btn_y.png";
            this._btnY.right = 50;
            this._btnY.bottom = 50;
            this.addChild(this._btnY);

            this._btnN = new Laya.Image();
            this._btnN.skin = "zxtw/priv/btn_n.png";
            this._btnN.left = 50;
            this._btnN.bottom = 50;
            this.addChild(this._btnN);

            this._btnY.on(Laya.Event.CLICK, this, this.OnY);
            this._btnN.on(Laya.Event.CLICK, this, this.OnN);
            this._call = call;
        }

        Init(W, H) {
            this.size(W, H);
            PlatPrivPage.W = W - 80;
            PlatPrivPage.H = H - 240;
            this._txtTitle.x = (W - this._txtTitle.width) * 0.5;
            Laya.loader.load("zxtw/priv/privacy.txt", Laya.Handler.create(this, this.OnLoad));
        }

        OnLoad() {
            if (!this._list) {
                this._list = new Laya.List;
                this._list.repeatX = 1;
                this._list.vScrollBarSkin = "";
                this._list.elasticEnabled = true;
                this._list.itemRender = PlatPrivItem;
                this._list.pos(40, 100);
                this._list.size(PlatPrivPage.W, PlatPrivPage.H);
                this.addChild(this._list);
                this._list.dataSource = [1];
            }
        }

        OnY() {
            console.log(222222222222222,this)

            this._call.runWith(1);
            this.parent && this.parent.removeChild(this);

            console.log(1111111111111111111111111111,this.parent);

        }
        OnN() {
            this._call.runWith(0);
            this.parent && this.parent.removeChild(this);
        }
    }
    class PlatPrivItem extends Laya.Image {
        constructor() {
            super();
            this._txtDesc = new Laya.Text();
            this._txtDesc.fontSize = 30;
            this._txtDesc.wordWrap = true;
            this.addChild(this._txtDesc);
            this.zOrder = 1000000000000;
            this.width = PlatPrivPage.W;
            this._txtDesc.text = Laya.loader.getRes("zxtw/priv/privacy.txt");
            this._txtDesc.width = this.width;
            this.height = this._txtDesc.height;
        }
    }

    class PlatData {
        constructor
        (
            bpy = 0.5, bpx = 0.5, npy = -1, npx = 0.5,
            bay = 0, bax = 0.5, nay = 0, nax = 0.5,
            bsw = 0, bsh = 0, nsw = 0, nsh = 0,
            prop = false, p = null, t = PlatData.NONE, i = PlatData.NONE
        ) {
            this.bpx = bpx;
            this.bpy = bpy;
            this.bax = bax;
            this.bay = bay;
            this.npx = npx;
            this.npy = npy;
            this.nax = nax;
            this.nay = nay;
            this.bsw = bsw;
            this.bsh = bsh;
            this.nsw = nsw;
            this.nsh = nsh;
            this.prop = prop;
            this.p = p;
            this.t = t;
            this.i = i;
            if (npy == -1) {
                this.npy = (this.bpy >= 1 ? this.bpy : Laya.stage.height * this.bpy) + 75;
            }
        }
        SetAnch(nax = 0.5, nay = 0, bax = 0.5, bay = 0) {
            this.nax = nax;
            this.nay = nay;
            this.bax = bax;
            this.bay = bay;
            return this;
        }
        SetNati(prop = true, t = PlatData.NONE, p = null) {
            this.prop = prop;
            this.t = t;
            this.p = p;
            return this;
        }
        SetInts(i = PlatData.INSD) {
            this.i = i;
            return this;
        }
        SetColor(color = null) {
            this.color = color;
            return this;
        }
    }
    PlatData.NONE = 0;
    PlatData.STOP = 1;
    PlatData.INSD = 1;

    class PlatInters extends Laya.Sprite {
        constructor(data) {
            super();

            this._data = data || new PlatData();

            this._btnHide = new Laya.Sprite();
            this._speMark = new Laya.Sprite();
            this.addChild(this._speMark);
            this.addChild(this._btnHide);
            this._btnHide.loadImage("zxtw/ad/common_recommondbg_close.png");
            this._speMark.loadImage("zxtw/ad/common_ad_hint.png");
            this.on(Laya.Event.MOUSE_DOWN, this, this.OnHide);

            console.log("显示测试图-Inters");
            this.Draw();
            this._speMark.pos(0, 0);
            this._btnHide.pos(this.width - 36, 0);
        }
        Draw() {
            let w = this._data.nsw || Laya.stage.width * 0.8;
            let h = this._data.nsh || Laya.stage.height * 0.4;
            this.graphics.clear();
            this.graphics.drawRect(0, 0, w, h, this._data.color || "#FFFFFF99");
            this.size(w, h);
            this.pos((Laya.stage.width - w) * 0.5, (Laya.stage.height - h) * 0.5);
        }
        Show() {
            Laya.stage.addChild(this);
            Laya.timer.clear(this, this.CheckLayer);
            Laya.timer.frameLoop(1, this, this.CheckLayer);
        }
        CheckLayer() {
            (Laya.stage.getChildAt(Laya.stage.numChildren - 1) != this) && Laya.stage.addChild(this);
        }
        OnHide() {
            console.log("清理插屏广告容器");
            this.parent && this.parent.removeChild(this);
            Laya.timer.clear(this, this.CheckLayer);
        }
    }
    class PlatBanner extends PlatInters {
        constructor(data, name = "横幅") {
            super(data, name);
        }
        Draw() {
            let w = Laya.stage.width;
            let h = 150;
            this.graphics.clear();
            this.graphics.drawRect(0, 0, w, h, this._data.color || "#FFFFFF99");
            this.size(w, h);
            this.pos(0, Laya.stage.height - this.height);
        }
        OnHide() {
            console.log("清理横幅广告容器");
            this.parent && this.parent.removeChild(this);
            Laya.timer.clear(this, this.CheckLayer);
        }
    }
    class PlatPortal extends PlatInters {
        constructor(data, name = "互推") {
            super(data, name);
        }
        Draw() {
            let w = Laya.stage.width;
            let h = 450;
            this.graphics.clear();
            this.graphics.drawRect(0, 0, w, h, this._data.color || "#FFFFFF99");
            this.size(w, h);
            this.pos(0, Laya.stage.height - this.height);
        }
        OnHide() {
            console.log("清理互推广告容器");
            this.parent && this.parent.removeChild(this);
            Laya.timer.clear(this, this.CheckLayer);
        }
    }
    class PlatNinePortal extends Laya.Image {
        constructor(data, name = "互推九宫格") {
            super(data, name);
            this.skin = "zxtw/Icon.jpg";
            this.pos(Laya.stage.width-150,Laya.stage.height-1100);
            this.on(Laya.Event.MOUSE_DOWN, this, this.OnHide);
        }
        Show() {
            Laya.stage.addChild(this);
        }
        OnHide() {
            console.log("清理互推九宫格容器");
            this.parent && this.parent.removeChild(this);
        }
    }
    class PlatNative extends Laya.Sprite {
        constructor(call, data) {
            super();
            this._btnHide = new Laya.Sprite();
            this._btnLies = new Laya.Sprite();
            this._speMark = new Laya.Sprite();
            this._spePrev = new Laya.Sprite();
            this._speCont = new Laya.Sprite();
            this._txtTitl = new Laya.Text();
            this._txtTitl.fontSize = 30;
            this._txtTitl.fontColor = "#000000";
            this._txtTitl.valign = "bottom";
            this._txtTitl.size(100, 100);
            this._txtTitl.pos(108, -100);
            this.addChild(this._spePrev);
            this.addChild(this._speCont);
            this.addChild(this._speMark);
            this.addChild(this._btnHide);
            this.addChild(this._btnLies);
            this._speCont.addChild(this._txtTitl);
            this._txtSour = new Laya.Text();
            this._txtSour.fontSize = 30;
            this._txtSour.fontColor = "#000000";
            this._txtSour.size(100, 100);
            this.addChild(this._spePrev);
            this.addChild(this._speCont);
            this.addChild(this._speMark);
            this.addChild(this._btnHide);
            this.addChild(this._btnLies);
            this._speCont.addChild(this._txtTitl);
            this._speCont.addChild(this._txtSour);
            this._btnLies.loadImage("zxtw/ad/common_ad_lies.png");
            this._btnHide.loadImage("zxtw/ad/common_recommondbg_close.png");
            this._speMark.loadImage("zxtw/ad/common_ad_hint.png");
            this._btnLies.visible = !!Plat.Ins.GetCfgsData(Plat.ClickCheck);
            this._speMark.mouseEnabled = false;
            this._btnHide.on(Laya.Event.MOUSE_DOWN, this, this.OnHide);
            this._speCont.on(Laya.Event.MOUSE_DOWN, this, this.OnClick);
            this._spePrev.on(Laya.Event.MOUSE_DOWN, this, this.OnClick);
            this._btnLies.on(Laya.Event.MOUSE_DOWN, this, this.OnLies);
            this._call = call;
            this._data = data;
            this._data.bsw && this._data.bsh && this._btnLies.size(this._data.bsw, this._data.bsh);
            this._btnHide.hitArea = !!Plat.Ins.GetCfgsData(Plat.MiniButton) ? new Laya.Rectangle(-36, -40, 36 * 2, 40 * 2) : null;
            if (this._data.t == PlatData.STOP) {
                this.hitArea = new Laya.Rectangle(0, 0, Laya.stage.width, Laya.stage.height);
                this.on(Laya.Event.MOUSE_DOWN, this, this.OnClickBG);
                this.on(Laya.Event.MOUSE_UP, this, this.OnClickBG);
                this.on(Laya.Event.CLICK, this, this.OnClickBG);
            }
            this._data.p ? this._data.p.addChild(this) : Laya.stage.addChild(this);
            this.SetPost(1);
            Laya.timer.frameLoop(1, this, this.CheckLayer);
        }
        CheckLayer() {
            if (this.parent != Laya.stage) return;
            if (Laya.stage.getChildAt(Laya.stage.numChildren - 1) != this) {
                Laya.stage.addChild(this);
            }
        }
        SetData(urls, title = "", source = "") {
            console.log("要加载的原生图片", urls, title, source);
            urls && this._speCont.loadImage(urls, Laya.Handler.create(this, this.OnLoad));
            this._txtTitl.text = title;
            this._txtSour.text = source;
        }

        SetPost(type) {
            let w, h, x, y, s;
            if (type == 1) {
                console.log("显示测试图");
                w = this._data.nsw || Laya.stage.width * 0.8;
                h = this._data.nsh || Laya.stage.height * 0.4;
                this._spePrev.graphics.clear();
                this._spePrev.graphics.drawRect(0, 0, w, h, this._data.color || "#FFFFFF99");
                this._spePrev.hitArea = new Laya.Rectangle(0, 0, w, h);
                this._spePrev.visible = true;
                this._speCont.visible = false;
            } else if (type == 2) {
                console.log("显示正式图", this._speCont.texture);
                if (this._speCont.texture == null || this._speCont.texture.width <= 0 || this._speCont.texture.height <= 0) return;

                let W = this._speCont.texture.width;
                let H = this._speCont.texture.height;
                if (this._data.nsw && this._data.nsh) {
                    w = this._data.nsw;
                    h = this._data.nsh;
                } else {
                    s = (Laya.stage.width * 0.8) / W;
                    w = W * s;
                    h = H * s;
                }
                this._speCont.size(w, h);
                this._spePrev.visible = false;
                this._speCont.visible = true;
                this._txtSour.pos(0, h);
            }
            x = (this._data.npx > 0 && this._data.npx <= 1) ? Laya.stage.width * this._data.npx : (this._data.npx > 1) ? this._data.npx : Laya.stage.width * 0.5;
            y = (this._data.npy > 0 && this._data.npy <= 1) ? Laya.stage.height * this._data.npy : (this._data.npy > 1) ? this._data.npy : Laya.stage.height * 0.5;
            x = x - w * this._data.nax;
            y = y - h * this._data.nay;
            this._spePrev.pos(x, y);
            this._speCont.pos(x, y);
            this._speMark.pos(x, y - 37);
            this._btnHide.pos(x + w - 36, y - 40);
            x = (this._data.bpx > 0 && this._data.bpx <= 1) ? Laya.stage.width * this._data.bpx : (this._data.bpx > 1) ? this._data.bpx : Laya.stage.width * 0.5;
            y = (this._data.bpy > 0 && this._data.bpy <= 1) ? Laya.stage.height * this._data.bpy : (this._data.bpy > 1) ? this._data.bpy : Laya.stage.height * 0.5;
            x = x - 247 * this._data.bax;
            y = y - 127 * this._data.bay;
            this._btnLies.pos(x, y);
        }

        OnLoad() {
            console.log("原生广告图片加载完成");
            this.SetPost(2);
        }

        Clear() {
            console.log("清理原生广告容器");
            this.parent && this.parent.removeChild(this);
            Laya.timer.clear(this, this.CheckLayer);
            this.destroy(true);
        }

        OnLies() {
            this.Clear();
            this._call && this._call.runWith(PlatNative.LIES);
        }

        OnHide() {
            this.Clear();
            this._call && this._call.runWith(PlatNative.AUTO);
        }

        OnClickBG(evt) {
            evt.stopPropagation();
        }

        OnClick() {
            this.Clear();
            this._call && this._call.runWith(PlatNative.SURE);
        }
    }
    PlatNative.NONE = 0;
    PlatNative.SURE = 1;
    PlatNative.AUTO = 2;
    PlatNative.LIES = 3;

    class InsdNative extends Laya.Sprite {
        constructor(call, stop = false) {
            super();

            this._call = call;

            this.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#00000099");
            this.hitArea = new Laya.Rectangle(0, 0, Laya.stage.width, Laya.stage.height);
            Laya.stage.addChild(this);

            Laya.timer.frameLoop(1, this, this.CheckLayer);

            this.spBT = new Laya.Sprite();
            this.spBT.loadImage("zxtw/ad/continue.png");
            this.addChild(this.spBT);
            this.spBT.on(Laya.Event.MOUSE_DOWN, this, this.HideInsdNative);
            this.spBT.pos((Laya.stage.width - 247) * 0.5, Laya.stage.height * 0.65 - 80);

            if (stop) {
                this.on(Laya.Event.MOUSE_DOWN, this, this.SpBGStopEvent);
            }
            /*this.spBG.on(Laya.Event.MOUSE_DOWN, this, this.SpBGStopEvent);
             this.spBG.on(Laya.Event.MOUSE_UP, this, this.SpBGStopEvent);
             this.spBG.on(Laya.Event.CLICK, this, this.SpBGStopEvent);*/

            Plat.Ins.ShowNative(new PlatData(Laya.stage.height * 0.65),new PlatData(Laya.stage.height * 0.65), Laya.Handler.create(this, this.HideInsdNative));
            // this.addChild(Plat.Ins.ShowNative(new PlatData(Laya.stage.height*0.65), Laya.Handler.create(this, this.HideInsdNative)));
        }
        SpBGStopEvent(evt) {
            evt.stopPropagation();
        }
        HideInsdNative() {
            Laya.timer.clear(this, this.CheckLayer);
            this.parent && this.parent.removeChild(this);
            Plat.Ins.HideNative(true, true);
            this._call && this._call.run();
        }
        CheckLayer() {
            if (this.parent != Laya.stage) return;
            if (Laya.stage.getChildAt(Laya.stage.numChildren - 1) != this) {
                Laya.stage.addChild(this);
            }
        }
    }

    class   Plat {
        static get Ins() {
            return Plat._self;
        }
        static InitCfgsData(cfgs, type, data) {
            cfgs[type[0]] = cfgs[type[0]] || {};
            cfgs[type[0]][type[1]] = data;
        }
        //1119 魅族  106 vivo
        constructor(name = "PLAT_TEST", PTID = 106, bannerH = 150) {
            console.log("创建了平台" + name);
            Plat._self = this;
            this._name = name;
            this._PTID = PTID;
            this._banH = bannerH;
            this._banR = new Laya.Event();
            this.Init();
        }

        get name() {
            return this._name;
        }

        check(name) {
            return this._name == name;
        }
        RegCall(call) {
            this._call = call;
        }

        Init() {
            this._game = 3502;
            this._vers = 1101;
            this._ctrlData = {
                status: 2
            };
            this._cfgsData = this._cfgsBack = {};
            Plat.InitCfgsData(this._cfgsData, Plat.ClickCheck, 0); //是否显示点击查看按钮
            Plat.InitCfgsData(this._cfgsData, Plat.NativeProb, 50); //插屏原生按概率显示其中一种
            Plat.InitCfgsData(this._cfgsData, Plat.NativeIntr, 20); //原生显示间隔
            Plat.InitCfgsData(this._cfgsData, Plat.NativeRate, 0); //原生误触概率
            Plat.InitCfgsData(this._cfgsData, Plat.VideosRate, 0); //视频误触概率
            Plat.InitCfgsData(this._cfgsData, Plat.NativPorta, 0); //互推原生是否可以叠加
            Plat.InitCfgsData(this._cfgsData, Plat.PageInters, 0); //界面内是否显示插屏
            Plat.InitCfgsData(this._cfgsData, Plat.MiniButton, 0); //原生广告关闭按钮点击区减半
            Plat.InitCfgsData(this._cfgsData, Plat.PageNative, 0); //显示界面原生
            Plat.InitCfgsData(this._cfgsData, Plat.VideosIcon, 1); //显示视频广告提示图标

            
            let str = "gameid=" + this._game + "&platid=" + this._PTID + "&versionnumber=" + this._vers;
            let send = new Laya.HttpRequest();
            send.on(Laya.Event.ERROR, this, this.OnCtrlErr);
            send.on(Laya.Event.COMPLETE, this, this.OnCtrlCom);
            send.send("https://game.zhangxintuowei.com/s/SwitchingState.aspx", str, "post");

        }
        OnCtrlErr(err) {
            console.log("ctrl数据错误", err);
        }
        OnCtrlCom(res) {
            this._ctrlData = JSON.parse(res.substring(1, res.length - 1).replace(/\\\"/g, "\""));
            if (this._ctrlData.status == 1) { //非审核
                this._cfgsData = {};
                Plat.InitCfgsData(this._cfgsData, Plat.ClickCheck, 1); //是否显示点击查看按钮
                Plat.InitCfgsData(this._cfgsData, Plat.NativeProb, 70); //插屏原生按概率显示其中一种
                Plat.InitCfgsData(this._cfgsData, Plat.NativeIntr, 0); //原生显示间隔
                Plat.InitCfgsData(this._cfgsData, Plat.NativeRate, 50); //原生误触概率
                Plat.InitCfgsData(this._cfgsData, Plat.VideosRate, 50); //视频误触概率
                Plat.InitCfgsData(this._cfgsData, Plat.NativPorta, 1); //互推原生是否可以叠加
                Plat.InitCfgsData(this._cfgsData, Plat.PageInters, 1); //界面内是否显示插屏
                Plat.InitCfgsData(this._cfgsData, Plat.MiniButton, 1); //原生广告关闭按钮点击区减半
                Plat.InitCfgsData(this._cfgsData, Plat.PageNative, 1); //显示界面原生
                Plat.InitCfgsData(this._cfgsData, Plat.VideosIcon, 0); //显示视频广告提示图标
                this._ctrlData.data && this.ParseCfgs(this._cfgsData, this._ctrlData.data);
            }
            console.log("ctrl数据完成", this._ctrlData);
            // console.log("res ====== "+res)
        }
        ParseCfgs(cfgs, data) {
            for (let dataKey in data) {
                let item = data[dataKey];
                if (item["status"] == "1") {
                    cfgs[dataKey] = cfgs[dataKey] || {};
                    for (let itemKey in item) {
                        cfgs[dataKey][itemKey] = parseInt(item[itemKey]);
                    }
                } else {
                    this._cfgsData[dataKey] = this._cfgsBack[dataKey];
                }
            }
        }
        InitBannerRect(bw, bh, sw, sh) {
            console.log("banner初始数据", bw, bh, sw, sh);
            bw = bw || sw;
            bh = bh || 150;
            console.log("banner数据校正", bw, bh);
            let s = bw / sw;
            this._banR.width = sw;
            this._banR.height = bh / s;
            this._banR.x = 0;
            this._banR.y = sh - this._banR.height;
            s = sw / Laya.stage.width;
            this._banH = this._banR.height * s;
            console.log("banner计算结果", this._banR.x, this._banR.y, this._banR.width, this._banR.height, this._banH);
        }

        GetBH(main = false) {
            return this._banH;
        }

        ShowVideos(call) {
            console.log("播放视频");
            this._callVideos = call;
            this._call && this._call.runWith(Plat.SOUNDS_OFF);
            if (this.name == Plat.PLAT_TEST) {
                call.runWith(true);
                this._call && this._call.runWith(Plat.SOUNDS_ON);
            }
        }
        VideoClose(v) {
            console.log("视频播放结果", v);
            this._call && this._call.runWith(Plat.SOUNDS_ON);
            this._callVideos && this._callVideos.runWith(v);
        }
        VideoError(err) {
            console.log("激励视频加载失败", err);
            platform.getInstance().prompt("暂无视频,请稍后再试");
            this._call && this._call.runWith(Plat.SOUNDS_ON);
            this._call && this._call.runWith([Plat.VIDEOS_ERR]);
            this._callVideos && this._callVideos.runWith([false, false]);
        }




        HideNativeMode() {
            console.log("关闭原生模板广告");
            if(!window.qg) {
                this._IDNativeMode && this._IDNativeMode.Clear();
                this._IDNativeMode = null;
            }

        }


        onCloseNativeModeAD() {
            console.log("原生广告模板");
            this._platNativ && this._platNative.Clear();
            this._platNative = null;
        }
        ShowBanner(type = Plat.BANNER_TYPE_GAME) {
            this._typeBanner = type;
            if (this.name == Plat.PLAT_TEST) {
                this._platBanner = this._platBanner || new PlatBanner();
                this._platBanner.Show();
                this.TimeBanner();
            }
        }
        HideBanner() {
            Laya.timer.clear(this, this.ShowBanner);
            this._platBanner && this._platBanner.OnHide();
        }
        TimeBanner() {
            Laya.timer.loop(5000, this, this.ShowBanner, [this._typeBanner]);
        }

        ShowPortal() {
            if (this.name == Plat.PLAT_TEST) {
                this._platPortal = this._platPortal || new PlatPortal();
                this._platPortal.Show();
            }
        }
        HidePortal() {
            this._platPortal && this._platPortal.OnHide();
        }
        ShowNinePortal() {
            if (this.name == Plat.PLAT_TEST) {
                this._platNinePortal = this._platNinePortal || new PlatNinePortal();
                this._platNinePortal.Show();
            }
        }
        HideNinePortal() {
            this._platNinePortal && this._platNinePortal.OnHide();
        }
        ShowInters(data = null, call = null) {
            console.log("显示插屏", data ? data.i : null, Plat.Ins.GetCfgsData(Plat.PageInters));
            if (data && data.i == PlatData.NONE && !Plat.Ins.GetCfgsData(Plat.PageInters)) return;
            Laya.MouseManager.enabled = false;
            Laya.timer.once(1000, this, () => {
                Laya.MouseManager.enabled = true;
            });
            this.ShowIntersPlat()
        }
        ShowIntersPlat() {
            this._platInters = this._platInters || new PlatInters();
            this._platInters.Show();
        }

        OnNativeErrs(err) {
            console.log("原生广告加载异常", err);
            this._platNative && this._platNative.Clear();
            this._platNative = null;
        }
        TestNative(ctrl = null) {
            console.log("检测原生限制");
            if (ctrl) {
                console.log("有控制限制", ctrl);
                if (!this.GetCfgsData(ctrl)) return false;
                console.log("控制通过");
            }
            console.log("是否有未关闭原生", this._platNative);
            if (this._platNative) return false;
            let time = (new Date()).getTime();
            let step = parseInt(this.GetCfgsData(Plat.NativeIntr)) * 1000;
            console.log("原生时间限制", time - this._timeNative, step, time - this._timeNative < step);
            if (time - this._timeNative < step) return false;
            this._timeNative = time;
            return true;
        }
        ShowNative(num = null, data = null, call = null, ctrl = null) {
            // console.log("准备显示原生", data.prop, this.ctrl, this.GetCfgsData(Plat.NativeProb));
            // // let native = data.prop ? (this.GetCfgsData(Plat.NativPorta) ? this.GetRate(Plat.NativeProb) : (this._platPortal ? false : this.GetRate(Plat.NativeProb))) : true;
            // let native = true;
            // if (native) {
            //     console.log("权重为原生");
			// 	window.CanShowNative = true ;
            //     // this.HideBanner();
            //     if (!this.TestNative(ctrl)) return;
            //     this.SetNativeRes(false);

            //     return this.ShowNativePlat(num, data, call);
            // } else {
            //     console.log("权重为插屏");
			// 	window.CanShowNative = false ;
            //     this.ShowInters(data.SetInts(PlatData.INSD));
            //     return null;
            // }
        }
        ShowNativePlat(num = null, data = null, call = null) {
            console.log("显示原生3333333");
            // data = data || new PlatData();

            this._callNative = call;
            this._ReNative = null;
            // this._callNative = call;
            if (window.qg) {
                this._info = qg.getSystemInfoSync();
                let sw = this._info.windowWidth;
                let sh = this._info.windowHeight;
                let bw = sw;
                let bh = Laya.stage.height;
                let s = sh / bh;
                this._IDNativeMode.style = {
                    top: Math.round(550),
                    left: 0
                };
                console.log("==============222222", this._IDNativeMode.style);
                console.log("==============3333", this._IDNativeMode.style);
            }

            this._IDNativeMode = new PlatNative(Laya.Handler.create(this, this.ReportNativeRate(PlatNative.AUTO)), data);
            // this._IDNativeMode.onLoad()
            // this._IDNativeMode.onLoad(()=>{this._IDNativeMode.show();})

            return this._IDNativeMode;
        }
        HideNative(report = true, clear = true) {
            console.log("HideNative", report, this._platNative);
            if (this._platNative) {
                this._platNative.Clear();
                this._platNative = null;
                clear && (this._callNative = null);
                report && this.ReportNativeRate(PlatNative.AUTO);
            }
        }
        ReportNativeRate(type) {
            let v;
            switch (type) {
                case PlatNative.NONE:
                    v = false;
                    break;
                case PlatNative.SURE:
                    v = true;
                    break;
                case PlatNative.AUTO:
                    v = this.GetRate(Plat.NativeRate);
                    break;
                case PlatNative.LIES:
                    v = true;
                    break;
            }
            console.log("ReportNativeRate", type, v);
            v && this.ReportNative();
            this.SetNativeRes(v);
            // this._platNative = null;
            // this._callNative && this._callNative.runWith(v);
            // this._callNative = null;
            this._platNative = null;
            this._callNative && this._callNative.runWith(v);
            this._callNative = null;
        }
        ReportNative() {
            console.log("上报原生");
        }

        SetNativeRes(v) {
            this.NativeRes = v;
        }
        ShowInsdNative(call, stop = false) {
            if (this.InsdNative) return;
            this.HideNative();
            if (this.NativeRes || !this.GetCfgsData(Plat.PageNative)) {
                call && call.run();
            } else {
                this.InsdNativeCall = call;
                this.InsdNative = new InsdNative(Laya.Handler.create(this, this.HideInsdNative), stop);
            }
        }
        HideInsdNative() {
            this.InsdNative = null;
            this.InsdNativeCall && this.InsdNativeCall.run();
            this.InsdNativeCall = null;
        }

        LiesVideo(targ, real, lies) {
            this.liesTarg = targ;
            this.liesTarg.first = true;
            this.liesTarg.realCall = real;
            this.liesTarg.liesCall = lies;
            let HitsCall = new Laya.Handler(this, this.LiesVideoCall);
            return [HitsCall, this.LiesVideoCall.bind(this)];
        }
        LiesVideoCall(evt) {
            if (this.liesTarg.first && Plat.Ins.GetRate(Plat.VideosRate)) {
                this.liesTarg.first = false;
                this.liesTarg.liesCall.apply(this.liesTarg, evt);
            } else {
                this.liesTarg.realCall.apply(this.liesTarg, evt);
                this.liesTarg = null;
            }
        }

        AddAdIcon(targ, x = 0, y = 0, a = 1, b = 1, w = 0, h = 0) {
            let icon = new Laya.Sprite();
            icon.loadImage("zxtw/ad/icon.png");
            icon.mouseEnabled = false;
            targ.addChild(icon);
            icon.pos(x, y);
            icon.scale(a, b);
            w && (targ.width = w);
            h && (targ.height = h);
            icon.visible = this.GetCfgsData(Plat.VideosIcon);
        }

        canShare() {
            return false;
        }
        startRecord() {}
        stopRecord() {}
        share(call) {
            call && call.runWith(true);
        }

        AddDeskIcon(node, post = 0, w = 0, h = 0) {
            this.btnDesk = new Laya.Sprite();
            this.btnDesk.loadImage("zxtw/mainui/desk.png");
            this.btnDesk.pos(0, node.y + post);
            w && h && this.btnDesk.size(w, h);
            node.parent.addChild(this.btnDesk);
            this.btnDesk.on(Laya.Event.CLICK, this, this.OnDesk);
            this.HasToDesk(Laya.Handler.create(this, (res) => {
                this.btnDesk.visible = !res;
            }));
        }
        OnDesk() {
            this.AddToDesk(Laya.Handler.create(this, (res) => {
                if (!res) return;
                this.btnDesk.visible = !res;
            }));
        }
        HasToDesk(call) {
            call && call.runWith(false);
        }
        AddToDesk(call) {
            call && call.runWith(true);
        }

        LoadSubPack(name, succ, fail = null, prog = null) {
            console.log(name + "分包加载完成");
            succ && succ.run();
        }

        GetRate(type) {
            return Math.random() * 100 < parseInt(this.GetCfgsData(type));
        }
        GetCfgsData(type) {
            return this._cfgsData[type[0]][type[1]];
        }

        get subp() {
            return false;
        }

        get CDNP() {
            return "";
        }

        get ctrl() {
            return this._ctrlData.status != 1;
        }


        ShowDebug(view) {
            Laya.stage.addChild(new PlatDebug(view))
        }

    }

    Plat.PLAT_TEST = "PLAT_TEST";
    Plat.PLAT_OPPO = "PLAT_OPPO";
    Plat.PLAT_VIVO = "PLAT_VIVO";
    Plat.PLAT_HUAWEI = "PLAT_HUAWEI";
    Plat.PLAT_MEIZU = "PLAT_MEIZU";
    Plat.SOUNDS_ON = 1;
    Plat.SOUNDS_OFF = 2;
    Plat.BANNER_TYPE_READ = 0;
    Plat.BANNER_TYPE_GAME = 1;
    Plat.BANNER_TYPE_ENDS = 2;

    Plat.ClickCheck = ["1001", "查看按钮"]; //是否显示点击查看按钮
    Plat.NativeProb = ["1001", "原生显示概率"]; //插屏原生按概率显示其中一种
    Plat.NativeRate = ["1014", "原生误触"]; //原生误触概率
    Plat.VideosRate = ["1014", "视频误触"]; //视频误触概率
    Plat.NativPorta = ["1014", "互推原生"]; //原生和互推是否可以叠加
    Plat.MiniButton = ["1014", "原生关闭按钮"]; //原生广告关闭按钮点击区减半
    Plat.NativeIntr = ["1009", "原生间隔"]; //原生显示间隔
    Plat.PageInters = ["1009", "界面插屏"]; //界面内是否显示插屏
    Plat.PageNative = ["1009", "界面原生"]; //显示界面原生
    Plat.VideosIcon = ["1014", "视频图标"]; //显示视频广告提示图标

    class PlatVIVO extends Plat {
        constructor() {
            super(Plat.PLAT_VIVO, 106);
        }

        Init() {
            super.Init();

            this._IDBanner = "483c973af95749b6b1a94fee46f3d0cb";
            this._IDVideos = "89fd77b81d104805af7f10486216c205";
            this._IDNative = "d8413b1cb30d41fb8f1da925968541e6";
            this._IDInters = "d6bceaa83d3541ddb942b1ec81a14887";
            this._IDPortal = "86aae46cab7445a49247d7f220e6197b";
            this._IDNativeMode = "d8413b1cb30d41fb8f1da925968541e6"

            this._info = qg.getSystemInfoSync();
            console.log("4444444444444", this._info.safeArea.bottom)
            console.log("444444444444", this._info.screenWidth / 2)
            this._ADBanner = qg.createBannerAd({
                adUnitId: this._IDBanner
            });
            this._ADBanner.onLoad(() => {
                console.log("ADBanner加载成功");
            });
            this._ADBanner.onError((err) => {
                console.log("ADBanner加载失败", err);
            });
            this._ADBanner.onResize((obj) => {
                this.InitBannerRect(obj.width, obj.height, this._info.windowWidth, this._info.windowHeight);
                this._ADBanner.style = {
                    top: this._banR.y,
                    left: this._banR.x,
                    width: this._banR.width,
                    height: this._banR.height
                };
            });

            this._ADVideos = qg.createRewardedVideoAd({
                adUnitId: this._IDVideos
            });
            this._ADVideos.onError((err) => {
                qg.showToast({
                    message: '暂无视频,请稍后再试"'
                })
                this.VideoError(err);
            });
            this._ADVideos.onLoad(() => {
                console.log("激励视频加载成功");
            });
            this._ADVideos.onClose((res) => {
                this.VideoClose(res && res.isEnded);
            });

            this._ADNative = qg.createNativeAd({
                posId: this._IDNative
            });
            this._ADNative.onLoad((res) => {
                console.log("原生广告加载完成");
                this.OnNativeLoad(res);
            });
            this._ADNative.onError((err) => {
                console.log("原生广告加载异常");
                this.OnNativeErrs(err);
            });


            let sw = this._info.windowWidth;
            let sh = this._info.windowHeight;
            let bw = sw;
            let bh = Laya.stage.height;
            let s = sh / bh;
            let tops;
            // this._IDNativeMode = qg.createCustomAd({adUnitId:this._IDNativeMode,style:(76,1359,602,1350)});
            if(qg.createCustomAd){
                this._IDNativeMode = qg.createCustomAd({
                    adUnitId: this._IDNativeMode,
                    style: {
                        top: 400,
                        left: 0
                    }

                });
            }

            // this._IDNativeMode = qg.createCustomAd({adUnitId:this._IDNativeMode, style:{top:this._info.safeArea.bottom-57, left:95, height:37, width:360,bottom:-20}});
            console.log(66666666, this._info.windowHeight)
            console.log(5555555555555555, this._IDNativeMode);
            this._IDNativeMode.onError((err) => {
                console.log("原生模板广告加载失败", err);
            })
            this._IDNativeMode.onLoad(() => {
                console.log("原生模板广告加载成功");

            })
            this._IDNativeMode.onClose((res) => {
                console.log("关闭原生模板广告");
            })
            // var boxPortalAd = null
            // if (qg.createBoxPortalAd) {
            //     boxPortalAd = qg.createBoxPortalAd({
            //         posId: this._IDPortal,
            //         image: './zxtw/Icon.jpg',
            //         marginTop: 300,
            //     })
            //     boxPortalAd.onLoad(function() {
            //         console.log('互推盒子九宫格广告加载成功')
            //         boxPortalAd.show()
            //     })
            //     boxPortalAd.onError(function (err) {
            //         console.log("盒子九宫格广告加载失败", err)
            //     })
            //     boxPortalAd.onClose(function () {
            //         console.log('互推盒子九宫格广告关闭');
            //         // if (this._platNinePortal.isDestroyed) {
            //         //     return
            //         // }
            //         // 当九宫格关闭之后，再次展示Icon
            //         boxPortalAd.show().then(function() {
            //             console.log('show success')
            //         })
            //     })
            //     // 广告数据加载成功后展示
            //     boxPortalAd.show().then(function () {
            //         console.log('show success')
            //     })
            // } else console.log('暂不支持互推盒子相关 API')

        }
        HideNativeMode() {
            super.HideNativeMode();
            this._IDNativeMode.hide();
        }



        ShowVideos(call) {
            super.ShowVideos(call);
            this._ADVideos.load().then(() => {
                this._ADVideos.show();
            });
        }
        ShowBanner(type = Plat.BANNER_TYPE_GAME) {
            super.ShowBanner(type);
            this._ADBanner.show();
        }
        HideBanner() {
            this._ADBanner.hide();
        }

        ShowPortal() {
            if (qg.createBoxBannerAd) {
                this._platPortal = qg.createBoxBannerAd({
                    posId: this._IDPortal
                });
                this._platPortal.onError((err) => {
                    console.log("盒子横幅广告加载失败", err)
                });
                this._platPortal.show().then(function () {
                    console.log('盒子横幅广告加载成功')
                })
            } else console.log('暂不支持互推盒子相关 API')
        }
        HidePortal() {
            this._platPortal && (this._platPortal.destroy(), this._portal = null);
        }
        ShowNinePortal(data) {
            var boxPortalAd = null
            if (qg.createBoxPortalAd) {
                boxPortalAd = qg.createBoxPortalAd({
                    posId: this._IDPortal,
                    image: './zxtw/Icon.jpg',
                    marginTop: 300,
                })
                boxPortalAd.onLoad(function() {
                    console.log('互推盒子九宫格广告加载成功')
                    boxPortalAd.show()
                })
                boxPortalAd.onError(function (err) {
                    console.log("盒子九宫格广告加载失败", err)
                })
                boxPortalAd.onClose(function () {
                    console.log('互推盒子九宫格广告关闭');
                    // if (this._platNinePortal.isDestroyed) {
                    //     return
                    // }
                    // 当九宫格关闭之后，再次展示Icon
                    boxPortalAd.show().then(function() {
                        console.log('show success')
                    })
                })
                // 广告数据加载成功后展示
                boxPortalAd.show().then(function () {
                    console.log('show success')
                })
            } else console.log('暂不支持互推盒子相关 API')
        }
        HideNinePortal() {
            this._platNinePortal && (this._platNinePortal.destroy(), this._portal = null);
        }

        ShowIntersPlat() {
            this._ADInters = qg.createInterstitialAd({
                adUnitId: this._IDInters
            });
            this._ADInters.onLoad(() => {
                console.log("插屏广告加载完成");
            });
            this._ADInters.onError((err) => {
                console.log("插屏广告加载失败", err);
            });
            this._ADInters.show();;
        }

        ShowNativePlat(num = null, data = null, call = null) {
            console.log("显示模板原生33333333");

            // this._IDNativeMode.onLoad(() => {
            //     this._IDNativeMode.show();
            // })
            this._info = qg.getSystemInfoSync();
            let sw = this._info.windowWidth;
            let sh = this._info.windowHeight;
            let bw = sw;
            let bh = Laya.stage.height;
            let s = sh / bh;
            this._IDNativeMode.style = {
                top: Math.round(num * s),
                left: 0
            };
            console.log("显示模板原生333333333=====", this._IDNativeMode.style);
            this._IDNativeMode.show().then(() => {
                console.log("原生模板广告展示成功")
                console.log("原生模板广告展示成功33333333", this._IDNativeMode.style);
            })
            console.log("原生模板广告展示成功3344444", this._IDNativeMode.style);
            return this._IDNativeMode;
        }
        OnNativeLoad(res) {
            if (!this._platNative) return;
            if (res && res.adList) {
                this._ReNative = res.adList.pop();
                this._ReNative.imgUrlList.length <= 0 && this._ReNative.imgUrlList.push(this._ReNative.icon);
                this._ADNative.reportAdShow({
                    adId: this._ReNative.adId.toString()
                });
                this._platNative.SetData(this._ReNative.imgUrlList[0]);
            }
        }
        ReportNative() {
            this._ADNative && this._ReNative && this._ADNative.reportAdClick({
                adId: this._ReNative.adId.toString()
            });
        }

        AddToDesk(call) {
            qg.installShortcut({
                success: (res) => {
                    call && call.runWith(res);
                },
                fail: () => {
                    call && call.runWith(true);
                }
            });
        }
        HasToDesk(call) {
            qg.hasShortcutInstalled({
                success: (res) => {
                    call && call.runWith(res);
                },
                fail: () => {
                    call && call.runWith(true);
                }
            });
        }

        LoadSubPack(name, succ, fail = null, prog = null) {
            let task = qg.loadSubpackage({
                name: name,
                success: (res) => {
                    succ && succ.runWith(res);
                },
                fail: (res) => {
                    fail && fail.runWith(res);
                }
            });
            task.onProgressUpdate(res => {
                prog && prog.runWith(res);
            });
        }
        get subp() {
            return true;
        }
    }

    class PlatHUAWEI extends Plat {
        constructor() {
            super(Plat.PLAT_HUAWEI, 106);
        }

        Init() {
            super.Init();

            this._ageKeys = "age_stat" + this._game;
            this._ageName = "隐私协议";
            this._ageDesc = "欢迎使用北京掌信创游科技有限公司为您提供的游戏产品《绝地冒险》，本游戏需要读取手机状态信息(用于获取IMEI码保证奖励正常发放)等权限。上述权限均不会默认开启，只有经过您的同意才会在为实现功能或服务时使用。"
            this._IDIsTest = true;
            this._IDBanner = this._IDIsTest ? "testw6vs28auh3" : "";
            this._IDVideos = this._IDIsTest ? "testx9dtjwj8hp" : "";
            this._IDNative = this._IDIsTest ? "testu7m3hc4gvm" : "";
            this._IDInters = this._IDIsTest ? "testb4znbuh3n2" : "";
            this._firstIns = true;

            this._info = qg.getSystemInfoSync();
            this._ADBanner = qg.createBannerAd({
                adUnitId: this._IDBanner,
                adIntervals: 60,
                style: {
                    top: this._info.safeArea.bottom - 57,
                    left: 0,
                    height: 57,
                    width: 360
                }
            });
            this._ADBanner.onLoad(() => {
                console.log("ADBanner加载成功");
            });
            this._ADBanner.onError((err) => {
                console.log("ADBanner加载失败", err);
            });

            this._ADVideos = qg.createRewardedVideoAd({
                adUnitId: this._IDVideos,
                success: (code) => {
                    console.log("视频创建_成功", code);
                },
                fail: (data, code) => {
                    console.log("视频创建_失败", JSON.stringify(data), code);
                }
            });
            this._ADVideos.onError((err) => {
                this.VideoError(err);
            });
            this._ADVideos.onLoad(() => {
                console.log("激励视频加载成功");
                this._ADVideos.show();
            });
            this._ADVideos.onClose((res) => {
                this.VideoClose(res && res.isEnded);
            });

            this._ADNative = qg.createNativeAd({
                adUnitId: this._IDNative,
                success: () => {
                    console.log("原生创建_成功");
                },
                fail: () => {
                    console.log("原生创建_失败");
                }
            });
            this._ADNative.onLoad((res) => {
                console.log("原生广告加载完成");
                this.OnNativeLoad(res);
            });
            this._ADNative.onError((err) => {
                console.log("原生广告加载异常");
                this.OnNativeErrs(err);
            });
        }

        ShowSetAge(call) {
            if (!this._firstIns) return;
            this._firstIns = false;
            Laya.MouseManager.enabled = false;
            let ages = Laya.LocalStorage.getItem(this._ageKeys) || 0;
            console.log("隐私协议状态" + ages);
            if (ages != "1") {
                qg.showModal({
                    title: this._ageName,
                    content: this._ageDesc,
                    cancelText: "拒绝",
                    confirmText: "同意",
                    success(res) {
                        console.log("隐私协议返回" + JSON.stringify(res));
                        if (res) {
                            console.log('隐私协议_确定');
                            Laya.LocalStorage.setItem(this._ageKeys, "1");
                            qg.setUnderAgeOfPromise(false);
                            qg.setConsentStatus(0);
                        } else {
                            console.log('隐私协议_取消');
                            Laya.LocalStorage.setItem(this._ageKeys, "2");
                        }
                        Laya.MouseManager.enabled = true;
                        call && call.run();
                    }
                })
            } else(Laya.MouseManager.enabled = true, call && call.run())
        }

        ShowVideos(call) {
            super.ShowVideos(call);
            this._ADVideos.load()
        }

        ShowBanner(type) {
            super.ShowBanner(type);
            this._ADBanner.show();
        }
        HideBanner() {
            this._ADBanner.hide();
        }

        ShowInters() {
            this._ADInters = qg.createInterstitialAd({
                adUnitId: this._IDInters
            });
            this._ADInters.onLoad(() => {
                console.log("插屏广告加载完成");
                this._ADInters.show();
            });
            this._ADInters.onError((err) => {
                console.log("插屏广告加载失败", err);
            });
            this._ADInters.onClose(() => {
                console.log("插屏广告用户关闭");
                this._ADInters.destroy();
            });
            this._ADInters.load();
            super.ShowInters();
            super.ShowInters();
        }

        ShowNativePlat(rect = null, call = null) {
            console.log("显示原生");
            this._ReNative = null;
            this._callNative = call;
            this._shelNative = new PlatNative(Laya.Handler.create(this, this.ReportNativeRate), rect, this.ctrl);
            this._ADNative.load();
            return this._shelNative;
        }
        OnNativeLoad(res) {
            if (!this._shelNative) return;
            if (res && res.adList) {
                this._ReNative = res.adList.pop();
                this._ReNative.imgUrlList.length <= 0 && this._ReNative.imgUrlList.push(this._ReNative.icon);
                this._ADNative.reportAdShow({
                    adId: this._ReNative.adId.toString()
                });
                this._shelNative.SetData(this._ReNative.imgUrlList[0], this._ReNative.title, this._ReNative.source);
            }
        }
        ReportNative() {
            this._ADNative && this._ReNative && this._ADNative.reportAdClick({
                adId: this._ReNative.adId.toString()
            });
        }

        AddToDesk(call) {
            qg.installShortcut({
                success: (res) => {
                    call && call.runWith(res);
                },
                fail: () => {
                    call && call.runWith(true);
                }
            });
        }
        HasToDesk(call) {
            qg.hasShortcutInstalled({
                success: (res) => {
                    call && call.runWith(res);
                },
                fail: () => {
                    call && call.runWith(true);
                }
            });
        }

        LoadSubPack(name, succ, fail = null, prog = null) {
            let task = qg.loadSubpackage({
                name: name,
                success: (res) => {
                    succ && succ.runWith(res);
                },
                fail: (res) => {
                    fail && fail.runWith(res);
                }
            });
            task.onProgressUpdate(res => {
                prog && prog.runWith(res);
            });
        }
        get subp() {
            return true;
        }
    }

    class PlatMEIZU extends Plat {
        constructor() {
            super(Plat.PLAT_MEIZU, 1119);
        }
        Init() {
            super.Init();

            this._IDBanner = "tqcNncNu";
            this._IDVideos = "szPKBaIC";
            this._IDNative = "KSOC9qS6";
            this._IDInters = "zPeIB2JC";

            this._info = qg.getSystemInfoSync();
            this._ADBanner = qg.createBannerAd({
                adUnitId: this._IDBanner
            });
            this._ADBanner.onLoad(() => {
                console.log("ADBanner加载成功");
            });
            this._ADBanner.onError((err) => {
                console.log("ADBanner加载失败", err);
            });
            this._ADBanner.onResize((obj) => {
                this.InitBannerRect(obj.width, obj.height, this._info.windowWidth, this._info.windowHeight);
                this._ADBanner.style = {
                    top: this._banR.y,
                    left: this._banR.x,
                    width: this._banR.width,
                    height: this._banR.height
                };
            });

            this._ADVideos = qg.createRewardedVideoAd({
                adUnitId: this._IDVideos
            });
            this._ADVideos.onError((err) => {
                this.VideoError(err);
            });
            this._ADVideos.onLoad(() => {
                console.log("激励视频加载成功");
                this._ADVideos.show();
            });
            this._ADVideos.onClose(() => {
                this.VideoClose(true);
            });

            this._ADNative = qg.createNativeAd({
                adUnitId: this._IDNative
            });
            this._ADNative.onLoad((res) => {
                console.log("原生广告加载完成");
                this.OnNativeLoad(res);
            });
            this._ADNative.onError((err) => {
                console.log("原生广告加载异常");
                this.OnNativeErrs(err);
            });

            this._ADInters = qg.createInsertAd({
                adUnitId: this._IDInters
            });
            this._ADInters.onError((err) => {
                console.log("插屏广告加载失败", err);
            });
            this._ADInters.onLoad(() => {
                console.log("插屏广告加载成功");
                this._ADInters.show();
            });
        }
        ShowVideos(call) {
            super.ShowVideos(call);
            this._ADVideos.load();
        }
        ShowBanner(type) {
            super.ShowBanner(type);
            this._ADBanner.show();
        }
        HideBanner() {
            this._ADBanner.hide();
        }

        ShowIntersPlat() {
            this._ADInters.load();
        }

        ShowNativePlat(rect = null, call = null) {
            console.log("显示原生");
            this._ReNative = null;
            this._callNative = call;
            this._platNative = new PlatNative(Laya.Handler.create(this, this.ReportNativeRate), rect);
            this._ADNative.load();
            return this._platNative;
        }
        OnNativeLoad(res) {
            if (!this._platNative) return;
            if (res && res.adList) {
                this._ReNative = res.adList.pop();
                this._ReNative.imgUrlList.length <= 0 && this._ReNative.imgUrlList.push(this._ReNative.icon);
                this._ADNative.reportAdShow({
                    adId: this._ReNative.adId.toString()
                });
                this._platNative.SetData(this._ReNative.imgUrlList[0]);
            }
        }
        ReportNative() {
            this._ADNative && this._ReNative && this._ADNative.reportAdClick({
                adId: this._ReNative.adId.toString()
            });
        }

        AddToDesk(call) {
            qg.installShortcut({
                success: () => {
                    call && call.run();
                }
            });
        }
        HasToDesk(call) {
            qg.hasShortcutInstalled({
                success: (res) => {
                    call && call.runWith(res);
                },
                fail: (res) => {
                    call && call.runWith(true);
                }
            });
        }
    }

    class PlatTool {
        static Init(call = null) {
            this.InitPlat().RegCall(call);
        }
        static InitPlat() {
            if (Laya.Browser.onQGMiniGame) return new PlatOPPO();
            if (window["mz"]) return new PlatMEIZU();
            if (Laya.Browser.onVVMiniGame)
                return new PlatVIVO();
            if (Laya.Browser.onHWMiniGame) return new PlatHUAWEI();
            return new Plat();
        }
    }

    class PlatHeal extends Laya.Box
    {
        static Show (call=null)
        {
            PlatHeal.Ins = PlatHeal.Ins || new PlatHeal();
            Laya.stage.addChild(PlatHeal.Ins);
            Laya.timer.once(5000, this, ()=>{
                PlatHeal.Ins.parent&&PlatHeal.Ins.parent.removeChild(PlatHeal.Ins)
                call&&call.run()
            });
        }

        constructor ()
        {
            super();
            this.size(Laya.stage.width, Laya.stage.height);
            this._txtInfo = new Laya.Text();
            this._txtInfo.width = Laya.stage.width;
            this._txtInfo.height = Laya.stage.height;
            this._txtInfo.valign = "middle";
            this._txtInfo.align = "center";
            this._txtInfo.fontSize = 40;
            this._txtInfo.font = "SimHei";
            this._txtInfo.color = "#ffffff";
            this._txtInfo.text = "健康游戏忠告\n抵制不良游戏，拒绝盗版游戏。" +
                "\n注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。" +
                "\n合理安排时间，享受健康生活。";
            this.addChild(this._txtInfo);
            this._imgAges = new Laya.Image();
            this._imgAges.skin = "zxtw/priv/age.png";
            this._imgAges.x = this._imgAges.y = 50;
            this.addChild(this._imgAges);
        }
        onDestroy ()
        {
            PlatHeal.Ins = null;
        }
    }

    window.PlatData = PlatData;
    window.Plat = Plat;
    window.PlatTool = PlatTool;
    window.PlatVIVO = PlatVIVO;
    window.PlatHUAWEI = PlatHUAWEI;
    window.PlatMEIZU = PlatMEIZU;
    window.PlatPriv = PlatPriv;
    window.PlatHeal = PlatHeal;

}());