export default function Corpo () {

    return (
        <div class="corpo">

        <div class="esquerda">

            <Stories />
            <Posts />

        
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <Sugestoes />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}

function Stories (){
    const infoStories = ["9gag", "meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai", "filomoderna", "memeriagourmet"];
    return (
        <div class="stories">

            {infoStories.map(dado => <Story info={dado}/>)} {/*Já executa <Story /> para cada item do array*/}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    );
}

function Story (props){
    const {info} = props;
    return (
        <div class="story">
              <div class="imagem">
                <img src={`assets/img/${info}.svg`}/>
              </div>
              <div class="usuario">
                {info}
              </div>
            </div>
    );

}

function Sugestoes () {
    const infoSugestoes = ["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"];
    
    return (
        infoSugestoes.map(dado => <Sugestao info={dado}/>)
    );
}

function Sugestao (props){

    const {info} = props;

    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={`assets/img/${info}.svg`} />
                <div class="texto">
                  <div class="nome">{info}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );

}


function Posts (){

const meowed = ["meowed", "gato-telefone", "respondeai", "101.523"];
const barked = ["barked", "dog", "adorable_animals", "99.159" ]

return (
    <div class="posts">

        {meowed.map(dados => <Post usuario = {dados} conteudo = {dados} curtiu = {dados} curtidas = {dados}/>)}
    
    </div>

);

}

function Post (props){

    const {usuario, conteudo, curtiu, curtidas} = props;

    return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={`assets/img/${usuario}.svg`} />
                  {usuario}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={`assets/img/${conteudo}.svg`} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={`assets/img/${curtiu}.svg`} />
                  <div class="texto">
                    Curtido por <strong>{curtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}