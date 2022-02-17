const currentBill = 1450;
const gasBill = 1800;
const waterBill = 700;
const telephoneBill = 5000;
const internetBill = 500;
const tvBill = 250;

// Current Bill
if(currentBill >= 1 && currentBill<=400){
    var current_Bill = currentBill + 5;
}
else if(currentBill >=401 && currentBill <=1500){
    var current_Bill = currentBill + 10;
}
else if(currentBill >= 1501 && currentBill <=500){
    var current_Bill = currentBill + 15;
}
else if(currentBill >= 5001){
    var current_Bill = currentBill + 25;
}

// Gas Bil
if(gasBill * 0.01 <30){
    var gas_bill = gasBill + (gasBill * 0.01);
}
else{
    var gas_bill = gasBill + 30;
}

// Water Bill
if(waterBill * 0.01 < 30){
    var water_bill = waterBill + (waterBill * 0.01)
}
else{
   var water_bill = waterBill + 30;
}

// Telephone Bill

if(telephoneBill * 0.01 < 30){
    var telephone_bill = telephoneBill + (telephoneBill * 0.01)
}
else{
    var telephone_bill = telephoneBill + 30;
}

// Total Bill 
const totalBill = current_Bill + gas_bill + water_bill + telephone_bill + internetBill + tvBill;
console.log(`Current Bill: ${current_Bill} /=
Gas Bil: ${gas_bill} /=
Water Bil: ${water_bill} /=
Telephone Bil: ${telephone_bill} /=
Internet Bill: ${internetBill} /=
Tv Bill: ${tvBill} /=
--------------------------------
Total Bill: ${totalBill}`);
