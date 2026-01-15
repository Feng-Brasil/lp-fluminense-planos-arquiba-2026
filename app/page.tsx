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
          <div className="max-w-3xl">
            <span className="text-[#185347] font-bold tracking-widest uppercase mb-4 block">Temporada 2026: O Ano do Guerreiro</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6 italic">
              VIVENCIE A <span className="text-[#68121f]">HISTÓRIA</span> <br />
              NAS LARANJEIRAS
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Libertadores, Brasileirão, Copa do Brasil e Carioca. Não assista de longe. Seja parte da alma tricolor com o Plano Arquiba 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="bg-[#ffffff] text-[#171717] px-8 py-5 rounded-sm font-black text-xl text-center hover:bg-[#68121f] hover:text-white transition-all duration-500 uppercase">
                QUERO SER SÓCIO ARQUIBA AGORA!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA + SOLUÇÃO */}
      <section className="py-20 bg-[#121212] border-y border-[#393939]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold uppercase italic text-[#185347]">Cansado de ficar de fora?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#68121f] text-2xl">✕</span>
                  <p className="text-lg text-gray-400">Filas virtuais intermináveis e ingressos esgotados em minutos.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#68121f] text-2xl">✕</span>
                  <p className="text-lg text-gray-400">Preços abusivos em jogos decisivos da Libertadores.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#68121f] text-2xl">✕</span>
                  <p className="text-lg text-gray-400">Nenhuma prioridade na hora que o Fluminense mais precisa de você.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#185347] p-8 rounded-lg border-l-8 border-[#68121f]">
              <h3 className="text-3xl font-bold mb-4 uppercase">A Solução Tricolor</h3>
              <p className="text-lg mb-6">Com o Plano Arquiba, você garante 100% de desconto em ingressos e prioridade máxima de compra. O Maracanã é a sua casa.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">✓ Check-in prioritário</li>
                <li className="flex items-center gap-2">✓ Descontos exclusivos em produtos</li>
                <li className="flex items-center gap-2">✓ Experiências únicas no clube</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-4">Vantagens de ser <span className="text-[#185347]">Guerreiro</span></h2>
            <div className="h-1 w-24 bg-[#68121f] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">🎟️</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Ingresso 100%</h3>
              <p className="text-gray-400 italic">Acesso garantido em todos os jogos com mando de campo do Fluminense no setor Arquibancada.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Prioridade 1</h3>
              <p className="text-gray-400 italic">Seja o primeiro a garantir seu lugar nas finais e clássicos antes da abertura para o público geral.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">💎</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Rede de Parceiros</h3>
              <p className="text-gray-400 italic">Descontos em centenas de estabelecimentos e na loja oficial do clube.</p>
            </div>
          </div>
        </div>
      </section>

      {/* URGÊNCIA + ESCASSEZ */}
      <section className="bg-[#68121f] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 animate-pulse">Lote Promocional 2026 Limitado!</h2>
          <p className="text-xl mb-8 font-bold">Apenas os primeiros 500 novos sócios garantirão o kit exclusivo "Tradição Tricolor".</p>
          <div className="inline-block bg-[#171717] px-8 py-4 rounded-lg border-2 border-[#ffffff]">
            <span className="text-2xl font-mono tracking-widest">RESTAM APENAS: 47 VAGAS</span>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase mb-12 text-center italic">Vozes da Arquibancada</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#121212] p-6 border-b-4 border-[#185347]">
                <div className="flex text-[#185347] mb-4">★★★★★</div>
                <p className="italic text-sm text-gray-300 mb-4">"Melhor decisão que tomei. Ver o Flu na Libertadores sem me preocupar com ingresso não tem preço!"</p>
                <p className="font-bold uppercase text-xs">— Sócio desde 2021</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORTE / PLANOS */}
      <section id="planos" className="py-24 bg-[#121212] relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#171717] border-2 border-[#185347] p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#185347] text-white px-10 py-2 rotate-45 translate-x-10 translate-y-4 font-bold">MAIS VENDIDO</div>
            <h2 className="text-5xl font-black uppercase mb-2 text-[#ffffff]">ARQUIBA 2026</h2>
            <p className="text-[#185347] font-bold mb-8 italic text-xl">O coração do Maracanã espera por você.</p>
            <div className="mb-8">
              <span className="text-2xl align-top">R$</span>
              <span className="text-7xl font-black">85</span>
              <span className="text-2xl">,00/mês</span>
            </div>
            <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
              <li className="flex items-center gap-3">✓ 100% de desconto no ingresso</li>
              <li className="flex items-center gap-3">✓ Prioridade 1 nas vendas</li>
              <li className="flex items-center gap-3">✓ Direito a voto (após carência)</li>
              <li className="flex items-center gap-3">✓ Carteirinha personalizada</li>
            </ul>
            <a href="#" className="block w-full bg-[#ffffff] text-[#171717] py-6 rounded-sm font-black text-2xl hover:bg-[#185347] hover:text-white transition-all duration-300 uppercase">
              QUERO SER SÓCIO AGORA!
            </a>
            <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">Contrato anual | Cancelamento sem multa em até 7 dias</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-t border-[#393939]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase mb-12 text-center italic">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            <details className="group border-b border-[#393939] pb-4">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-xl uppercase list-none">
                Como funciona o check-in?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">O check-in é feito pelo portal do sócio. Basta selecionar o jogo desejado e confirmar sua presença com 100% de desconto.</p>
            </details>
            <details className="group border-b border-[#393939] pb-4">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-xl uppercase list-none">
                Posso incluir dependentes?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Sim, você pode adicionar dependentes com valores promocionais diretamente no painel após a adesão do plano titular.</p>
            </details>
            <details className="group border-b border-[#393939] pb-4">
              <summary className="flex justify-between items-center cursor-pointer font-bold text-xl uppercase list-none">
                Onde retiro minha carteirinha?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">A carteirinha física pode ser retirada na sede das Laranjeiras ou enviada para sua residência via correios.</p>
            </details>
          </div>
        </div>
      </section>

      {/* REFORÇO FINAL + CTA */}
      <section className="py-24 bg-gradient-to-b from-[#171717] to-[#185347]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 italic leading-none">
            O FLUMINENSE <br /> PRECISA DE VOCÊ.
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">Não seja apenas um espectador. Seja um guerreiro. Honre nossas cores e ajude o Flu a ser cada vez mais forte.</p>
          <a href="#planos" className="inline-block bg-[#ffffff] text-[#171717] px-12 py-6 rounded-sm font-black text-2xl hover:bg-[#68121f] hover:text-white transition-all duration-300 uppercase shadow-2xl">
            ASSINAR PLANO ARQUIBA 2026
          </a>
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