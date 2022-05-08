export default () => {
    console.log("splidejs");

    //add style file to head
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/themes/splide-default.min.css";
    document.head.appendChild(link);

    //add script file to head
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    //init Splide when script load
    script.addEventListener('load', function () {
        // new Splide('.splide').mount();
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 2,
            gap: '0.5rem',
            arrows: true,
            autoplay : true,
            interval: 2000,
            direction: 'ltr',

        });
        splide.mount();
    });

    //building slider elements
    let elementContainer = document.createElement("div");
    elementContainer.id = "elementContainer"
    elementContainer.className = "splide"

    let elementTrack = document.createElement("div");
    elementTrack.className = "splide__track"
    elementContainer.appendChild(elementTrack);

    let elementList = document.createElement("ul");
    elementList.className = "splide__list text-center"
    elementTrack.appendChild(elementList);

    for (let index = 0; index < 10; index++) {
        let elementSlide = document.createElement("li");
        elementSlide.className = "splide__slide"
        elementSlide.innerHTML = `<img src="https://picsum.photos/600/400?random=${index}" class="m-auto">`
        elementSlide.innerHTML += `<p class="absolute top-3/4 right-1/2 left-1/2 whitespace-nowrap text-red-200			">Slide ${index}</p>`
        elementList.appendChild(elementSlide);
    }

    console.log("elementContainer : ", elementContainer);

    document.body.appendChild(elementContainer);

}