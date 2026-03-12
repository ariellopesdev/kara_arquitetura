//CSS
import "./Home.css";

//Icons
import { FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

//Router
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <header>
        <div id="whatsapp__icon">
          <FaWhatsapp />
        </div>
        <nav id="nav__mobile">
          <Link to="/" className="logo">
            Kara Arquitetura
          </Link>
          <FiMenu />
        </nav>
        <nav id="nav__web">
          <Link to="/" className="logo">
            Kara Arquitetura
          </Link>
          <ul id="nav__itens">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Projetos</li>
            <li>Contato</li>
            <li>Painel</li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <img id="hero__background"></img>
        <h2>Sejam bem-vindos</h2>
        <h1>Conheçam a Kara Arquitetura</h1>
      </section>
      <section id="about">
        <img id="about__profile" alt="Ramon Efisio e Karla"></img>
        <article id="about__content">
          <h3 className="content--title">Quem somos</h3>
          <h4 className="content--context">Ramon Efísio</h4>
          <p className="content--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a className="callToaction__btn" href="https://wa.me/5532999999999">
            Fazer orçamento
          </a>
        </article>
      </section>
      <section id="services">
        <img id="services__background" alt="A image"></img>
        <h3 className="content--title">Serviços</h3>
        <h4 className="content-context">O que nós oferecemos.</h4>
        <article id="services__block">
          <div className="services__block--card">
            <h5 className="block__card--title">Planejamento Arquitetônico</h5>
            <p className="block__card--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a className="callToaction__btn" href="https://wa.me/5532999999999">
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Interiores</h5>
            <p className="block__card--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a className="callToaction__btn" href="https://wa.me/5532999999999">
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Consultoria</h5>
            <p className="block__card--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a className="callToaction__btn" href="https://wa.me/5532999999999">
              Fazer orçamento
            </a>
          </div>
          <div className="services__block--card">
            <h5 className="block__card--title">Acompanhamento de obras</h5>
            <p className="block__card--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <a className="callToaction__btn" href="https://wa.me/5532999999999">
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
            target="_blank"
            rel="noopener noreferrer"
            className="projects__block--card"
          >
            <img
              src="/images/apartamento.jpg"
              alt="Apartamento moderno"
              className="projects__img"
            />
            <span className="projects__title">Apartamento Moderno</span>
          </a>
          <a
            href="/projetos/apartamento-moderno"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__block--card"
          >
            <img
              src="/images/apartamento.jpg"
              alt="Apartamento moderno"
              className="projects__img"
            />
            <span className="projects__title">Lavanderia</span>
          </a>
          <a
            href="/projetos/apartamento-moderno"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__block--card"
          >
            <img
              src="/images/apartamento.jpg"
              alt="Apartamento moderno"
              className="projects__img"
            />
            <span className="projects__title">Cobertura Juiz de Fora</span>
          </a>
          <a
            href="/projetos/apartamento-moderno"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__block--card"
          >
            <img
              src="/images/apartamento.jpg"
              alt="Apartamento moderno"
              className="projects__img"
            />
            <span className="projects__title">Alphaville - Fachada</span>
          </a>
        </article>
        <button id="callToAction__loadMore">Load More</button>
      </section>
      <section id="objetive--action">
        <img></img>
        <h3 className="content--title">Nosso Objetivo</h3>
        <h4 className="content--context">Criar ambientes únicos.</h4>
        <article id="objetive--action__content">
          <h3 className="content--title">Este é o momento</h3>
          <h4 className="content--context">Faça seu orçamento</h4>
          <p className="content--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a className="callToaction__btn" href="https://wa.me/5532999999999">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h6 className="client__name">-Ariel Lopes</h6>
          </div>
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h6 className="client__name">-Ariel Lopes</h6>
          </div>
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h6 className="client__name">-Ariel Lopes</h6>
          </div>
          <div className="depoiments__content--card">
            <span className="depoiments__content--span">"</span>
            <p className="content--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h6 className="client__name">-Ariel Lopes</h6>
          </div>
        </article>
        <div className="depoiments__callToAction">
          <p className="depoiments__callToAction--text">
            Deixe você também um depoimento.
          </p>
          <textarea>Deixe aqui seu depoimento</textarea>
          <button>Enviar</button>
        </div>
      </section>
      <section id="contact">
        <img src="" alt="" />
        <h3 className="content--title">Contato</h3>
        <h4 className="content--context">Vamos começar o seu novo projeto.</h4>
        <p className="content--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          omnis aliquid deleniti assumenda quibusdam harum, cumque velit
          consequatur fugit tempora cupiditate illum totam aperiam ipsa illo
          culpa maxime! Placeat, fuga.
        </p>
        <article id="contact__content">
          <div className="contact__content--block">
            <span>-</span>
            <h6>Whatsapp</h6>
            <span>(32)99829-1774</span>
          </div>
          <div className="contact__content--block">
            <span>-</span>
            <h6>Instagram</h6>
            <span>@karaarquitetura</span>
          </div>
          <div className="contact__content--block">
            <span>-</span>
            <h6>Localização</h6>
            <span>Juiz de Fora/MG</span>
          </div>
        </article>
        <article id="contact__map">Aqui terá um mapa de jf</article>
      </section>
      <footer>
        <img src="" alt="logo" />
        <h3>Entre em contato</h3>
        <p>(32)99829-1774</p>
        <span>Juiz de Fora, Minas Gerais</span>
        <span>-</span>
        <p>
          <a href="">Kara Arquitetura</a>, todos os direitos reservados
        </p>
        <p>
          Criado por <a href="">ariellopesdev</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
