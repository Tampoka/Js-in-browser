
var photos = [
	"gallery/1-large.jpg",
	"gallery/2-large.jpg",
	"gallery/3-large.jpg",
	"gallery/4-large.jpg",
	"gallery/5-large.jpg",
];

var thumbnails = document.querySelectorAll(".gallery__photo-preview");
var fullPhoto = document.querySelector(".full-photo");

var addThumbnailClickHandler = function (thumbnail, photo) {
	thumbnail.addEventListener("click", function () {
		fullPhoto.src = photo;
	});
};

for (var i = 0; i < thumbnails.length; i++) {
	addThumbnailClickHandler(thumbnails[i], photos[i]);
}
