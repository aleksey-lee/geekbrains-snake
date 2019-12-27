class Calc {
    constructor(){
        this.elCalc = document.getElementById('calc');
        this.snakeLength = 0;
    }

    /*
     * Метод увеличивает длину на 1
     */
    increment() {
    return ++this.snakeLength;
    }

    /*
     * Метод отрисовывает новую длину змейки
     */
    renderLengthSnake() {
        this.elCalc.innerText = this.increment();
    }
}