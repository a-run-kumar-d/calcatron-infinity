import "../Css/footer.css"
import Title from "./Title"
function Footer({id}) {
    return(
        <div className="main_f">
            <div id="mainside">
                <div id="rightside">
                    <div className="detail_f">
                        <div className="name_f">
                            <Title id="title_f"/>
                            <div id="description_f">Your Mathematical Solution forAll Situations</div>
                        </div>
                    </div>
                    <div id="Email_frame">
                        <input type="email" id="email_f" placeholder="Your-Email"/>
                        <button id="subscribe" onClick={()=>{
                            // document.getElementById('email_f').va = "";
                        }}>subscibe</button>
                    </div>
                </div>
                <div className="leftside">
                    <div className="list_f">
                        <div id="head">OUR SERVICES</div>
                        <ul id={id}>
                            <li>Calcatron infinity</li>
                            <li>bicycle Matrix</li>
                            <li>Super deluxe maths</li>
                            <li>Power Calculus</li>
                            <li>All-One Solution</li>
                        </ul>
                    </div>
                    <div className="list_f">
                        <div id="head">OUR LOCATIONS</div>
                        <ul id={id}>
                            <li>Thiruvananthapuram</li>
                            <li>kochi</li>
                            <li>Bangalore</li>
                            <li>Mumbai</li>
                            <li>Calcutta</li>
                        </ul>
                    </div>
                    <div className="list_f">
                        <div id="head">OUR INVESTORS</div>
                        <ul id={id}>
                            <li>Washing Powder Milma Pvt lmt</li>
                            <li>DK tea stall& Co.in</li>
                            <li>The Picture Company</li>
                            <li>Indian Education System Pvt lmt</li>
                            <li>ChatGPT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="line"></div>
            <div id="subtext">@2023devexpo,Pvt,Lmt,India,All Right Reserved<div>Privacy Policy</div><div>Terms & Conditions</div></div>
        </div>
    )
}
export default Footer;    