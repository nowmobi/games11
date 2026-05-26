gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.forEachIndex2 = 0;

gdjs.Main_32MenuCode.forEachObjects2 = [];

gdjs.Main_32MenuCode.forEachTemporary2 = null;

gdjs.Main_32MenuCode.forEachTotalCount2 = 0;

gdjs.Main_32MenuCode.GDBallObjects1= [];
gdjs.Main_32MenuCode.GDBallObjects2= [];
gdjs.Main_32MenuCode.GDBallObjects3= [];
gdjs.Main_32MenuCode.GDBallObjects4= [];
gdjs.Main_32MenuCode.GDBallStartPositionObjects1= [];
gdjs.Main_32MenuCode.GDBallStartPositionObjects2= [];
gdjs.Main_32MenuCode.GDBallStartPositionObjects3= [];
gdjs.Main_32MenuCode.GDBallStartPositionObjects4= [];
gdjs.Main_32MenuCode.GDNextStartPositionObjects1= [];
gdjs.Main_32MenuCode.GDNextStartPositionObjects2= [];
gdjs.Main_32MenuCode.GDNextStartPositionObjects3= [];
gdjs.Main_32MenuCode.GDNextStartPositionObjects4= [];
gdjs.Main_32MenuCode.GDTopWallObjects1= [];
gdjs.Main_32MenuCode.GDTopWallObjects2= [];
gdjs.Main_32MenuCode.GDTopWallObjects3= [];
gdjs.Main_32MenuCode.GDTopWallObjects4= [];
gdjs.Main_32MenuCode.GDBottomWallObjects1= [];
gdjs.Main_32MenuCode.GDBottomWallObjects2= [];
gdjs.Main_32MenuCode.GDBottomWallObjects3= [];
gdjs.Main_32MenuCode.GDBottomWallObjects4= [];
gdjs.Main_32MenuCode.GDLeftWallObjects1= [];
gdjs.Main_32MenuCode.GDLeftWallObjects2= [];
gdjs.Main_32MenuCode.GDLeftWallObjects3= [];
gdjs.Main_32MenuCode.GDLeftWallObjects4= [];
gdjs.Main_32MenuCode.GDRightWallObjects1= [];
gdjs.Main_32MenuCode.GDRightWallObjects2= [];
gdjs.Main_32MenuCode.GDRightWallObjects3= [];
gdjs.Main_32MenuCode.GDRightWallObjects4= [];
gdjs.Main_32MenuCode.GDBlockObjects1= [];
gdjs.Main_32MenuCode.GDBlockObjects2= [];
gdjs.Main_32MenuCode.GDBlockObjects3= [];
gdjs.Main_32MenuCode.GDBlockObjects4= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4= [];
gdjs.Main_32MenuCode.GDWorldObjects1= [];
gdjs.Main_32MenuCode.GDWorldObjects2= [];
gdjs.Main_32MenuCode.GDWorldObjects3= [];
gdjs.Main_32MenuCode.GDWorldObjects4= [];
gdjs.Main_32MenuCode.GDMoreGamesObjects1= [];
gdjs.Main_32MenuCode.GDMoreGamesObjects2= [];
gdjs.Main_32MenuCode.GDMoreGamesObjects3= [];
gdjs.Main_32MenuCode.GDMoreGamesObjects4= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects3= [];
gdjs.Main_32MenuCode.GDBackgroundObjects4= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects1= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects2= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects3= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects4= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.Main_32MenuCode.GDFadeInOutObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeInOutObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeInOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.VariablesContainer.badVariable.setNumber(5);
}{gdjs.VariablesContainer.badVariable.setNumber(0.1);
}{gdjs.VariablesContainer.badVariable.setNumber(300);
}{gdjs.VariablesContainer.badVariable.setNumber(1);
}{gdjs.VariablesContainer.badVariable.setNumber(16);
}{gdjs.VariablesContainer.badVariable.setNumber(0.2);
}{gdjs.VariablesContainer.badVariable.setNumber(gdjs.randomInRange(200, 340));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Xmas_Music.mp3", 1, true, 15, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Title_Text"), gdjs.Main_32MenuCode.GDTitle_9595TextObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitle_9595TextObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootingDelay");
}}

}


{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfEmptyGDBallObjects = Hashtable.newFrom({"Ball": []});
gdjs.Main_32MenuCode.asyncCallback14228772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.VariablesContainer.badVariable.setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("MaxBalls")));
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14228772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.Main_32MenuCode.GDBallObjects2});
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShootingDelay") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ShootingDelay"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BallStartPosition"), gdjs.Main_32MenuCode.GDBallStartPositionObjects2);
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects2Objects, (( gdjs.Main_32MenuCode.GDBallStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDBallStartPositionObjects2[0].getPointX("")), (( gdjs.Main_32MenuCode.GDBallStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDBallStartPositionObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("DirectionToShoot")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("BallLaunchForce")), (gdjs.Main_32MenuCode.GDBallObjects2[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Main_32MenuCode.GDBallObjects2[i].getBehavior("Physics2").getMassCenterY()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootingDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - PUNCH DESIGNED LIGHT 78.aac", false, 20, gdjs.randomFloatInRange(0.9, 1.1));
}{gdjs.VariablesContainer.badVariable.sub(1);
}}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfEmptyGDBallObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14228476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BallStartPosition"), gdjs.Main_32MenuCode.GDBallStartPositionObjects3);
gdjs.copyArray(runtimeScene.getObjects("NextStartPosition"), gdjs.Main_32MenuCode.GDNextStartPositionObjects3);
{gdjs.VariablesContainer.badVariable.setNumber(gdjs.randomInRange(200, 340));
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBallStartPositionObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBallStartPositionObjects3[i].getBehavior("Tween").addObjectPositionXTween2("SlideOver", (( gdjs.Main_32MenuCode.GDNextStartPositionObjects3.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDNextStartPositionObjects3[0].getPointX("")), "linear", 0.5, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(gdjs.VariablesContainer.badVariable) > 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.Main_32MenuCode.GDBallObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBottomWallObjects2Objects = Hashtable.newFrom({"BottomWall": gdjs.Main_32MenuCode.GDBottomWallObjects2});
gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Main_32MenuCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomWall"), gdjs.Main_32MenuCode.GDBottomWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects2Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBottomWallObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("BallStartPosition"), gdjs.Main_32MenuCode.GDBallStartPositionObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextStartPosition"), gdjs.Main_32MenuCode.GDNextStartPositionObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDNextStartPositionObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNextStartPositionObjects2[i].setPosition((( gdjs.Main_32MenuCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDBallObjects2[0].getPointX("")),(( gdjs.Main_32MenuCode.GDBallStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDBallStartPositionObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBallObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.Main_32MenuCode.GDBallObjects3});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects3Objects = Hashtable.newFrom({"Block": gdjs.Main_32MenuCode.GDBlockObjects3});
gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDBallObjects2, gdjs.Main_32MenuCode.GDBallObjects3);

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects3Objects, "Physics2", gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects3Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBlockObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects3[i].returnVariable(gdjs.Main_32MenuCode.GDBlockObjects3[i].getVariables().get("BlockStrength")).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 20, 1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 10, 10, 0, 0, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}}

}


};gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlockObjects2[i].getBehavior("Effect").enableEffect("Outline", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Main_32MenuCode.GDBallObjects1);

for (gdjs.Main_32MenuCode.forEachIndex2 = 0;gdjs.Main_32MenuCode.forEachIndex2 < gdjs.Main_32MenuCode.GDBallObjects1.length;++gdjs.Main_32MenuCode.forEachIndex2) {
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;


gdjs.Main_32MenuCode.forEachTemporary2 = gdjs.Main_32MenuCode.GDBallObjects1[gdjs.Main_32MenuCode.forEachIndex2];
gdjs.Main_32MenuCode.GDBallObjects2.push(gdjs.Main_32MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Main_32MenuCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList6(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList8(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList5(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList9(runtimeScene);
}


};gdjs.Main_32MenuCode.asyncCallback14240628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.window.openURL("https://bit.ly/3aY3vp7", runtimeScene);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14240628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14238012);
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14239260);
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 0.5);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects4Objects = Hashtable.newFrom({"Block": gdjs.Main_32MenuCode.GDBlockObjects4});
gdjs.Main_32MenuCode.asyncCallback14243940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects4);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "1318fc69-b475-4eef-ab48-6f737a0422d2", true);
}{gdjs.physics2.setTimeScale(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects4Objects, "Physics2", 0);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14243940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.Main_32MenuCode.GDBlockObjects2});
gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14241628);
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14242636);
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14245188);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32MenuCode.GDBlockObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 2);
}{gdjs.physics2.setTimeScale(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBlockObjects2Objects, "Physics2", 1);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


};gdjs.Main_32MenuCode.asyncCallback14246892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14246892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.Main_32MenuCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.Main_32MenuCode.GDFadeInOutObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 50, 2);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeInOutObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeInOutObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList17 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList12(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList14(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList16(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList18 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList10(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList17(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("MoreGames"), gdjs.Main_32MenuCode.GDMoreGamesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMoreGamesObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMoreGamesObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDMoreGamesObjects1[k] = gdjs.Main_32MenuCode.GDMoreGamesObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMoreGamesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.giugames.com", runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio - FX3352 Mouth Pop 2.aac", false, 100, 1);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDBallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects4.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects1.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects2.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects3.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects4.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects1.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects2.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects3.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects4.length = 0;

gdjs.Main_32MenuCode.eventsList18(runtimeScene);
gdjs.Main_32MenuCode.GDBallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDBallStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDNextStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlockObjects4.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects1.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects2.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects3.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects4.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects1.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects2.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects3.length = 0;
gdjs.Main_32MenuCode.GDMoreGamesObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects4.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
