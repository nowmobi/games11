(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"library/images/storage_atlas_.png", id:"storage_atlas_"},
		{src:"library/images/storage_atlas_2.png", id:"storage_atlas_2"},
		{src:"library/images/storage_atlas_3.png", id:"storage_atlas_3"},
		{src:"library/images/storage_atlas_4.png", id:"storage_atlas_4"},
		{src:"library/images/storage_atlas_5.png", id:"storage_atlas_5"},
		{src:"library/images/storage_atlas_6.png", id:"storage_atlas_6"},
		{src:"library/images/storage_atlas_7.png", id:"storage_atlas_7"},
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"},
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"},
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,800,600]]},
		{name:"storage_atlas_5", frames: [[844,0,540,540],[0,1144,1300,240],[442,0,400,940],[0,0,440,940],[0,942,1600,200]]},
		{name:"storage_atlas_6", frames: [[0,0,600,460],[1244,522,420,420],[1244,944,420,420],[1204,0,460,520],[602,804,640,280],[602,522,640,280],[0,462,600,460],[0,924,600,460],[602,0,600,460]]},
		{name:"storage_atlas_7", frames: [[1266,0,420,420],[0,422,420,420],[422,422,420,420],[0,0,420,420],[0,844,420,420],[422,844,420,420],[422,0,420,420],[844,0,420,420],[844,422,420,420],[1266,422,420,420],[844,844,420,420]]},
		{name:"storage_atlas_8", frames: [[0,0,290,590],[1056,0,500,300],[1056,302,500,300],[0,592,500,300],[0,894,500,300],[1508,966,260,380],[1246,966,260,380],[694,0,360,440],[292,0,400,400],[502,824,380,380],[502,442,380,380],[884,966,360,360],[884,604,360,360],[1246,604,360,360]]},
		{name:"storage_atlas_9", frames: [[524,0,300,300],[826,0,300,300],[0,1146,340,240],[716,786,340,240],[1058,786,280,280],[1340,786,280,280],[906,1068,280,280],[342,986,280,280],[624,1028,280,280],[262,382,300,300],[1128,0,300,300],[262,684,300,300],[1430,0,300,300],[564,302,150,547],[0,0,260,380],[0,382,260,380],[262,0,260,380],[0,764,260,380],[716,544,340,240],[1400,302,340,240],[1058,302,340,240],[1400,544,340,240],[716,302,340,240],[1058,544,340,240],[1188,1068,290,240],[1480,1068,290,240]]},
		{name:"storage_atlas_10", frames: [[454,242,190,190],[850,941,120,120],[661,689,120,120],[262,242,190,190],[161,940,120,120],[1602,422,127,269],[1110,650,104,106],[0,504,173,168],[337,616,97,53],[175,616,160,160],[786,650,160,160],[948,650,160,160],[1405,662,160,160],[0,674,160,160],[1243,608,160,160],[337,689,160,160],[499,689,160,160],[1567,693,160,160],[1110,770,160,160],[162,778,160,160],[1261,964,120,120],[476,851,140,140],[1510,855,140,140],[0,242,260,260],[262,434,180,180],[838,242,190,190],[283,995,120,120],[1510,997,120,120],[0,836,159,138],[850,812,182,127],[1414,432,149,228],[1272,770,116,192],[476,993,120,120],[0,976,120,120],[1034,864,48,48],[1752,149,48,48],[1565,432,28,32],[821,506,420,70],[1146,1134,385,32],[821,578,420,70],[821,434,420,70],[646,242,190,190],[618,946,220,80],[444,607,340,80],[1414,242,186,188],[618,851,40,55],[972,941,40,43],[1785,199,10,11],[175,504,69,94],[1533,1129,100,73],[1729,789,57,60],[457,1115,99,100],[1565,466,23,38],[1752,199,31,31],[1034,812,50,50],[1752,0,40,147],[324,851,150,142],[405,995,50,210],[1731,422,50,297],[1602,242,194,178],[444,434,187,171],[661,812,187,132],[633,434,186,159],[1652,855,120,150],[1034,932,120,150],[1030,242,190,190],[1222,242,190,190],[1635,1129,80,80],[558,1150,106,55],[0,1098,108,92],[1261,1086,103,36],[1390,824,118,186],[964,1084,180,70],[1632,1007,120,120],[842,1063,120,120],[720,1028,120,120],[122,1062,120,120],[1383,1012,120,120],[598,1028,120,120],[876,0,290,240],[584,0,290,240],[1168,0,290,240],[1460,0,290,240],[292,0,290,240],[0,0,290,240],[244,1117,113,85],[1243,434,159,172],[1156,932,103,154],[1729,721,68,66]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_next_round_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_prize_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_start_level_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_help_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bonus_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bonus_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bonus_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bonus_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bonus_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bonus_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bonus_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bonus_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bonus_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bonus_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bonus_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bonus_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.card_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.card_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.clouds_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.countdown_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.countdown_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.countdown_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cursor_hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cursor_hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dead_tree_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_1_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.decor_2_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.indicator_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mini_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.ray_of_light_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shoes0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_help_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.title_win_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.top0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.top1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.top2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.top3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_0_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-20,60,40);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],11.5,20,-14.9,-25.9).s().p("AiOELQh+gFguhRQgvhQA7hsQA7hwCEhMQCBhLB9AEQB9AEAvBRQAvBSg7BrQg6BviDBMQh7BIh4AAIgNAAg");
	this.shape.setTransform(-54,-91.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.4,11.6,5.8,-15.6).s().p("AgqB0QhJgNgmgpQgogqATgwQASgwA/gZQBBgaBHANQBKAKAmAqQAmAqgSAuQgTAxg/AYQgtAUgyAAQgTAAgVgDg");
	this.shape_1.setTransform(0.2,-117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-1.6,-202.4,-1.4,65.4).s().p("AsdJ+QlLkIAAl2QAAl1FLkIQFKkIHTAAQHTAAFLEIQFLEIAAF1QAAF2lLEIQlLEInTAAQnTAAlKkIg");
	this.shape_2.setTransform(0.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
	this.shape_3.setTransform(0,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],33.4,-45.3,0,33.4,-45.3,220.8).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,124.2,0,-135.9).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E22AA1").ss(12,1,1).p("AjPI5IKCl0QBIgpAdhOQAchOgchMQgchOhJgpIqCl0QhIgqhRAOQhSAPg1A/Qg2BAAABTIAALlQAABSA1BAQA1BABSAOQBRAPBJgpg");
	this.shape.setTransform(4.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#DDDDDD"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape_1.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
	this.shape.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,70);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
	this.shape.setTransform(130,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,21.5);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-25,0,25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,50);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#6699FF","#66CCFF"],[0,0.494,1],20,15,20,-15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,30);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-23,60,46.1);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-88.5,180,177.1);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-6,70,12);
p.frameBounds = [rect];


(lib.orientation_lock_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.orientation_lock_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-175,270,350);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.instruction_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("text", "100px 'Arial'");
	this.text.lineHeight = 114;
	this.text.lineWidth = 317;
	this.text.setTransform(-158.4,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.4,-57.8,321,115.8);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.text_bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble_2_img();
	this.instance.setTransform(-145,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect];


(lib.text_bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_bubble_1_img();
	this.instance.setTransform(-145,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect];


(lib.ray_of_light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ray_of_light_img();
	this.instance.setTransform(-666.7,-500,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect];


(lib.prize_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1_round_1:0,location_1_round_2:1,location_1_round_3:2,location_1_round_4:3,location_2_round_1:4,location_2_round_2:5,location_2_round_3:6,location_2_round_4:7,location_3_round_1:8,location_3_round_2:9,location_3_round_3:10,location_3_round_4:11});

	// graph
	this.instance = new lib.bonus_1_1_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.bonus_2_1_img();
	this.instance_1.setTransform(-210,-210);

	this.instance_2 = new lib.bonus_3_1_img();
	this.instance_2.setTransform(-210,-210);

	this.instance_3 = new lib.bonus_4_1_img();
	this.instance_3.setTransform(-210,-210);

	this.instance_4 = new lib.bonus_1_2_img();
	this.instance_4.setTransform(-210,-210);

	this.instance_5 = new lib.bonus_2_2_img();
	this.instance_5.setTransform(-210,-210);

	this.instance_6 = new lib.bonus_3_2_img();
	this.instance_6.setTransform(-210,-210);

	this.instance_7 = new lib.bonus_4_2_img();
	this.instance_7.setTransform(-210,-210);

	this.instance_8 = new lib.bonus_1_3_img();
	this.instance_8.setTransform(-210,-210);

	this.instance_9 = new lib.bonus_2_3_img();
	this.instance_9.setTransform(-210,-210);

	this.instance_10 = new lib.bonus_3_3_img();
	this.instance_10.setTransform(-210,-210);

	this.instance_11 = new lib.bonus_4_3_img();
	this.instance_11.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// decor
	this.instance_12 = new lib.bg_prize_img();
	this.instance_12.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.prize_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.mini_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_hero_img();
	this.instance.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-130,-190);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-130,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyucIMAAAg4PMAldAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-190,260,380);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-130,-190);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-130,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyucIMAAAg4PMAldAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-190,260,380);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-130,-190);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-130,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyucIMAAAg4PMAldAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-190,260,380);
p.frameBounds = [rect, rect, rect];


(lib.jasmine_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom2_img();
	this.instance.setTransform(-114.4,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.4,-29,173,168);
p.frameBounds = [rect, null];


(lib.jasmine_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes2_img();
	this.instance.setTransform(-32.7,-59.2);

	this.instance_1 = new lib.shoes0_img();
	this.instance_1.setTransform(-33.9,-73.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.7,-59.2,103,36);
p.frameBounds = [rect, new cjs.Rectangle(-33.9,-73.4,106,55)];


(lib.jasmine_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_hand_img();
	this.instance.setTransform(-94,-43);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.top2_img();
	this.instance_1.setTransform(-92.2,-115.5);

	this.instance_2 = new lib.top0_img();
	this.instance_2.setTransform(-105.3,-119.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// graph
	this.instance_3 = new lib.bottom0_img();
	this.instance_3.setTransform(-108,-30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.2,-115.5,103,154);
p.frameBounds = [rect, new cjs.Rectangle(-108,-119.1,127,358.1)];


(lib.jas_fringle_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe2_img();
	this.instance.setTransform(-45.9,-147.2);

	this.instance_1 = new lib.fringe0_img();
	this.instance_1.setTransform(-61.5,-150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-147.2,149,228);
p.frameBounds = [rect, new cjs.Rectangle(-61.5,-150.7,159,138)];


(lib.indicator_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_4_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_3_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();
	this.instance.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,385,32);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_2_img();
	this.instance.setTransform(-220,-920);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-920,440,940);
p.frameBounds = [rect];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_1_img();
	this.instance.setTransform(-200,-920);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-920,400,940);
p.frameBounds = [rect];


(lib.decor_2_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_2_cards_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.decor_1_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_1_cards_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.dead_tree_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dead_tree_img();
	this.instance.setTransform(-230,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-260,460,520);
p.frameBounds = [rect];


(lib.cursor_hint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cursor_hint_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.cursor_hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cursor_hint_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.countdown_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_3_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.countdown_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.countdown_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.countdown_0_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_0_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.clouds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_img();
	this.instance.setTransform(-650,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-650,-120,1300,240);
p.frameBounds = [rect];


(lib.card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_10_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_9_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_8_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_7_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_6_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_4_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// text
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-145,-120);

	this.instance_1 = new lib.title_win_ru_img();
	this.instance_1.setTransform(-145,-120);

	this.instance_2 = new lib.title_win_tr_img();
	this.instance_2.setTransform(-145,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_start_level_en_img();
	this.instance.setTransform(-170,-120);

	this.instance_1 = new lib.title_start_level_ru_img();
	this.instance_1.setTransform(-170,-120);

	this.instance_2 = new lib.title_start_level_tr_img();
	this.instance_2.setTransform(-170,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_next_round_en_img();
	this.instance.setTransform(-170,-120);

	this.instance_1 = new lib.title_next_round_ru_img();
	this.instance_1.setTransform(-170,-120);

	this.instance_2 = new lib.title_next_round_tr_img();
	this.instance_2.setTransform(-170,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-180,-180);

	this.instance_2 = new lib.title_tr_img();
	this.instance_2.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-145,-120);

	this.instance_1 = new lib.title_loss_ru_img();
	this.instance_1.setTransform(-145,-120);

	this.instance_2 = new lib.title_loss_tr_img();
	this.instance_2.setTransform(-145,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_help_en_img();
	this.instance.setTransform(-300,-230);

	this.instance_1 = new lib.title_help_ru_img();
	this.instance_1.setTransform(-300,-230);

	this.instance_2 = new lib.title_help_tr_img();
	this.instance_2.setTransform(-300,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-230,600,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_help_img();
	this.instance.setTransform(-300,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-230,600,460);
p.frameBounds = [rect];


(lib.bg_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_start_level_img();
	this.instance.setTransform(-170,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect];


(lib.bg_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_next_round_img();
	this.instance.setTransform(-170,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect];


(lib.bg_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_img();
	this.instance.setTransform(-145,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-295,290,590);
p.frameBounds = [rect];


(lib.bg_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_cards_img();
	this.instance.setTransform(-270,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.ariel_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom3_img();
	this.instance.setTransform(-33.1,86.4);

	this.instance_1 = new lib.bottom0_img();
	this.instance_1.setTransform(-53.1,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.1,86.4,97,53);
p.frameBounds = [rect, new cjs.Rectangle(-53.1,87.9,127,269)];


(lib.ariel_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes3_img();
	this.instance.setTransform(-84,-86.5);

	this.instance_1 = new lib.shoes0_img();
	this.instance_1.setTransform(-78,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-86.5,118,186);
p.frameBounds = [rect, new cjs.Rectangle(-78,41,106,55)];


(lib.ariel_fringle_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe3_img();
	this.instance.setTransform(-32.6,-139.5);

	this.instance_1 = new lib.fringe0_img();
	this.instance_1.setTransform(-54.6,-142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.6,-139.5,116,192);
p.frameBounds = [rect, new cjs.Rectangle(-54.6,-142.5,159,138)];


(lib.ariel_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.top3_img();
	this.instance.setTransform(-46.1,-103.5);

	this.instance_1 = new lib.top0_img();
	this.instance_1.setTransform(-66.1,-107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-103.5,68,66);
p.frameBounds = [rect, new cjs.Rectangle(-66.1,-107,113,85)];


(lib.anna_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.top1_img();
	this.instance.setTransform(-86.2,-23.3);

	this.instance_1 = new lib.top0_img();
	this.instance_1.setTransform(-68.1,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-23.3,159,172);
p.frameBounds = [rect, new cjs.Rectangle(-68.1,-7.5,113,85)];


(lib.anna_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes1_img();
	this.instance.setTransform(-30.2,-70.2);

	this.instance_1 = new lib.shoes0_img();
	this.instance_1.setTransform(-29.1,-40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.2,-70.2,108,92);
p.frameBounds = [rect, new cjs.Rectangle(-29.1,-40.6,106,55)];


(lib.anna_fringle_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe1_img();
	this.instance.setTransform(-66.6,-159.5);

	this.instance_1 = new lib.fringe0_img();
	this.instance_1.setTransform(-67.5,-135.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-159.5,182,127);
p.frameBounds = [rect, new cjs.Rectangle(-67.5,-135.5,159,138)];


(lib.anna_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom1_img();
	this.instance.setTransform(-184,36);

	this.instance_1 = new lib.bottom0_img();
	this.instance_1.setTransform(-197.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,36,104,106);
p.frameBounds = [rect, new cjs.Rectangle(-197.5,37.5,127,269)];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.copyright_title_en_img();
	this.instance.setTransform(-250,-150);

	this.instance_1 = new lib.copyright_title_ru_img();
	this.instance_1.setTransform(-250,-150);

	this.instance_2 = new lib.copyright_title_tr_img();
	this.instance_2.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.copyright_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_1_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.thunder_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.thunder_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


(lib.flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.social_network_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vk:0,fb:1,youtube:2,twitter:3});

	// graph
	this.instance = new lib.social_network_1_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.social_network_2_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.social_network_3_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.social_network_4_img();
	this.instance_3.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-90,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDFeIAAq7IcHAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-35,180,70);
p.frameBounds = [rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// bg
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, null];


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75,120,150);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75,120,150);
p.frameBounds = [rect];


(lib.more_games_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_19_img();
	this.instance.setTransform(-0.4,-0.2,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.4,-0.2,8.1,8);
p.frameBounds = [rect];


(lib.more_games_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_18_img();
	this.instance.setTransform(0,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,16.6,27.4);
p.frameBounds = [rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_17_img();
	this.instance.setTransform(-0.1,-0.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.1,23.8,24);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,50);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_16_img();
	this.instance.setTransform(2.7,-7.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.7,-7.5,41.1,43.2);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-69.8,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-64.1,139.7,128.2);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_15_img();
	this.instance.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.2,60);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_14_img();
	this.instance.setTransform(0.3,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.1,49.7,67.7);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_13_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,7.2,7.9);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_10_img();
	this.instance.setTransform(0,1.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,1.5,133.9,135.4);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_9_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,133.9,114.5);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,134.7,95.1);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_img();
	this.instance.setTransform(-0.3,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,0,134.7,123.1);
p.frameBounds = [rect];


(lib.logotype_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logotype_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect];


(lib.instruction_1_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.full_screen_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_small_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.banner_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_antiblocking_ads_en_img();
	this.instance.setTransform(-320,-140);

	this.instance_1 = new lib.title_antiblocking_ads_ru_img();
	this.instance_1.setTransform(-320,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.antiblocking_ads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance = new lib.redirect_4_mc();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_3 = new lib.redirect_3_mc();
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.2,-69.3,128.2,138.6), new cjs.Rectangle(-66,-72.6,134.3,145.1), new cjs.Rectangle(-70.8,-75.9,140.4,151.8), new cjs.Rectangle(-75.7,-79.2,146.5,158.4), new cjs.Rectangle(-80.5,-82.5,152.7,165), new cjs.Rectangle(-78.4,-82.5,152.6,165), new cjs.Rectangle(-76.4,-82.5,152.6,165), new cjs.Rectangle(-74.4,-82.5,152.6,165), new cjs.Rectangle(-72.4,-82.5,152.6,165), new cjs.Rectangle(-70.5,-82.5,152.6,165), new cjs.Rectangle(-68.5,-82.5,152.6,165), new cjs.Rectangle(-66.5,-82.5,152.6,165), new cjs.Rectangle(-64.5,-82.5,152.6,165), new cjs.Rectangle(-62.5,-82.5,152.6,165), new cjs.Rectangle(-60.5,-82.5,152.7,165), new cjs.Rectangle(-59.7,-79.2,146.5,158.4), new cjs.Rectangle(-58.9,-75.9,140.4,151.8), new cjs.Rectangle(-58.1,-72.6,134.3,145.1), new cjs.Rectangle(-57.2,-69.3,128.2,138.6), rect=new cjs.Rectangle(-56.4,-66,122.1,132), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(130,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
	mask.setTransform(130,15);

	// shadow
	this.instance_2 = new lib.preloader_10_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.preloader_7_mc();
	this.instance_3.setTransform(0,0,0.003,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},99).wait(1));

	// bg
	this.instance_4 = new lib.preloader_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// shadow
	this.instance_5 = new lib.preloader_11_mc();
	this.instance_5.setTransform(-20,-20);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-525,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-455,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-385,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-315,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-245,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-105.5,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-175,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(525,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(455,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(385,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(315,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(245,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(175,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(105,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(35,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-555,-23,1110,46.1);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-560,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-490,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-420,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-350,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-280,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-210,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-140,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(-70,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(560,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(490,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(350,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(280,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(210,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(140,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(70,0);

	this.instance_16 = new lib.preloader_2_mc();
	this.instance_16.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-590,-23,1180,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_4_mc();
	this.instance.setTransform(400,50);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(400,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_3_mc();
	this.instance_2.setTransform(400,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_3_mc();
	this.instance_3.setTransform(400,100);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_4_mc();
	this.instance_4.setTransform(400,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_4_mc();
	this.instance_5.setTransform(400,150);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_3_mc();
	this.instance_6.setTransform(400,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_3_mc();
	this.instance_7.setTransform(400,200);
	this.instance_7.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_8 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(60,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12,107,24);
p.frameBounds = [rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.text_bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect];


(lib.title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_start_level_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_start_level_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340.5,240.5);
p.frameBounds = [rect];


(lib.title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_next_round_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_next_round_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340.5,240.5);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.text_bubble_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-120,290,240);
p.frameBounds = [rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_help_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-230,600.5,460.5);
p.frameBounds = [rect];


(lib.prize_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ray_of_light_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect];


(lib.prize_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// foreground
	this.instance = new lib.prize_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// body
	this.body_mc = new lib.prize_3_mc();
	this.body_mc.setTransform(0,0,0.762,0.762);
	this.body_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).to({scaleX:1,scaleY:1,alpha:1},19).wait(60).to({scaleX:0.76,scaleY:0.76,x:400,alpha:0.012},20).wait(1));

	// background
	this.instance_1 = new lib.prize_2_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({rotation:90},20).to({rotation:180},20).to({rotation:0},20).to({alpha:0.012},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-703.7,-550.6,1407.5,1101.3), new cjs.Rectangle(-736.4,-597.8,1472.9,1195.8), new cjs.Rectangle(-763.4,-639.7,1526.9,1279.4), new cjs.Rectangle(-787,-679.4,1574.1,1358.9), new cjs.Rectangle(-807.2,-717,1614.6,1434.2), new cjs.Rectangle(-820,-747.4,1640.2,1494.9), new cjs.Rectangle(-828.5,-773.8,1657.2,1547.7), new cjs.Rectangle(-831.9,-794.6,1663.9,1589.3), new cjs.Rectangle(-830.4,-811.5,1661,1623.1), new cjs.Rectangle(-825,-825,1650,1650), new cjs.Rectangle(-811.5,-830.4,1623.1,1661), new cjs.Rectangle(-794.6,-831.9,1589.3,1663.9), new cjs.Rectangle(-773.8,-828.6,1547.7,1657.2), new cjs.Rectangle(-747.4,-820,1494.9,1640.2), new cjs.Rectangle(-717.1,-807.3,1434.2,1614.6), new cjs.Rectangle(-679.4,-787,1358.9,1574.1), new cjs.Rectangle(-639.7,-763.4,1279.4,1526.9), new cjs.Rectangle(-597.9,-736.4,1195.8,1472.9), new cjs.Rectangle(-550.6,-703.7,1101.3,1407.5), new cjs.Rectangle(-500,-666.7,1000,1333.5), new cjs.Rectangle(-550.7,-703.7,1101.3,1407.5), new cjs.Rectangle(-597.9,-736.4,1195.8,1472.9), new cjs.Rectangle(-639.7,-763.4,1279.4,1526.9), new cjs.Rectangle(-679.4,-787,1358.9,1574.1), new cjs.Rectangle(-717.1,-807.2,1434.2,1614.6), new cjs.Rectangle(-747.4,-820,1494.9,1640.2), new cjs.Rectangle(-773.8,-828.5,1547.7,1657.2), new cjs.Rectangle(-794.6,-831.9,1589.3,1663.9), new cjs.Rectangle(-811.5,-830.4,1623.1,1661), new cjs.Rectangle(-825,-825,1650,1650), new cjs.Rectangle(-830.5,-811.5,1661,1623.1), new cjs.Rectangle(-831.9,-794.6,1663.9,1589.3), new cjs.Rectangle(-828.6,-773.8,1657.2,1547.7), new cjs.Rectangle(-820.1,-747.4,1640.2,1494.9), new cjs.Rectangle(-807.3,-717.1,1614.6,1434.2), new cjs.Rectangle(-787,-679.4,1574.1,1358.9), new cjs.Rectangle(-763.4,-639.7,1526.9,1279.4), new cjs.Rectangle(-736.4,-597.9,1472.9,1195.8), new cjs.Rectangle(-703.7,-550.6,1407.5,1101.3), new cjs.Rectangle(-666.7,-500,1333.5,1000), new cjs.Rectangle(-736.4,-597.9,1472.9,1195.8), new cjs.Rectangle(-787.9,-681,1575.9,1362.1), new cjs.Rectangle(-819.6,-746.2,1639.2,1492.5), new cjs.Rectangle(-831.9,-794.6,1663.9,1589.3), new cjs.Rectangle(-825,-825,1650,1650), new cjs.Rectangle(-794.6,-831.9,1589.3,1663.9), new cjs.Rectangle(-746.2,-819.5,1492.5,1639.2), new cjs.Rectangle(-681,-787.9,1362.1,1575.9), new cjs.Rectangle(-597.9,-736.4,1195.8,1472.9), new cjs.Rectangle(-500,-666.7,1000,1333.5), new cjs.Rectangle(-597.9,-736.4,1195.8,1472.9), new cjs.Rectangle(-681,-787.9,1362.1,1575.9), new cjs.Rectangle(-746.2,-819.6,1492.5,1639.2), new cjs.Rectangle(-794.6,-831.9,1589.3,1663.9), new cjs.Rectangle(-825,-825,1650,1650), new cjs.Rectangle(-831.9,-794.6,1663.9,1589.3), new cjs.Rectangle(-819.5,-746.2,1639.2,1492.5), new cjs.Rectangle(-787.9,-681,1575.9,1362.1), new cjs.Rectangle(-736.4,-597.8,1472.9,1195.8), rect=new cjs.Rectangle(-666.7,-500,1333.5,1000), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,385,32);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9VBxQgugvgBhCQABhAAugwQAwguBCgBQBCABAvAuQAPAQAKARMA2OAAAQAgAAAYAYQAXAXABAgQgBAggXAXQgYAYggAAMg2NAAAQgKASgQAQQgvAvhCAAQhCAAgwgvg");
	mask.setTransform(192.5,0);

	// band
	this.band_mc = new lib.indicator_3_mc();
	this.band_mc.setTransform(0,0,0.003,1);

	this.band_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.band_mc).to({scaleX:1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,1.1,32);
p.frameBounds = [rect, new cjs.Rectangle(0,-16,4.9,32), new cjs.Rectangle(0,-16,8.8,32), new cjs.Rectangle(0,-16,12.7,32), new cjs.Rectangle(0,-16,16.6,32), new cjs.Rectangle(0,-16,20.5,32), new cjs.Rectangle(0,-16,24.3,32), new cjs.Rectangle(0,-16,28.2,32), new cjs.Rectangle(0,-16,32.1,32), new cjs.Rectangle(0,-16,36,32), new cjs.Rectangle(0,-16,39.8,32), new cjs.Rectangle(0,-16,43.7,32), new cjs.Rectangle(0,-16,47.6,32), new cjs.Rectangle(0,-16,51.5,32), new cjs.Rectangle(0,-16,55.4,32), new cjs.Rectangle(0,-16,59.2,32), new cjs.Rectangle(0,-16,63.1,32), new cjs.Rectangle(0,-16,67,32), new cjs.Rectangle(0,-16,70.9,32), new cjs.Rectangle(0,-16,74.8,32), new cjs.Rectangle(0,-16,78.6,32), new cjs.Rectangle(0,-16,82.5,32), new cjs.Rectangle(0,-16,86.4,32), new cjs.Rectangle(0,-16,90.3,32), new cjs.Rectangle(0,-16,94.1,32), new cjs.Rectangle(0,-16,98,32), new cjs.Rectangle(0,-16,101.9,32), new cjs.Rectangle(0,-16,105.8,32), new cjs.Rectangle(0,-16,109.7,32), new cjs.Rectangle(0,-16,113.5,32), new cjs.Rectangle(0,-16,117.4,32), new cjs.Rectangle(0,-16,121.3,32), new cjs.Rectangle(0,-16,125.2,32), new cjs.Rectangle(0,-16,129,32), new cjs.Rectangle(0,-16,132.9,32), new cjs.Rectangle(0,-16,136.8,32), new cjs.Rectangle(0,-16,140.7,32), new cjs.Rectangle(0,-16,144.6,32), new cjs.Rectangle(0,-16,148.4,32), new cjs.Rectangle(0,-16,152.3,32), new cjs.Rectangle(0,-16,156.2,32), new cjs.Rectangle(0,-16,160.1,32), new cjs.Rectangle(0,-16,164,32), new cjs.Rectangle(0,-16,167.8,32), new cjs.Rectangle(0,-16,171.7,32), new cjs.Rectangle(0,-16,175.6,32), new cjs.Rectangle(0,-16,179.5,32), new cjs.Rectangle(0,-16,183.3,32), new cjs.Rectangle(0,-16,187.2,32), new cjs.Rectangle(0,-16,191.1,32), new cjs.Rectangle(0,-16,195,32), new cjs.Rectangle(0,-16,198.9,32), new cjs.Rectangle(0,-16,202.7,32), new cjs.Rectangle(0,-16,206.6,32), new cjs.Rectangle(0,-16,210.5,32), new cjs.Rectangle(0,-16,214.4,32), new cjs.Rectangle(0,-16,218.3,32), new cjs.Rectangle(0,-16,222.1,32), new cjs.Rectangle(0,-16,226,32), new cjs.Rectangle(0,-16,229.9,32), new cjs.Rectangle(0,-16,233.8,32), new cjs.Rectangle(0,-16,237.6,32), new cjs.Rectangle(0,-16,241.5,32), new cjs.Rectangle(0,-16,245.4,32), new cjs.Rectangle(0,-16,249.3,32), new cjs.Rectangle(0,-16,253.2,32), new cjs.Rectangle(0,-16,257,32), new cjs.Rectangle(0,-16,260.9,32), new cjs.Rectangle(0,-16,264.8,32), new cjs.Rectangle(0,-16,268.7,32), new cjs.Rectangle(0,-16,272.6,32), new cjs.Rectangle(0,-16,276.4,32), new cjs.Rectangle(0,-16,280.3,32), new cjs.Rectangle(0,-16,284.2,32), new cjs.Rectangle(0,-16,288.1,32), new cjs.Rectangle(0,-16,291.9,32), new cjs.Rectangle(0,-16,295.8,32), new cjs.Rectangle(0,-16,299.7,32), new cjs.Rectangle(0,-16,303.6,32), new cjs.Rectangle(0,-16,307.5,32), new cjs.Rectangle(0,-16,311.3,32), new cjs.Rectangle(0,-16,315.2,32), new cjs.Rectangle(0,-16,319.1,32), new cjs.Rectangle(0,-16,323,32), new cjs.Rectangle(0,-16,326.8,32), new cjs.Rectangle(0,-16,330.7,32), new cjs.Rectangle(0,-16,334.6,32), new cjs.Rectangle(0,-16,338.5,32), new cjs.Rectangle(0,-16,342.4,32), new cjs.Rectangle(0,-16,346.2,32), new cjs.Rectangle(0,-16,350.1,32), new cjs.Rectangle(0,-16,354,32), new cjs.Rectangle(0,-16,357.9,32), new cjs.Rectangle(0,-16,361.8,32), new cjs.Rectangle(0,-16,365.6,32), new cjs.Rectangle(0,-16,369.5,32), new cjs.Rectangle(0,-16,373.4,32), new cjs.Rectangle(0,-16,377.3,32), new cjs.Rectangle(0,-16,381.1,32), new cjs.Rectangle(0,-16,385,32)];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// frame
	this.instance_1 = new lib.indicator_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.body_mc = new lib.indicator_2_mc();
	this.body_mc.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_2 = new lib.indicator_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_2_mc();
	this.instance.setTransform(520,840,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({rotation:270},5).to({rotation:360},5).to({rotation:365},5).to({rotation:360},10).to({scaleX:0.89,scaleY:0.89,y:800},10).wait(30).to({scaleX:1,scaleY:1,y:840},5).to({rotation:450},5).to({rotation:540},5).wait(26));

	// animation
	this.instance_1 = new lib.hero_main_1_mc();
	this.instance_1.setTransform(520,800,0.893,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({scaleX:1,scaleY:1,y:840},5).to({rotation:90},5).to({rotation:180},5).wait(60).to({rotation:270},5).to({rotation:360},5).to({rotation:365},5).to({rotation:360},10).to({scaleX:0.89,scaleY:0.89,y:800},10).wait(1));

	// graph
	this.instance_2 = new lib.dead_tree_mc();
	this.instance_2.setTransform(800,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(300,-22.1,730,1782.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(300,-33.6,730,1793.7), new cjs.Rectangle(300,-45.3,730,1805.3), new cjs.Rectangle(300,-56.8,730,1816.9), new cjs.Rectangle(300,-68.5,730,1828.5), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(29.3,-96.1,1000.7,1878.4), new cjs.Rectangle(-196.3,-21.3,1416.4,1734.3), new cjs.Rectangle(-353,40,1734.3,1516.3), new cjs.Rectangle(-422.3,40,1878.4,1290.7), new cjs.Rectangle(-400,40,1840,1020), new cjs.Rectangle(-422.2,40,1878.4,1271.6), new cjs.Rectangle(-353,40,1734.3,1500.1), new cjs.Rectangle(-196.3,-33,1416.4,1734.4), new cjs.Rectangle(29.3,-102.3,1000.8,1878.4), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(299.7,-83.6,730.3,1843.6), new cjs.Rectangle(299.5,-87,730.6,1847), new cjs.Rectangle(299.3,-90,730.8,1850.1), new cjs.Rectangle(299.2,-92.9,730.9,1852.9), new cjs.Rectangle(299.1,-95.6,730.9,1855.7), new cjs.Rectangle(299.2,-94.1,730.9,1854.2), new cjs.Rectangle(299.2,-92.8,730.9,1852.9), new cjs.Rectangle(299.2,-91.5,730.8,1851.6), new cjs.Rectangle(299.3,-90.1,730.7,1850.1), new cjs.Rectangle(299.4,-88.5,730.7,1848.6), new cjs.Rectangle(299.5,-87,730.5,1847), new cjs.Rectangle(299.6,-85.3,730.5,1845.3), new cjs.Rectangle(299.7,-83.6,730.3,1843.7), new cjs.Rectangle(299.9,-81.8,730.2,1841.8), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(302.3,-74.2,727.7,1834.2), new cjs.Rectangle(304.7,-68.4,725.4,1828.4), new cjs.Rectangle(307,-62.6,723,1822.6), new cjs.Rectangle(309.4,-56.8,720.7,1816.8), new cjs.Rectangle(311.8,-51,718.3,1811), new cjs.Rectangle(314.1,-45.2,715.9,1805.2), new cjs.Rectangle(316.4,-39.4,713.6,1799.4), new cjs.Rectangle(318.8,-33.6,711.3,1793.6), new cjs.Rectangle(320,-27.8,710,1787.9), rect=new cjs.Rectangle(320,-22.1,710,1782.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(318.7,-33.6,711.3,1793.7), new cjs.Rectangle(314.1,-45.3,716,1805.3), new cjs.Rectangle(309.3,-56.8,720.7,1816.9), new cjs.Rectangle(304.6,-68.5,725.4,1828.5), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(48.4,-102.2,981.7,1878.4), new cjs.Rectangle(-180.2,-33,1416.4,1734.3), new cjs.Rectangle(-341.3,40,1734.3,1500.1), new cjs.Rectangle(-416.1,40,1878.4,1271.6), new cjs.Rectangle(-400,40,1840,1020), new cjs.Rectangle(-416.1,40,1878.4,1290.7), new cjs.Rectangle(-341.3,40,1734.3,1516.3), new cjs.Rectangle(-180.1,-21.3,1416.4,1734.4), new cjs.Rectangle(48.3,-96.1,981.7,1878.4), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(300,-83.2,730,1843.3), new cjs.Rectangle(300,-86.3,730,1846.3), new cjs.Rectangle(300,-89,730,1849), new cjs.Rectangle(300,-91.5,730,1851.5), new cjs.Rectangle(300,-93.9,730,1854), new cjs.Rectangle(300,-92.6,730,1852.6), new cjs.Rectangle(300,-91.4,730,1851.5), new cjs.Rectangle(300,-90.3,730,1850.3), new cjs.Rectangle(300,-89,730,1849.1), new cjs.Rectangle(300,-87.7,730,1847.7), new cjs.Rectangle(300,-86.3,730,1846.3), new cjs.Rectangle(300,-84.8,730,1844.8), new cjs.Rectangle(300,-83.3,730,1843.3), new cjs.Rectangle(300,-81.6,730,1841.7), new cjs.Rectangle(300,-80,730,1840), new cjs.Rectangle(300,-74.2,730,1834.2), new cjs.Rectangle(300,-68.4,730,1828.4), new cjs.Rectangle(300,-62.6,730,1822.6), new cjs.Rectangle(300,-56.8,730,1816.8), new cjs.Rectangle(300,-51,730,1811), new cjs.Rectangle(300,-45.2,730,1805.2), new cjs.Rectangle(300,-39.4,730,1799.4), new cjs.Rectangle(300,-33.6,730,1793.6), new cjs.Rectangle(300,-27.8,730,1787.9), new cjs.Rectangle(300,-22.1,730,1782.2)];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_3
	this.round_3 = new lib.ariel_bottom_all_mc();
	this.round_3.setTransform(-1.1,7);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// body
	this.instance = new lib.hero_hand_img();
	this.instance.setTransform(-56,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// round_4
	this.round_4 = new lib.ariel_top_all_mc();
	this.round_4.setTransform(-16.3,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.ariel_shoes_all_mc();
	this.round_2.setTransform(20.7,217.4);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.ariel_fringle_all_mc();
	this.round_1.setTransform(-27.2,-108);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance_1 = new lib.hero_body_img();
	this.instance_1.setTransform(-82.8,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.8,-247.5,150,564.4);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_4
	this.round_4 = new lib.jasmine_top_all_mc();
	this.round_4.setTransform(21.8,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// body
	this.instance = new lib.hero_hand_img();
	this.instance.setTransform(-56,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// round_3
	this.round_3 = new lib.jasmine_bottom_all_mc();
	this.round_3.setTransform(38,20);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_2
	this.round_2 = new lib.jasmine_shoes_all_mc();
	this.round_2.setTransform(-23,332.8);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.jas_fringle_all_mc();
	this.round_1.setTransform(-21,-101.2);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance_1 = new lib.hero_body_img();
	this.instance_1.setTransform(-82.8,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.6,-248.4,174.8,558);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.anna_fringle_all_mc();
	this.round_1.setTransform(-14.4,-115.3);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance = new lib.hero_hand_img();
	this.instance.setTransform(-56,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// round_4
	this.round_4 = new lib.anna_top_all_mc();
	this.round_4.setTransform(-0.1,-92);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_3
	this.round_3 = new lib.anna_bottom_all_mc();
	this.round_3.setTransform(128.8,-48.4);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_2
	this.round_2 = new lib.anna_shoes_all_mc();
	this.round_2.setTransform(-28.2,295.5);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// body
	this.instance_1 = new lib.hero_body_img();
	this.instance_1.setTransform(-82.8,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.3,-274.8,187.3,592.1);
p.frameBounds = [rect];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(400.5,300.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:99,"end":179});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(101));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(48).to({y:60},15).to({y:-40},5).wait(50).to({y:-140},5).to({y:500},10).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(68).to({y:140},15).to({y:40},5).wait(45).to({y:-60},5).to({y:550},10).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(28).to({y:60},15).to({y:-40},5).wait(100).to({y:-140},5).to({y:500},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-230,760,460);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-740,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-740,760,461.4), new cjs.Rectangle(-380,-740,760,502), new cjs.Rectangle(-380,-740,760,542.7), new cjs.Rectangle(-380,-740,760,583.4), new cjs.Rectangle(-380,-740,760,624), new cjs.Rectangle(-380,-740,760,664.7), new cjs.Rectangle(-380,-740,760,705.4), new cjs.Rectangle(-380,-740,760,746), new cjs.Rectangle(-380,-740,760,786.7), new cjs.Rectangle(-380,-740,760,827.4), new cjs.Rectangle(-380,-740,760,868), new cjs.Rectangle(-380,-740,760,908.7), new cjs.Rectangle(-380,-740,760,949.4), new cjs.Rectangle(-380,-740,760,990), new cjs.Rectangle(-380,-740,760,970), new cjs.Rectangle(-380,-740,760,950), new cjs.Rectangle(-380,-740,760,930), new cjs.Rectangle(-380,-740,760,910), new cjs.Rectangle(-380,-740,760,890), new cjs.Rectangle(-380,-699.3,760,849.4), rect=new cjs.Rectangle(-380,-690,760,840), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-690,760,858.7), new cjs.Rectangle(-380,-690,760,899.4), new cjs.Rectangle(-380,-690,760,940), new cjs.Rectangle(-380,-690,760,920), new cjs.Rectangle(-380,-690,760,900), new cjs.Rectangle(-380,-690,760,880), new cjs.Rectangle(-380,-690,760,860), new cjs.Rectangle(-380,-690,760,840), new cjs.Rectangle(-380,-647.3,760,797.4), new cjs.Rectangle(-380,-604.6,760,754.7), new cjs.Rectangle(-380,-562,760,712), new cjs.Rectangle(-380,-519.3,760,669.4), new cjs.Rectangle(-380,-476.6,760,626.7), new cjs.Rectangle(-380,-434,760,584), new cjs.Rectangle(-380,-391.3,760,541.4), new cjs.Rectangle(-380,-348.6,760,498.7), new cjs.Rectangle(-380,-306,760,456), new cjs.Rectangle(-380,-263.3,760,413.4), new cjs.Rectangle(-380,-230,760,389.4), new cjs.Rectangle(-380,-230,760,432), new cjs.Rectangle(-380,-230,760,474.7), new cjs.Rectangle(-380,-230,760,517.4), new cjs.Rectangle(-380,-230,760,560), new cjs.Rectangle(-380,-230,760,540), new cjs.Rectangle(-380,-230,760,520), new cjs.Rectangle(-380,-230,760,500), new cjs.Rectangle(-380,-230,760,480), rect=new cjs.Rectangle(-380,-230,760,460), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-250,760,480), new cjs.Rectangle(-380,-270,760,500), new cjs.Rectangle(-380,-290,760,520), new cjs.Rectangle(-380,-310,760,540), new cjs.Rectangle(-380,-330,760,560), new cjs.Rectangle(-380,-266,760,496), new cjs.Rectangle(-380,-230,760,460), new cjs.Rectangle(-380,-230,760,472), new cjs.Rectangle(-380,-230,760,536), new cjs.Rectangle(-380,-230,760,600), new cjs.Rectangle(-380,-230,760,664), new cjs.Rectangle(-380,-230,760,728), new cjs.Rectangle(-380,-230,760,792), new cjs.Rectangle(-380,-230,760,856), rect=new cjs.Rectangle(-380,-230,760,920), rect, rect, rect, rect, new cjs.Rectangle(-380,-250,760,940), rect=new cjs.Rectangle(-380,-230,760,920), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-230,760,970), new cjs.Rectangle(-380,-250,760,990), new cjs.Rectangle(-380,-270,760,1010), new cjs.Rectangle(-380,-290,760,1030), new cjs.Rectangle(-380,-310,760,1050), new cjs.Rectangle(-380,-330,760,1070), new cjs.Rectangle(-380,-266,760,1006), new cjs.Rectangle(-380,-202,760,942), new cjs.Rectangle(-380,-138,760,878), new cjs.Rectangle(-380,-74,760,814), new cjs.Rectangle(-380,-10,760,750), new cjs.Rectangle(-380,54,760,686), new cjs.Rectangle(-380,118,760,622), new cjs.Rectangle(-380,182,760,558), new cjs.Rectangle(-380,246,760,494), rect=new cjs.Rectangle(-380,310,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":179});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(101));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(48).to({y:60},15).to({y:-40},5).wait(50).to({x:-245},0).to({x:-250,y:-140},5).to({y:500},10).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(28).to({y:140},15).to({y:40},5).wait(100).to({y:-60},5).to({y:550},10).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(68).to({y:60},15).to({y:-40},5).wait(45).to({y:-140},5).to({y:500},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-230,760,460);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-740,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-740,760,472.7), new cjs.Rectangle(-380,-740,760,515.4), new cjs.Rectangle(-380,-740,760,558), new cjs.Rectangle(-380,-740,760,600.7), new cjs.Rectangle(-380,-740,760,643.4), new cjs.Rectangle(-380,-740,760,686), new cjs.Rectangle(-380,-740,760,728.7), new cjs.Rectangle(-380,-740,760,771.4), new cjs.Rectangle(-380,-740,760,814), new cjs.Rectangle(-380,-740,760,856.7), new cjs.Rectangle(-380,-740,760,899.4), new cjs.Rectangle(-380,-740,760,942), new cjs.Rectangle(-380,-740,760,984.7), new cjs.Rectangle(-380,-740,760,1027.4), new cjs.Rectangle(-380,-740,760,1070), new cjs.Rectangle(-380,-740,760,1050), new cjs.Rectangle(-380,-740,760,1030), new cjs.Rectangle(-380,-740,760,1010), new cjs.Rectangle(-380,-740,760,990), rect=new cjs.Rectangle(-380,-740,760,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-740,760,990), rect=new cjs.Rectangle(-380,-740,760,970), rect, rect, rect, rect, new cjs.Rectangle(-380,-699.3,760,929.4), new cjs.Rectangle(-380,-658.6,760,888.7), new cjs.Rectangle(-380,-618,760,848), new cjs.Rectangle(-380,-577.3,760,807.4), new cjs.Rectangle(-380,-536.6,760,766.7), new cjs.Rectangle(-380,-496,760,726), new cjs.Rectangle(-380,-455.3,760,685.4), new cjs.Rectangle(-380,-414.6,760,644.7), new cjs.Rectangle(-380,-374,760,604), new cjs.Rectangle(-380,-333.3,760,563.4), new cjs.Rectangle(-380,-292.6,760,522.7), new cjs.Rectangle(-380,-252,760,482), rect=new cjs.Rectangle(-380,-230,760,460), rect, new cjs.Rectangle(-380,-230,760,480), rect=new cjs.Rectangle(-380,-230,760,460), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-230,755,460), new cjs.Rectangle(-376,-250,756,480), new cjs.Rectangle(-377,-270,757,500), new cjs.Rectangle(-378,-290,758,520), new cjs.Rectangle(-379,-310,759,540), new cjs.Rectangle(-380,-330,760,560), new cjs.Rectangle(-380,-266,760,496), new cjs.Rectangle(-380,-230,760,460), new cjs.Rectangle(-380,-230,760,472), new cjs.Rectangle(-380,-230,760,536), new cjs.Rectangle(-380,-230,760,600), new cjs.Rectangle(-380,-230,760,664), new cjs.Rectangle(-380,-230,760,728), new cjs.Rectangle(-380,-230,760,792), new cjs.Rectangle(-380,-230,760,856), new cjs.Rectangle(-380,-230,760,920), new cjs.Rectangle(-380,-250,760,940), new cjs.Rectangle(-380,-270,760,960), new cjs.Rectangle(-380,-290,760,980), new cjs.Rectangle(-380,-310,760,1000), new cjs.Rectangle(-380,-330,760,1020), new cjs.Rectangle(-380,-266,760,956), new cjs.Rectangle(-380,-202,760,892), rect=new cjs.Rectangle(-380,-150,760,840), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-170,760,860), new cjs.Rectangle(-380,-190,760,880), new cjs.Rectangle(-380,-210,760,900), new cjs.Rectangle(-380,-230,760,920), new cjs.Rectangle(-380,-250,760,940), new cjs.Rectangle(-380,-189,760,879), new cjs.Rectangle(-380,-128,760,818), new cjs.Rectangle(-380,-67,760,757), new cjs.Rectangle(-380,-6,760,696), new cjs.Rectangle(-380,55,760,635), new cjs.Rectangle(-380,116,760,574), new cjs.Rectangle(-380,177,760,513), new cjs.Rectangle(-380,238,760,452), new cjs.Rectangle(-380,299,760,391), rect=new cjs.Rectangle(-380,310,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":179});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(101));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(28).to({y:60},15).to({y:-40},5).wait(100).to({y:-140},5).to({y:500},10).wait(16));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(48).to({y:140},15).to({y:40},5).wait(65).to({y:-140},5).to({y:550},10).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-40);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(68).to({y:60},15).to({y:-40},5).wait(30).to({y:-140},5).to({y:500},10).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-230,760,460);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-740,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-740,760,461.4), new cjs.Rectangle(-380,-740,760,502), new cjs.Rectangle(-380,-740,760,542.7), new cjs.Rectangle(-380,-740,760,583.4), new cjs.Rectangle(-380,-740,760,624), new cjs.Rectangle(-380,-740,760,664.7), new cjs.Rectangle(-380,-740,760,705.4), new cjs.Rectangle(-380,-740,760,746), new cjs.Rectangle(-380,-740,760,786.7), new cjs.Rectangle(-380,-740,760,827.4), new cjs.Rectangle(-380,-740,760,868), new cjs.Rectangle(-380,-740,760,908.7), new cjs.Rectangle(-380,-740,760,949.4), new cjs.Rectangle(-380,-740,760,990), new cjs.Rectangle(-380,-740,760,970), new cjs.Rectangle(-380,-740,760,950), new cjs.Rectangle(-380,-740,760,930), new cjs.Rectangle(-380,-740,760,910), rect=new cjs.Rectangle(-380,-740,760,890), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-740,760,899.4), new cjs.Rectangle(-380,-740,760,942), new cjs.Rectangle(-380,-740,760,984.7), new cjs.Rectangle(-380,-740,760,1027.4), new cjs.Rectangle(-380,-740,760,1070), new cjs.Rectangle(-380,-740,760,1050), new cjs.Rectangle(-380,-740,760,1030), new cjs.Rectangle(-380,-740,760,1010), new cjs.Rectangle(-380,-740,760,990), new cjs.Rectangle(-380,-740,760,970), new cjs.Rectangle(-380,-699.3,760,929.4), new cjs.Rectangle(-380,-658.6,760,888.7), new cjs.Rectangle(-380,-618,760,848), new cjs.Rectangle(-380,-577.3,760,807.4), new cjs.Rectangle(-380,-536.6,760,766.7), new cjs.Rectangle(-380,-496,760,726), new cjs.Rectangle(-380,-455.3,760,685.4), new cjs.Rectangle(-380,-414.6,760,644.7), new cjs.Rectangle(-380,-374,760,604), new cjs.Rectangle(-380,-333.3,760,563.4), new cjs.Rectangle(-380,-292.6,760,522.7), new cjs.Rectangle(-380,-252,760,482), rect=new cjs.Rectangle(-380,-230,760,460), rect, new cjs.Rectangle(-380,-230,760,480), rect=new cjs.Rectangle(-380,-230,760,460), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-250,760,480), new cjs.Rectangle(-380,-270,760,500), new cjs.Rectangle(-380,-290,760,520), new cjs.Rectangle(-380,-310,760,540), new cjs.Rectangle(-380,-330,760,560), new cjs.Rectangle(-380,-266,760,496), new cjs.Rectangle(-380,-230,760,460), new cjs.Rectangle(-380,-230,760,472), new cjs.Rectangle(-380,-230,760,536), new cjs.Rectangle(-380,-230,760,600), new cjs.Rectangle(-380,-230,760,664), new cjs.Rectangle(-380,-230,760,728), new cjs.Rectangle(-380,-230,760,792), new cjs.Rectangle(-380,-230,760,856), rect=new cjs.Rectangle(-380,-230,760,920), rect, rect, new cjs.Rectangle(-380,-258,760,948), new cjs.Rectangle(-380,-294,760,984), new cjs.Rectangle(-380,-330,760,1020), new cjs.Rectangle(-380,-261,760,951), rect=new cjs.Rectangle(-380,-230,760,920), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-230,760,970), new cjs.Rectangle(-380,-250,760,990), new cjs.Rectangle(-380,-270,760,1010), new cjs.Rectangle(-380,-290,760,1030), new cjs.Rectangle(-380,-310,760,1050), new cjs.Rectangle(-380,-330,760,1070), new cjs.Rectangle(-380,-266,760,1006), new cjs.Rectangle(-380,-202,760,942), new cjs.Rectangle(-380,-138,760,878), new cjs.Rectangle(-380,-74,760,814), new cjs.Rectangle(-380,-10,760,750), new cjs.Rectangle(-380,54,760,686), new cjs.Rectangle(-380,118,760,622), new cjs.Rectangle(-380,182,760,558), new cjs.Rectangle(-380,246,760,494), rect=new cjs.Rectangle(-380,310,760,430), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cursor_hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cursor_hint_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},10).to({alpha:0.012},10).to({alpha:1},11).wait(9).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.cursor_hint_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.countdown_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_3_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_2_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_1_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_0_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.animation_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_159 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(125).call(this.frame_159).wait(1));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(0.5,500.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.69,scaleY:0.69,x:-89.6,y:60.4,alpha:0.012},0).to({scaleX:1,scaleY:1,x:0.5,y:-49.5,alpha:1},10).to({y:0.5},5).wait(75).to({alpha:0.012},20).wait(1).to({y:500.5,alpha:1},0).wait(10));

	// animation
	this.instance_1 = new lib.mini_hero_mc();
	this.instance_1.setTransform(-200,500,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({y:90},10).wait(115).to({y:500},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-347.2,320,492.3,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-347.1,279,492.2,360), new cjs.Rectangle(-347.1,238,492.2,382), new cjs.Rectangle(-347.1,197,492.2,423), new cjs.Rectangle(-347.1,156,492.2,464), new cjs.Rectangle(-347.1,115,492.2,505), new cjs.Rectangle(-347.1,74,492.2,546), new cjs.Rectangle(-347.1,33,492.2,587), new cjs.Rectangle(-347.1,-7.9,492.2,628), new cjs.Rectangle(-347.1,-48.9,492.2,669), rect=new cjs.Rectangle(-347.2,-90,492.3,710), rect, rect, rect, rect, new cjs.Rectangle(-347.2,-90,357.3,360), new cjs.Rectangle(-347.2,-90,370.8,360), new cjs.Rectangle(-347.2,-90,384.4,360), new cjs.Rectangle(-347.2,-90,397.9,360), new cjs.Rectangle(-347.2,-90,411.3,360), new cjs.Rectangle(-347.2,-96.3,424.8,366.3), new cjs.Rectangle(-347.2,-110.9,438.3,381), new cjs.Rectangle(-347.2,-125.7,451.8,395.8), new cjs.Rectangle(-347.2,-140.4,465.3,410.5), new cjs.Rectangle(-347.2,-155.1,478.9,425.2), new cjs.Rectangle(-347.2,-170,492.3,440), new cjs.Rectangle(-347.2,-160,492.3,430), new cjs.Rectangle(-347.2,-150,492.3,420), new cjs.Rectangle(-347.2,-140,492.3,410), new cjs.Rectangle(-347.2,-130,492.3,400), rect=new cjs.Rectangle(-347.2,-120,492.3,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-347.1,-48.9,492.2,669), new cjs.Rectangle(-347.1,-7.9,492.2,628), new cjs.Rectangle(-347.1,33,492.2,587), new cjs.Rectangle(-347.1,74,492.2,546), new cjs.Rectangle(-347.1,115,492.2,505), new cjs.Rectangle(-347.1,156,492.2,464), new cjs.Rectangle(-347.1,197,492.2,423), new cjs.Rectangle(-347.1,238,492.2,382), new cjs.Rectangle(-347.1,279,492.2,360), new cjs.Rectangle(-347.2,320,492.3,360)];


(lib.animation_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.cursor_hint_mc();
	this.instance.setTransform(300,200);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:130,y:80,alpha:1},10).to({x:150,y:100},5).wait(1));

	// animation
	this.instance_1 = new lib.title_start_level_mc();
	this.instance_1.setTransform(0,0,1,1,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:0.55,scaleY:0.55,x:0.3,y:0.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-120.5,340.5,240.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.7,-65.4,185.8,131.2), new cjs.Rectangle(-97.8,-69,196,138.5), new cjs.Rectangle(-102.9,-72.6,206.4,145.8), new cjs.Rectangle(-108.1,-76.3,216.7,153), new cjs.Rectangle(-113.3,-79.9,227,160.3), new cjs.Rectangle(-118.4,-83.5,237.3,167.6), new cjs.Rectangle(-123.5,-87.2,247.6,174.9), new cjs.Rectangle(-128.7,-90.8,257.9,182.1), new cjs.Rectangle(-133.8,-94.4,268.3,189.5), new cjs.Rectangle(-139,-98.1,278.6,196.8), new cjs.Rectangle(-144.1,-101.7,288.9,204.1), new cjs.Rectangle(-149.2,-105.3,299.2,211.3), new cjs.Rectangle(-154.4,-109,309.5,218.7), new cjs.Rectangle(-159.6,-112.6,319.9,225.9), new cjs.Rectangle(-164.7,-116.2,330.2,233.2), new cjs.Rectangle(-170,-120,540,390), new cjs.Rectangle(-170,-120,523,378), new cjs.Rectangle(-170,-120,506,366), new cjs.Rectangle(-170,-120,489,354), new cjs.Rectangle(-170,-120,472,342), new cjs.Rectangle(-170,-120,455,330), new cjs.Rectangle(-170,-120,438,318), new cjs.Rectangle(-170,-120,421,306), new cjs.Rectangle(-170,-120,404,294), new cjs.Rectangle(-170,-120,387,282), new cjs.Rectangle(-170,-120,370,270), new cjs.Rectangle(-170,-120,374,274), new cjs.Rectangle(-170,-120,378,278), new cjs.Rectangle(-170,-120,382,282), new cjs.Rectangle(-170,-120,386,286), new cjs.Rectangle(-170,-120,390,290)];


(lib.animation_next_round_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.cursor_hint_mc();
	this.instance.setTransform(300,200);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({x:130,y:80,alpha:1},10).to({x:150,y:100},5).wait(1));

	// animation
	this.instance_1 = new lib.title_next_round_mc();
	this.instance_1.setTransform(-0.1,-0.1,0.697,0.697,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-84,237.4,167.6);
p.frameBounds = [rect, new cjs.Rectangle(-121.6,-86,242.8,171.5), new cjs.Rectangle(-124.4,-87.9,248.2,175.3), new cjs.Rectangle(-127.1,-89.8,253.7,179.1), new cjs.Rectangle(-129.7,-91.6,259,183), new cjs.Rectangle(-132.4,-93.6,264.5,186.8), new cjs.Rectangle(-135.2,-95.5,269.9,190.6), new cjs.Rectangle(-137.9,-97.4,275.4,194.5), new cjs.Rectangle(-140.6,-99.3,280.8,198.3), new cjs.Rectangle(-143.3,-101.3,286.2,202.1), new cjs.Rectangle(-146,-103.2,291.7,206), new cjs.Rectangle(-148.7,-105.1,297.1,209.8), new cjs.Rectangle(-151.4,-107,302.5,213.7), new cjs.Rectangle(-154.1,-108.9,307.9,217.5), new cjs.Rectangle(-156.8,-110.8,313.4,221.3), new cjs.Rectangle(-159.6,-112.8,318.8,225.2), new cjs.Rectangle(-162.3,-114.7,324.2,229), new cjs.Rectangle(-165,-116.6,329.6,232.8), new cjs.Rectangle(-167.7,-118.5,335,236.6), rect=new cjs.Rectangle(-170.5,-120.5,340.5,240.5), rect, rect, rect, rect, new cjs.Rectangle(-170.5,-120.5,540.5,390.5), new cjs.Rectangle(-170.5,-120.5,523.5,378.5), new cjs.Rectangle(-170.5,-120.5,506.5,366.5), new cjs.Rectangle(-170.5,-120.5,489.5,354.5), new cjs.Rectangle(-170.5,-120.5,472.5,342.5), new cjs.Rectangle(-170.5,-120.5,455.5,330.5), new cjs.Rectangle(-170.5,-120.5,438.5,318.5), new cjs.Rectangle(-170.5,-120.5,421.5,306.5), new cjs.Rectangle(-170.5,-120.5,404.5,294.5), new cjs.Rectangle(-170.5,-120.5,387.5,282.5), new cjs.Rectangle(-170.5,-120.5,370.5,270.5), new cjs.Rectangle(-170.5,-120.5,374.5,274.5), new cjs.Rectangle(-170.5,-120.5,378.5,278.5), new cjs.Rectangle(-170.5,-120.5,382.5,282.5), new cjs.Rectangle(-170.5,-120.5,386.5,286.5), new cjs.Rectangle(-170.5,-120.5,390.5,290.5)];


(lib.animation_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(55).call(this.frame_99).wait(1));

	// animation
	this.instance = new lib.title_loss_mc();
	this.instance.setTransform(-60,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.69,scaleY:0.69,y:-80,alpha:0.012},0).to({scaleX:1,scaleY:1,y:-200,alpha:1},10).to({y:-160},5).wait(20).to({y:-150},5).to({y:-160},10).wait(1));

	// animation
	this.instance_1 = new lib.mini_hero_mc();
	this.instance_1.setTransform(1000,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({x:0},15).to({x:60},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-620,1385,900);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-205,-620,1318.4,900), new cjs.Rectangle(-205,-620,1251.7,900), new cjs.Rectangle(-205,-620,1185,900), new cjs.Rectangle(-205,-620,1118.4,900), new cjs.Rectangle(-205,-620,1051.7,900), new cjs.Rectangle(-205,-620,985,900), new cjs.Rectangle(-205,-620,918.4,900), new cjs.Rectangle(-205,-620,851.7,900), new cjs.Rectangle(-205,-620,785,900), new cjs.Rectangle(-205,-620,718.4,900), new cjs.Rectangle(-205,-620,651.7,900), new cjs.Rectangle(-205,-620,585,900), new cjs.Rectangle(-205,-620,518.4,900), new cjs.Rectangle(-205,-620,451.7,900), new cjs.Rectangle(-205,-620,385,900), new cjs.Rectangle(-205,-620,397,900), new cjs.Rectangle(-205,-620,409,900), new cjs.Rectangle(-205,-620,421,900), new cjs.Rectangle(-205,-620,433,900), rect=new cjs.Rectangle(-205,-620,445,900), rect, rect, rect, rect, new cjs.Rectangle(-160,-162.7,400,442.8), new cjs.Rectangle(-164.4,-178.4,404.5,458.4), new cjs.Rectangle(-168.9,-194.1,409,474.2), new cjs.Rectangle(-173.4,-209.9,413.5,489.9), new cjs.Rectangle(-177.9,-225.6,418,505.6), new cjs.Rectangle(-182.4,-241.3,422.4,521.3), new cjs.Rectangle(-186.9,-257,427,537), new cjs.Rectangle(-191.4,-272.7,431.4,552.8), new cjs.Rectangle(-195.9,-288.4,435.9,568.5), new cjs.Rectangle(-200.4,-304.2,440.4,584.2), new cjs.Rectangle(-205,-320,445,600), new cjs.Rectangle(-205,-312,445,592), new cjs.Rectangle(-205,-304,445,584), new cjs.Rectangle(-205,-296,445,576), new cjs.Rectangle(-205,-288,445,568), rect=new cjs.Rectangle(-205,-280,445,560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-205,-278,445,558), new cjs.Rectangle(-205,-276,445,556), new cjs.Rectangle(-205,-274,445,554), new cjs.Rectangle(-205,-272,445,552), new cjs.Rectangle(-205,-270,445,550), new cjs.Rectangle(-205,-271,445,551), new cjs.Rectangle(-205,-272,445,552), new cjs.Rectangle(-205,-273,445,553), new cjs.Rectangle(-205,-274,445,554), new cjs.Rectangle(-205,-275,445,555), new cjs.Rectangle(-205,-276,445,556), new cjs.Rectangle(-205,-277,445,557), new cjs.Rectangle(-205,-278,445,558), new cjs.Rectangle(-205,-279,445,559), new cjs.Rectangle(-205,-280,445,560)];


(lib.animation_clouds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.clouds_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},59).to({y:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-650,-120,1300,240);
p.frameBounds = [rect, new cjs.Rectangle(-650,-119.8,1300,240), new cjs.Rectangle(-650,-119.6,1300,240), new cjs.Rectangle(-650,-119.5,1300,240), new cjs.Rectangle(-650,-119.3,1300,240), new cjs.Rectangle(-650,-119.1,1300,240), new cjs.Rectangle(-650,-119,1300,240), new cjs.Rectangle(-650,-118.8,1300,240), new cjs.Rectangle(-650,-118.6,1300,240), new cjs.Rectangle(-650,-118.4,1300,240), new cjs.Rectangle(-650,-118.3,1300,240), new cjs.Rectangle(-650,-118.1,1300,240), new cjs.Rectangle(-650,-117.9,1300,240), new cjs.Rectangle(-650,-117.8,1300,240), new cjs.Rectangle(-650,-117.6,1300,240), new cjs.Rectangle(-650,-117.4,1300,240), new cjs.Rectangle(-650,-117.3,1300,240), new cjs.Rectangle(-650,-117.1,1300,240), new cjs.Rectangle(-650,-116.9,1300,240), new cjs.Rectangle(-650,-116.8,1300,240), new cjs.Rectangle(-650,-116.6,1300,240), new cjs.Rectangle(-650,-116.4,1300,240), new cjs.Rectangle(-650,-116.2,1300,240), new cjs.Rectangle(-650,-116.1,1300,240), new cjs.Rectangle(-650,-115.9,1300,240), new cjs.Rectangle(-650,-115.7,1300,240), new cjs.Rectangle(-650,-115.6,1300,240), new cjs.Rectangle(-650,-115.4,1300,240), new cjs.Rectangle(-650,-115.2,1300,240), new cjs.Rectangle(-650,-115.1,1300,240), new cjs.Rectangle(-650,-114.9,1300,240), new cjs.Rectangle(-650,-114.7,1300,240), new cjs.Rectangle(-650,-114.6,1300,240), new cjs.Rectangle(-650,-114.4,1300,240), new cjs.Rectangle(-650,-114.2,1300,240), new cjs.Rectangle(-650,-114,1300,240), new cjs.Rectangle(-650,-113.9,1300,240), new cjs.Rectangle(-650,-113.7,1300,240), new cjs.Rectangle(-650,-113.5,1300,240), new cjs.Rectangle(-650,-113.4,1300,240), new cjs.Rectangle(-650,-113.2,1300,240), new cjs.Rectangle(-650,-113,1300,240), new cjs.Rectangle(-650,-112.9,1300,240), new cjs.Rectangle(-650,-112.7,1300,240), new cjs.Rectangle(-650,-112.5,1300,240), new cjs.Rectangle(-650,-112.3,1300,240), new cjs.Rectangle(-650,-112.2,1300,240), new cjs.Rectangle(-650,-112,1300,240), new cjs.Rectangle(-650,-111.8,1300,240), new cjs.Rectangle(-650,-111.7,1300,240), new cjs.Rectangle(-650,-111.5,1300,240), new cjs.Rectangle(-650,-111.3,1300,240), new cjs.Rectangle(-650,-111.2,1300,240), new cjs.Rectangle(-650,-111,1300,240), new cjs.Rectangle(-650,-110.8,1300,240), new cjs.Rectangle(-650,-110.7,1300,240), new cjs.Rectangle(-650,-110.5,1300,240), new cjs.Rectangle(-650,-110.3,1300,240), new cjs.Rectangle(-650,-110.1,1300,240), new cjs.Rectangle(-650,-110,1300,240), new cjs.Rectangle(-650,-110.1,1300,240), new cjs.Rectangle(-650,-110.3,1300,240), new cjs.Rectangle(-650,-110.5,1300,240), new cjs.Rectangle(-650,-110.6,1300,240), new cjs.Rectangle(-650,-110.8,1300,240), new cjs.Rectangle(-650,-111,1300,240), new cjs.Rectangle(-650,-111.1,1300,240), new cjs.Rectangle(-650,-111.3,1300,240), new cjs.Rectangle(-650,-111.5,1300,240), new cjs.Rectangle(-650,-111.6,1300,240), new cjs.Rectangle(-650,-111.8,1300,240), new cjs.Rectangle(-650,-112,1300,240), new cjs.Rectangle(-650,-112.1,1300,240), new cjs.Rectangle(-650,-112.3,1300,240), new cjs.Rectangle(-650,-112.5,1300,240), new cjs.Rectangle(-650,-112.6,1300,240), new cjs.Rectangle(-650,-112.8,1300,240), new cjs.Rectangle(-650,-113,1300,240), new cjs.Rectangle(-650,-113.1,1300,240), new cjs.Rectangle(-650,-113.3,1300,240), new cjs.Rectangle(-650,-113.5,1300,240), new cjs.Rectangle(-650,-113.6,1300,240), new cjs.Rectangle(-650,-113.8,1300,240), new cjs.Rectangle(-650,-114,1300,240), new cjs.Rectangle(-650,-114.1,1300,240), new cjs.Rectangle(-650,-114.3,1300,240), new cjs.Rectangle(-650,-114.5,1300,240), new cjs.Rectangle(-650,-114.6,1300,240), new cjs.Rectangle(-650,-114.8,1300,240), new cjs.Rectangle(-650,-115,1300,240), new cjs.Rectangle(-650,-115.1,1300,240), new cjs.Rectangle(-650,-115.3,1300,240), new cjs.Rectangle(-650,-115.5,1300,240), new cjs.Rectangle(-650,-115.6,1300,240), new cjs.Rectangle(-650,-115.8,1300,240), new cjs.Rectangle(-650,-116,1300,240), new cjs.Rectangle(-650,-116.1,1300,240), new cjs.Rectangle(-650,-116.3,1300,240), new cjs.Rectangle(-650,-116.5,1300,240), new cjs.Rectangle(-650,-116.6,1300,240), new cjs.Rectangle(-650,-116.8,1300,240), new cjs.Rectangle(-650,-117,1300,240), new cjs.Rectangle(-650,-117.1,1300,240), new cjs.Rectangle(-650,-117.3,1300,240), new cjs.Rectangle(-650,-117.5,1300,240), new cjs.Rectangle(-650,-117.6,1300,240), new cjs.Rectangle(-650,-117.8,1300,240), new cjs.Rectangle(-650,-118,1300,240), new cjs.Rectangle(-650,-118.1,1300,240), new cjs.Rectangle(-650,-118.3,1300,240), new cjs.Rectangle(-650,-118.5,1300,240), new cjs.Rectangle(-650,-118.6,1300,240), new cjs.Rectangle(-650,-118.8,1300,240), new cjs.Rectangle(-650,-119,1300,240), new cjs.Rectangle(-650,-119.1,1300,240), new cjs.Rectangle(-650,-119.3,1300,240), new cjs.Rectangle(-650,-119.5,1300,240), new cjs.Rectangle(-650,-119.6,1300,240), new cjs.Rectangle(-650,-119.8,1300,240), new cjs.Rectangle(-650,-120,1300,240)];


(lib.animation_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.card_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":79});

	// animation
	this.instance = new lib.curtain_3_mc();
	this.instance.setTransform(400,300,0.833,0.833);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(20).to({alpha:0.012},10).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0},18).wait(40).to({y:-610},20).wait(1));

	// animation
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(0,610);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:0},18).wait(40).to({y:610},20).wait(1));

	// animation
	this.instance_3 = new lib.curtain_4_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0.012},10).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-610,1600,1820);
p.frameBounds = [rect, rect, new cjs.Rectangle(-400,-576.1,1600,1752.2), new cjs.Rectangle(-400,-542.2,1600,1684.4), new cjs.Rectangle(-400,-508.3,1600,1616.7), new cjs.Rectangle(-400,-474.4,1600,1548.9), new cjs.Rectangle(-400,-440.5,1600,1481.1), new cjs.Rectangle(-400,-406.6,1600,1413.3), new cjs.Rectangle(-400,-372.8,1600,1345.6), new cjs.Rectangle(-400,-338.9,1600,1277.8), new cjs.Rectangle(-400,-305,1600,1210), new cjs.Rectangle(-400,-271.1,1600,1142.2), new cjs.Rectangle(-400,-237.2,1600,1074.4), new cjs.Rectangle(-400,-203.3,1600,1006.7), new cjs.Rectangle(-400,-169.4,1600,938.9), new cjs.Rectangle(-400,-135.5,1600,871.1), new cjs.Rectangle(-400,-101.6,1600,803.3), new cjs.Rectangle(-400,-67.8,1600,735.6), new cjs.Rectangle(-400,-33.9,1600,667.8), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-30.5,1600,661), new cjs.Rectangle(-400,-61,1600,722), new cjs.Rectangle(-400,-91.5,1600,783), new cjs.Rectangle(-400,-122,1600,844), new cjs.Rectangle(-400,-152.5,1600,905), new cjs.Rectangle(-400,-183,1600,966), new cjs.Rectangle(-400,-213.5,1600,1027), new cjs.Rectangle(-400,-244,1600,1088), new cjs.Rectangle(-400,-274.5,1600,1149), new cjs.Rectangle(-400,-305,1600,1210), new cjs.Rectangle(-400,-335.5,1600,1271), new cjs.Rectangle(-400,-366,1600,1332), new cjs.Rectangle(-400,-396.5,1600,1393), new cjs.Rectangle(-400,-427,1600,1454), new cjs.Rectangle(-400,-457.5,1600,1515), new cjs.Rectangle(-400,-488,1600,1576), new cjs.Rectangle(-400,-518.5,1600,1637), new cjs.Rectangle(-400,-549,1600,1698), new cjs.Rectangle(-400,-579.5,1600,1759), new cjs.Rectangle(-400,-610,1600,1820)];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.copyright_body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.copyright_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.copyright_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_3_mc();
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.thunder_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thunder
	this.thunder_mc = new lib.thunder_3_mc();
	this.thunder_mc.shadow = new cjs.Shadow("#FFFFFF",0,0,30);
	this.thunder_mc.filters = [new cjs.BlurFilter(4, 4, 3)];

	this.timeline.addTween(cjs.Tween.get(this.thunder_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.thunder_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-38,1600,638);
p.frameBounds = [rect];


(lib.thunder_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _thunder_mc = this.body_mc.thunder_mc;
		_thunder_mc.gotoAndStop(0);
		_thunder_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 30;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 100;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					_thunder_mc.removeAllChildren();
					var lightning = new Lightning();
					lightning.createLightningFunc(_thunder_mc, 800 * Math.random(), 100, 300);
				}
				else if (_currentUpdate_num == 2)
				{
					_thunder_mc.visible = true;
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
					_thunder_mc.visible = false;
				}
				else if (_currentUpdate_num == 6)
				{
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 100) + 50;
					_currentUpdate_num = 0;
				}
			}
			catch(event)
			{
				clearInterval(_interval_id);
				console.log(event);
			}
			finally
			{
				
			}
		};
		/*
		динамическое создание молний
		*/
		function Lightning()
		{
			/*
			
			*/
			this.lightning_shape;
			this.cloudX_num;
			this.cloudY_num;
			this.groundX_num;
			this.groundY_num;
			this.branchCloudX_arr;
			this.branchCloudY_arr;
			this.branchThickness_arr;
			this.midRatio_num = 20;
			this.midRatioTaper_num = 0.95;
			this.termDelta_num = 15;
			this.termDeltaTaper_num = 0.95;
			this.lastLegDist_num = 15;
			this.branchProbe_num = 0.5;
			this.branchFactor_num = 0.9;
			this.isBranching_bool = true;
			this.branchCount_num = 0;
			this.branchMax_num = 3;
			this.branchRangeXmax_num = 100;//30
			this.branchRangeXmin_num = 50;//20
			this.branchRangeYmax_num = 80;
			this.branchRangeYmin_num = 50;
			this.thickness_num = 6; 
			this.thicknessTaper_num = 0.3; 
			this.color_str = "#ffffff"; 
			this.termX_num;
			this.termY_num;
			/*
			
			*/
			this.createLightningFunc = function (container_mc, coordX_num, minLenght_num, maxLenght_num)
			{
				/*
				
				*/
				this.cloudX_num = 0;
				this.cloudY_num = 0;
				this.groundX_num = 0;
				this.groundY_num = Math.round((maxLenght_num - minLenght_num) * Math.random()) + minLenght_num;
				this.branchCloudX_arr = new Array();
				this.branchCloudY_arr = new Array();
				this.branchThickness_arr = new Array();
				/*
				
				*/
				this.lightning_shape = new createjs.Shape();
				container_mc.addChild(this.lightning_shape);
				this.lightning_shape.x = coordX_num;
				this.lightning_shape.y = 0;
				/*
				
				*/
				var glowingBall_shape = new createjs.Shape();
				glowingBall_shape.graphics.beginFill(this.color_str);
				glowingBall_shape.graphics.drawCircle(0, 0, 10);
				glowingBall_shape.graphics.endFill();
				container_mc.addChild(glowingBall_shape);
				glowingBall_shape.alpha = 0.5;
				glowingBall_shape.x = coordX_num;
				glowingBall_shape.y = 0;
				/*
				
				*/
				this._getTermFunc();
			};
			/*
			
			*/
			this._setBranchDefaultsFunc = function()
			{
				this.midRatio_num = 20;
				this.midRatioTaper_num = 0.95;
				this.termDelta_num = 5;
				this.termDeltaTaper_num = 0.95;
				this.lastLegDist_num = 15;
				this.thicknessTaper_num = 0.1;
			}
			/*
			
			*/
			this._getTermFunc = function()
			{
				var _lenghtX_num = this.groundX_num - this.cloudX_num;
				var _lenghtY_num = this.groundY_num - this.cloudY_num;
				var midTermX_num = this.cloudX_num + (_lenghtX_num / this.midRatio_num);
				var midTermY_num = this.cloudY_num + (_lenghtY_num / this.midRatio_num);
				if (Math.abs(midTermX_num - this.groundX_num) < this.lastLegDist_num && Math.abs(midTermY_num - this.groundY_num) < this.lastLegDist_num)
				{
					this.termX_num = this.groundX_num;
					this.termY_num = this.groundY_num;
					this._drawStrikeFunc();
					if (this.isBranching_bool)
					{
						this._makeBranchFunc();
					}
					return;
				}
				var rndAngle_num = Math.random() * Math.PI;
				var rndDelta_num = Math.random() * this.termDelta_num;
				this.termX_num = midTermX_num + (rndDelta_num * Math.cos(rndAngle_num));
				this.termY_num = midTermY_num + (rndDelta_num * Math.sin(rndAngle_num));
				var rndNum_num = Math.random();
				if (rndNum_num < this.branchProbe_num && this.branchCount_num < this.branchMax_num && this.isBranching_bool)
				{
					this.branchCloudX_arr[this.branchCount_num] = this.cloudX_num;
					this.branchCloudY_arr[this.branchCount_num] = this.cloudY_num;
					this.branchThickness_arr[this.branchCount_num] = this.thickness_num;
					this.branchCount_num++;
					this.branchProbe_num *= this.branchFactor_num;
				}
				this._drawStrikeFunc(); 
				this._getTermFunc();
			}
			/*
			
			*/
			this._drawStrikeFunc = function()
			{
				this.lightning_shape.graphics.setStrokeStyle(this.thickness_num);
				this.lightning_shape.graphics.beginStroke(this.color_str);
				this.thickness_num = Math.max(0.01, this.thickness_num - this.thicknessTaper_num);
				this.lightning_shape.graphics.moveTo(this.cloudX_num, this.cloudY_num);
				this.lightning_shape.graphics.lineTo(this.termX_num, this.termY_num);
				this.cloudX_num = this.termX_num;
				this.cloudY_num = this.termY_num;
				this.midRatio_num *= this.midRatioTaper_num;
				this.termDelta_num *= this.termDeltaTaper_num;
			}
			/*
			
			*/
			this._makeBranchFunc = function()
			{
				var trigger_num = -1;
				for (var i = 0; i < this.branchCloudX_arr.length; i++)
				{
					this.isBranching_bool = false;
					this.cloudX_num = this.branchCloudX_arr[i];
					this.cloudY_num = this.branchCloudY_arr[i];
					this.thickness_num = this.branchThickness_arr[i] / 2;
					this.groundX_num = this.cloudX_num + trigger_num * (Math.random() * (this.branchRangeXmax_num - this.branchRangeXmin_num) + this.branchRangeXmin_num);
					this.groundY_num = this.cloudY_num + (Math.random() * (this.branchRangeYmax_num - this.branchRangeYmin_num) + this.branchRangeYmin_num);
					this._setBranchDefaultsFunc();
					this._getTermFunc();
					trigger_num *= -1;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.thunder_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-38,1600,638);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.social_network_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickSocialNetworkMcFunc, false);
		/*
		
		*/
		var enSocialNetwork_arr = ["fb", "youtube", "twitter"];
		var ruSocialNetwork_arr = ["vk", "vk", "youtube"];
		var social_network_str = enSocialNetwork_arr[Math.floor(Math.random() * enSocialNetwork_arr.length)];
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			social_network_str = ruSocialNetwork_arr[Math.floor(Math.random() * ruSocialNetwork_arr.length)];
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		this.body_mc.gotoAndStop(social_network_str);
		/*
		
		*/
		function _onClickSocialNetworkMcFunc(event)
		{
			if(social_network_str == "fb")
			{
				window.open("https://facebook.com/dlgirlsgames", '_blank');
			}
			if(social_network_str == "vk")
			{
				window.open("https://vk.com/dlgirls", '_blank');
			}
			if(social_network_str == "youtube")
			{
				window.open("https://youtube.com/channel/UC7WA6wxCaCbCoLrQu-SbA8g", '_blank');
			}
			if(social_network_str == "twitter")
			{
				window.open("https://twitter.com/DLstudio_2012", '_blank');
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.social_network_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQCiChgBDiQABDjiiChQihChjjAAQjiAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.nav_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).to({alpha:0.898},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({alpha:1},10).to({alpha:0.898},20).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AmEMgQhsAAhNhNQhLhMAAhrIAAw3QAAhrBLhMQBNhNBsAAIMJAAQBsAABMBNQBNBMgBBrIAAQ3QABBrhNBMQhMBNhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_7_mc();
	this.instance.setTransform(97.9,45,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_1 = new lib.more_games_7_mc();
	this.instance_1.setTransform(127.2,56.6,1.553,1.553,0,0,0,3.5,3.9);

	this.instance_2 = new lib.more_games_7_mc();
	this.instance_2.setTransform(117.9,50.5,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_3 = new lib.more_games_7_mc();
	this.instance_3.setTransform(26.9,80,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_4 = new lib.more_games_7_mc();
	this.instance_4.setTransform(56.4,108.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_5 = new lib.more_games_7_mc();
	this.instance_5.setTransform(71.4,113.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_6 = new lib.more_games_11_mc();
	this.instance_6.setTransform(94.6,90.6,0.964,0.964,-15,0,0,22.1,10);

	this.instance_7 = new lib.more_games_13_mc();
	this.instance_7.setTransform(16,64.1,0.987,0.987,60,0,0,11.8,12);

	this.instance_8 = new lib.more_games_13_mc();
	this.instance_8.setTransform(64,100.6,1.051,1.051,0,0,0,11.9,11.9);

	this.instance_9 = new lib.more_games_12_img();
	this.instance_9.setTransform(10.7,37.7);

	this.instance_10 = new lib.more_games_14_mc();
	this.instance_10.setTransform(82,109.1,0.929,0.929,180,0,0,8.3,13.3);

	this.instance_11 = new lib.more_games_9_mc();
	this.instance_11.setTransform(79.8,80.3,1,1,0,0,0,41.1,30);

	this.instance_12 = new lib.more_games_15_mc();
	this.instance_12.setTransform(81.5,45.2,2.743,2.743,0,0,0,3.8,3.8);

	this.instance_13 = new lib.more_games_14_mc();
	this.instance_13.setTransform(53.4,48.6,1.196,1.196,150,0,0,8.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.more_games_11_img();
	this.instance_14.setTransform(95,33.3,0.897,0.897,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.more_games_4_img();
	this.instance_15.setTransform(26.4,5.4,0.339,0.339,-15);

	this.instance_16 = new lib.more_games_5_img();
	this.instance_16.setTransform(98.4,5.1,0.239,0.239,30);

	this.instance_17 = new lib.more_games_2_img();
	this.instance_17.setTransform(107,0,0.529,0.529,15);

	this.instance_18 = new lib.more_games_3_img();
	this.instance_18.setTransform(44.2,4.7,0.316,0.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.7,122.4);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_12_mc();
	this.instance.setTransform(-4.8,-46.8,0.322,0.322,0,0,0,25,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.more_games_12_mc();
	this.instance_1.setTransform(-4.8,25.2,0.322,0.322,0,0,0,25,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(37));

	// animation
	this.instance_2 = new lib.more_games_12_mc();
	this.instance_2.setTransform(-45.1,-28.6,0.418,0.418,0,0,0,25,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.more_games_12_mc();
	this.instance_3.setTransform(17.9,11.3,0.418,0.418,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(48));

	// animation
	this.instance_4 = new lib.more_games_8_mc();
	this.instance_4.setTransform(38.3,-2.7,1,1,-105,0,0,24.9,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({rotation:0,x:62.7,y:23.2},11,cjs.Ease.get(1)).wait(54).to({scaleX:0.69,scaleY:0.69,rotation:-105,x:34.8,y:7.2},12,cjs.Ease.get(-1)).to({_off:true},2).wait(8));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(0.2,-6.5,1.074,0.924,0,0,0,67.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({regX:67.2,scaleX:0.96,scaleY:0.83,y:-5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.57,y:-25.8},2).to({regX:67.1,scaleX:1.07,scaleY:0.07,y:-58.5},4).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.92,y:-6.5},7).to({y:-4.5},2).to({y:-6.5},2).wait(3));

	// animation
	this.instance_6 = new lib.more_games_3_mc();
	this.instance_6.setTransform(0.3,21.9,1.074,1.074,0,0,0,67.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2,y:20.3},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3,y:21.9},4,cjs.Ease.get(1)).wait(82).to({y:23.9},2).to({y:21.9},2).wait(3));

	// animation
	this.instance_7 = new lib.more_games_4_mc();
	this.instance_7.setTransform(3,2.2,0.815,0.685,0,0,0,75.3,61.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({scaleX:1,scaleY:0.84,x:3.5,y:-3.3},6).to({scaleY:1.09,y:-18.8},6,cjs.Ease.get(1)).to({scaleY:1,y:-13.3},2).wait(58).to({scaleY:0.88,y:-5.7},6).to({regX:75.4,scaleX:0.91,scaleY:0.79,y:1.4},7).to({_off:true},1).wait(7));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(0.3,6.9,1.074,1.074,0,0,0,67.2,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3},4,cjs.Ease.get(1)).wait(82).to({y:8.9},2).to({y:6.9},2).wait(3));

	// animation
	this.instance_9 = new lib.more_games_6_mc();
	this.instance_9.setTransform(0.2,-61.5,1.074,0.039,0,180,0,67.1,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({regY:57.1,scaleY:0.29,y:-72.8},5).wait(60).to({regY:57.5,scaleY:0.04,y:-61.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// graph
	this.instance_10 = new lib.more_games_10_mc();
	this.instance_10.setTransform(2.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-59.4,145,139.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-72.2,-59.3,144.9,139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-71.8,-58.9,144,139.1), new cjs.Rectangle(-70.3,-57.6,142.4,137.8), new cjs.Rectangle(-68,-55.4,140.1,135.6), new cjs.Rectangle(-67.6,-52.3,139.7,132.6), new cjs.Rectangle(-68,-55.5,140.1,135.7), new cjs.Rectangle(-70.4,-58.6,142.5,138.9), new cjs.Rectangle(-71.8,-59.5,144,139.7), new cjs.Rectangle(-72.3,-60.3,146.5,140.6), new cjs.Rectangle(-72.2,-61.3,148.7,141.6), new cjs.Rectangle(-72.2,-62.2,151.1,142.5), new cjs.Rectangle(-72.2,-64.6,151.1,144.8), new cjs.Rectangle(-72.2,-71.8,158.9,152), new cjs.Rectangle(-72.2,-77.7,164.1,158), new cjs.Rectangle(-72.2,-83.3,166.4,163.6), new cjs.Rectangle(-72.2,-89.6,166.5,169.9), new cjs.Rectangle(-72.2,-96,165.6,176.2), new cjs.Rectangle(-72.2,-95.9,164.1,176.2), new cjs.Rectangle(-72.2,-95.9,162.5,176.2), new cjs.Rectangle(-72.2,-95.9,161.1,176.2), new cjs.Rectangle(-72.2,-95.9,160.2,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-96,160.1,176.2), new cjs.Rectangle(-72.2,-95.1,160.6,175.4), new cjs.Rectangle(-72.2,-92.5,161.4,172.7), new cjs.Rectangle(-72.2,-88.1,162.1,168.3), new cjs.Rectangle(-72.2,-82,162.5,162.3), new cjs.Rectangle(-72.2,-74.2,162.4,154.4), new cjs.Rectangle(-72.2,-64.6,161.3,144.8), new cjs.Rectangle(-72.2,-62.2,158.6,142.5), new cjs.Rectangle(-72.2,-61.8,153.8,142), new cjs.Rectangle(-72.2,-61.4,148,141.6), new cjs.Rectangle(-72.2,-61,147.1,141.2), new cjs.Rectangle(-72.2,-60.6,146,140.8), new cjs.Rectangle(-72.2,-60.2,145,140.4), new cjs.Rectangle(-72.2,-59.8,144.9,140), new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.5), new cjs.Rectangle(-72.3,-57.4,145,137.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.6), rect=new cjs.Rectangle(-72.3,-59.4,145,139.6), rect, rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-220,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.full_screen_1_mc();

	this.instance_1 = new lib.full_screen_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.free_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.free_games_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.free_games_1_mc();
	this.instance_1.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.83,scaleY:0.83,x:-5},10).to({x:5},10).to({scaleX:1,scaleY:1,x:0},10).wait(21));

	// bg
	this.instance_1 = new lib.banner_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/////*
		////ищем наиболее подходящий язык
		////https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		////*/
		////this.stop();
		////this.body_mc.gotoAndStop(0);
		/////*
		////
		////*/
		////var label_str = "en";
		////var lang_str = window.navigator.language || navigator.userLanguage;
		////lang_str = lang_str.split("-")[0].toLowerCase();
		/////*
		////
		////*/
		////if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		////{
		////	label_str = "ru";
		////}
		////if (lang_str == "de")
		////{
		////	label_str = "de";
		////}
		////if (lang_str == "fr")
		////{
		////	label_str = "fr";
		////}
		////if (lang_str == "it")
		////{
		////	label_str = "it";
		////}
		////if (lang_str == "es")
		////{
		////	label_str = "es";
		////}
		////if (lang_str == "pt")
		////{
		////	label_str = "pt";
		////}
		////if (lang_str == "tr")
		////{
		////	label_str = "tr";
		////}
		////if (lang_str == "ja")
		////{
		////	label_str = "ja";
		////}
		////if (lang_str == "hi")
		////{
		////	label_str = "hi";
		////}
		////if (lang_str == "ar")
		////{
		////	label_str = "ar";
		////}
		////if (lang_str == "id")
		////{
		////	label_str = "id";
		////}
		////if (lang_str == "zh")
		////{
		////	label_str = "zh";
		////}
		/////*
		////
		////*/
		////this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_antiblocking_ads_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.antiblocking_ads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.title_antiblocking_ads_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(580,115);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// banner
	this.banner_mc = new lib.redirect_2_mc();
	this.banner_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-18.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-12,107,24);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(440,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(210,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(510,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85,71.7,633.3,483.3);
p.frameBounds = [rect];


(lib.orientation_lock_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.InstructionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.preview_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.location_3 = new lib.hero_3_mc();
	this.location_3.setTransform(-1.7,4.8,0.86,0.86,0,0,0,-7.8,34.6);

	this.timeline.addTween(cjs.Tween.get(this.location_3).to({regX:-7.7,scaleX:0.84,scaleY:0.84,x:-1.4,y:4.1},79).to({regX:-7.8,scaleX:0.86,scaleY:0.86,x:-1.7,y:4.8},80).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-295,290,590);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preview_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.location_2 = new lib.hero_2_mc();
	this.location_2.setTransform(-4.5,19.1,0.86,0.86,0,0,0,-5.3,47.8);

	this.timeline.addTween(cjs.Tween.get(this.location_2).to({regY:47.7,scaleX:0.84,scaleY:0.84,x:-4.4},79).to({regY:47.8,scaleX:0.86,scaleY:0.86,x:-4.5},80).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-295,290,590);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preview_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.location_1 = new lib.hero_1_mc();
	this.location_1.setTransform(0,-15,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.location_1).to({regY:-0.1,scaleX:0.8,scaleY:0.8,y:-15.1},79).to({regY:0,scaleX:0.82,scaleY:0.82,y:-15},80).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-295,290,590);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-230,760,460);
p.frameBounds = [rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_1
	this.location_1 = new lib.hero_1_mc();
	this.location_1.setTransform(392.7,356,1,1,0,0,0,2.7,76);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:1076},0).wait(2));

	// location_2
	this.location_2 = new lib.hero_2_mc();
	this.location_2.setTransform(390,1000);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:280},0).wait(1).to({y:1000},0).wait(1));

	// location_3
	this.location_3 = new lib.hero_3_mc();
	this.location_3.setTransform(390,1000);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(2).to({y:280},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(297.4,5.1,193.6,1311.8);
p.frameBounds = [rect, new cjs.Rectangle(297.4,31.5,193.6,1285.8), new cjs.Rectangle(297.4,32.4,193.6,1284.8)];


(lib.countdown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_0_mc();

	this.instance_1 = new lib.countdown_1_1_mc();

	this.instance_2 = new lib.countdown_1_2_mc();

	this.instance_3 = new lib.countdown_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.card_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_card_0_mc();

	this.body_1_mc = new lib.animation_card_1_mc();

	this.body_2_mc = new lib.animation_card_2_mc();

	this.body_3_mc = new lib.animation_card_3_mc();

	this.body_4_mc = new lib.animation_card_4_mc();

	this.body_5_mc = new lib.animation_card_5_mc();

	this.body_6_mc = new lib.animation_card_6_mc();

	this.body_7_mc = new lib.animation_card_7_mc();

	this.body_8_mc = new lib.animation_card_8_mc();

	this.body_9_mc = new lib.animation_card_9_mc();

	this.body_10_mc = new lib.animation_card_10_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-610,1600,1820);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.GravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _particleMaxSpeed_num = 4;
		var _particleFadeSpeed_num = 0.01;
		var _particleTotal_num = 25;
		var _particleRange_num = 100;
		var _gravity_num = 0.4;
		/*
		функция добавления частиц
		*/
		function _createExplosionFunc()
		{
			/*
			
			*/
			var particle_mc;
			var i = 0;
			/*
			
			*/
			while (i < _particleTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particleRange_num;
				particle_mc.boundyTop_num = - _particleRange_num;
				particle_mc.boundyRight_num = _particleRange_num;
				particle_mc.boundyBottom_num = _particleRange_num;
				/*
				
				*/
				particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
				particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
				particle_mc.speedX_num *= _particleMaxSpeed_num;
				particle_mc.speedY_num *= _particleMaxSpeed_num;
				/*
				
				*/
				particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= target_mc.fadeSpeed_num;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if(target_mc.speedY_num < _particleMaxSpeed_num)
			{
				target_mc.speedY_num += _gravity_num;
			}
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particleTotal_num--;
				if(_particleTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		запускаем
		*/
		_createExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.gravity_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.flash_6_mc();
	this.instance_1.setTransform(-80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(80,80,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:80.1},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:80,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},3).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},13).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},13).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.sound_1_mc();

	this.instance_1 = new lib.sound_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_0_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,scaleY:0.909,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,472.7,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.947,0.947);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.AntiBlockingAdsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.antiblocking_ads_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.antiblocking_ads_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1040.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,540,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// heroes
	this.instance_1 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// title
	this.instance_2 = new lib.title_mc();
	this.instance_2.setTransform(180,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.instance_3 = new lib.animation_clouds_mc();
	this.instance_3.setTransform(400,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,2040.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_start_level_mc();
	this.instance.setTransform(400,280);

	this.countdown_mc = new lib.countdown_mc();
	this.countdown_mc.setTransform(400,300);

	this.prize_mc = new lib.prize_0_mc();
	this.prize_mc.setTransform(260,320);

	this.instance_1 = new lib.animation_next_round_ru_mc();
	this.instance_1.setTransform(400.5,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.countdown_mc}]},1).to({state:[{t:this.prize_mc}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect, rect, new cjs.Rectangle(-406.7,-180,1333.5,1000), new cjs.Rectangle(-410,-10,1620,620)];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1316.9);
p.frameBounds = [rect];


(lib.LossScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.social_network_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_loss_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// thunder
	this.thunder_comp = new lib.thunder_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.thunder_comp).wait(1));

	// bg
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-320,1980,1301);
p.frameBounds = [rect];


(lib.cards_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-180,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(180,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-180,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-180,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,-60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,-60,0.688,0.688);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(-180,60,0.688,0.688);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(180,60,0.688,0.688);

	this.instance_14 = new lib.card_mc();
	this.instance_14.setTransform(-60,60,0.688,0.688);

	this.instance_15 = new lib.card_mc();
	this.instance_15.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-180,60,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(60,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(180,-60,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-60,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-180,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(180,60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-60,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(60,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-180,-60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(180,180,0.688,0.688);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(-60,60,0.688,0.688);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,-180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-180,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(180,-180,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-180,180,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(180,180,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-60,-180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-180,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(60,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(180,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-60,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(60,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-180,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(180,60,0.688,0.688);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(-60,60,0.688,0.688);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,-180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(0,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(0,-180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-180,0,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(180,0,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-60,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,-180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,60,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,-60,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(180,180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-180,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-60,-180,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-60,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(180,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-90,90);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(90,-90);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(180,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-60,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(80,0,0.937,0.937);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(0,160,0.937,0.937);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-80,0,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(0,-160,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(160,-160,0.937,0.937);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-160,-160,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(180,0,0.687,0.687);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,0,0.687,0.687);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(150,150,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-150,150,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(0,120,0.687,0.687);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(150,-150,0.937,0.937);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-150,-150,0.937,0.937);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(0,-120,0.687,0.687);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-60,0,0.687,0.687);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-180,0,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-225,470,450);
p.frameBounds = [rect];


(lib.cards_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(160,160,0.937,0.937);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-160,160,0.937,0.937);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(0,160,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(160,-160,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-160,-160,0.937,0.937);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(0,-160,0.937,0.937);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(160,0,0.937,0.937);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-160,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(100,100);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-100,100);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(100,-100);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.FlashAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.flash_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.WinScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(720,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,320);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_win_mc();
	this.instance.setTransform(490,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1636.8);
p.frameBounds = [rect];


(lib.cards_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_3_mc();

	this.round_2 = new lib.cards_1_3_mc();

	this.round_3 = new lib.cards_2_3_mc();

	this.round_4 = new lib.cards_3_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_2_mc();

	this.round_2 = new lib.cards_1_2_mc();

	this.round_3 = new lib.cards_2_2_mc();

	this.round_4 = new lib.cards_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// decor
	this.instance = new lib.decor_2_cards_mc();
	this.instance.setTransform(0,0,0.889,0.889);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// bg
	this.instance_1 = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_1_mc();

	this.round_2 = new lib.cards_1_1_mc();

	this.round_3 = new lib.cards_2_1_mc();

	this.round_4 = new lib.cards_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// decor
	this.instance = new lib.decor_1_cards_mc();
	this.instance.setTransform(0,0,0.846,0.846);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance_1 = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_3_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_3_mc();
	this.preview_mc.setTransform(660,300);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_2_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_2_mc();
	this.preview_mc.setTransform(660,300);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(1200,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_1_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_1_mc();
	this.preview_mc.setTransform(660,300);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 253;
	this.text.setTransform(128.5,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.LossScreen();

	this.instance_9 = new lib.WinScreen();

	this.instance_10 = new lib.InstructionScreen();

	this.instance_11 = new lib.forward_mc();
	this.instance_11.setTransform(400,300);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(250,50);

	this.instance_12 = new lib.Cursor();
	this.instance_12.setTransform(190,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_13 = new lib.FlashAnimation();
	this.instance_13.setTransform(400,300);

	this.instance_14 = new lib.OrientationLockScreen();

	this.instance_15 = new lib.CurtainScreen();

	this.instance_16 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_12},{t:this.gravity_explosion_comp},{t:this.instance_11}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).to({state:[{t:this.instance_16}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,-280.8,1600,2040.9), rect=new cjs.Rectangle(-410,-280.8,1620,1261.9), rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-320,1980,1301), new cjs.Rectangle(-400,-319.9,1600,1636.8), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(15,15,480,380), new cjs.Rectangle(250,150,300,300), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-610,1600,1820), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,257,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;