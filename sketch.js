var ground; //variavel do chão
var trex ,trex_running; //variavel do trex

function preload(){
  //Preload vai carregar arquivos de imagem e som
 trex_running = loadAnimation ("trex1.png" , "trex3.png" , "trex4.png" );
}

function setup(){
  //Setup vai definir as configurações
  createCanvas(600,200); //cria a tela
  
  //criar o sprite trex
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trex_running);
  //definir a escala
  trex.scale = 0.5
  //definir a posição inicial do eixo horizontal
  trex.x = 50;
}

function draw(){
  //Draw vai desenhar na nossa tela
  background("white");
  drawSprites();

}
