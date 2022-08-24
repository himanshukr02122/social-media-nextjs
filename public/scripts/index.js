$(document).ready(function(){
    $("#btnOff").click(function(){
      $("#btnOn").show();
      $("#btnOff").hide();
    });
    $("#btnOn").click(function(){
        $("#btnOff").show();
        $("#btnOn").hide();
      });
  });

  let subscribe = document.getElementById('subscribeBtn');
  subscribe.addEventListener('click',(e)=> {
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = document.getElementById("email").value;
    alert(email);
  })
