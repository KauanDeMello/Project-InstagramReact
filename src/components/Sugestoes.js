function Sugestao(props){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={props.image} alt={props.text}/>
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.reason}</div>
        </div>
      </div>
        <div class="seguir">Seguir</div>
    </div>
  )
}

export default function Sugestoes(){
  const Sugestoes = [
    {name: "bad.vibes.memes", image:"assets/img/bad.vibes.memes.svg", reason: "Segue você"},
    {name: "chibirdart", image:"assets/img/chibirdart.svg", reason: "Segue você"},
    {name: "razoesparaacreditar", image:"assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram"},
    {name: "adorable_animals", image:"assets/img/adorable_animals.svg", reason: "Segue você"},
    {name: "smallcutecats", image:"assets/img/smallcutecats.svg", reason: "Segue você"}
  ]
  return(<div class="sugestoes">
  <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
  </div>
  <div class="usuario">
  {Sugestoes.map((sus) => <Sugestao name={sus.name} image={sus.image} reason={sus.reason} alt={sus.text}/>)}
  </div>
</div>)
}