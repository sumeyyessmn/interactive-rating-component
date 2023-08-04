let button = document.querySelectorAll(".num");
let submitBtn = document.querySelector("#submitBtn");
let container = document.querySelector(".container");
let selectedValue = null;

button.forEach(button => {
    button.addEventListener('click', changeColor);
  });

function changeColor(event) {
    button.forEach(button => {
      button.classList.remove('selected');
    });
  
    event.target.classList.add('selected');
    selectedValue = event.target.innerHTML;
  }
  
submitBtn.addEventListener("click", result);

function result(){
  if(selectedValue){
  container.innerHTML = `<div class="container2">
  <div class="submitHeader">           
      <img class="thanks" src="./images/illustration-thank-you.svg" alt="" width="100" height="50">
  </div>
  <div class="contentSubmit">
  <p class="textSelect">You selected ${selectedValue} out of 5</p>
  </div>
  <div class="textContent">
      <h2 id='title'>Thank you! </h2>
  </div>
  <div class="lastText">
      <span id='endText'> We appreciate you taking the time to give a rating.<br> If you ever need more support, dont hesitate to <br> get in touch!</span> 
  </div>
</div>`;
  }
}
