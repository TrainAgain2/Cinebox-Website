import banner from './assets/cinebox-banner.png'
import icon from './assets/cinebox-icon.png'
import logo from './assets/cinebox-logo.png'
import splash from './assets/cinebox-splash.jpg'

const highlights = [
  {
    number: '01',
    title: 'Uma experiência Cinebox',
    text: 'Visual próprio, fanarts e uma navegação desenhada para filmes e séries.',
  },
  {
    number: '02',
    title: 'Episódios no reprodutor',
    text: 'Acesso direto à continuidade da série durante a reprodução.',
  },
  {
    number: '03',
    title: 'Atualização em linha',
    text: 'O mesmo package e certificado permitem atualizar sem reinstalar o app.',
  },
]

function App() {
  return (
    <main>
      <section className="hero" style={{ '--hero-image': `url(${splash})` } as React.CSSProperties}>
        <div className="hero-shade" />
        <header className="nav shell">
          <a className="brand" href="#inicio" aria-label="Cinebox — início">
            <img src={logo} alt="Cinebox" />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#recursos">Recursos</a>
            <a href="#atualizacao">Atualização</a>
            <a href="#sobre">Sobre</a>
          </nav>
        </header>

        <div className="hero-content shell" id="inicio">
          <p className="eyebrow"><span /> CINEMA EM CASA</p>
          <h1>A sua sessão.<br /><em>O seu Cinebox.</em></h1>
          <p className="hero-copy">
            Uma experiência visual personalizada para descobrir filmes, acompanhar séries e voltar exatamente ao ponto onde parou.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#recursos">Conhecer o Cinebox</a>
            <a className="button ghost" href="#atualizacao">Ver atualização atual</a>
          </div>
          <div className="hero-meta">
            <span><b>22</b> Base Kodi Piers</span>
            <span><b>●</b> Cinebox 22.0-ph9</span>
          </div>
        </div>
      </section>

      <section className="intro shell" id="recursos">
        <div className="section-label">O QUE HÁ NO CINEBOX</div>
        <div className="intro-grid">
          <h2>Mais perto<br />da história.</h2>
          <p>
            O Cinebox mantém o foco no conteúdo: identidade visual própria, interface pensada para TV e um perfil de utilização contínuo para que a sua experiência continue onde ficou.
          </p>
        </div>
        <div className="cards">
          {highlights.map((item) => (
            <article className="feature-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-band" style={{ '--banner-image': `url(${banner})` } as React.CSSProperties}>
        <div className="visual-band__shade" />
        <div className="visual-band__content shell">
          <p className="eyebrow"><span /> ORGANIZADO PARA ASSISTIR</p>
          <h2>Filmes, séries,<br />episódios e trailers.</h2>
          <p>Uma interface feita para navegar rápido e aproveitar a sua biblioteca visual.</p>
        </div>
      </section>

      <section className="update shell" id="atualizacao">
        <div className="update-copy">
          <p className="eyebrow dark"><span /> ATUALIZAÇÃO ATUAL</p>
          <h2>NewPipe integrado<br />ao TMDbHelper.</h2>
          <p>
            A versão <strong>22.0-ph9</strong> ajusta a rota dos trailers para usar o NewPipe já incluído, sem solicitar o add-on YouTube.
          </p>
          <p>
            A atualização é feita uma vez, preservando configurações e o conteúdo já existente no perfil.
          </p>
        </div>
        <aside className="release-card">
          <img src={icon} alt="Ícone Cinebox" />
          <div>
            <small>VERSÃO ATUAL</small>
            <strong>22.0-ph9</strong>
            <span>Assinatura Cinebox · Atualização em linha</span>
          </div>
        </aside>
      </section>

      <section className="promise" id="sobre">
        <div className="shell promise-grid">
          <div>
            <p className="eyebrow"><span /> CINEBOX</p>
            <h2>Feito para<br />continuar a ver.</h2>
          </div>
          <p>
            Da fanart à escolha do próximo episódio, o Cinebox foi configurado para oferecer uma experiência pessoal e direta na sua tela.
          </p>
        </div>
      </section>

      <footer className="footer shell">
        <img src={logo} alt="Cinebox" />
        <p>Experiência visual personalizada para cinema e séries.</p>
        <span>© 2026 Cinebox</span>
      </footer>
    </main>
  )
}

export default App
