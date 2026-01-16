export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#333333] selection:bg-[#006437] selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* TOP STRIPE */}
      <div className="w-full h-[6px] bg-gradient-to-r from-[#9c2a36] via-[#ffffff] to-[#006437]"></div>

      {/* HEADER / NAVIGATION */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-24 flex items-center justify-between">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-[#006437] rounded-full flex items-center justify-center p-2 shadow-md group-hover:bg-[#004d2a] transition-colors">
                <span className="text-white font-black text-xl italic">FFC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-[#006437] leading-none uppercase">Sócio Futebol</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#9c2a36] uppercase">Fluminense Football Club</span>
              </div>
            </a>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-widest text-[#555555]">
            <a href="#" className="hover:text-[#006437] transition-colors">PLANOS</a>
            <a href="#" className="hover:text-[#006437] transition-colors">VANTAGENS</a>
            <a href="#" className="hover:text-[#006437] transition-colors">DÚVIDAS</a>
            <a href="#" className="hover:text-[#006437] transition-colors">CONTATO</a>
          </div>
          
          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[12px] font-bold tracking-widest text-[#555555] hover:text-[#006437] px-4">LOGIN</a>
            <a href="#planos" className="bg-[#006437] text-white px-8 py-4 text-[12px] font-black tracking-[0.15em] hover:bg-[#004d2a] transition-all shadow-lg hover:shadow-xl uppercase">
              Seja Sócio
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-white pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-[#9c2a36] font-black tracking-[0.3em] text-sm mb-4 uppercase">Temporada 2026</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] leading-[0.9] mb-8 uppercase tracking-tighter">
              O FLUMINENSE <br/>PRECISA DE <span className="text-[#006437]">VOCÊ.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#666666] mb-12 max-w-2xl leading-relaxed font-medium">
              Escolha o plano que melhor se adapta ao seu perfil e garanta acesso prioritário, descontos exclusivos e experiências únicas no Maracanã.
            </p>
          </div>
        </div>
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f8f8] -skew-x-12 translate-x-1/2 z-0"></div>
      </section>

      {/* PLANOS GRID */}
      <section id="planos" className="bg-[#f4f4f4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* ARQUIBA 100% */}
            <div className="bg-white border border-gray-200 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 group">
              <div className="p-10 border-b border-gray-100">
                <h3 className="text-3xl font-black text-[#1a1a1a] uppercase mb-2">Arquiba 100%</h3>
                <p className="text-[#666666] text-sm font-bold uppercase tracking-wider">A experiência completa</p>
              </div>
              <div className="p-10 flex-grow">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>100% de desconto em todos os jogos como mandante</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>Prioridade 1 na abertura de check-in</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>Direito a voto após 2 anos de contribuição</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 bg-[#fafafa]">
                <div className="mb-6">
                  <span className="text-[#9c2a36] text-sm font-black uppercase block mb-1">Mensalidade</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#1a1a1a]">R$ 85,00</span>
                    <span className="text-[#666666] font-bold text-sm">/mês</span>
                  </div>
                </div>
                <button className="w-full bg-[#1a1a1a] text-white py-5 font-black uppercase text-[12px] tracking-[0.2em] group-hover:bg-[#006437] transition-colors">
                  Selecionar Plano
                </button>
              </div>
            </div>

            {/* MARACA+ (DESTAQUE) */}
            <div className="bg-white border-4 border-[#006437] flex flex-col shadow-2xl relative transform lg:-translate-y-4 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#006437] text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
                Mais Vendido
              </div>
              <div className="p-10 border-b border-gray-100 bg-[#f9fffb]">
                <h3 className="text-3xl font-black text-[#006437] uppercase mb-2">Maraca +</h3>
                <p className="text-[#666666] text-sm font-bold uppercase tracking-wider">O plano definitivo</p>
              </div>
              <div className="p-10 flex-grow">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 text-[#1a1a1a] font-bold">
                    <span className="text-[#006437]">✓</span>
                    <span>Check-in em qualquer setor do estádio</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1a1a1a] font-bold">
                    <span className="text-[#006437]">✓</span>
                    <span>Prioridade Máxima (Nível 0)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1a1a1a] font-bold">
                    <span className="text-[#006437]">✓</span>
                    <span>Kit Sócio Exclusivo (Camisa + Carteirinha)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#1a1a1a] font-bold">
                    <span className="text-[#006437]">✓</span>
                    <span>Acesso ao Lounge Premium em jogos selecionados</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 bg-[#f9fffb]">
                <div className="mb-6">
                  <span className="text-[#9c2a36] text-sm font-black uppercase block mb-1">Mensalidade</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-[#1a1a1a]">R$ 145,00</span>
                    <span className="text-[#666666] font-bold text-sm">/mês</span>
                  </div>
                </div>
                <button className="w-full bg-[#006437] text-white py-6 font-black uppercase text-[13px] tracking-[0.2em] hover:bg-[#004d2a] transition-colors shadow-lg">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* ARQUIBA 75% */}
            <div className="bg-white border border-gray-200 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 group">
              <div className="p-10 border-b border-gray-100">
                <h3 className="text-3xl font-black text-[#1a1a1a] uppercase mb-2">Arquiba 75%</h3>
                <p className="text-[#666666] text-sm font-bold uppercase tracking-wider">Custo-benefício ideal</p>
              </div>
              <div className="p-10 flex-grow">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>75% de desconto no setor Arquibancada</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>Prioridade 2 na abertura de check-in</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#444444] font-medium">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>Rede de parceiros e descontos em produtos</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 bg-[#fafafa]">
                <div className="mb-6">
                  <span className="text-[#9c2a36] text-sm font-black uppercase block mb-1">Mensalidade</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#1a1a1a]">R$ 60,00</span>
                    <span className="text-[#666666] font-bold text-sm">/mês</span>
                  </div>
                </div>
                <button className="w-full bg-[#1a1a1a] text-white py-5 font-black uppercase text-[12px] tracking-[0.2em] group-hover:bg-[#006437] transition-colors">
                  Selecionar Plano
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONVIDADOS SECTION */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Torcida" 
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#9c2a36] p-10 text-white hidden md:block">
                  <span className="text-5xl font-black block leading-none">50%</span>
                  <span className="text-sm font-bold uppercase tracking-widest">De Desconto</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase leading-tight mb-6">
                Leve sua <span className="text-[#9c2a36]">família</span> para o jogo
              </h2>
              <p className="text-[#666666] text-lg mb-8 leading-relaxed">
                Agora você pode incluir convidados no seu plano e garantir que quem você ama esteja ao seu lado em todas as vitórias.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-4 bg-[#f8f8f8] border-l-4 border-[#006437]">
                  <span className="text-2xl">🎟️</span>
                  <p className="text-sm font-bold text-[#333333] uppercase">Até 3 convidados por titular no plano 100%</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#f8f8f8] border-l-4 border-[#006437]">
                  <span className="text-2xl">💳</span>
                  <p className="text-sm font-bold text-[#333333] uppercase">Apenas R$ 25,00 adicionais por convidado</p>
                </div>
              </div>
              <a href="#" className="inline-block bg-[#1a1a1a] text-white px-12 py-5 font-black uppercase text-[12px] tracking-[0.2em] hover:bg-[#9c2a36] transition-all">
                Adicionar Convidados
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#006437] rounded-full flex items-center justify-center p-1">
                  <span className="text-white font-black text-xs italic">FFC</span>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">Sócio Futebol</span>
              </div>
              <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                O Sócio Futebol é o programa oficial de relacionamento do Fluminense Football Club. Juntos, somos mais fortes.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 text-[#006437]">Links Úteis</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Portal de Transparência</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 text-[#9c2a36]">Atendimento</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-bold">
                <li>0800 000 0000</li>
                <li>socio@fluminense.com.br</li>
                <li>Laranjeiras, RJ</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <span>© 2026 Fluminense Football Club - Todos os direitos reservados</span>
            <div className="flex gap-8">
              <span>Desenvolvido por FFC Tech</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}