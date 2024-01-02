import React from "react";
import "./dashboard.css";
import hbg1 from "../../../Assets/background/signing.jpeg";
import ser1 from "../../assets/icon/alert-em.png";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="hero">
        <div className="left">
          <div className="heroText">
            <h3>COMPLETE </h3>
            <h1>LEGAL</h1>
            <h2>Service</h2>
          </div>
        </div>
        <div className="right">
          <img src={hbg1} alt="sliding img" />
        </div>
      </div>
      <main>
        <div className="services">
          {/* <Typography variant="h3">service</Typography> */}
          <div className="service">
            <div className="serviceContainer">
              <div className="serviceLogo">
                <img src={ser1} alt="service1" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">seervice</Typography>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="sTitle"></div>
            <div className="serviceContainer">
              <div className="serviceText">
                <img src={ser1} alt="service2" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">service</Typography>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="serviceContainer">
              <div className="serviceText">
                <img src={ser1} alt="service3" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">service</Typography>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="serviceContainer">
              <div className="serviceText">
                <img src={ser1} alt="service4" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">service</Typography>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="serviceContainer">
              <div className="serviceText">
                <img src={ser1} alt="service5" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">service</Typography>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="serviceContainer">
              <div className="serviceText">
                <img src={ser1} alt="service6" />
              </div>
              <div className="serviceTitle">
                <Typography variant="subtitle1">service</Typography>
              </div>
            </div>
          </div>
        </div>
      </main>
      <article>
        <div className="articleHeading">
          <Typography variant="h3">Articles</Typography>
        </div>
        <div className="articleContent">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem voluptatem facilis id doloremque doloribus magnam corrupti eaque cumque repellat in maxime voluptas nemo aliquam, aspernatur rem voluptatum fuga fugiat consequuntur quas harum beatae numquam. Exercitationem harum corporis similique voluptate enim quo dignissimos velit numquam reprehenderit nesciunt soluta culpa esse, eum facere odit ut molestias obcaecati eaque est! Aliquam possimus accusamus quas maiores cupiditate doloremque illum alias ullam expedita amet fugiat commodi pariatur facilis blanditiis, minima consequatur quae delectus eos laborum asperiores, magni molestiae. Quibusdam, fugiat? Quod atque pariatur excepturi modi earum, hic voluptatum dignissimos, asperiores eaque minima veniam, recusandae reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias totam sint suscipit veniam explicabo velit cumque dignissimos recusandae, officia expedita quia, mollitia iusto eaque voluptatum saepe voluptatem qui assumenda aspernatur ipsa. Corrupti cupiditate similique laborum, earum odio commodi saepe eius a quidem dolores hic laudantium perferendis doloribus veniam voluptatum rem in beatae eveniet minus at nam sit qui exercitationem maxime? Est omnis vel quos libero maiores id corporis commodi aliquid nobis doloribus. Aspernatur, error repellat, impedit facere consequuntur autem suscipit maiores eveniet officia quasi, provident ut expedita reprehenderit? Iste aperiam nostrum asperiores ea perspiciatis temporibus hic expedita. Nam explicabo dicta quae, inventore rem repudiandae adipisci sint dolor temporibus! Cupiditate, tempore porro laudantium nobis vitae ab itaque adipisci quia accusamus eligendi ipsa id reiciendis. Soluta aut, autem vero, quos distinctio iusto architecto tempore ullam sequi libero a, reprehenderit maxime ratione voluptate nemo? Ipsa assumenda animi magnam dolor similique ullam vero distinctio quod, illum maiores natus reiciendis voluptate quam quos tempore recusandae. Vel quia, optio qui quos eligendi atque aliquam? Aperiam, asperiores quisquam praesentium, sapiente optio, quos ratione quod eos velit dolor mollitia impedit. A blanditiis quos quidem doloribus amet, laboriosam fugit ea expedita iure accusamus adipisci dicta, iste natus fuga.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod similique cumque ipsam autem ut commodi quae consequatur quo, dicta adipisci dolore id esse quam quos aliquid accusantium eligendi repellendus delectus libero. Totam blanditiis officia asperiores sed eos, temporibus dolorem beatae nisi hic repellat repudiandae, adipisci vitae omnis perspiciatis soluta non illo sunt a, in quae ipsa. Praesentium, incidunt id? Soluta nesciunt nisi unde laboriosam nulla quae consequuntur quos culpa eius, modi facere excepturi in est reiciendis quo illo ab voluptatem! Voluptate, accusantium beatae veritatis fugit molestiae saepe, libero nam dolores omnis, neque animi facilis est laborum. Saepe esse nemo accusantium, unde, neque eum aspernatur sunt voluptas consequatur, natus dolorum. Vero ipsum harum animi, minima voluptatibus rerum ducimus ad fugiat culpa debitis doloremque aliquid quos aliquam cumque dolor. Porro illo doloremque dolorem atque reprehenderit molestiae sit, dolor odio totam asperiores, veniam et ullam quod libero distinctio cum nam, sunt laboriosam blanditiis?</p>
          
        </div>
      </article>
      <footer>
        about us
        disclaimer
        privacy policy
        terms of use
        copyright

        © 2021 . All rights reserved.
        back to top
      </footer>
    </div>
  );
};

export default Dashboard;
