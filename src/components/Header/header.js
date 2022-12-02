import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import hamburger from "../../assets/hamburger.svg"
import { Icons, MainHeader, MainPerson } from "./HeaderStyled"


function Header(props) {



function onChangePerson(event){
  props.setPerson(event.target.value)
}


  return (
    <MainHeader>
      <MainPerson>
        <div>
          <img src="https://picsum.photos/200/300" alt="Imagem de Perfil" />
        </div>
        <div>
          <select value={props.person} onChange={onChangePerson} >
            <option value="Me" >Me</option>
            <option value="Fernando" >Fernando</option>
            <option value="Thaiane">Thaiane</option>
            <option value="Ian" >Ian</option>
            <option value="Taiana" >Taiana</option>
            <option value="Jessica" >Jessica</option>
            <option value="Juliana" >Juliana</option>
            <option value="Andre" >Andre</option>
          </select>
          <p>Online</p>
        </div>
      </MainPerson>

      <Icons>
        <a><img src={phone} alt="Phon" /></a>
        <a> <img src={camera} alt="Camera" /></a>
        <a><img src={hamburger} alt="hamburger" /></a>
      </Icons>
    </MainHeader>
  )
}
export default Header