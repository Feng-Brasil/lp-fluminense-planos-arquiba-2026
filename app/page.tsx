export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#68121f] selection:text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-[#393939] bg-[#171717] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#185347] rounded-full flex items-center justify-center font-bold text-xl border border-[#68121f]">FFC</div>
            <span className="text-xl font-bold tracking-tighter uppercase">Sócio Futebol</span>
          </div>
          <a href="#planos" className="bg-[#ffffff] text-[#171717] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#185347] hover:text-white transition-all duration-300">
            ASSINE JÁ
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#185347]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="text-[#185347] font-bold tracking-widest uppercase mb-4 block italic">Temporada 2024/2025</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 italic">
              SOMOS <span className="text-[#68121f]">MARACANÃ!</span> Garanta já o seu lugar na arquibancada com os Planos Arquiba e empurre o Fluminense rumo às glórias de Libertadores, Brasileirão, Carioca e Copa do Brasil!
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              A temporada começa agora — e a torcida tricolor jogando junto faz toda a diferença! Seja parte dessa história dentro do estádio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="bg-[#ffffff] text-[#171717] px-8 py-5 rounded-sm font-black text-xl text-center hover:bg-[#68121f] hover:text-white transition-all duration-500 uppercase">
                TORNE-SE SÓCIO ARQUIBA AGORA!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO URGÊNCIA: COMEÇA AGORA! */}
      <section className="bg-[#68121f] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 animate-pulse italic">Começa Agora!</h2>
          <p className="text-xl font-bold uppercase tracking-widest">O Fluminense em campo precisa da sua voz. Não deixe para depois, a vaga na arquibancada é disputada!</p>
        </div>
      </section>

      {/* POR QUE SER SÓCIO ARQUIBA AGORA? */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-4">Por Que Ser Sócio <span className="text-[#185347]">Arquiba Agora?</span></h2>
            <div className="h-1 w-24 bg-[#68121f] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#171717] p-8 border-t-4 border-[#185347]">
              <h3 className="text-xl font-bold mb-4 uppercase text-[#185347]">Economia Real</h3>
              <p className="text-gray-400">Ingressos com descontos agressivos que se pagam em apenas dois jogos no mês.</p>
            </div>
            <div className="bg-[#171717] p-8 border-t-4 border-[#68121f]">
              <h3 className="text-xl font-bold mb-4 uppercase text-[#68121f]">Prioridade Total</h3>
              <p className="text-gray-400">Garanta seu lugar em clássicos e jogos decisivos antes da abertura para o público geral.</p>
            </div>
            <div className="bg-[#171717] p-8 border-t-4 border-[#185347]">
              <h3 className="text-xl font-bold mb-4 uppercase text-[#185347]">Acesso Facilitado</h3>
              <p className="text-gray-400">Check-in online rápido e prático, sem filas físicas ou estresse de última hora.</p>
            </div>
            <div className="bg-[#171717] p-8 border-t-4 border-[#68121f]">
              <h3 className="text-xl font-bold mb-4 uppercase text-[#68121f]">Clube de Vantagens</h3>
              <p className="text-gray-400">Descontos em produtos oficiais e em uma rede de parceiros exclusivos em todo o Brasil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETALHAMENTO DOS PLANOS ARQUIBA */}
      <section id="planos" className="py-24 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black uppercase mb-16 text-center italic">Escolha seu <span className="text-[#185347]">Plano Arquiba</span></h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Arquiba 100% */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all">
              <h3 className="text-2xl font-black mb-2 uppercase">Arquiba 100%</h3>
              <p className="text-[#185347] font-bold mb-4">O Plano Definitivo</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li>✓ 100% de desconto no setor Arquibancada</li>
                <li>✓ Prioridade 1 no Check-in</li>
                <li>✓ Direito a voto</li>
              </ul>
              <div className="text-2xl font-bold mb-4">R$ 85,00<span className="text-xs">/mês</span></div>
              <button className="w-full bg-[#185347] py-3 font-bold uppercase text-sm">Assinar</button>
            </div>

            {/* Arquiba 75% */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all">
              <h3 className="text-2xl font-black mb-2 uppercase">Arquiba 75%</h3>
              <p className="text-[#185347] font-bold mb-4">Custo-Benefício</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li>✓ 75% de desconto no setor Arquibancada</li>
                <li>✓ Prioridade 2 no Check-in</li>
                <li>✓ Direito a voto</li>
              </ul>
              <div className="text-2xl font-bold mb-4">R$ 60,00<span className="text-xs">/mês</span></div>
              <button className="w-full bg-[#185347] py-3 font-bold uppercase text-sm">Assinar</button>
            </div>

            {/* Arquiba Raiz */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all">
              <h3 className="text-2xl font-black mb-2 uppercase">Arquiba Raiz</h3>
              <p className="text-[#185347] font-bold mb-4">Essencial</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li>✓ Descontos variáveis em ingressos</li>
                <li>✓ Prioridade 3 no Check-in</li>
                <li>✓ Acesso à rede de parceiros</li>
              </ul>
              <div className="text-2xl font-bold mb-4">R$ 35,00<span className="text-xs">/mês</span></div>
              <button className="w-full bg-[#185347] py-3 font-bold uppercase text-sm">Assinar</button>
            </div>

            {/* Maraca+ */}
            <div className="bg-[#121212] border-2 border-[#68121f] p-6 flex flex-col scale-105 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#68121f] text-[10px] px-2 py-1 font-bold uppercase">Premium</div>
              <h3 className="text-2xl font-black mb-2 uppercase">Maraca+</h3>
              <p className="text-[#68121f] font-bold mb-4">Experiência Total</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li>✓ 100% de desconto em TODOS os setores</li>
                <li>✓ Prioridade Máxima (0)</li>
                <li>✓ Kit Sócio Exclusivo</li>
              </ul>
              <div className="text-2xl font-bold mb-4">R$ 145,00<span className="text-xs">/mês</span></div>
              <button className="w-full bg-[#68121f] py-3 font-bold uppercase text-sm">Assinar</button>
            </div>

            {/* Sub-12 */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all">
              <h3 className="text-2xl font-black mb-2 uppercase">Sub-12</h3>
              <p className="text-[#185347] font-bold mb-4">Futuro Tricolor</p>
              <ul className="text-sm space-y-2 mb-8 flex-grow">
                <li>✓ 100% de desconto (acompanhado)</li>
                <li>✓ Experiências infantis</li>
                <li>✓ Carteirinha Kids</li>
              </ul>
              <div className="text-2xl font-bold mb-4">R$ 15,00<span className="text-xs">/mês</span></div>
              <button className="w-full bg-[#185347] py-3 font-bold uppercase text-sm">Assinar</button>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-24 bg-gradient-to-b from-[#171717] to-[#185347]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 italic leading-tight">
            TORNE-SE SÓCIO ARQUIBA AGORA!
          </h2>
          <p className="text-2xl mb-12 font-medium">
            A torcida começa com você — vamos juntos empurrar o Flu rumo ao topo! Escolha seu plano e garanta seu lugar no Maracanã!
          </p>
          <a href="#planos" className="inline-block bg-[#ffffff] text-[#171717] px-12 py-6 rounded-sm font-black text-2xl hover:bg-[#68121f] hover:text-white transition-all duration-300 uppercase shadow-2xl">
            ESCOLHER MEU PLANO AGORA
          </a>
          <p className="mt-8 text-sm uppercase tracking-widest opacity-70">O Fluminense Football Club conta com você.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#171717] border-t border-[#393939]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#185347] rounded-full flex items-center justify-center font-bold text-sm">FFC</div>
            <span className="font-bold uppercase tracking-widest">Fluminense Football Club © 2024</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400 uppercase font-bold">
            <a href="#" className="hover:text-[#185347]">Privacidade</a>
            <a href="#" className="hover:text-[#185347]">Termos de Uso</a>
            <a href="#" className="hover:text-[#185347]">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}