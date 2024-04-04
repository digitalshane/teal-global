
document.addEventListener(`click`, e => {
  const origin = e.target.closest(`a`);
  
  var eventProperties = {
 	'Page': window.location.pathname,
    'Destination Link': origin.href,
    'Link Text': origin.textContent,
    'Location on Page': origin.getAttribute('link-location')
	};
  
  if (origin) {
    amplitude.logEvent('website:click', eventProperties);
  }
});
