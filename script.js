function results(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var mobno = document.getElementById('mobno').value;
    var clg = document.getElementById('clg').value;

    var fname = name;
    document.getElementById('inname').textContent = fname;
    var femail = email;
    document.getElementById('inemail').textContent = femail;
    var faddress = address;
    document.getElementById('inaddress').textContent = faddress;
    var fmobno = mobno;
    document.getElementById('inmobno').textContent = fmobno;
    var fclg = clg;
    document.getElementById('inclg').textContent = fclg;
}
  