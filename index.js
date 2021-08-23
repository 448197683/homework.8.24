const button = document.createElement("button");
const wrap = document.createElement("wrap");
const div = document.createElement("div");
const spanTitle = document.createElement("span1");
const spanQuote = document.createElement("span2");
const spanAuthor = document.createElement("span3");
let onoff = false;

document.body.appendChild(button);
button.innerHTML = `Today's Quote`;
wrap.appendChild(spanTitle);
wrap.appendChild(div);
wrap.appendChild(spanQuote);
wrap.appendChild(spanAuthor);

async function getData() {
	const quote = await fetch(`https://quotes.rest/qod?category=inspire`);
	const quoteJson = await quote.json();
	if (onoff === false) {
		onoff = true;
		document.body.insertBefore(wrap, button);
		div.style.background = `url(${quoteJson.contents.quotes[0].background})`;
		spanTitle.innerHTML = `${quoteJson.contents.quotes[0].title}`;
		spanQuote.innerHTML = `${quoteJson.contents.quotes[0].quote}`;
		spanAuthor.innerHTML = `${quoteJson.contents.quotes[0].author}`;
	} else {
		onoff = false;
		wrap.remove();
	}
}

button.addEventListener("click", getData);
