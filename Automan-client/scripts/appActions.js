$('input').click(function(){
    alert('click...');
});

function testFun(){
	console.log('From parent js file...');
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