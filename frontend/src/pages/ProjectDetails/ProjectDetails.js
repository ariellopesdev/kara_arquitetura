import "./ProjectDetails.css";

import { Link, useParams } from "react-router-dom";

import Logo from "../../assets/images/logo_kara.png";

import Bathroom_BlackandWhite1 from "../../assets/images/bathroom_blackandwhite1.jpg";
import Bathroom_BlackandWhite2 from "../../assets/images/bathroom_blackandwhite2.jpg";
import Bathroom_BlackandWhite3 from "../../assets/images/bathroom_blackandwhite3.jpg";
import Bathroom_BlackandWhite4 from "../../assets/images/bathroom_blackandwhite4.jpg";
import Bathroom_BlackandWhite5 from "../../assets/images/bathroom_blackandwhite5.jpg";
import Bathroom_BlackandWhite6 from "../../assets/images/bathroom_blackandwhite6.jpg";
import Bathroom_BlackandWhite7 from "../../assets/images/bathroom_blackandwhite7.jpg";
import Beauty_Salon1 from "../../assets/images/beauty_salon1.jpg";
import Beauty_Salon2 from "../../assets/images/beauty_salon2.jpg";
import Beauty_Salon3 from "../../assets/images/beauty_salon3.jpg";
import Beauty_Salon4 from "../../assets/images/beauty_salon4.jpg";
import Beauty_Salon5 from "../../assets/images/beauty_salon5.jpg";
import Beauty_Salon6 from "../../assets/images/beauty_salon6.jpg";
import Beauty_Salon7 from "../../assets/images/beauty_salon7.jpg";
import Beauty_Salon8 from "../../assets/images/beauty_salon8.jpg";
import Beauty_Salon9 from "../../assets/images/beauty_salon9.jpg";
import Beauty_Salon10 from "../../assets/images/beauty_salon10.jpg";
import Beauty_Salon11 from "../../assets/images/beauty_salon11.jpg";
import ButecoCentral_Bar1 from "../../assets/images/butecocentral_bar1.jpg";
import ButecoCentral_Bar2 from "../../assets/images/butecocentral_bar2.jpeg";
import ButecoCentral_Bar3 from "../../assets/images/butecocentral_bar3.jpeg";
import ButecoCentral_Bar4 from "../../assets/images/butecocentral_bar4.jpeg";
import ButecoCentral_Bar5 from "../../assets/images/butecocentral_bar5.jpeg";
import House_FL_Pool1 from "../../assets/images/house_fl_pool1.jpg";
import House_FL_Pool2 from "../../assets/images/house_fl_pool2.jpg";
import House_FL_Pool3 from "../../assets/images/house_fl_pool3.jpg";
import House_FL_Pool4 from "../../assets/images/house_fl_pool4.jpg";
import House_FL_Pool5 from "../../assets/images/house_fl_pool5.jpg";
import House_FL_Pool6 from "../../assets/images/house_fl_pool6.jpg";
import House_FL_Backyard_Facade from "../../assets/images/house_fl_backyard_facade.jpg";
import Gourmet_Area_Backyard from "../../assets/images/gourmet_area_backyard.jpg";
import Kitchen from "../../assets/images/kitchen.jpg";
import Spa from "../../assets/images/spa.jpg";

const projects = {
  "apartamento-moderno": {
    title: "Banheiro Moderno",
    subtitle: "Ambientes contemporâneos, funcionais e sofisticados.",
    images: [
      Bathroom_BlackandWhite1,
      Bathroom_BlackandWhite2,
      Bathroom_BlackandWhite3,
      Bathroom_BlackandWhite4,
      Bathroom_BlackandWhite5,
      Bathroom_BlackandWhite6,
      Bathroom_BlackandWhite7,
    ],
  },

  "salao-de-beleza": {
    title: "Salão de Beleza",
    subtitle: "Soluções inteligentes para espaços práticos e bem planejados.",
    images: [
      Beauty_Salon1,
      Beauty_Salon2,
      Beauty_Salon3,
      Beauty_Salon4,
      Beauty_Salon5,
      Beauty_Salon6,
      Beauty_Salon7,
      Beauty_Salon8,
      Beauty_Salon9,
      Beauty_Salon10,
      Beauty_Salon11,
    ],
  },

  "buteco-central": {
    title: "Buteco Central",
    subtitle:
      "Projeto pensado para valorizar conforto, convivência e estética.",
    images: [
      ButecoCentral_Bar1,
      ButecoCentral_Bar2,
      ButecoCentral_Bar3,
      ButecoCentral_Bar4,
      ButecoCentral_Bar5,
    ],
  },

  "gourmetarea-linhares": {
    title: "Linhares - Área Gourmet",
    subtitle: "Arquitetura residencial com presença, identidade e elegância.",
    images: [
      House_FL_Pool1,
      House_FL_Pool2,
      House_FL_Backyard_Facade,
      House_FL_Pool3,
      House_FL_Pool4,
      House_FL_Pool5,
      House_FL_Pool6,
    ],
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects[slug];

  if (!project) {
    return (
      <main className="project-details">
        <h1>Projeto não encontrado</h1>
        <Link to="/">Voltar para home</Link>
      </main>
    );
  }

  return (
    <div className="project-details">
      <header>
        <nav id="nav__web">
          <Link to="/" className="logo">
            <img className="logo_img" src={Logo} alt="Logo Kara Arquitetura" />
          </Link>

          <ul id="nav__itens">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#projects">Projetos</Link>
            </li>
            <li>
              <Link to="/#contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="project-details__main">
        <section className="project-details__hero">
          <span>Projeto Kara Arquitetura</span>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </section>

        <section className="project-details__gallery">
          {project.images.map((image, index) => (
            <div key={index} className="project-details__image-container">
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="project-details__image"
              />
            </div>
          ))}
        </section>

        <div className="project-details__actions">
          <Link to="/" className="project-details__back">
            Voltar para a Home
          </Link>

          <a
            href="https://wa.me/5532988386065"
            target="_blank"
            rel="noopener noreferrer"
            className="project-details__budget"
          >
            Fazer orçamento
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
