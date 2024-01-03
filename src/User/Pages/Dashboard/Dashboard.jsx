import "./dashboard.css";
import hbg1 from "../../../Assets/background/signing.jpeg";
import ser1 from "../../assets/icon/alert-em.png";
import ser2 from "../../assets/icon/pasport.png";
import ser3 from "../../assets/icon/fileCase.png";
import ser4 from "../../assets/icon/fine.png";
import ser5 from "../../assets/icon/lawyer.png";
import ser6 from "../../assets/icon/missing.png";
import ser7 from "../../assets/icon/permit.png";
import ser8 from "../../assets/icon/calender.png";
import ser9 from "../../assets/icon/policeStation.png";
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
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser6} alt="img" />
              </div>
              <p class="name-client"> Missing person</p>
            </div>
          </div>
          <div className="service">
            <div className="sTitle"></div>
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser3} alt="img" />
              </div>
              <p class="name-client"> Submit a complaint</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser4} alt="img" />
              </div>
              <p class="name-client"> Pay fine</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser5} alt="img" />
              </div>
              <p class="name-client"> Connect with Lawyer</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser2} alt="img" />
              </div>
              <p class="name-client"> Pasport verification</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser7} alt="img" />
              </div>
              <p class="name-client"> Permit Request</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser8} alt="img" />
              </div>
              <p class="name-client"> Upcoming events</p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser9} alt="img" />
              </div>
              <p class="name-client"> Nearest Station </p>
            </div>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser1} alt="img" />
              </div>
              <p class="name-client"> Emergency Request</p>
            </div>
          </div>
        </div>
      </main>
      <article>
        <div className="articleHeading">
          <Typography variant="h3">Articles</Typography>
        </div>
        <div className="articleContent">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptatem facilis id doloremque doloribus magnam corrupti eaque
            cumque repellat in maxime voluptas nemo aliquam, aspernatur rem
            voluptatum fuga fugiat consequuntur quas harum beatae numquam.
            Exercitationem harum corporis similique voluptate enim quo
            dignissimos velit numquam reprehenderit nesciunt soluta culpa esse,
            eum facere odit ut molestias obcaecati eaque est! Aliquam possimus
            accusamus quas maiores cupiditate doloremque illum alias ullam
            expedita amet fugiat commodi pariatur facilis blanditiis, minima
            consequatur quae delectus eos laborum asperiores, magni molestiae.
            Quibusdam, fugiat? Quod atque pariatur excepturi modi earum, hic
            voluptatum dignissimos, asperiores eaque minima veniam, recusandae
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            molestias totam sint suscipit veniam explicabo velit cumque
            dignissimos recusandae, officia expedita quia, mollitia iusto eaque
            voluptatum saepe voluptatem qui assumenda aspernatur ipsa. Corrupti
            cupiditate similique laborum, earum odio commodi saepe eius a quidem
            dolores hic laudantium perferendis doloribus veniam voluptatum rem
            in beatae eveniet minus at nam sit qui exercitationem maxime? Est
            omnis vel quos libero maiores id corporis commodi aliquid nobis
            doloribus. Aspernatur, error repellat, impedit facere consequuntur
            autem suscipit maiores eveniet officia quasi, provident ut expedita
            reprehenderit? Iste aperiam nostrum asperiores ea perspiciatis
            temporibus hic expedita. Nam explicabo dicta quae, inventore rem
            repudiandae adipisci sint dolor temporibus! Cupiditate, tempore
            porro laudantium nobis vitae ab itaque adipisci quia accusamus
            eligendi ipsa id reiciendis. Soluta aut, autem vero, quos distinctio
            iusto architecto tempore ullam sequi libero a, reprehenderit maxime
            ratione voluptate nemo? Ipsa assumenda animi magnam dolor similique
            ullam vero distinctio quod, illum maiores natus reiciendis voluptate
            quam quos tempore recusandae. Vel quia, optio qui quos eligendi
            atque aliquam? Aperiam, asperiores quisquam praesentium, sapiente
            optio, quos ratione quod eos velit dolor mollitia impedit. A
            blanditiis quos quidem doloribus amet, laboriosam fugit ea expedita
            iure accusamus adipisci dicta, iste natus fuga.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            similique cumque ipsam autem ut commodi quae consequatur quo, dicta
            adipisci dolore id esse quam quos aliquid accusantium eligendi
            repellendus delectus libero. Totam blanditiis officia asperiores sed
            eos, temporibus dolorem beatae nisi hic repellat repudiandae,
            adipisci vitae omnis perspiciatis soluta non illo sunt a, in quae
            ipsa. Praesentium, incidunt id? Soluta nesciunt nisi unde laboriosam
            nulla quae consequuntur quos culpa eius, modi facere excepturi in
            est reiciendis quo illo ab voluptatem! Voluptate, accusantium beatae
            veritatis fugit molestiae saepe, libero nam dolores omnis, neque
            animi facilis est laborum. Saepe esse nemo accusantium, unde, neque
            eum aspernatur sunt voluptas consequatur, natus dolorum. Vero ipsum
            harum animi, minima voluptatibus rerum ducimus ad fugiat culpa
            debitis doloremque aliquid quos aliquam cumque dolor. Porro illo
            doloremque dolorem atque reprehenderit molestiae sit, dolor odio
            totam asperiores, veniam et ullam quod libero distinctio cum nam,
            sunt laboriosam blanditiis?
          </p>
        </div>
      </article>
      
    </div>
  );
};

export default Dashboard;
