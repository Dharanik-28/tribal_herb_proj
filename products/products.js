
function showToast(message){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=message;t.style.display='block';
  setTimeout(()=>t.style.display='none',2200);
}
function goRegister(){window.location.href='registration.html'}
function searchPlants(){
  const el=document.getElementById('siteSearch')||document.getElementById('heroSearch');
  const q=el?el.value.trim():'';
  if(q){window.location.href='plants.html?search='+encodeURIComponent(q);}
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.login-btn').forEach(b=>b.addEventListener('click',goRegister));
  const btn=document.getElementById('searchBtn');
  if(btn)btn.addEventListener('click',searchPlants);
  const input=document.getElementById('heroSearch');
  if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')searchPlants()});
});
function orderProduct(productName, price) {

    // Quantity
    let quantity = prompt(
        "Enter quantity for " + productName
    );

    if (quantity === null) {
        return;
    }

    quantity = Number(quantity);

    if (isNaN(quantity) || quantity <= 0) {
        alert("❌ Please enter a valid quantity.");
        return;
    }

    // Total price
    let total = price * quantity;

    // Customer name
    let name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        alert("❌ Please enter your name.");
        return;
    }

    // Mobile number
    let mobile = prompt("Enter your 10-digit mobile number:");

    if (
        mobile === null ||
        !/^[0-9]{10}$/.test(mobile)
    ) {
        alert("❌ Please enter a valid 10-digit mobile number.");
        return;
    }

    // Address
    let address = prompt("Enter your delivery address:");

    if (address === null || address.trim() === "") {
        alert("❌ Please enter your delivery address.");
        return;
    }

    // Order confirmation
    let confirmation =
        "🌿 TRIBALHERB ORDER\n\n" +
        "Product: " + productName + "\n" +
        "Price: ₹" + price + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total: ₹" + total + "\n\n" +
        "Customer: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Address: " + address + "\n\n" +
        "Do you want to place this order?";

    let confirmOrder = confirm(confirmation);

    if (confirmOrder) {

        alert(
            "✅ ORDER PLACED SUCCESSFULLY!\n\n" +
            "🌿 Product: " + productName + "\n" +
            "📦 Quantity: " + quantity + "\n" +
            "💰 Total: ₹" + total + "\n\n" +
            "Thank you, " + name + "!"
        );

    } else {

        alert("❌ Order cancelled.");
    }
}
