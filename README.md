# LightSP
Small, light library for animations based on spritesheets. Trying to keep all under 3kb.

# How to use
You have mainly two objects in this small lib:
	- `LightManager`
	- `LightSpritesheet`

You can create a scene instantiating LightManager like:
```javascript
var manager = LightManager.create({fps:25, stage: {width: 200, height:200, canvas:document.getElementById('myCanvas')}});
```

Create a spritesheet:
```javascript
var sprites = LightSpritesheet.create({
			cols: 9,
			frames: {count: 9, width: 50, height: 72, src: "dude_animation_sheet.png"},
			loop:true,
			x: 0,
			y: 0
		});
```
Add add it to the manager

```javascript
manager.add(sprites);
```
Whenever you feel ready, start the manager:

```javascript
manager.start();
```

## Light Manager Config
These are the properties you can pass to the manager:

- `fps`         : Frames per second which the animation will be drawn. - Default: `25`
- `stage`     	: Contains the information about your canvas dom element`
	- `width`      : your canvas total width - Default: `300`
	- `height`      : your canvas total height - Default: `300`
	- `canvas`      : HTML Canvas element

## Light Spritesheet Config
These are the properties you can pass to the spritesheet:

- `cols`         : Amount of columns in the spritesheet
- `frames`     	: Contains the information about frames in the spritesheet`
	- `count`      : total amount of frames
	- `width`      : width of each frame
	- `height`      : height of each frame
	- `src`      : Url poiting to the spritesheet image
- `loop`      : Indicates if the spritesheet must loop
- `x`      : x position within your canvas (Relative to 0,0)
- `y`      : y position within your canvas (Relative to 0,0)
- `scale`      : scale factor range 0 to 1
