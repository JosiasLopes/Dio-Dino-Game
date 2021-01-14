const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isjumping = false;
let position = 0;
//console.log(position);
function handleKeyUp(event){
	if(event.keyCode ===32){
		if(!isjumping)jump();
	}
}
function jump(){
	//posição inicial
	
	isjumping = true;
	let upInterval = setInterval(()=>{
		if(position>=150){
			//para  o intercvalo
			clearInterval(upInterval);
			
			let downInterval = setInterval(()=>{
				if(position<=20){
					clearInterval(downInterval);
					isjumping =  false;
				}
				position -=20;
		dino.style.bottom = position+"px";
			},20);
		}else{
		position +=20;
		dino.style.bottom = position+"px";
		}
	},20);
}
document.addEventListener("keyup",handleKeyUp);

//a função cria um elemento html que ira representar os cactus
function createCactus(){
	const cactus = document.createElement("div");
	let cactusposition = 1000;
	let randomTime = Math.random()*6000;
	
	cactus.classList.add("cactus");
	cactus.style.left = 1000+"px";
	//coloca o elemento cactus dentro do backgroud
	background.appendChild(cactus);
	let leftInterval = setInterval(()=>{
		
		if(cactusposition<-60){
			clearInterval(leftInterval);
			background.removeChild(cactus);
			//cactus.parent.removeChild(cactus);
		}else if(cactusposition>0 && cactusposition <60 && position<60){
			
			clearInterval(leftInterval);
			document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
		}
		else{
			cactusposition -=10;
		cactus.style.left = cactusposition+"px";
		}
	},20);
	//cria cactus aleatoris atraves de recursividade
	setTimeout(createCactus,randomTime);
}
createCactus();





