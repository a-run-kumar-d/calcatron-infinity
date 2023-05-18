import React from "react";
import "./Css/App.css"
import Calculator from "./calculator/Calculator";
import Title from "./components/Title";
import Footer from "./components/Footer";
import {Link} from "react-router-dom";
function App() {
    return(
        <div id="start">   
            <div className="main">
                    <button id="moveback"><Link to="/">&lt;&#45;</Link></button>
                    <div className="Details_frame">
                        <Title id='title2' />
                        <div id="name">Calcatron Infinity</div>
                        <div id="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Eu consequat ac felis donec et. In fermentum et. Diam maecenas ultricies mi eget mauris pharetra et. Nunc faucibus a pellentesque sit. At auctor urna nunc id cursus metus aliquam eleifend. Amet purus gravida quis blandit turpis cursus in hac. Odio euismod lacinia at quis risus sed.
                            </div>
                    </div>
                    <Calculator/>
                    <Footer id={"Foot"}/>
            </div>
        </div>
    )
}
export default App;