window.onscroll = function() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		document.getElementById('navbar').classList.add('scrolled');
	} else {
		document.getElementById('navbar').classList.remove('scrolled');
	}
}
// AOS
AOS.init({
	duration: 800,
});
// Switch Toggle
const toggleSwitch = document.querySelector('.toggle-switch');
const checkbox = toggleSwitch.querySelector('.checkbox');
const body = document.body;


function toggleMode(isDarkMode) {
	if (isDarkMode) {
		body.classList.add('dark-mode');
		checkbox.checked = true;
	} else {
		body.classList.remove('dark-mode');
		checkbox.checked = false;
	}
}
toggleSwitch.addEventListener('click', function() {
	if (checkbox.checked) {
		toggleMode(false);
		localStorage.setItem('isDarkMode', 'false');
	} else {
		toggleMode(true);
		localStorage.setItem('isDarkMode', 'true');
	}
});
const storedMode = localStorage.getItem('isDarkMode');
if (storedMode === 'true') {
	toggleMode(true);
} else {
	toggleMode(false);
}