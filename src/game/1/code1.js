gdjs._25302_21160Code = {};
gdjs._25302_21160Code.localVariables = [];
gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1= [];
gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects2= [];
gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1= [];
gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects2= [];
gdjs._25302_21160Code.GDMouseCursorObjects1= [];
gdjs._25302_21160Code.GDMouseCursorObjects2= [];
gdjs._25302_21160Code.GDWindows_959598_9595background_9595colorObjects1= [];
gdjs._25302_21160Code.GDWindows_959598_9595background_9595colorObjects2= [];
gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects1= [];
gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects2= [];
gdjs._25302_21160Code.GD_9529366_9524577_9526639Objects1= [];
gdjs._25302_21160Code.GD_9529366_9524577_9526639Objects2= [];
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1= [];
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects2= [];


gdjs._25302_21160Code.mapOfGDgdjs_9546_959525302_959521160Code_9546GD_95959523436_95959525104_95959535821Objects1Objects = Hashtable.newFrom({"完成语": gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects1});
gdjs._25302_21160Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("开始菜单"), gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length;i<l;++i) {
    if ( gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[k] = gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[i];
        ++k;
    }
}
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1 */
{for(var i = 0, len = gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length ;i < len;++i) {
    gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("开始菜单"), gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length;i<l;++i) {
    if ( gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[k] = gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1[i];
        ++k;
    }
}
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "标题页面");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("文件夹"), gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1);
gdjs.copyArray(runtimeScene.getObjects("笔记本"), gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1.length;i<l;++i) {
    if ( gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1[i].isCollidingWithPoint((( gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length === 0 ) ? 0 :gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[0].getCenterXInScene()), (( gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length === 0 ) ? 0 :gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[0].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1[k] = gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1[i];
        ++k;
    }
}
gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1 */
/* Reuse gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1 */
{for(var i = 0, len = gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1.length ;i < len;++i) {
    gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length ;i < len;++i) {
    gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}{for(var i = 0, len = gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length ;i < len;++i) {
    gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].returnVariable(gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("文件夹"), gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length;i<l;++i) {
    if ( gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getVariableNumber(gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[k] = gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i];
        ++k;
    }
}
gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1 */
gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._25302_21160Code.mapOfGDgdjs_9546_959525302_959521160Code_9546GD_95959523436_95959525104_95959535821Objects1Objects, 36, 100, "90");
}{for(var i = 0, len = gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length ;i < len;++i) {
    gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].returnVariable(gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


};

gdjs._25302_21160Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects1.length = 0;
gdjs._25302_21160Code.GD_9531508_9535760_9526412Objects2.length = 0;
gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects1.length = 0;
gdjs._25302_21160Code.GD_9525991_9520214_9522841Objects2.length = 0;
gdjs._25302_21160Code.GDMouseCursorObjects1.length = 0;
gdjs._25302_21160Code.GDMouseCursorObjects2.length = 0;
gdjs._25302_21160Code.GDWindows_959598_9595background_9595colorObjects1.length = 0;
gdjs._25302_21160Code.GDWindows_959598_9595background_9595colorObjects2.length = 0;
gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects1.length = 0;
gdjs._25302_21160Code.GD_9523436_9525104_9535821Objects2.length = 0;
gdjs._25302_21160Code.GD_9529366_9524577_9526639Objects1.length = 0;
gdjs._25302_21160Code.GD_9529366_9524577_9526639Objects2.length = 0;
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects1.length = 0;
gdjs._25302_21160Code.GD_9524320_9522987_9533756_9521333Objects2.length = 0;

gdjs._25302_21160Code.eventsList0(runtimeScene);

return;

}

gdjs['_25302_21160Code'] = gdjs._25302_21160Code;
