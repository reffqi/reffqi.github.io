var pageTitleElement = document.getElementById("fill-me");
pageTitleElement.innerHTML = "HALO!";

var pageBoxElements = document.getElementsByClassName("change-all-of-me");
for(var i = 0; i < pageBoxElements.length; i++) {
  pageBoxElements[i].innerHTML = "HALO JUGA!";
}

var pageHeadings = document.getElementsByTagName("h2");
pageHeadings[0].innerHTML = "Apa Kabar?";