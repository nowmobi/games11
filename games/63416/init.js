window.SdkUtil = {
  BannerID: "cbf8d2ca0b544f98baf9601358ca8aed",
  VideoID: "a91ca726a6534d22bee856bef9193837",
  YuanShengMoBanID: [
    "81751895629344428991256388acdbaa",
    "7bc822f5450b4295b6e17476621f2d7b",
    "7bc822f5450b4295b6e17476621f2d7b",
  ],
  HengFuID: "0bceb288a1234e9690bd4ded7eb5c100",
  JiuGongID: "5c776ba5c23243aa890ad612d89ec458",
  YuanShengBannerId: [
    "d42bd3420f0041c69f48a08755dc78d0",
    "8dde15256abe4637a162584d06785ada",
    "8dde15256abe4637a162584d06785ada",
  ],
  sc: 100,
  isShowYuanShengChaPing: !1,
  isShowBanner: !0,
  ADInit: function () {
    SdkUtil.ShowYinSi = Laya.LocalStorage.getItem("ShowYinSi");
  },
  GetConfig: function (e) {
    return 0;
  },
  LoadSubpackage: function (e) {
    null != e && e();
  },
  ReportMonitor: function (e) { },
  ChangeGamePanel: function (e) {
    return e;
  },
  UpdateGamePanel: function (e) {
    -1 != e.url.indexOf("GameRun") &&
      ((SdkUtil.isShowBanner = !0),
        SdkUtil.CloseBanner1(),
        (SdkUtil.isShowYuanShengChaPing = !0),
        SdkUtil.HideHengFu(),
        SdkUtil.ShowJiuGong(),
        SdkUtil.ShowYinSiShowBtn(),
        1 != SdkUtil.ShowYinSi && SdkUtil.ShowYinSiPanel(!0),
        SdkUtil.ShowCustomAdBanner(SdkUtil.RandomInt(0, 2)),
        SdkUtil.ShowAddIcon()),
      -1 != e.url.indexOf("Push") &&
      (SdkUtil.CloseBanner1(),
        SdkUtil.ShowCustomAdBanner(SdkUtil.RandomInt(0, 2)),
        SdkUtil.HideAddIcon()),
      -1 != e.url.indexOf("Box") &&
      (SdkUtil.HideJiuGong(),
        SdkUtil.HideHengFu(),
        SdkUtil.CloseBanner1(),
        SdkUtil.RandomInt(0, 100) < 60
          ? ((SdkUtil.isShowYuanShengChaPing = !1),
            SdkUtil.ShowCustomAdChaPing(SdkUtil.RandomInt(0, 2)))
          : (SdkUtil.ShowCustomAdBanner(SdkUtil.RandomInt(0, 2)),
            (SdkUtil.isShowYuanShengChaPing = !0)),
        SdkUtil.HideAddIcon()),
      (-1 == e.url.indexOf("Win") && -1 == e.url.indexOf("Fail")) ||
      (SdkUtil.HideJiuGong(),
        SdkUtil.HideCustomAdChaPing(),
        SdkUtil.CloseBanner1(),
        SdkUtil.ShowHengFu(),
        (1 == SdkUtil.isShowYuanShengChaPing ||
          SdkUtil.RandomInt(0, 100) < 60) &&
        SdkUtil.ShowCustomAdChaPing(SdkUtil.RandomInt(0, 2)),
        SdkUtil.ShowAddIcon());
  },
  CloseGamePanel: function (e) {
    e &&
      (-1 != e.indexOf("Push") &&
        (SdkUtil.CloseBanner1(), SdkUtil.ShowBanner1()),
        (-1 == e.indexOf("Win") && -1 == e.indexOf("Fail")) ||
        (SdkUtil.CloseBanner1(),
          SdkUtil.HideHengFu(),
          SdkUtil.HideCustomAdChaPing()));
  },
  ShowYinSiShowBtn: function () {
    //   null == SdkUtil.yinSiShowUI &&
    //     ((SdkUtil.yinSiShowUI = Laya.stage.addChild(new M())),
    //     (SdkUtil.yinSiShowUI.zOrder = 9999),
    //     (SdkUtil.yinSiShowUI.left = 20),
    //     (SdkUtil.yinSiShowUI.top = 80),
    //     SdkUtil.yinSiShowUI.yinSiShowBtn.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiShowUI,
    //       function () {
    Laya.LocalStorage.setItem("ShowYinSi", 1);
    // SdkUtil.ShowYinSiPanel(!1);
    //   },
    // ));
  },
  ShowYinSiPanel: function (e) {
    //   (SdkUtil.yinSiUI = Laya.stage.addChild(new T())),
    //     (SdkUtil.yinSiUI.zOrder = 9999),
    //     (SdkUtil.yinSiUI.centerX = 0),
    //     (SdkUtil.yinSiUI.centerY = 0),
    //     (SdkUtil.yinSiUI.txt.text =
    //       "欢迎您选择由石家庄七特美科技有限公司（以下简称“公司”或“我们”）提供的游戏 。\n 本公司尊重并保护所有使用服务用户的个人隐私权。 为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。\n一.适用范围 ：\n1.在您使用本软件服务时，我们需要收集您所使用的设备信息，包括：唯一设备识别符（IMEI）、MAC地址、广告标识符、Serial、设备机型、设备名称、操作系统及版本、设备分辨率、设备设置、软件安装列表、软硬件特征信息、设备屏幕尺寸、移动网络信息、登录IP地址、日志信息、CPU信息、软件信息。用于了解产品适配性，维护基础功能的正常运行，实现本游戏的问题排查。为了收集上述基本的个人设备信息，我们将会申请访问您的设备信息权限，我们收集这些信息是为了向您提供本游戏的核心游戏功能。 \n2.在您使用本软件服务时，我们将需要获取您的存储权限，用于使应用程序在运行时对游戏资源进行必要的缓存和读取。存储权限的开启是为了向您提供本游戏核心功能。 \n3.当您使用客服功能时，第三方客服SDK将会启动并可能收集您的设备信息，征求您的麦克风权限、相机权限、相册权限、或照片权限授权。为了您的系统安全，优化服务质量，我们可能从第三方客服SDK接触并间接收集您的个人信息，包括您的设备信息和您与客服的沟通内容。\n二.信息的使用：\n1.本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。\n2.本应用亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本应用平台用户如从事上述活动，一经发现，本应用有权立即终止与该用户的服务协议。\n三.信息披露 ：\n1.本软件不会将您的信息披露给不受信任的第三方。\n2.根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露。\n3.如您出现违反中国有关法律、法规或者相关规则的情况，需要向第三方披露。\n四.本隐私政策的更改:\n1.如果决定更改隐私政策，我们会在本政策中以及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。\n2.本公司保留随时修改本政策的权利，因此请经常查看。\n如果您对本协议有任何疑问，意见或建议，欢迎通过以下联系方式与我们沟通：\n电子邮件：2242466093@qq.com。\n更新日期：2023年8月16日。\n生效日期：2023年8月16日。"),
    //     (SdkUtil.yinSiUI.txt.overflow = Laya.Text.SCROLL),
    //     SdkUtil.yinSiUI.txt.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiUI,
    //       SdkUtil.startScrollText,
    //     ),
    //     1 == e
    //       ? ((SdkUtil.yinSiUI.tongYi.visible = !0),
    //         (SdkUtil.yinSiUI.buTongYi.visible = !0),
    //         (SdkUtil.yinSiUI.guanBi.visible = !1))
    //       : ((SdkUtil.yinSiUI.tongYi.visible = !1),
    //         (SdkUtil.yinSiUI.buTongYi.visible = !1),
    //         (SdkUtil.yinSiUI.guanBi.visible = !0)),
    //     SdkUtil.yinSiUI.bg.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiUI,
    //       function () {},
    //     ),
    //     SdkUtil.yinSiUI.tongYi.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiUI,
    //       function () {
    //         (SdkUtil.ShowYinSi = 1),
    //           Laya.LocalStorage.setItem("ShowYinSi", 1),
    //           SdkUtil.yinSiUI.destroy();
    //       },
    //     ),
    //     SdkUtil.yinSiUI.buTongYi.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiUI,
    //       function () {
    //         qg.exitApplication();
    //       },
    //     ),
    //     SdkUtil.yinSiUI.guanBi.on(
    //       Laya.Event.MOUSE_DOWN,
    //       SdkUtil.yinSiUI,
    //       function () {
    //         SdkUtil.yinSiUI.destroy();
    //       },
    //     );
  },
  startScrollText: function (e) {
    (SdkUtil.prevX = SdkUtil.yinSiUI.txt.mouseX),
      (SdkUtil.prevY = SdkUtil.yinSiUI.txt.mouseY),
      Laya.stage.on(
        Laya.Event.MOUSE_MOVE,
        SdkUtil.yinSiUI,
        SdkUtil.scrollText,
      ),
      Laya.stage.on(
        Laya.Event.MOUSE_UP,
        SdkUtil.yinSiUI,
        SdkUtil.finishScrollText,
      );
  },
  finishScrollText: function (e) {
    Laya.stage.off(
      Laya.Event.MOUSE_MOVE,
      SdkUtil.yinSiUI,
      SdkUtil.scrollText,
    ),
      Laya.stage.off(
        Laya.Event.MOUSE_UP,
        SdkUtil.yinSiUI,
        SdkUtil.finishScrollText,
      );
  },
  scrollText: function (e) {
    var t = SdkUtil.yinSiUI.txt.mouseX,
      n = SdkUtil.yinSiUI.txt.mouseY;
    (SdkUtil.yinSiUI.txt.scrollX += SdkUtil.prevX - t),
      (SdkUtil.yinSiUI.txt.scrollY += SdkUtil.prevY - n),
      (SdkUtil.prevX = t),
      (SdkUtil.prevY = n);
  },
  IsShowShareBtn: function () {
    return !1;
  },
  luzhiKaishi: function (e) {
    console.log("luzhiKaishi------"), null != e && (e(0), (e = null));
  },
  luzhijieshu: function (e) {
    console.log("luzhijieshu------"), null != e && (e(0), (e = null));
  },
  fenxiangVideo: function (e) {
    console.log("fenxiangVideo------"), null != e && (e(1), (e = null));
  },
  ShowChaPing: function () {
    console.log("ShowChaPing------");
  },
  ShowBanner: function () { },
  ShowBanner1: function () {
    //   1 == SdkUtil.isShowBanner &&
    //     ((SdkUtil.bannerAd = qg.createBannerAd({
    //       posId: SdkUtil.BannerID,
    //     })),
    //     SdkUtil.bannerAd.onError(function (e) {
    //       console.log("banner广告加载失败", e);
    //     }),
    //     SdkUtil.bannerAd.onClose(function () {
    //       SdkUtil.isShowBanner = !1;
    //     }),
    //     SdkUtil.bannerAd
    //       .show()
    //       .then(function () {
    //         console.log("banner广告展示完成");
    //       })
    //       .catch(function (e) {
    //         console.log("banner广告展示失败", g()(e));
    //       }));
  },
  CloseBanner: function () { },
  CloseBanner1: function () {
    null != SdkUtil.bannerAd &&
      (SdkUtil.bannerAd.destroy(), (SdkUtil.bannerAd = null)),
      null != SdkUtil.customAdBanner &&
      (SdkUtil.customAdBanner.destroy(),
        (SdkUtil.customAdBanner = null));
  },
  ShowVideo: function (e) {
    if (YYGGames.rewardReady) {
      YYGGames.showReward((isEnded) => {
        if (isEnded) {
          e && e(1);
        }
        else {
          YYGGames.showToast("Please watch the ad completely, so that you can claim your reward.")
        }
      })
    }
    else {
      YYGGames.showToast('No Available Video');
    }
    //   if (qg.createRewardedVideoAd) {
    //     var t = qg.createRewardedVideoAd({ posId: SdkUtil.VideoID });
    //     t.onError(function (e) {
    //       console.log("激励视频广告加载失败", e),
    //         qg.showToast({ message: "激励视频加载失败，请稍后重试" });
    //     }),
    //       t.onLoad(function (e) {
    //         console.log("激励视频广告加载完成-onload触发", g()(e)),
    //           t
    //             .show()
    //             .then(function () {
    //               console.log("激励视频广告展示完成");
    //             })
    //             .catch(function (e) {
    //               console.log("激励视频广告展示失败", g()(e)),
    //                 qg.showToast({
    //                   message: "激励视频加载失败，请稍后重试",
    //                 });
    //             });
    //       });
    //     t.onClose(function (t) {
    //       console.log("视频广告关闭回调"),
    //         t && t.isEnded
    //           ? (console.log("正常播放结束，可以下发游戏奖励"),
    //             null != e && (e(1), (e = null)))
    //           : (console.log("播放中途退出，不下发游戏奖励"),
    //             qg.showToast({ message: "播放中途退出，不下发游戏奖励" }));
    //     }),
    //       t.load();
    //   }
  },
  ShowCustomAdBanner: function (e) {
    //   SdkUtil.customAdBanner && (SdkUtil.customAdBanner = null),
    //     qg.createCustomAd &&
    //       ((SdkUtil.customAdBanner = qg.createCustomAd({
    //         posId: SdkUtil.YuanShengBannerId[e],
    //       })),
    //       SdkUtil.customAdBanner.onError(function (e) {
    //         console.log("原生模板Banner广告加载失败", e);
    //       }),
    //       SdkUtil.customAdBanner
    //         .show()
    //         .then(function () {
    //           console.log("原生模板Banner广告展示完成");
    //         })
    //         .catch(function (e) {
    //           console.log("原生模板Banner广告展示失败", g()(e));
    //         }));
  },
  ShowCustomAdChaPing: function (e) {
    //   SdkUtil.customAd && (SdkUtil.customAd = null),
    //     null != SdkUtil.heiDi &&
    //       (SdkUtil.heiDi.destroy(), (SdkUtil.heiDi = null)),
    //     qg.createCustomAd &&
    //       ((SdkUtil.customAd = qg.createCustomAd({
    //         posId: SdkUtil.YuanShengMoBanID[e],
    //         style: { top: Laya.stage.height / 2 },
    //       })),
    //       SdkUtil.customAd.onError(function (e) {
    //         console.log("原生模板广告加载失败", e);
    //       }),
    //       SdkUtil.customAd.onClose(function () {
    //         null != SdkUtil.heiDi &&
    //           (SdkUtil.heiDi.destroy(), (SdkUtil.heiDi = null)),
    //           console.log("原生模板广告关闭");
    //       }),
    //       SdkUtil.customAd
    //         .show()
    //         .then(function () {
    //           (SdkUtil.heiDi = Laya.stage.addChild(new D())),
    //             (SdkUtil.heiDi.zOrder = 99999),
    //             (SdkUtil.heiDi.x = 0),
    //             (SdkUtil.heiDi.y = 0),
    //             SdkUtil.heiDi.btn.on(
    //               Laya.Event.MOUSE_DOWN,
    //               SdkUtil.heiDi,
    //               function () {},
    //             ),
    //             console.log("原生模板广告展示完成");
    //         })
    //         .catch(function (e) {
    //           console.log("原生模板广告展示失败", g()(e));
    //         }));
  },
  HideCustomAdChaPing: function () {
    //   null != SdkUtil.heiDi &&
    //     (SdkUtil.heiDi.destroy(), (SdkUtil.heiDi = null)),
    //     null != SdkUtil.customAd &&
    //       (SdkUtil.customAd.destroy(), (SdkUtil.customAd = null));
  },
  ShowAddIcon: function () {
    //   var e = !1;
    //   qg.hasShortcutInstalled({
    //     success: function (t) {
    //       if (t)
    //         return (
    //           console.log("已创建"),
    //           (e = !0),
    //           void (
    //             null != SdkUtil.addIcon && (SdkUtil.addIcon.visible = !1)
    //           )
    //         );
    //       console.log("未创建");
    //     },
    //   }),
    //     1 != e &&
    //       (null == SdkUtil.addIcon
    //         ? ((SdkUtil.addIcon = Laya.stage.addChild(new v())),
    //           (SdkUtil.addIcon.zOrder = 9999),
    //           (SdkUtil.addIcon.right = 40),
    //           (SdkUtil.addIcon.centerY = -450),
    //           SdkUtil.addIcon.btn.on(
    //             Laya.Event.MOUSE_DOWN,
    //             SdkUtil.addIcon,
    //             function () {
    //               qg.installShortcut({
    //                 message: "创建成功可快速启动",
    //                 success: function () {
    //                   console.log("创建成功");
    //                 },
    //               }),
    //                 (SdkUtil.addIcon.visible = !1);
    //             },
    //           ))
    //         : (SdkUtil.addIcon.visible = !0));
  },
  HideAddIcon: function () {
    //   null == SdkUtil.addIcon || (SdkUtil.addIcon.visible = !1);
  },
  ShowJiuGong: function () {
    //   qg.createBoxPortalAd
    //     ? ((SdkUtil.boxPortalAd = qg.createBoxPortalAd({
    //         posId: SdkUtil.JiuGongID,
    //         marginTop: 1500,
    //       })),
    //       SdkUtil.boxPortalAd.onError(function (e) {
    //         console.log("盒子九宫格广告加载失败", e);
    //       }),
    //       SdkUtil.boxPortalAd.onClose(function () {
    //         console.log("close"),
    //           SdkUtil.boxPortalAd.isDestroyed || SdkUtil.boxPortalAd.show();
    //       }),
    //       SdkUtil.boxPortalAd.show().then(function () {
    //         console.log("show success");
    //       }))
    //     : console.log("暂不支持互推盒子相关 API");
  },
  HideJiuGong: function () {
    null != SdkUtil.boxPortalAd &&
      ((SdkUtil.boxPortalAd.isDestroyed = !0),
        SdkUtil.boxPortalAd.destroy(),
        (SdkUtil.boxPortalAd = null));
  },
  ShowHengFu: function () {
    //   qg.createBoxBannerAd
    //     ? ((SdkUtil.boxBannerAd = qg.createBoxBannerAd({
    //         posId: SdkUtil.HengFuID,
    //       })),
    //       SdkUtil.boxBannerAd.onError(function (e) {
    //         console.log("盒子横幅广告加载失败", e);
    //       }),
    //       SdkUtil.boxBannerAd.show().then(function () {
    //         console.log("show success");
    //       }))
    //     : console.log("暂不支持互推盒子相关 API");
  },
  HideHengFu: function () {
    //   null != SdkUtil.boxBannerAd &&
    //     (SdkUtil.boxBannerAd.destroy(), (SdkUtil.boxBannerAd = null));
  },
  RandomInt: function (e, t) {
    return Math.floor(Math.random() * (t - e) + e);
  },
  TDInit: function () { },
  TDGuanQia: function (e, t) { },
  TDEvent: function (e, t) { },
}