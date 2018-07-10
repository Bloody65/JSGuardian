document.querySelector("#showOptions").onclick=function() {
  chrome.runtime.openOptionsPage();
};

document.querySelector("#page").innerText = decodeURIComponent(document.location.search.slice(1).split('&')[0]);

document.querySelector("#phrases").innerText = decodeURIComponent(document.location.search.slice(1).split('&')[1]);

if ( /Google Inc/.test(navigator.vendor) ) {
  document.querySelector("#review").href = "https://chrome.google.com/webstore/detail/ojofglimbmclnbinpbjnhcmkmipplibi";
}
