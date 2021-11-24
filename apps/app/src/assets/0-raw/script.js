window.onload = function() {
  let content = decodeURIComponent(location.hash);
  console.log('location.hash: ' + content);
  document.getElementById('content').innerHTML = content;
};
