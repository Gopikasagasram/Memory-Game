const cards = [
    {
        name : 'dove',
        icon : '<i class="fa-solid fa-dove"></i>'
    },
    {
        name : 'paw',
        icon : '<i class="fa-solid fa-paw"></i>'
    },
    {
        name : 'spider',
        icon : '<i class="fa-solid fa-spider"></i>'
    },
    {
        name : 'shirt',
        icon : '<i class="fa-solid fa-shirt"></i>'
    },
    {
        name : 'apple',
        icon : '<i class="fa-solid fa-apple-whole"></i>'
    },
    {
        name : 'plane',
        icon : '<i class="fa-solid fa-plane-departure"></i>'
    },
    {
        name :  'car',
        icon : '<i class="fa-solid fa-car"></i>'
    },
    {
        name : 'cycle',
        icon : '<i class="fa-solid fa-bicycle"></i>'
    },
    {
        name : 'hippo',
        icon : '<i class="fa-solid fa-hippo"></i>'
    },
   {
        name : 'dove',
        icon : '<i class="fa-solid fa-dove"></i>'
    },
    {
        name : 'paw',
        icon : '<i class="fa-solid fa-paw"></i>'
    },
    {
        name : 'spider',
        icon : '<i class="fa-solid fa-spider"></i>'
    },
    {
        name : 'shirt',
        icon : '<i class="fa-solid fa-shirt"></i>'
    },
    {
        name : 'apple',
        icon : '<i class="fa-solid fa-apple-whole"></i>'
    },
    {
        name : 'plane',
        icon : '<i class="fa-solid fa-plane-departure"></i>'
    },
    {
        name :  'car',
        icon : '<i class="fa-solid fa-car"></i>'
    },
    {
        name : 'cycle',
        icon : '<i class="fa-solid fa-bicycle"></i>'
    },
    {
        name : 'hippo',
        icon : '<i class="fa-solid fa-hippo"></i>'
    }
];


const section = document.querySelector("section");

shufflecards();
displaycards();
let flippedcards = [];

let matchedcount = 0;

function shufflecards() {
    for (let i=0;i<cards.length;i++){    
        let randIndex = Math.floor(Math.random()*(i+1));
        [cards[i],cards[randIndex]] = [cards[randIndex],cards[i]];
    }
}

function displaycards() {
    for (let i=0;i<cards.length;i++){
    let card = document.createElement("div");
    card.setAttribute("id",i);
    card.classList.add('displaycards');
    section.append(card);
    card.addEventListener("click",flipcards);
    }}


function flipcards() {
        let cardid = this.getAttribute('id');
        
        if (this.classList.contains('showimage') || this.classList.contains('matched') || flippedcards.length >= 2) {
            return;
        }

        flippedcards.push(this);
        let length = flippedcards.length;
        
        if(length<=2){
        this.classList.remove('displaycards');
        this.classList.add('showimage');
        this.innerHTML = cards[cardid].icon;
        
        if(length==2){
            setTimeout(checkmatch,1000);
          }
        } 
    }

function checkmatch() {
        let cardid1 = flippedcards[0].getAttribute('id');
        let cardid2 = flippedcards[1].getAttribute('id');
        
        if (cards[cardid1].name ===cards[cardid2].name){

            flippedcards[0].classList.add('matched');
            flippedcards[1].classList.add('matched');
            flippedcards[0].innerHTML = ' ';
            flippedcards[1].innerHTML = ' ';
            flippedcards=[];
            matchedcount++;

        }else {
             flippedcards[0].classList.add('displaycards');
             flippedcards[0].classList.remove('showimage');
             flippedcards[0].innerHTML = "";  
             flippedcards[1].classList.add('displaycards');
             flippedcards[1].classList.remove('showimage');
             flippedcards[1].innerHTML = "";  
             flippedcards=[];
        }

        if (matchedcount == 9){
            section.innerHTML = "You won";
            section.classList.add('matchedcount');
            

        }
}



