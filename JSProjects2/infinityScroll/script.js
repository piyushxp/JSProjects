const count = 30;
const apiKey = "erCpqx1B5eUTmqLEig_5mFTmYhxdiTOipAqIHthqmqc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;
let photoArray = [];
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

//Check if all Images have loaded
imageLoaded = ()=>{
	console.log('Image Loaded')
}


//helper fn
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

function displayPhotos() {
	photoArray.forEach((photo) => {
		//cretae a <a> to link tpo unspalsh url
		let item = document.createElement("a");
		// item.setAttribute('href',photo.links.html)
		// item.setAttribute('target',"_blank")
		setAttributes(item, {
			href: photo.links.html,
			target: "_blank",
		});
		//create <img> for photo
		let img = document.createElement("img");
		// img.setAttribute('src',photo.urls.regular)
		// img.setAttribute('alt',photo.alt_description)
		// img.setAttribute('title',photo.alt_description)
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});

		//event listener,check when each has finished loading
img.addEventListener('load',imageLoaded)
		//put img inside a then put both inside imageContainer element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

//gets pics from unsplash API
const getPhotos = async () => {
	try {
		const response = await fetch(apiUrl);
		photoArray = await response.json();
		displayPhotos();
		console.log(photoArray);
	} catch (error) {
		console.log(error);
	}
};


//check if scrolling near bottom page .Load more Pics
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY>= document.body.offsetHeight - 1000){
        getPhotos()
        console.log('load more')
    }
})

getPhotos();