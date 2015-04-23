var LightManager =
{
	create: function( options )
	{
		var self = Object.create( this );
		self.options = options;
		self._update = self.update.bind( self );
		self.then = 0;
		self.fpsInterval = 1000 / self.options.fps;
		self.rafId = 0;

		self.children = [];
		self.options.stage.canvas.width = self.options.stage.width;
		self.options.stage.canvas.height = self.options.stage.height;

		self.ctx = self.options.stage.canvas.getContext('2d');

		return self;
	},

	add: function( child )
	{
		child.setContext(this.ctx);
		this.children.push( child );
	},

	remove: function( child )
	{
		var index = this.children.indexOf(child);
		if(index !== -1)
		{
			this.children.splice(index, 0);
		}
	},

	setFPS: function( fps )
	{
		this.fpsInterval = 1000 / fps;
	},

	setScale: function(scale)
	{
		var length = this.children.length;
		while(length--)
		{
			this.children[length].scale = scale;
		}
	},

	start: function()
	{
		this.rafId = requestAnimationFrame( this._update );
	},

	stop: function()
	{
		cancelRequestAnimationFrame( this.rafId );
	},

	update: function( timestamp )
	{
		// calc elapsed time since last loop
		var elapsed = timestamp - this.then;

		// if enough time has elapsed, draw the next frame
		if( elapsed > this.fpsInterval )
		{
			this.ctx.clearRect(0, 0, this.options.stage.canvas.width, this.options.stage.canvas.height );

			var length = this.children.length;
			while(length--)
			{
				this.children[length].draw(timestamp);
			}

			this.then = timestamp - (elapsed % this.fpsInterval);
		}
		requestAnimationFrame( this._update );
	}

};
