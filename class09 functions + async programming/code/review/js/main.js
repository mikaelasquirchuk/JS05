function Plant(name,growthRate) {
    // this = {};
    this.name = name;
    this.growthRate = growthRate;
    this.isAlive = true;
    this.grow = function() {
        var msg = (`The ${name} is growing ${growthRate}.`);
        console.log(msg);
    }
    // return this
}

var p1 = new Plant("Hoya Carnosa", "slowly");
var p2 = new Plant("Epipremnum Aureum","very quickly");
