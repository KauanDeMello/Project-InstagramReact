import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"


export default function Corpo(){
    return(
    <div class="corpo">
    <div class="esquerda">
      <div>
        <Stories/>
        <Posts/>
      </div>
    </div>
    <SideBar/>
    </div>
  )
}
