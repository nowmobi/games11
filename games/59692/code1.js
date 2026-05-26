gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.GDTopWallObjects1= [];
gdjs.TutorialCode.GDTopWallObjects2= [];
gdjs.TutorialCode.GDTopWallObjects3= [];
gdjs.TutorialCode.GDBottomWallObjects1= [];
gdjs.TutorialCode.GDBottomWallObjects2= [];
gdjs.TutorialCode.GDBottomWallObjects3= [];
gdjs.TutorialCode.GDLeftWallObjects1= [];
gdjs.TutorialCode.GDLeftWallObjects2= [];
gdjs.TutorialCode.GDLeftWallObjects3= [];
gdjs.TutorialCode.GDRightWallObjects1= [];
gdjs.TutorialCode.GDRightWallObjects2= [];
gdjs.TutorialCode.GDRightWallObjects3= [];
gdjs.TutorialCode.GDBlockObjects1= [];
gdjs.TutorialCode.GDBlockObjects2= [];
gdjs.TutorialCode.GDBlockObjects3= [];
gdjs.TutorialCode.GDBlockStrength_9595TextObjects1= [];
gdjs.TutorialCode.GDBlockStrength_9595TextObjects2= [];
gdjs.TutorialCode.GDBlockStrength_9595TextObjects3= [];
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects1= [];
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects2= [];
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects3= [];
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects1= [];
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects2= [];
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects3= [];
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects1= [];
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects2= [];
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects3= [];
gdjs.TutorialCode.GDExtraBallObjects1= [];
gdjs.TutorialCode.GDExtraBallObjects2= [];
gdjs.TutorialCode.GDExtraBallObjects3= [];
gdjs.TutorialCode.GDLargePlayButtonObjects1= [];
gdjs.TutorialCode.GDLargePlayButtonObjects2= [];
gdjs.TutorialCode.GDLargePlayButtonObjects3= [];
gdjs.TutorialCode.GDSuperPowerUpObjects1= [];
gdjs.TutorialCode.GDSuperPowerUpObjects2= [];
gdjs.TutorialCode.GDSuperPowerUpObjects3= [];
gdjs.TutorialCode.GDBackgroundObjects1= [];
gdjs.TutorialCode.GDBackgroundObjects2= [];
gdjs.TutorialCode.GDBackgroundObjects3= [];
gdjs.TutorialCode.GDFadeInOutObjects1= [];
gdjs.TutorialCode.GDFadeInOutObjects2= [];
gdjs.TutorialCode.GDFadeInOutObjects3= [];


gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.TutorialCode.GDBlockObjects2});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDExtraBallObjects2Objects = Hashtable.newFrom({"ExtraBall": gdjs.TutorialCode.GDExtraBallObjects2});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.TutorialCode.GDFadeInOutObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDFadeInOutObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDFadeInOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.TutorialCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("ExtraBall"), gdjs.TutorialCode.GDExtraBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBlockObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDExtraBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.TutorialCode.GDBlockObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects1[i].getBehavior("Effect").enableEffect("Outline", false);
}
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TutorialCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.asyncCallback14322732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TutorialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.TutorialCode.localVariables.length = 0;
}
gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TutorialCode.asyncCallback14322732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.TutorialCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDLargePlayButtonObjects1[k] = gdjs.TutorialCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.TutorialCode.GDFadeInOutObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 50, 2);
}{for(var i = 0, len = gdjs.TutorialCode.GDFadeInOutObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFadeInOutObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TutorialCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList1(runtimeScene);
}


{


gdjs.TutorialCode.eventsList3(runtimeScene);
}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDTopWallObjects1.length = 0;
gdjs.TutorialCode.GDTopWallObjects2.length = 0;
gdjs.TutorialCode.GDTopWallObjects3.length = 0;
gdjs.TutorialCode.GDBottomWallObjects1.length = 0;
gdjs.TutorialCode.GDBottomWallObjects2.length = 0;
gdjs.TutorialCode.GDBottomWallObjects3.length = 0;
gdjs.TutorialCode.GDLeftWallObjects1.length = 0;
gdjs.TutorialCode.GDLeftWallObjects2.length = 0;
gdjs.TutorialCode.GDLeftWallObjects3.length = 0;
gdjs.TutorialCode.GDRightWallObjects1.length = 0;
gdjs.TutorialCode.GDRightWallObjects2.length = 0;
gdjs.TutorialCode.GDRightWallObjects3.length = 0;
gdjs.TutorialCode.GDBlockObjects1.length = 0;
gdjs.TutorialCode.GDBlockObjects2.length = 0;
gdjs.TutorialCode.GDBlockObjects3.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDExtraBallObjects1.length = 0;
gdjs.TutorialCode.GDExtraBallObjects2.length = 0;
gdjs.TutorialCode.GDExtraBallObjects3.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects1.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects2.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects3.length = 0;
gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects1.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects2.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects3.length = 0;

gdjs.TutorialCode.eventsList4(runtimeScene);
gdjs.TutorialCode.GDTopWallObjects1.length = 0;
gdjs.TutorialCode.GDTopWallObjects2.length = 0;
gdjs.TutorialCode.GDTopWallObjects3.length = 0;
gdjs.TutorialCode.GDBottomWallObjects1.length = 0;
gdjs.TutorialCode.GDBottomWallObjects2.length = 0;
gdjs.TutorialCode.GDBottomWallObjects3.length = 0;
gdjs.TutorialCode.GDLeftWallObjects1.length = 0;
gdjs.TutorialCode.GDLeftWallObjects2.length = 0;
gdjs.TutorialCode.GDLeftWallObjects3.length = 0;
gdjs.TutorialCode.GDRightWallObjects1.length = 0;
gdjs.TutorialCode.GDRightWallObjects2.length = 0;
gdjs.TutorialCode.GDRightWallObjects3.length = 0;
gdjs.TutorialCode.GDBlockObjects1.length = 0;
gdjs.TutorialCode.GDBlockObjects2.length = 0;
gdjs.TutorialCode.GDBlockObjects3.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDBlockStrength_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDBlock_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDExtraBall_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_9595Tutorial_9595TextObjects3.length = 0;
gdjs.TutorialCode.GDExtraBallObjects1.length = 0;
gdjs.TutorialCode.GDExtraBallObjects2.length = 0;
gdjs.TutorialCode.GDExtraBallObjects3.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects1.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects2.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects3.length = 0;
gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects1.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects2.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects3.length = 0;


return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
