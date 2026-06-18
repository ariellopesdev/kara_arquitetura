//CSS
import "./Home.css";

//Icons
import { FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

//Router
import { Link } from "react-router-dom";

//Images
import Apartament_Blue_Kitchen from "../../assets/images/apartament_blue_kitchen.jpg";
import Apartament_Blue from "../../assets/images/apartament_blue.jpg";
import Apartament_RP_Living1 from "../../assets/images/apartament_rp_living1.jpg";
import Apartament_RP_Living2 from "../../assets/images/apartament_rp_living2.jpg";
import Bathroom_BlackandWhite1 from "../../assets/images/bathroom_blackandwhite1.jpg";
import Beauty_Salon1 from "../../assets/images/beauty_salon1.jpg";
import ButecoCentral_Bar1 from "../../assets/images/butecocentral_bar1.jpg";
import Facade from "../../assets/images/facade.jpg";
import Gourmet_Area_Backyard from "../../assets/images/gourmet_area_backyard.jpg";
import House_FL_Backyard_Facade from "../../assets/images/house_fl_backyard_facade.jpg";
import House_FL_Pool1 from "../../assets/images/house_fl_pool1.jpg";
import House_FL_Pool2 from "../../assets/images/house_fl_pool2.jpg";
import House_LI_Kitchen from "../../assets/images/house_li_kitchen.jpg";
import Kitchen_BlackandWhite1 from "../../assets/images/kitchen_blackandwhite1.jpg";
import Kitchen_BlackandWhite2 from "../../assets/images/kitchen_blackandwhite2.jpg";
import Kitchen from "../../assets/images/kitchen.jpg";
import Spa from "../../assets/images/spa.jpg";
import Logo from "../../assets/images/logo_kara.png";

const Home = () => {
  return (
    <div id="home">
      <div id="whatsapp__icon">
        <a
          href="https://wa.me/5532988386065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <header>
        <nav id="nav__mobile">
          <Link to="/" className="logo">
            <img
              className="logo_img"
              src={Logo}
              alt="Logo of Kara Arquitetura"
            />
          </Link>
          <FiMenu />
        </nav>
        <nav id="nav__web">
          <Link to="/" className="logo">
            <img
              className="logo_img"
              src={Logo}
              alt="Logo of Kara Arquitetura"
            />
          </Link>
          <ul id="nav__itens">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">Sobre nós</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>Painel</li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <img
          id="hero__background"
          src={House_FL_Backyard_Facade}
          alt="Project House of FL Backyard Facade"
        />
        <h2>Sejam bem-vindos</h2>
        <h1>Conheçam a Kara Arquitetura</h1>
      </section>
      <section id="about">
        <img id="about__profile" src={Spa} alt="Spa" />
        <article id="about__content">
          <h3 className="content--title">Quem somos</h3>
          <h4 className="content--context">Kara Arquitetura</h4>

          <p className="content--text">
            A Kara Arquitetura desenvolve projetos residenciais e comerciais que
            unem funcionalidade, estética e personalidade. Trabalhamos cada
            detalhe com dedicação e atenção, transformando ideias em espaços que
            refletem as necessidades e o estilo de vida de cada cliente.
            <br />
            Nosso compromisso é criar soluções arquitetônicas modernas e
            personalizadas, valorizando conforto, praticidade e beleza para
            entregar ambientes únicos e inspiradores.
            <br />
          </p>

          <a
            className="callToaction__btn"
            href="https://wa.me/5532988386065"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
        </article>
      </section>
      <section id="services">
        <img
          id="services__background"
          src={Gourmet_Area_Backyard}
          alt="Área gourmet externa"
        />
        <h3 className="content--title">Serviços</h3>
        <h4 className="content-context">O que nós oferecemos.</h4>
        <article id="services__block">
          <div className="services__block--card">
            <h5 className="block__card--title">Projeto de construção</h5>
            <p className="block__card--text">
              Desenvolvemos projetos arquitetônicos completos para construções
              iniciadas do zero, residenciais ou comerciais, unindo
              criatividade, funcionalidade e planejamento. Cada detalhe é
              pensado para criar ambientes que valorizam o espaço, atendem às
              necessidades do cliente e proporcionam conforto, estética e
              praticidade.
            </p>
            <a
              className="callToaction__btn"
              href="https://wa.me/5532988386065"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Projeto de reforma</h5>
            <p className="block__card--text">
              Transformamos ambientes com projetos que renovam espaços e
              melhoram sua funcionalidade. Buscamos soluções inteligentes para
              modernizar e otimizar cada ambiente, respeitando os objetivos de
              cada cliente. Nosso foco é criar espaços confortáveis, funcionais
              e visualmente equilibrados, aproveitando ao máximo o potencial de
              cada projeto.
            </p>
            <a
              className="callToaction__btn"
              href="https://wa.me/5532988386065"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Consultorias em arquitetura</h5>
            <p className="block__card--text">
              Oferecemos consultorias personalizadas para auxiliar na tomada de
              decisões relacionadas a pequenos projetos, reformas, acabamentos e
              organização de ambientes. Nossa orientação profissional ajuda a
              transformar ideias em soluções viáveis, alinhadas ao orçamento e
              às expectativas de cada cliente.
            </p>
            <a
              className="callToaction__btn"
              href="https://wa.me/5532988386065"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Acompanhamento de obra</h5>
            <p className="block__card--text">
              Acompanhamos a execução de projetos autorais para garantir que
              cada etapa da obra seja realizada conforme o projeto desenvolvido.
              Nosso objetivo é assegurar qualidade, organização e fidelidade aos
              detalhes planejados, proporcionando mais tranquilidade e segurança
              durante todo o processo construtivo.
            </p>
            <a
              className="callToaction__btn"
              href="https://wa.me/5532988386065"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento
            </a>
          </div>
        </article>
      </section>
      <section id="projects">
        <h3 className="content--title">Alguns dos nossos projetos</h3>
        <h4 className="content--context">Feitos com paixão.</h4>
        <article id="projects__block">
          <a
            href="/projetos/apartamento-moderno"
            className="projects__block--card"
          >
            <img
              src={Bathroom_BlackandWhite1}
              alt="Banheiro preto e branco"
              className="projects__img"
            />
            <span className="projects__title">Banheiro Moderno</span>
          </a>
          <a
            href="/projetos/salao-de-beleza"
            className="projects__block--card"
          >
            <img
              src={Beauty_Salon1}
              alt="Salão de beleza"
              className="projects__img"
            />
            <span className="projects__title">Salão de Beleza</span>
          </a>
          <a
            href="/projetos/buteco-central"
            className="projects__block--card"
          >
            <img
              src={ButecoCentral_Bar1}
              alt="Projeto de bar"
              className="projects__img"
            />
            <span className="projects__title">Buteco Central</span>
          </a>
          <a
            href="/projetos/gourmetarea-linhares"
            className="projects__block--card"
          >
            <img
              src={House_FL_Pool1}
              alt="Casa com piscina"
              className="projects__img"
            />
            <span className="projects__title">Linhares - Área Gourmet</span>
          </a>
        </article>
        <button id="callToAction__loadMore">Load More</button>
      </section>
      <section id="objetive--action">
        <img
          id="objetive__image"
          src={House_FL_Pool2}
          alt="Área externa com piscina"
        />
        <h3 className="content--title">Nosso Objetivo</h3>
        <h4 className="content--context">Transformar sonhos em realidade.</h4>
        <article id="objetive--action__content">
          <h3 className="content--title"> Seu sonho começa aqui</h3>
          <p className="content--text">
            Da primeira ideia aos detalhes finais, trabalhamos para transformar
            expectativas em espaços reais que inspiram. Conte com a Kara
            Arquitetura para criar ambientes personalizados, funcionais e feitos
            para durar.
          </p>
          <a
            className="callToaction__btn"
            href="https://wa.me/5532988386065"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer orçamento
          </a>
        </article>
      </section>
      <section id="depoiments">
        <h3 className="content--title">Depoimentos</h3>
        <h4 className="content--context">Feedback de alguns clientes.</h4>
        <article id="depoiments__content--block">
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              Maravilhoso, Maravilhoso. Você conseguiu sentir tudo que eu
              queria!
            </p>
            <h6 className="client__name">-C. Paes</h6>
          </div>
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              E são os melhores, confio plenamente neles!!! E estão trabalhando
              com todo carinho porque é meu primeiro imóvel!
            </p>
            <h6 className="client__name">-C. Paes</h6>
          </div>
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              Adoramos o projeto Ramon, meu irmão também gostou muito, o azul
              realmente é muito bonito. E o orçamento ficou muito enxuto do
              jeito que nós queríamos!
            </p>
            <h6 className="client__name">-R. Robson</h6>
          </div>
        </article>
        <div className="depoiments__callToAction">
          <p className="depoiments__callToAction--text">
            Deixe você também um depoimento.
          </p>
          <textarea placeholder="Conte como foi sua experiência com a Kara Arquitetura..."></textarea>
          <button>Enviar</button>
        </div>
      </section>
      <section id="contact">
        <img id="contact__image" src={Kitchen} alt="Projeto de cozinha" />
        <h3 className="content--title">Contato</h3>
        <h4 className="content--context">Vamos começar o seu novo projeto.</h4>
        <p className="content--text">
          Acreditamos que grandes projetos começam com uma{" "}
          <span className="text-highlight">conexão genuína</span> entre cliente
          e profissional. Compartilhe sua ideia conosco e descubra como podemos
          transformar seus{" "}
          <span className="text-highlight">sonhos em realidade</span>. Será um
          prazer fazer parte da realização do seu{" "}
          <span className="text-highlight">próximo projeto</span>.
        </p>
        <article id="contact__content">
          <div className="contact__content--block">
            <span>-</span>
            <h6>Whatsapp</h6>
            <span>(32)98838-6065</span>
          </div>
          <div className="contact__content--block">
            <span>-</span>
            <h6>Instagram</h6>
            <span>@kara.arqurb</span>
          </div>
          <div className="contact__content--block">
            <span>-</span>
            <h6>Localização</h6>
            <span>Juiz de Fora/MG</span>
          </div>
        </article>
        <div className="contact__map--header">
          <h5>Onde estamos</h5>
          <p>Juiz de Fora • Minas Gerais</p>
        </div>

        <article id="contact__map">
          <iframe
            title="Mapa Kara Arquitetura"
            src="https://www.google.com/maps?q=Juiz%20de%20Fora%20MG&t=k&z=13&output=embed"
            loading="lazy"
          />
        </article>
      </section>
      <footer>
        <img id="footer__image" src={Facade} alt="Kara Arquitetura" />
        <h3>Entre em contato</h3>
        <p>(32)99829-1774</p>
        <span>Juiz de Fora, Minas Gerais</span>
        <span>-</span>
        <p>
          Criado por &copy;{" "}
          <a
            href="https://ariellopesdev.github.io/portfolio-professional/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ariellopesdev
          </a>{" "}
          2026. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
