window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: "b9eaff",
        scene: [Cena01, Cena02]
    };

    const game = new Phaser.Game(config);
}
