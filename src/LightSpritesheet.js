var LightSpritesheet =
{
	FORWARD: 'direction.forward',

	REVERSE: 'direction.reverse',

	create: function( options )
	{
		var self = Object.create( this );
		self.options = options;
		self.currentSpriteProps = {iX: 0, iY: 0, x: 0, y: 0};
		self.currentFrame = 0;

		self.spritesheet = new Image();
		self.spritesheet.onload = self.handleSpritesheetLoaded.bind( self );
		self.spritesheet.src = self.options.frames.src;

		self.direction = 1;
		self.scale = 1;

		self.x = self.options.x;
		self.y = self.options.y;

		return self;
	},

	setContext: function(ctx)
	{
		this.ctx = ctx;
	},

	draw: function(timestamp, ctx)
	{
		if( (this.direction === 1 && this.currentFrame < this.options.frames.count - 1) ||
			(this.direction === -1 && this.currentFrame > 0) )
		{
			this.currentFrame += this.direction;
		}
		else if(this.options.loop)
		{
			this.currentFrame = 0;
			console.log('loop')
		}

		//Get spritesheet frame position
		this.currentSpriteProps.iX = this.currentFrame % this.options.cols;
		this.currentSpriteProps.iY = Math.floor( this.currentFrame / this.options.cols );
		this.currentSpriteProps.x = this.currentSpriteProps.iX * this.options.frames.width;
		this.currentSpriteProps.y = this.currentSpriteProps.iY * this.options.frames.height;

		// Draw mask
		this.ctx.drawImage( this.spritesheet, this.currentSpriteProps.x, this.currentSpriteProps.y, this.options.frames.width, this.options.frames.height,this.x, this.y, this.options.frames.width * this.scale, this.options.frames.height * this.scale );
	},

	setDirection: function( direction )
	{
		this.direction = direction === LightSpritesheet.FORWARD ? 1 : -1;
	},

	handleSpritesheetLoaded: function()
	{

	}
}
