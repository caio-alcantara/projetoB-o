class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    create() {
        this.text = this.add.text(-100, 700, `Olá ${this.playerName}, bão?`, { fill: '#333' });
    }

    update(){
        if(this.text.x < 400){
            this.text.x += 10;
        }
        if(this.text.y>300){
            this.text.y -=10;
        }
    }
}