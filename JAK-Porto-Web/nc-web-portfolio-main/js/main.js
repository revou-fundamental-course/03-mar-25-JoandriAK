// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

let bannerIndex = 0;
showBanner();

function nextBanner(){
    bannerIndex += 1;
    showBanner();
}

function  showBanner(){
    const banners = document.getElementsByClassName('hero-right')
    console.log(banners)

    if (bannerIndex > banners.length){
        bannerIndex = 0;
    }

    for (let i = 0; i < banners.length; i++){
        banners[i].style.display = 'none';
        banners[bannerIndex].style.display = 'block'
    }


}

setInterval(nextBanner, 2500)

// Menampilkan waktu saat ini secara berkala
function displayCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("current-time").innerHTML = timeString;
}

function validateForm() {
  const nama = document.forms['msg-form']['input-name'].value;
  const birth_date = document.forms['msg-form']['birth-date'].value;
  const msg = document.forms['msg-form']['msg-input'].value;

  // Mengambil nilai radio button yang dipilih
  const genderElements = document.forms['msg-form']['gender'];
  let gender = "";
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.value;
      break;
    }
  }

  // Validasi jika ada field yang kosong
  if (nama === "" || birth_date === "" || gender === "" || msg === "") {
    alert("Semua kolom harus diisi!");
    return false;
  }

  // Mendapatkan waktu saat data dimasukkan
  const inputTime = new Date().toLocaleTimeString();

  setValue(nama, birth_date, gender, msg, inputTime);

  return false; // Mencegah submit form secara default
}

function setValue(nama, birth_date, gender, msg, inputTime) {
  document.getElementById("full-name").innerHTML = nama;
  document.getElementById("sender-birth-date").innerHTML = birth_date;
  document.getElementById("sender-gender").innerHTML = gender === "male" ? "Laki-laki" : "Perempuan";
  document.getElementById("sender-msg").innerHTML = msg;
  document.getElementById("current-time").innerHTML = inputTime; // Waktu saat data dimasukkan
}
