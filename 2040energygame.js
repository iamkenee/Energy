// Set default values 
let oil = 1;
let crop_biofuels = 1;
let cellulosic_biofuels = 1;
let natural_gas = 1;
let electricity = 1;
let electric_coal = 1;
let electric_natural_gas = 1;
let electric_nuclear70s = 1;
let electric_hydro = 1;
let electric_wind = 1;
let electric_oil = 1;
let electric_newNuclear = 1;
let electric_cleanCoal = 1;
let electric_solar = 1;
let electric_biofuels = 1;
let electric_geothermal = 1;
let heat_natural_gas = 1;
let heat_coal = 1;
let heat_oil = 1;
let heat_biofuels = 1;
let heat_solar = 1;
let heat_geothermal = 1;
let efficiency = 1;

// Set winning values for 2040
const WINNING_VALUES_2040_vehicle_fuel = { oil: 5, crop_biofuels: 1, cellulosic_biofuels: 3, natural_gas: 6, electricity: 11 };
const WINNING_VALUES_2040_ electric = { coal: 11, natural_gas: 7, nuclear70s: 1, hydro: 1, wind: 5, oil: 1, newNuclear: 9, cleanCoal: 9, solar: 8, biofuels: 1, geothermal: 3 };
const WINNING_VALUES_2040_heat = { natural_gas: 5, coal: 2, biofuels: 1, solar: 6, geothermal: 4 }
const WINNING_VALUES_2040_efficiency = { efficiency: 5 }



// Adjust winning values based on difficulty
switch (difficulty) {
    case "veryeasy":
        break; // no adjustment needed
    case "easy":
        WINNING_VALUES_2040.oil -= 1;
        WINNING_VALUES_2040.h.oil += 7;
    case "medium":
        WINNING_VALUES_2040.oil -= 3;
        WINNING_VALUES_2040.natural_gas += 2;
        WINNING_VALUES_2040.e.newNuclear += 6;
        WINNING_VALUES_2040.h.oil += 7;
        WINNING_VALUES_2040.efficiency += 12;
        break;
    case "hard":
        WINNING_VALUES_2040.oil -= 5;
        WINNING_VALUES_2040.crop_biofuels -= 1;
        WINNING_VALUES_2040.cellulosic_biofuels -= 3;
        WINNING_VALUES_2040.natural_gas += 1;
        WINNING_VALUES_2040.electricity += 7;
        WINNING_VALUES_2040.e.coal -= 11;
        WINNING_VALUES_2040.e.natural_gas += 7;
        WINNING_VALUES_2040.e.nuclear70s += 1;
        WINNING_VALUES_2040.e.cleanCoal -= 5;
        WINNING_VALUES_2040.e.solar += 8;
        WINNING_VALUES_2040.e.geothermal -= 1;
        WINNING_VALUES_2040.h.natural_gas += 13;
        WINNING_VALUES_2040.h.geothermal += 6;
        WINNING_VALUES_2040.efficiency += 7;
        break;
    case "very hard":
        WINNING_VALUES_2040.oil -= 5;
        WINNING_VALUES_2040.crop_biofuels -= 1;
        WINNING_VALUES_2040.cellulosic_biofuels -= 3;

    default:
        alert("Invalid difficulty level");
}

// Update levels based on slider values
function vehicle_fuel_updateLevels() {
    oil = document.getElementById("oilSlider").value;
    crop_biofuels = document.getElementById("cropbiofuelsSlider").value;
    cellulosic_biofuels = document.getElementById("cellulosicbiofuelsSlider").value;
    natural_gas = document.getElementById("naturalGasSlider").value;
    electricity = document.getElementById("electricitySlider").value;
}

function electric_updateLevels() {
    e.coal = document.getElementById("e.coalSlider").value;
    e.natural_gas = document.getElementById("e.naturalgasSlider").value;
    e.nuclear70s = document.getElementById("e.nuclear70sSlider").value;
    e.hydro = document.getElementById("e.hydroSlider").value;
    e.wind = document.getElementById("e.windSlider").value;
    e.oil = document.getElementById("e.oilSlider").value;
    e.newNuclear = document.getElementById("e.newNuclearSlider").value;
    e.cleanCoal = document.getElementById("e.cleanCoalSlider").value;
    e.solar = document.getElementById("e.solarSlider").value;
    e.biofuels = document.getElementById("e.biofuelsSlider").value;
    e.geothermal = document.getElementById("e.geothermalSlider").value;
}

function heat_updateLevels() {
    h.natural_gas = getElementById("h.natural.gasSlider").value;
    h.coal = document.getElementById("h_coalSlider").value;
    h.oil = document.getElementById("h_oilSlider").value;
    h.biofuels = document.getElementById("h.biofuelsSlider").value;
    h.solar = document.getElementById("h.solarSlider").value;
    h.geothermal = document.getElementById("h.geothermal").value;
}

function efficiency_investment_updateLevels() {
    efficiency = getElementById("efficiencySlider").value;
}

// Check if current levels match winning values for year
function checkWinningValues(year) {
    if (year === 2040) {
        return oil === WINNING_VALUES_2040.oil &&
            crop_biofuels === WINNING_VALUES_2040.crop_biofuels &&
            cellulosic_biofuels === WINNING_VALUES_2040.cellulosic_biofuels &&
            natural_gas === WINNING_VALUES_2040.natural_gas &&
            electricity === WINNING_VALUES_2040.electricity &&
            e.coal === WINNING_VALUES_2040.e.coal &&
            e.natural_gas === WINNING_VALUES_2040.e.natural_gas &&
            e.nuclear70s === WINNING_VALUES_2040.e.nuclear70s &&
            e.hydro === WINNING_VALUES_2040.e.hydro &&
            e.wind === WINNING_VALUES_2040.e.wind &&
            e.oil === WINNING_VALUES_2040.e.oil &&
            e.newNuclear === WINNING_VALUES_2040.e.newNuclear &&
            e.cleanCoal === WINNING_VALUES_2040.e.cleanCoal &&
            e.solar === WINNING_VALUES_2040.e.solar &&
            e.biofuels === WINNING_VALUES_2040.e.biofuels &&
            e.geothermal === WINNING_VALUES_2040.e.geothermal &&
            h.natural_gas === WINNING_VALUES_2040.h.natural_gas &&
            h.coal === WINNING_VALUES_2040.h.coal &&
            h.biofuels === WINNING_VALUES_2040.h.biofuels &&
            h.solar === WINNING_VALUES_2040.h.solar &&
            h.geothermal === WINNING_VALUES_2040.h.geothermal &&
            efficiency === WINNING_VALUES_2040.efficiency;
    }

    // Update winning values and display message if current levels match
    function checkForWin() {
        if (checkWinningValues(2040)) {
            WINNING_VALUES_2040.oil += 1;
            WINNING_VALUES_2040.crop_biofuels += 1;
            WINNING_VALUES_2040.cellulosic_biofuels += 1;
            WINNING_VALUES_2040.natural_gas += 1;
            WINNING_VALUES_2040.electricity += 1;
            WINNING_VALUES_2040.e.coal += 1;
            WINNING_VALUES_2040.e.natural_gas += 1;
            WINNING_VALUES_2040.e.nuclear70s += 1;
            WINNING_VALUES_2040.e.hydro += 1;
            WINNING_VALUES_2040.e.wind += 1;
            WINNING_VALUES_2040.e.oil += 1;
            WINNING_VALUES_2040.e.newNuclear += 1;
            WINNING_VALUES_2040.e.cleanCoal += 1;
            WINNING_VALUES_2040.e.solar += 1;
            WINNING_VALUES_2040.e.biofuels += 1;
            WINNING_VALUES_2040.e.geothermal += 1;
            WINNING_VALUES_2040.h.natural_gas += 1;
            WINNING_VALUES_2040.h.coal += 1;
            WINNING_VALUES_2040.h.biofuels += 1;
            WINNING_VALUES_2040.h.solar += 1;
            WINNING_VALUES_2040.h.geothermal += 1;
            alert("Congratulations!");
        }

        // Attach updateLevels function to slider inputs
        document.getElementById("oilSlider").addEventListener("input", updateLevels);
        document.getElementById("crop_biofuelsSlider").addEventListener("input", updateLevels);
        document.getElementById("cellulosic_biofuelsSlider").addEventListener("input", updateLevels);


        // Attach checkForWin function to submit button
        document.getElementById("submitBtn").addEventListener("click", checkForWin);
    }
}
