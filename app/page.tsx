export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#68121f] selection:text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
      {/* TOP BAR - REMOVED TRICOLOR STRIPE, NOW SOLID DARK */}
      <div className="w-full h-2 bg-[#121212] border-b border-[#393939]"></div>

      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-[#393939] bg-[#171717] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* LADO ESQUERDO: VOLTAR E LOGO */}
          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            <a href="/" className="flex items-center gap-2 text-sm font-bold hover:text-[#185347] transition-colors">
              <span>←</span> VOLTAR
            </a>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#185347] rounded-full flex items-center justify-center font-bold text-xl border border-[#68121f]">FFC</div>
              <span className="text-xl font-bold tracking-tighter uppercase hidden sm:inline">Sócio Futebol</span>
            </div>
          </div>

          {/* LADO DIREITO: CONTADOR + LOGIN + SEJA SÓCIO */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* CONTADOR DE SÓCIOS INTEGRADO */}
            <div className="hidden md:flex items-center gap-4 bg-[#1f1f1f] px-4 py-2 border border-white/10">
              <div className="flex flex-col leading-none">
                <span className="text-[#ffffff] font-black text-lg">65.432</span>
                <span className="text-[9px] tracking-[0.1em] uppercase opacity-60">Sócios Ativos</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#185347] hidden lg:block">Somos Fluminense</span>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 font-bold text-sm tracking-widest">
              <a href="#" className="hover:text-[#185347] transition-colors uppercase">LOGIN</a>
              <span className="text-[#393939] hidden sm:inline">|</span>
              <a href="#" className="bg-[#68121f] px-4 py-2 hover:bg-[#8a1829] transition-colors uppercase whitespace-nowrap">SEJA SÓCIO</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION + PLANOS (JOINED SCROLL) */}
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#185347]/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6 italic text-center tracking-tighter">
              2026 <span className="text-[#68121f]">COMEÇOU!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 mx-auto leading-tight uppercase font-bold text-center max-w-2xl">
              A temporada está só no início e com a torcida tricolor jogando junto somos imbatíveis. Escolha seu plano abaixo:
            </p>
          </div>

          {/* PLANOS INTEGRADOS NO PRIMEIRO SCROLL */}
          <div id="planos" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch">
            {/* Arquiba 100% */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all group">
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase leading-none group-hover:text-[#185347] transition-colors">Arquiba 100%</h3>
                <div className="h-1 w-12 bg-[#185347] mt-2"></div>
              </div>
              <ul className="text-sm space-y-3 mb-8 flex-grow font-medium text-gray-400">
                <li className="flex gap-2"><span>✓</span> 100% de desconto no setor Arquibancada</li>
                <li className="flex gap-2"><span>✓</span> Prioridade 1 no Check-in</li>
                <li className="flex gap-2"><span>✓</span> Direito a voto</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-black mb-4">R$ 85,00<span className="text-xs font-normal opacity-60">/mês</span></div>
                <button className="w-full bg-[#185347] py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1e6b5c] transition-colors">Assinar Agora</button>
              </div>
            </div>

            {/* Arquiba 75% */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all group">
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase leading-none group-hover:text-[#185347] transition-colors">Arquiba 75%</h3>
                <div className="h-1 w-12 bg-[#185347] mt-2"></div>
              </div>
              <ul className="text-sm space-y-3 mb-8 flex-grow font-medium text-gray-400">
                <li className="flex gap-2"><span>✓</span> 75% de desconto no setor Arquibancada</li>
                <li className="flex gap-2"><span>✓</span> Prioridade 2 no Check-in</li>
                <li className="flex gap-2"><span>✓</span> Direito a voto</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-black mb-4">R$ 60,00<span className="text-xs font-normal opacity-60">/mês</span></div>
                <button className="w-full bg-[#185347] py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1e6b5c] transition-colors">Assinar Agora</button>
              </div>
            </div>

            {/* Maraca+ (DESTAQUE CENTRAL) */}
            <div className="bg-[#1a1a1a] border-2 border-[#68121f] p-6 flex flex-col relative z-10 shadow-[0_0_40px_rgba(104,18,31,0.3)] transform lg:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#68121f] text-white text-[10px] px-4 py-1 font-black uppercase tracking-widest">Mais Popular</div>
              <div className="mb-6">
                <h3 className="text-3xl font-black uppercase leading-none text-[#68121f]">Maraca+</h3>
                <div className="h-1 w-16 bg-[#68121f] mt-2"></div>
              </div>
              <ul className="text-sm space-y-3 mb-8 flex-grow font-bold">
                <li className="flex gap-2"><span>✓</span> 100% de desconto em TODOS os setores</li>
                <li className="flex gap-2"><span>✓</span> Prioridade Máxima (0)</li>
                <li className="flex gap-2"><span>✓</span> Kit Sócio Exclusivo Anual</li>
                <li className="flex gap-2"><span>✓</span> Experiências VIP</li>
              </ul>
              <div className="mt-auto">
                <div className="text-4xl font-black mb-4">R$ 145,00<span className="text-xs font-normal opacity-60">/mês</span></div>
                <button className="w-full bg-[#68121f] py-5 font-black uppercase text-sm tracking-widest hover:bg-[#8a1829] transition-colors shadow-lg">Seja Premium</button>
              </div>
            </div>

            {/* Arquiba Raiz */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all group">
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase leading-none group-hover:text-[#185347] transition-colors">Arquiba Raiz</h3>
                <div className="h-1 w-12 bg-[#185347] mt-2"></div>
              </div>
              <ul className="text-sm space-y-3 mb-8 flex-grow font-medium text-gray-400">
                <li className="flex gap-2"><span>✓</span> Descontos variáveis em ingressos</li>
                <li className="flex gap-2"><span>✓</span> Prioridade 3 no Check-in</li>
                <li className="flex gap-2"><span>✓</span> Rede de parceiros</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-black mb-4">R$ 35,00<span className="text-xs font-normal opacity-60">/mês</span></div>
                <button className="w-full bg-[#185347] py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1e6b5c] transition-colors">Assinar Agora</button>
              </div>
            </div>

            {/* Sub-12 */}
            <div className="bg-[#121212] border border-[#393939] p-6 flex flex-col hover:border-[#185347] transition-all group">
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase leading-none group-hover:text-[#185347] transition-colors">Sub-12</h3>
                <div className="h-1 w-12 bg-[#185347] mt-2"></div>
              </div>
              <ul className="text-sm space-y-3 mb-8 flex-grow font-medium text-gray-400">
                <li className="flex gap-2"><span>✓</span> 100% de desconto (acompanhado)</li>
                <li className="flex gap-2"><span>✓</span> Experiências infantis</li>
                <li className="flex gap-2"><span>✓</span> Carteirinha Kids</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-black mb-4">R$ 15,00<span className="text-xs font-normal opacity-60">/mês</span></div>
                <button className="w-full bg-[#185347] py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1e6b5c] transition-colors">Assinar Agora</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO URGÊNCIA */}
      <section className="bg-[#68121f] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 animate-pulse italic">O Maraca te espera!</h2>
          <p className="text-xl font-bold uppercase tracking-widest">Não deixe para a última hora. Garanta sua prioridade nos grandes jogos de 2026.</p>
        </div>
      </section>

      {/* POR QUE SER SÓCIO */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-4">Vantagens de ser <span className="text-[#185347]">Sócio</span></h2>
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

      {/* CALL TO ACTION FINAL */}
      <section className="py-24 bg-gradient-to-b from-[#171717] to-[#185347]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 italic leading-tight">
            FAÇA PARTE DA HISTÓRIA!
          </h2>
          <p className="text-2xl mb-12 font-medium">
            A torcida começa com você — vamos juntos empurrar o Flu rumo ao topo!
          </p>
          <a href="#planos" className="inline-block bg-[#ffffff] text-[#171717] px-12 py-6 rounded-sm font-black text-2xl hover:bg-[#68121f] hover:text-white transition-all duration-300 uppercase shadow-2xl">
            ESCOLHER MEU PLANO
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#171717] border-t border-[#393939]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#185347] rounded-full flex items-center justify-center font-bold text-sm">FFC</div>
            <span className="font-bold uppercase tracking-widest">Fluminense Football Club © 2026</span>
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