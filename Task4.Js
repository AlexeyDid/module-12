function Devices(name, amperage, voltage){
    this.name = name,
    this.amperage = amperage,
    this.voltage = voltage
    }
    Devices.prototype.turnOn = function(name){
    console.log(`Включить ${this.name} в розетку`);
    }
    Devices.prototype.turnOf = function(name){
    console.log(`Выключить ${this.name} из розетки`);
    }
    Devices.prototype.сalculation = function(name, amperage, voltage){
    let power = this.amperage * this.voltage;
    console.log(`Мощность ${this.name} равна ${power} W`);
    }
    function Computer(color, model, name, amperage, voltage){
    this.color = color,
    this.model = model,
    this.name = name,
    this.amperage = amperage,
    this.voltage = voltage
    }
    Computer.prototype = new Devices()
    const myComputer = new Computer("Black", "Lenovo", "Computer", 5, 5);
    function Tv(type, diagonal, name, amperage, voltage){
    this.type = type,
    this.diagonal = diagonal,
    this.name = name,
    this.amperage = amperage,
    this.voltage = voltage
    }
    Tv.prototype = new Devices()
    const myTv = new Tv("LCD", "250", "Tv", 2, 5);
    console.log(myComputer);
    myComputer.turnOn();
    myComputer.turnOf();
    myComputer.сalculation();
    console.log(myTv);
    myTv.turnOn();
    myTv.turnOf();
    myTv.сalculation();