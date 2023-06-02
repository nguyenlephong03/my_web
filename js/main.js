// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");
var btn = document.getElementById("cart");


// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống,nếu chưa có tài khoản vui lòng đăng ký!!!");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if  (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    }

    else {
      alert("Thông tin tài khoản mật khẩu không đúng. vui lòng kiểm tra lại");
    }
  }
});
btn.onclick = function () {
  modal.style.display = "block";
}
cart.onclick = function(){
  alert("Quay lại trang chủ để có thể mở giỏ hàng")
}



