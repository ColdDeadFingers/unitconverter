let trigger = document.getElementById("inputval")
trigger.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        convert()
    }
});


function convert() {
  let number = document.getElementById("inputval").value
  console.log(number)   
  document.getElementById("length").textContent = `${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters` 
 // 0 meters = 0.000 feet | 0 feet = 0.000 meters 
 document.getElementById("volume").textContent = `${number} liters = ${(number / 3.785).toFixed(3)} gallons | ${number} gallons = ${(number * 3.281).toFixed(3)} liters`
 // 0 liters = 0.000 gallons | 0 gallons = 0.000 liters
 document.getElementById("mass").textContent = `${number} kilos = ${(number * 2.205).toFixed(3)} pounds | ${number} pounds = ${(number / 2.205).toFixed(3)} kilos`
//0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos

document.getElementById("inputval").value = ""
};