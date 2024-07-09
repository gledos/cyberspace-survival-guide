
gdjs.evtsExt__CursorType__CursorHover = gdjs.evtsExt__CursorType__CursorHover || {};

/**
 * Behavior generated from Custom cursor when hovered
 */
gdjs.evtsExt__CursorType__CursorHover.CursorHover = class CursorHover extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CursorType__CursorHover.CursorHover.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.cursor_type = behaviorData.cursor_type !== undefined ? behaviorData.cursor_type : "default";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.cursor_type !== newBehaviorData.cursor_type)
      this._behaviorData.cursor_type = newBehaviorData.cursor_type;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    cursor_type: this._behaviorData.cursor_type,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.cursor_type !== undefined)
      this._behaviorData.cursor_type = networkSyncData.props.cursor_type;
  }

  // Properties:
  
  _getcursor_type() {
    return this._behaviorData.cursor_type !== undefined ? this._behaviorData.cursor_type : "default";
  }
  _setcursor_type(newValue) {
    this._behaviorData.cursor_type = newValue;
  }
}

/**
 * Shared data generated from Custom cursor when hovered
 */
gdjs.evtsExt__CursorType__CursorHover.CursorHover.SharedData = class CursorHoverSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CursorType__CursorHover.CursorHover.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CursorType_CursorHoverSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CursorType_CursorHoverSharedData = new gdjs.evtsExt__CursorType__CursorHover.CursorHover.SharedData(
      initialData
    );
  }
  return instanceContainer._CursorType_CursorHoverSharedData;
}

// Methods:
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595CursorType_9595_9595CursorHover_9546CursorHover_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1});
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.userFunc0x9a5920 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Set cursor to behavior property cursor_type
objects.forEach(object => {

    runtimeScene
        .getGame()
        .getRenderer()
        .getCanvas()
        .style
        .cursor = object
            .getBehavior(
                eventsFunctionContext.getBehaviorName("Behavior")
            )
            ._getcursor_type();
});
};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.userFunc0x9a5920(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[i].getZOrder() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CursorType").getChild("ZOrderSorting")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595CursorType_9595_9595CursorHover_9546CursorHover_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1 */
{runtimeScene.getGame().getVariables().get("__CursorType").getChild("ZOrderSorting").setNumber((( gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[0].getZOrder()));
}
{ //Subevents
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CursorType"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CursorType"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("CursorType::CursorHover", gdjs.evtsExt__CursorType__CursorHover.CursorHover);
