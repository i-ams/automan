// $('input').click(function(){
//     alert('click...');
// });

function testFun(){
	console.log('From parent js file...');
}

function logEvent(event){
    console.log('Event =', event);
    const source = event.target || event.srcElement;
    console.log('Element xpath =',getXPathForElement(source));
}

function getXPathForElement(element) {
    const idx = (sib, name) => sib 
        ? idx(sib.previousElementSibling, name||sib.localName) + (sib.localName == name)
        : 1;
    const segs = elm => !elm || elm.nodeType !== 1 
        ? ['']
        : elm.id && document.getElementById(elm.id) === elm
            ? [`id("${elm.id}")`]
            : [...segs(elm.parentNode), elm instanceof HTMLElement
                ? `${elm.localName}[${idx(elm)}]`
                : `*[local-name() = "${elm.localName}"][${idx(elm)}]`];
    return segs(element).join('/');
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if(rawFile.readyState === 4)  {
        if(rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          console.log(allText);
         }
      }
    }
    rawFile.send(null);
  }

//document.querySelectorAll("*").forEach(el => {console.log(el);el.addEventListener("click", logEvent)});
document.addEventListener("click", logEvent);
document.addEventListener("change", logEvent);
document.addEventListener("mouseover", logEvent);
document.addEventListener("mouseout", logEvent);
document.addEventListener("keydown", logEvent);
document.addEventListener("load", logEvent);