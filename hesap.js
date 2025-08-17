let sayi1 = Number(prompt("İlk sayıyı giriniz."));
let ifade1 = prompt("Çarpma için "×", bölme için "÷", çıkarma için "-", toplama için "+" giriniz. Boşluk koymamaya dikkat ediniz!");
let sayi2 = Number(prompt("İkinci sayıyı giriniz."));
let onay = confirm("Başka sayı girecek misiniz?");
if(onay){
  let ifade2 = prompt("Çarpma için "×", bölme için "÷", çıkarma için "-", toplama için "+" giriniz. Boşluk koymamaya dikkat ediniz!");
  let sayi3 = Number(prompt("Üçüncü sayıyı giriniz."));
  if(ifade1=="+" && ifade2=="+"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1+sayi2+sayi3);
  } 
  else if(ifade1=="-" && ifade2=="+"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1-sayi2+sayi3);
  }
  else if(ifade1=="÷" && ifade2=="+"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1/sayi2+sayi3);
  }
  else if(ifade1=="×" && ifade2=="+"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1*sayi2+sayi3);
  }
  else if(ifade1=="+" && ifade2=="-"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1+sayi2-sayi3);
  }
  else if(ifade1=="-" && ifade2=="-"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1-sayi2-sayi3);
  }
  else if(ifade1=="÷" && ifade2=="-"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1/sayi2-sayi3);
  }
  else if(ifade1=="×" && ifade2=="-"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1*sayi2-sayi3);
  }
  else if(ifade1=="+" && ifade=="÷"){
    document.getElementById("paragraf").innerHTML = "İşlem sonucu: " + (sayi1+sayi2/sayi3);
  }
    
  
