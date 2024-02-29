class Cena01 extends Phaser.Scene {
    constructor() {
        super('Cena01');
    }

    create() {
        // Serve para exibir o overlay de entrada
        document.getElementById('inputOverlay').style.display = 'block';

        


        // Configura o evento de clique no botão
        document.getElementById('startButton').addEventListener('click', () => {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;

            this.scene.start('Cena02', { num1: num1, num2: num2});
            // Oculta o overlay após iniciar
            document.getElementById('inputOverlay').style.display = 'none';
        });
    }
}