game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {

		me.levelDirector.loadLevel("map");

        // reset the score
        game.data.score = 0;
        

        game.selectbox = new game.selectbox();


        // Add our HUD to the game world, add it last so that this is on top of the rest.
        // Can also be forced by specifying a "Infinity" z value to the addChild function.
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);

        me.game.world.addChild(me.pool.pull("testKnight", 0, 0));
        me.game.world.addChild(me.pool.pull("testKnight", 50, 50));
        me.game.world.addChild(me.pool.pull("testCavalry", 100, 100));
        me.game.world.addChild(me.pool.pull("testArcher", 200, 200));
        me.game.world.addChild(me.pool.pull("testVillain"));
        me.game.world.addChild(me.pool.pull("selectbox"));
        me.game.world.addChild(me.pool.pull("unitSelected"));



/*
        //bind arrow keys
        me.input.bindKey(me.input.KEY.LEFT, 'left');
        me.input.bindKey(me.input.KEY.RIGHT, 'right');
        me.input.bindKey(me.input.KEY.UP, 'up');
        me.input.bindKey(me.input.KEY.DOWN, 'down'); 
*/

        //bind clicks
        me.input.bindKey(me.input.KEY.M, 'leftclick'); 
        me.input.bindPointer(me.input.KEY.M);
		me.input.bindKey(me.input.KEY.A, 'rightclick');
		me.input.bindPointer(me.input.pointer.RIGHT, me.input.KEY.A);
        //me.input.registerPointerEvent('pointerdown', me.game.viewport, this.pointerDown.bind(this));
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});



//prevent default right-click menu from popping up
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
