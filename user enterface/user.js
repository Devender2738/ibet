let submenu=document.getElementById("submenu");

function togglemenu(){
  submenu.classList.toggle("open-menu");
};
let profile=document.getElementById("profile");
function toggleinfo(){
  profile.classList.toggle("open-profile");
}




// let btn = document.querySelector('.btn');
// let sbox = document.querySelector('.s-box')
// btn.onclick = function(){
//   sbox.classList.toggle('active')
// };

// // const login=document.getElementById('ligin-btn')
// // const register=document.getElementById('register-btn')


// const eyeIcon = document.getElementById("eye");
// const passwordField = document.getElementById("password");
// eyeIcon.addEventListener("click", () => {
//   if (passwordField.type === "password" && passwordField.value) {
//     passwordField.type = "text";
//     eyeIcon.classList.remove("fa-eye");
//     eyeIcon.classList.add("fa-eye-slash");
//   } else {
//     passwordField.type = "password";
//     eyeIcon.classList.remove("fa-eye-slash");
//     eyeIcon.classList.add("fa-eye");
//   }
// });