var nav = document.querySelector(".accordion-homepage");
var x = document.createElement("SECTION");
x.setAttribute("class","parent");
nav.appendChild(x);

var z = document.getElementsByClassName("parent");
var newSection = z[z.length-1];
var h3 = document.createElement("H3");
h3.setAttribute("role","button");
h3.textContent = "My New Faq";
newSection.appendChild(h3);
<h3 role=​"button">​My New Faq​</h3>​