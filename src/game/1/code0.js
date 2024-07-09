gdjs._26631_39064_39029_38754Code = {};
gdjs._26631_39064_39029_38754Code.localVariables = [];
gdjs._26631_39064_39029_38754Code.GDMouseCursorObjects1= [];
gdjs._26631_39064_39029_38754Code.GDMouseCursorObjects2= [];
gdjs._26631_39064_39029_38754Code.GDWindows_959598_9595background_9595colorObjects1= [];
gdjs._26631_39064_39029_38754Code.GDWindows_959598_9595background_9595colorObjects2= [];
gdjs._26631_39064_39029_38754Code.GD_9529366_9524577_9526639Objects1= [];
gdjs._26631_39064_39029_38754Code.GD_9529366_9524577_9526639Objects2= [];
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1= [];
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects2= [];
gdjs._26631_39064_39029_38754Code.GDwindowObjects1= [];
gdjs._26631_39064_39029_38754Code.GDwindowObjects2= [];
gdjs._26631_39064_39029_38754Code.GDdrag_9595and_9595drop_9595app_9595iconObjects1= [];
gdjs._26631_39064_39029_38754Code.GDdrag_9595and_9595drop_9595app_9595iconObjects2= [];
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1= [];
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects2= [];


gdjs._26631_39064_39029_38754Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("开始菜单"), gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length;i<l;++i) {
    if ( gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[k] = gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[i];
        ++k;
    }
}
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1 */
{for(var i = 0, len = gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length ;i < len;++i) {
    gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("开始菜单"), gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length;i<l;++i) {
    if ( gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[k] = gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1[i];
        ++k;
    }
}
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "标题页面");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("按钮_80px"), gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length;i<l;++i) {
    if ( gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[k] = gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[i];
        ++k;
    }
}
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1 */
{for(var i = 0, len = gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length ;i < len;++i) {
    gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("按钮_80px"), gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length;i<l;++i) {
    if ( gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[k] = gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1[i];
        ++k;
    }
}
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "拖动");
}}

}


};

gdjs._26631_39064_39029_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26631_39064_39029_38754Code.GDMouseCursorObjects1.length = 0;
gdjs._26631_39064_39029_38754Code.GDMouseCursorObjects2.length = 0;
gdjs._26631_39064_39029_38754Code.GDWindows_959598_9595background_9595colorObjects1.length = 0;
gdjs._26631_39064_39029_38754Code.GDWindows_959598_9595background_9595colorObjects2.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9529366_9524577_9526639Objects1.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9529366_9524577_9526639Objects2.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects1.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9524320_9522987_9533756_9521333Objects2.length = 0;
gdjs._26631_39064_39029_38754Code.GDwindowObjects1.length = 0;
gdjs._26631_39064_39029_38754Code.GDwindowObjects2.length = 0;
gdjs._26631_39064_39029_38754Code.GDdrag_9595and_9595drop_9595app_9595iconObjects1.length = 0;
gdjs._26631_39064_39029_38754Code.GDdrag_9595and_9595drop_9595app_9595iconObjects2.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects1.length = 0;
gdjs._26631_39064_39029_38754Code.GD_9525353_9538062_959580pxObjects2.length = 0;

gdjs._26631_39064_39029_38754Code.eventsList0(runtimeScene);

return;

}

gdjs['_26631_39064_39029_38754Code'] = gdjs._26631_39064_39029_38754Code;
