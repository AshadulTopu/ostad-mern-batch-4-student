//1.Topic: Online Store Discount Calculator (If-Else Statement)

let totalPrice = 350

if(totalPrice < 50){
    calculateDiscount(0)
}
else if(totalPrice >= 50  && totalPrice <= 100){
    calculateDiscount(5)
}
else if(totalPrice >= 100  && totalPrice <= 200){
    calculateDiscount(10)
}else{
    calculateDiscount(15)
}

function calculateDiscount(x){
    let discountAmount =  (totalPrice /100) * x
    let discountedAmount = totalPrice - discountAmount

    console.log(`discounted amount : ${discountedAmount}$ & total amount: ${totalPrice}$ , discount amount : ${discountAmount}$`);
}