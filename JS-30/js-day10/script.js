const imagenes = [...document.querySelectorAll('img')];
const config = {
    root: null,
    threshold: 1,
    rootMargin: '10px 1000px 10px 1000px'
}
const observer =new IntersectionObserver(entries => {
        entries.map(entry =>{
            entry.target.classList.toggle('visible', entry.isIntersecting);
        })
}, config);
imagenes.forEach((img) =>  observer.observe(img));
