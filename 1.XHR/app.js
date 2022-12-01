// XHR AJAX REQUEST

// ************** TEXT DATA **************
let textButton = document.getElementById('text');
let textCard = document.getElementById('textCard');

textButton.addEventListener('click', () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', './data/text.txt');
	xhr.send();
	xhr.onload = () => {
		if (xhr.status == 200) {
			let data = xhr.responseText;
			let messageTemplate = `<p>${data}</p>`;
			textCard.innerHTML = messageTemplate;
		}
	};
});

// ************** JSON DATA **************
let jsonButton = document.getElementById('json');
let jsonCard = document.getElementById('jsonCard');

jsonButton.addEventListener('click', () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', './data/data.json');
	xhr.send();
	xhr.onload = () => {
		if (xhr.status == 200) {
			let data = JSON.parse(xhr.responseText);
			let messageTemplate = `<p>${data.say1}${data.say2}</p>`;
			jsonCard.innerHTML = messageTemplate;
		}
	};
});

// ************** API DATA **************
let apiButton = document.getElementById('api');
let apiCard = document.getElementById('apiCard');

apiButton.addEventListener('click', () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://bible-api.com/john%203:16');
	xhr.send();
	xhr.onload = () => {
		if (xhr.status == 200) {
			let data = JSON.parse(xhr.responseText);
			let messageTemplate = `<p>${data.reference}${data.text}</p>`;
			apiCard.innerHTML = messageTemplate;
		}
	};
});
