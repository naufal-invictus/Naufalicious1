document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
        "body").style.visibility = "hidden"; 
        document.querySelector( 
        "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
        "#loader").style.display = "none"; 
        document.querySelector( 
        "body").style.visibility = "visible"; 
    } 
}; 

document.getElementById('showLeft').addEventListener('click', function() {
    document.querySelector('.left-content').style.display = 'block';
    document.querySelector('.right-content').style.display = 'none';
});

document.getElementById('showRight').addEventListener('click', function() {
    document.querySelector('.left-content').style.display = 'none';
    document.querySelector('.right-content').style.display = 'block';
});
document.getElementById('exit').addEventListener('click', function() {
    document.querySelector('.left-content').style.display = 'none';
    document.querySelector('.right-content').style.display = 'none';
});

prompt ("Bukan bermaksud membenci pengguna Android, tetapi fitur web saya di Android masih dalam tahap pengembangan (saya terlalu malas untuk memperbaikinya).")
alert ("Just use a PC or desktop version if you want a smooth experience.")

alert ("I LOVE YOU")

