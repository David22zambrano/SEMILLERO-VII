const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcOject = localMediaStream;
        paintCanvas();
    }).catch((error)=>alert(error))
}

function paintCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeigth;
    canvas.width = width;
    canvas.height = height;


    return setInterval(()=>
    {
        ctx.drawImage(video,0,0,width,height);
        let pixels = ctx.getImageData(0,0,width,height);
        pixels = redEffect();
        ctx.putImageData(pixels, 0, 0);
        
    }, 16)

}
function putImageData(pixels){

}
function redEffect(pixels){
    for(i=0; i < pixels.data.length; i+=4){
        pixels.data[i] = pixels.data[i] + 200;
    }return pixels;
}
function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'foto')
    link.innerHTML =  `<img src="${data} alt="Image"></img>`;
    strip.insertBefore(link, strip.firstChild);
    console.log(data)

}
getVideo();
video.addEventListener('canplay', paintCanvas);
canvas.addEventListener('canplay', takePhoto);