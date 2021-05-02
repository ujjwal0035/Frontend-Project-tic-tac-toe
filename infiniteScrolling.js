let divContent=document.querySelector("#divContent");
let listEnd=document.querySelector("#listEnd");
let itemCount=0;
let appending=false;

window.addEventListener("DOMContentLoaded",load);

const load = () =>{
    addItem();
}

const addItem =() =>{
    appending=true;
    for(let i=0;i<20;i++){
        let item=generateDataBlock(['this is item #',itemCount].join(''));
        divContent.appendChild(item);
        itemCount++;
    }
    appending=false;
}
const generateDataBlock = (message) =>{
    let item=document.createElement("div");
    item.setAttribute("class","item");
    item.textContent = message;
    return item;
}


let options={
    root:null,
    rootMargin: '0px',
    threshold: 1.0
};

let callback = (entries,observer) =>{
    entries.forEach(entry =>{
        if(entry.target.id==='listEnd'){
            if(entry.isIntersecting && !appending){
                appending=true;
                addItem();
                // setTimeout(() =>{
                //     addItem();
                // },3000);
            }
        }
    })
}
let observer=new IntersectionObserver(callback,options);
observer.observe(listEnd);