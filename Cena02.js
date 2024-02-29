class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
        this.num1 = parseFloat(data.num1);
        this.num2 = parseFloat(data.num2);
    }

    create() {
        this.soma = this.num1 + this.num2;
        this.text1 = this.add.text(-100, 700, `Você somou ${this.num1} e ${this.num2}`, { fill: '#333' });
        this.text2 = this.add.text(300, 400, `O resultado é.......`, { fill: '#333' });

        this.time.addEvent({
            delay: 3000,
            callback: this.mostraResultado,
            callbackScope: this
        });

        
    }

    update(){
        if(this.text1.x < 400){
            this.text1.x += 10;
        }
        if(this.text1.y>300){
            this.text1.y -=10;
        }
    }

    mostraResultado(){
        this.scene.start('Cena03', { num1: this.num1, num2: this.num2});
    }
}