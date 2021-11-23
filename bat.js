if (navigator) {
     navigator.getBattery()
     .then(status=>{
         console.table(status);
         charging(status.charging);
         BatteryLevel(status.level);

         status.onchargingchange = ()=> Charging(status.charging);
         status.onlevelchange = ()=> BatteryLevel(status.level);

     }
        )
} else {
    alert('sorry your browser doesnt support the navigator object');
}
function charging(status) {
    status ? level.classList.add('charging')
    
}