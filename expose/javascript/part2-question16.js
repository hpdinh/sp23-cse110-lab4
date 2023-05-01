let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2 
};

for (const i in statistics) {
    if (statistics[i] % 2 == 1 || i.substring(0,1) == 'r') {
        console.log(statistics[i]);
    }
}

