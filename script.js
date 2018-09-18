/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += 10;
        console.log('ok: ' + this.left);
    };

    this.moveDown = function () {
        this.top += 10;
        console.log('ok: ' + this.top);
    }

    this.moveLeft = function () {
        this.left -= 15;
        console.log('ok: ' + this.top);
    }

    this.moveUp = function () {
        this.top -= 15;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top === 20 || hero.top < 30) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth - hero.size || hero.left === window.innerWidth - hero.size && hero.top === 20 || hero.top < 20) {
        // alert(window.innerWidth - hero.size + " - " + hero.left );
        hero.moveDown();
        // alert(window.innerHeight + " - " + hero.top)
    }
    if (hero.top > window.innerHeight - hero.size || hero.top === window.innerHeight - hero.size) {
        hero.moveLeft();
    }
    if (hero.left < 0 && hero.top > 20) {
        hero.moveUp();
    }
    // if (hero.top === 20 || hero.top < 30 && hero.left < window.innerWidth - hero.size) {
    //     hero.moveRight();
    // }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1);
}

start();