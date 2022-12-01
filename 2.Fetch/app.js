// FETCH AJAX REQUEST

// ************** TEXT DATA **************
let textButton = document.getElementById('text');
let textCard = document.getElementById('textCard');

textButton.addEventListener('click', () => {
	let method = 'GET';
	let url = './data/text.txt';

	fetch(url)
		.then((data) => {
			// ok 告訴我們 HTTP resopnse 是否成功。
			// 具體來說，它檢查 HTTP 狀態是否在 200-299 範圍內

			if (data.ok) {
				return data.text();
			} else {
				// F12 主控台可查看異常訊息
				throw new Error('Something went wrong');
			}
		})
		.then((data) => {
			showTextData(data);
		});

	let showTextData = (data) => {
		let messageTemplate = `<p>${data}</p>`;
		textCard.innerHTML = messageTemplate;
	};
});

// ************** JSON DATA **************
// Step 1: 取得元素
let jsonButton = document.getElementById('json');
let jsonCard = document.getElementById('jsonCard');

// Step 2: 對點擊進行監聽
jsonButton.addEventListener('click', () => {
	// Step 3: 建立AJAX請求
	let method = 'GET';
	let url = './data/data.json';

	fetch(url)
		.then((data) => {
			if (data.ok) {
				return data.json();
			} else {
				// F12 主控台可查看異常訊息
				throw new Error('Something went wrong');
			}
		})
		.then((JSObject) => {
			showJSONData(JSObject);
		});

	let showJSONData = (data) => {
		let messageTemplate = `<p>${data.say1}${data.say2}</p>`;
		jsonCard.innerHTML = messageTemplate;
	};
});

// ************** API DATA **************
let apiButton = document.getElementById('api');
let apiCard = document.getElementById('apiCard');

apiButton.addEventListener('click', () => {
	let url = 'https://bible-api.com/john%203:16';

	fetch(url)
		.then((data) => {
			if (data.ok) {
				return data.json();
			} else {
				// F12 主控台可查看異常訊息
				throw new Error('Something went wrong');
			}
		})
		.then((JSObject) => {
			showJSONData(JSObject);
		});

	let showJSONData = (data) => {
		let messageTemplate = `<p>${data.reference}${data.text}</p>`;
		apiCard.innerHTML = messageTemplate;
	};
});
