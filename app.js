const popUp = document.getElementById('pop');
const view = document.getElementById('view');
const wrapper = document.getElementById('wrapper');
const list = [
    {
        src: "https://picsum.photos/id/10/500/350",
        caption: "Mountain lake at dawn"
    },
    {
        src: "https://picsum.photos/id/29/500/350",
        caption: "Forest trail in autumn"
    },
    {
        src: "https://picsum.photos/id/33/500/350",
        caption: "City skyline at night"
    },
    {
        src: "https://picsum.photos/id/42/500/350",
        caption: "Desert dunes"
    },
    {
        src: "https://picsum.photos/id/48/500/350",
        caption: "Old stone bridge"
    },
    {
        src: "https://picsum.photos/id/54/500/350",
        caption: "Coastline cliffs"
    },
    {
        src: "https://picsum.photos/id/64/500/350",
        caption: "Snowy pine forest"
    },
    {
        src: "https://picsum.photos/id/76/500/350",
        caption: "Rolling green hills"
    },
    {
        src: "https://picsum.photos/id/96/500/350",
        caption: "Foggy harbor"
    }
]

// one thumbnail per item, caption as alt text
const elements = list.map(itm => {
    const ele = document.createElement("img")
    ele.src = itm.src;
    ele.alt = itm.caption;
    return ele
})

// the same modal is refilled with the clicked item's data every time
function popAppear(idx){
    if(idx>=0){
        popUp.style.display="flex";
        view.innerHTML="";
        const close = document.createElement("button")
        close.id="closeButt";
        close.innerHTML="X";
        const img = document.createElement("img")
        img.src=list[idx].src;
        img.alt=list[idx].caption;
        const caption = document.createElement("p")
        caption.innerHTML=list[idx].caption;
        view.appendChild(close);
        view.appendChild(img);
        view.appendChild(caption);
    }
}

// close with the X button or a click on the background (not inside the box)
popUp.addEventListener('click', (event)=>{
    if(event.target.id==="closeButt" || event.target.id==="pop"){
        popUp.style.display="none";
    }
})

// one listener on the container handles every thumbnail
wrapper.addEventListener("click", (event)=>{
    popAppear(elements.indexOf(event.target));
})

elements.forEach(itm =>{
    wrapper.appendChild(itm);
})
