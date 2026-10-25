
import pfp from "./assets/PFP.jpg"

import { FaGithubSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer(){
    return(<>
    <div>
        <hr />
        <footer>
            <h1>Built with Love ♥️</h1>
            <a href="https://www.prashant-sharma.com.np/" target="_blank">By SoloMacher <img src={pfp} width={40}height={40} alt="Developer photo" /></a>
            <div className="socials">
                <a href="https://github.com/SoloMacherYT" target="_blank"> <FaGithubSquare size={45} style={{color:"#000000"}}/> </a>
                <a href="https://www.youtube.com/@Solomacher?sub_confirmation=1" target="_blank"><AiFillYoutube size={45} style={{color:"red"}}/></a>
                <a href="https://www.linkedin.com/in/solomacher/" target="_blank"><BsLinkedin size={40} style={{color:"#0A66C2"}}/></a>
                <a href="https://www.instagram.com/solomacheryt/" target="_blank"><FaInstagramSquare size={45} style={{color:"#E1306c"}}/></a>
            </div>
        </footer>
    </div>
    </>)
}