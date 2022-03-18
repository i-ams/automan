document.querySelector('webview').executeScript({
  code: 'alert("Hello");',
  function(results) { if (results && results.length) { }
});