# LightSP
Small, light library for animations based on spritesheets. Trying to keep all under 3kb.

# How to use
You have mainly two objects in this small lib:
	- LightManager
	- LightSpritesheet

You can create a scene instantiating LightManager like:
```javascript
var manager = LightManager.create({fps:25, stage: {width: 200, height:200, canvas:document.getElementById('myCanvas')}});
```


