let totalPrice = 0;
let Total = 0;
function handleClick(target) {
  //Select Items on click
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[5].innerText;

  var count = selectedItemContainer.childElementCount;
  console.log(count);
  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${itemName}`;
  selectedItemContainer.appendChild(p);
  // count total price,discount,total
  const price = target.childNodes[7].innerText;
  totalPrice = parseFloat(totalPrice) + parseFloat(price);
  var totalPriceNew = parseFloat(totalPrice).toFixed(2);
  document.getElementById("total-price").innerText = totalPriceNew;
  if (totalPriceNew > 0) {
    document.getElementById("btn-purchase").removeAttribute("disabled");
    if (totalPriceNew >= 200) {
      document.getElementById("btn-apply").removeAttribute("disabled");

      document
        .getElementById("btn-apply")
        .addEventListener("click", function () {
          const cupponString = document.getElementById("cuppon").value;

          if (cupponString == "SELL200") {
            const discount = parseFloat(totalPriceNew * 0.2).toFixed(2);
            document.getElementById("discount").innerText = discount;
            total = parseFloat(totalPriceNew - discount).toFixed(2);
            document.getElementById("total").innerText = total;
          } else {
            document.getElementById("total").innerText = totalPriceNew;
          }
        });
    }
    document.getElementById("total").innerText = totalPriceNew;
  }
}

// Go Home
document.getElementById("go-home").addEventListener("click", function () {
  window.location.reload();
});
