const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}

const getReady = {
    sX : 0,
    sY : 228,
    w : 173,
    h : 152,
    x : cvs.width/2 - 173/2,
    y : 80,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
    
}

const gameOver = {
    sX : 175,
    sY : 228,
    w : 225,
    h : 202,
    x : cvs.width/2 - 225/2,
    y : 90,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);   
        }
    }
    
}

const score= {
    best : parseInt(localStorage.getItem("best")) || 0,
    value : 0,
    
    draw : function(){
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";
        
        if(state.current == state.game){
            ctx.lineWidth = 2;
            ctx.font = "35px Teko";
            ctx.fillText(this.value, cvs.width/2, 50);
            ctx.strokeText(this.value, cvs.width/2, 50);
            
        }else if(state.current == state.over){
            ctx.font = "25px Teko";
            ctx.fillText(this.value, 225, 186);
            ctx.strokeText(this.value, 225, 186);
            ctx.fillText(this.best, 225, 228);
            ctx.strokeText(this.best, 225, 228);
        }
    },
    
    reset : function(){
        this.value = 0;
    }
}

function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    
    background.draw();
    pipes.draw();
    foreground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
}

function update(){
    bird.update();
    foreground.update();
    pipes.update();
}

function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();

