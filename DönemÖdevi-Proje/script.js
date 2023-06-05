function Kalorihesapla() {
    var cinsiyet = document.getElementById("cinsiyet").value;
    var activityLevel = document.getElementById("activity-level").value;
    var yas = document.getElementById("yas").value;
    var boy = document.getElementById("boy").value;
    var kilo = document.getElementById("kilo").value;

    if (yas<=0 || kilo<=0 || boy<=0 || yas==null || boy==null || kilo==null) {
      document.getElementById("result").innerHTML= "Lütfen doğru bir şekilde tüm alanları doldurunuz.";
    }
    else{
      var bmr;
      if (cinsiyet === "Erkek") {
        bmr = 88.362 + (13.397 * kilo) + (4.799 * boy) - (5.677 * yas);
      } else {
        bmr = 447.593 + (9.247 * kilo) + (3.098 * boy) - (4.33 * yas);
      }
      var result = bmr * parseFloat(activityLevel);
     document.getElementById("result").innerHTML = "Günlük Kalori İhtiyacınız: "+result.toFixed(2) + " Kalori";
    }
  }

function kitleEndeksiHesapla(){
  var cinsiyet = document.getElementById("cinsiyet").value;
  var boy = document.getElementById("boy").value;
  var kilo = document.getElementById("kilo").value;

      if (kilo<=0 || boy <=0) {
        alert("Lütfen gerekli tüm alanları doğru bir şekilde doldurun.");
        return;
      }

      var vki = kilo / ((boy / 100) * (boy / 100));
      var idealKilo;

      if (cinsiyet === "Erkek") {
        idealKilo = 0.75 * (boy - 150) + 53;
      } else if (cinsiyet === "Kadın") {
        idealKilo = 0.75 * (boy - 150) + 48;
      }
      document.getElementById("vki").innerHTML="Vücut Kitle Endeksi (BMI): " + vki.toFixed(2)+" kg / metrekare";
      document.getElementById("idealKilo").innerHTML="İdeal Kilo: "+idealKilo;

      var fark=kilo-idealKilo;
      if (fark>7) {
        document.getElementById("sonuc").innerHTML = "Sonuç: İdeal kilonuzun üstündesiniz";
      }
      else if(fark<-7){
        document.getElementById("sonuc").innerHTML = "Sonuç: İdeal kilonuzun altındasınız";
      }
      else{
        document.getElementById("sonuc").innerHTML = "Sonuç: Kilonuz tamamen normal";
      }
}

function temizle() {
  document.getElementById("ad").value = "";
  document.getElementById("soyad").value = "";
  document.getElementById("mesaj").value = "";
}


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}