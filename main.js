const mainState = {
	preload: function() {
		game.load.image('logo', './assets/logo.png');
		game.load.image('logo1', './assets/logo.png');
	},

	create: function () {
		this.sprite = game.add.sprite(300, 150, 'logo');
		this.sprite2 = game.add.sprite(200, 50, 'logo1');
	},

	update: function () {
		this.sprite.angle += 1;
		this.sprite2.angle -= 1;
	},
};

const game = new Phaser.Game(1024, 768, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');
