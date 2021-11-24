window.onload = function() {
  let content = decodeURIComponent(location.hash);
  console.log('location.hash: ' + content);

  // sprawdzenie czy przeglądarka obsługuje trusted types
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    let policy = window.trustedTypes.createPolicy('escapePolicy', {
      createHTML: str => {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    });
    document.getElementById('content').innerHTML = policy.createHTML(content);
  }
};
