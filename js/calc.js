function calc(){
    price_start = Number( document.Berechnen.price_start.value ); 
    price_minute = Number( document.Berechnen.price_minute.value ); 
    price_kwh = Number( document.Berechnen.price_kwh.value ); 
    power = Number( document.Berechnen.power.value );
    time = Number( document.Berechnen.time.value ); 

    document.getElementById("quantity_complete").value = Number( power * ( time / 60 ) ).toFixed(1);
    document.getElementById("cost_complete").value = Number( price_start + ( time * price_minute ) + ( power * ( time / 60 ) * price_kwh ) ).toFixed(2);
    document.getElementById("cost_kwh").value = Number( ( ( price_minute / power ) * 60 ) + ( price_start / ( power * ( time / 60 ) ) ) + price_kwh ).toFixed(2);
 
    capacity = Number( document.Berechnen.capacity.value );
    consumption = Number( document.Berechnen.consumption.value );
 
    document.getElementById("cost_80").value = Number( document.getElementById("cost_kwh").value * ( capacity * 0.8 ) ).toFixed(2);
    document.getElementById("cost_100").value = Number( document.getElementById("cost_kwh").value * capacity ).toFixed(2);
    document.getElementById("cost_100km").value = Number( document.getElementById("cost_kwh").value * consumption ).toFixed(2);
}