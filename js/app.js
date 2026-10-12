// 1. ŞİFRE GİRİŞ FONKSİYONU
function girisYap() {
    // DOM Seçici: HTML'deki şifre kutusunun İÇİNDEKİ DEĞERİ (value) alıp değişkene atıyoruz.
    var girilenSifre = document.getElementById("sifreKutusu").value;
    
    // Şartlı İfade (If-Else)
    if (girilenSifre == "2025") {
        // Şifre doğruysa:
        document.getElementById("mesajAlani").innerHTML = "Erişim Onaylandı. Hoş geldiniz Kaptan.";
        document.getElementById("mesajAlani").style.color = "cyan"; // CSS'e JS ile müdahale!
        
        // Gizli menüyü görünür yapıyoruz!
        document.getElementById("gizliMenu").style.display = "block";
        
        // Kutuyu ve butonu gizleyelim
        document.getElementById("sifreKutusu").style.display = "none";
    } else {
        // Şifre yanlışsa:
        document.getElementById("mesajAlani").innerHTML = "HATA: Geçersiz Erişim Kodu!";
        document.getElementById("mesajAlani").style.color = "red";
    }
}
