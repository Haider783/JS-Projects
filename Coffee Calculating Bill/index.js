function calculateBill() {
    var coffeeType = document.getElementById("coffee-type").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    var sugarSpoons = parseInt(document.getElementById("sugar").value);
    var milkMl = parseInt(document.getElementById("milk").value);
    var coffeePrices = {
        "espresso": 2.50,
        "latte": 3.00,
        "cappuccino": 3.50
    };
    var sugarPrice = 0.25; 
    var milkPrice = 0.10; 
    var totalBill = (coffeePrices[coffeeType] + sugarSpoons * sugarPrice + milkMl * milkPrice) * quantity;
    document.getElementById("total-bill").textContent = totalBill.toFixed(2);
}
