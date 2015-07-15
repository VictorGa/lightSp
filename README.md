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

## Light Manager Config
These are the properties you can pass to the manager:

- `fps`         : Frames per second which the animation will be drawn. - Default: `25`
- `stage`     	: Contains the information about your canvas dom element`
	- `width`      : your canvas total width - Default: `300`
	- `height`      : your canvas total height - Default: `300`
	- `canvas`      : HTML Canvas element
