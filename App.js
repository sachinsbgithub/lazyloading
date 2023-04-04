const images = document.querySelectorAll("img");
console.log(images);
let imageOptions = {};
let observer = new IntersectionObserver((entries, observer) => {
 entries.forEach((entry) => {
  if (entry.isIntersecting) return;
  const image = entry.target;
  // console.log(image)
  //const newUrl = image.getAttribute("data-src");
  //console.log(newUrl);
  //image.src = newUrl;
  image.src = image.src.replace("&w=10&", "&w=800&");
  observer.unobserve(image);
 });
}, imageOptions);

images.forEach((image) => {
 observer.observe(image);
});
