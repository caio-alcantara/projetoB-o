class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data) {
        
        this.num1 = parseFloat(data.num1);
        this.num2 = parseFloat(data.num2);
    }

    create() {
        this.soma = parseFloat(this.num1 + this.num2);
        this.text2 = this.add.text(300, 400, `O resultado é: ${this.soma}`, { fill: '#333' });
        

    }

    update(){
    }
}