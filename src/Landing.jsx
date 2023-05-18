import "./Css/Landing.css";
import Title from "./components/Title";
import Main_img from "./calculator/assets/Main_img.svg";
import Union from "./calculator/assets/Union.svg";
import img2 from "./calculator/assets/img2.svg";
import Footer from "./components/Footer";
import {Link} from "react-router-dom";
function Landing() {
  return (
    <>
      <div className="Navbar">
        <Title id={"tt"} />
        <div id="left_side">
          <a href="#maindetails">Home</a>
          <a href="#dt">Try it</a>
          <a href="#abouts">About</a>
        </div>
      </div>
      <div className="maindetails">
        <div id="head1">The World’s Best Mathematical Calculator</div>
        <div id="head2">
          CALCOTRON
          <br />
          INFINITY
        </div>
        <div id="head3">
          <div>PRECISE</div>
          <div>PERFECT</div>
          <div>POWERFULL</div>
        </div>
      </div>
      <div id="img1">
        <img src={Main_img} alt="not available" />
      </div>
      <div className="secondlayer">
        <img src={Union} alt="not available" />
      </div>
      <div id="dt">
        <img src={img2} alt="not available" />
        <div id="sd">
          <div id="sh1">
            WHAT IS <br />
            CALCATRON INFINITY
          </div>
          <div id="sh2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            et ultrices neque ornare aenean. Pharetra pharetra massa massa
            ultricies mi quis hendrerit dolor. Vulputate enim nulla aliquet
            porttitor lacus luctus accumsan tortor. Eu consequat ac felis donec
            et. In fermentum et. Diam maecenas ultricies mi eget mauris pharetra
            et. Nunc faucibus a pellentesque sit. At auctor urna nunc id cursus
            metus aliquam eleifend. Amet purus gravida quis blandit turpis
            cursus in hac. Odio euismod lacinia at quis risus sed.
          </div>
          <button id="sh3"><Link to="/app">TRY IT</Link></button>
        </div>
      </div>
      <div className="thirdlayer" id="abouts">
        <div id="about">About Us</div>
        <div id="ab">
          <div id="miss">
            <div className="head0">Our Mission</div>
            <div id="tx">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra et ultrices neque ornare aenean. Pharetra pharetra massa
              massa ultricies mi quis hendrerit dolor. Vulputate enim nulla
              aliquet porttitor lacus luctus accumsan tortor. Eu consequat ac
              felis donec et. In fermentum et. Diam maecenas ultricies mi eget
              mauris pharetra et. Nunc faucibus a pellentesque sit. At auctor
              urna nunc id cursus metus aliquam eleifend. Amet purus gravida
              quis blandit turpis cursus in hac. Odio euismod lacinia at quis
              risus sed.
            </div>
          </div>
          <div id="goal">
            <div className="head0">Our Goal</div>
            <ul id="pp">
              <li>
                utate enim nulla aliquet porttitor lacus luctus accumsan tortor.
                Eu consequat ac felis donec et. In fermentum et
              </li>
              <li>Diam maecenas ultricies mi eget mauris pharetra et. </li>
              <li>faucibus a pellentesque sit. At auctor urna nunc id cur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipes neque ornare
                aenean. Pharetra pharetra massa massa ultricies mi quis
                hendrerit dolor. Vulp
              </li>
            </ul>
          </div>
        </div>
        <Footer id={"Foot"}/>
      </div>
    </>
  );
}
export default Landing;
