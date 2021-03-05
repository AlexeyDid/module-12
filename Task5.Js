class Devices{
    constructor(name, amperage, voltage){
    this.name = name,
    this.amperage = amperage,
    this.voltage = voltage
    }
    turnOn = function(name){
    console.log(`Включить ${this.name} в розетку`);
    }
    turnOf = function(name){
    console.log(`Выключить ${this.name} из розетки`);
    }
    сalculation = function(name, amperage, voltage){
    let power = this.amperage * this.voltage;
    console.log(`Мощность ${this.name} равна ${power} W`);
    }
    }
    class Computer extends Devices{
    constructor(color, model, name, amperage, voltage){
    super (name, amperage, voltage);
    this.color = color,
    this.model = model
    }
    }
    const myComputer = new Computer("Black", "Lenovo", "Computer", 5, 5);
    class Tv extends Devices{
    constructor(type, diagonal, name, amperage, voltage){
    super (name, amperage, voltage);
    this.type = type,
    this.diagonal = diagonal
    }
    }
    const myTv = new Tv("LCD", "250", "Tv", 2, 5);
    console.log(myComputer);
    myComputer.turnOn();
    myComputer.turnOf();
    myComputer.сalculation();
    console.log(myTv);
    myTv.turnOn();
    myTv.turnOf();
    myTv.сalculation();