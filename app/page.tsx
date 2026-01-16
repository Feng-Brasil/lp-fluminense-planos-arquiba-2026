export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1C1C1C] selection:bg-[#AA1A2F] selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <nav className="bg-[#FFFFFF] border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://nense.com.br/assets/img/logo-socio-futebol.png" 
                alt="Sócio Futebol" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="bg-[#008C3A] text-white px-8 py-2.5 rounded-full text-[16px] font-bold uppercase tracking-wider shadow-md">
              SOMOS 65.432 SÓCIOS DO FLU
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="text-[14px] font-bold text-[#1C1C1C] px-4 uppercase">Login</a>
            <a href="#planos" className="bg-[#008C3A] text-white px-6 py-3 text-[14px] font-bold rounded-md hover:bg-[#006b2c] transition-all uppercase">
              Seja Sócio
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - PRIMEIRO SCROLL */}
      <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-[64px] lg:py-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-center">
            
            {/* LEFT CONTENT (TEXTO PRINCIPAL) */}
            <div className="lg:col-span-7 flex flex-col gap-[24px]">
              <h1 className="text-[36px] lg:text-[48px] font-bold leading-[1.2] text-[#1C1C1C]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Seja Sócio Arquiba – Sócio Futebol do Fluminense
              </h1>
              
              <h2 className="text-[24px] lg:text-[28px] font-semibold leading-[1.4] text-[#1C1C1C]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Prioridade na compra de ingressos + descontos de até 100% para jogos no Maracanã
              </h2>
              
              <p className="text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#1C1C1C] max-w-xl">
                Contrate agora seu plano Arquiba e garanta check-in com benefícios exclusivos, além de descontos em ingressos e produtos oficiais.
              </p>

              {/* BENEFÍCIOS RÁPIDOS */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-3 text-[18px] lg:text-[20px] font-semibold leading-[1.5]" style={{ color: '#1C1C1C' }}>
                  <span className="text-[#008C3A]">🔥</span>
                  <span>Check-in com desconto de até 100%</span>
                </div>
                <div className="flex items-center gap-3 text-[18px] lg:text-[20px] font-semibold leading-[1.5]" style={{ color: '#1C1C1C' }}>
                  <span className="text-[#008C3A]">🎟️</span>
                  <span>Prioridade na compra de ingressos</span>
                </div>
                <div className="flex items-center gap-3 text-[18px] lg:text-[20px] font-semibold leading-[1.5]" style={{ color: '#1C1C1C' }}>
                  <span className="text-[#008C3A]">👥</span>
                  <span>Leve convidados com vantagens</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col gap-4 mt-4">
                <a 
                  href="#planos" 
                  className="w-full lg:w-auto inline-block bg-[#008C3A] text-white px-10 py-5 rounded-lg font-bold text-[16px] lg:text-[18px] text-center transition-all border-2 border-[#008C3A] hover:bg-white hover:text-[#008C3A] hover:-translate-y-1 shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Quero meu plano Arquiba
                </a>
                <a 
                  href="#info" 
                  className="text-[#AA1A2F] font-bold text-[14px] lg:text-[16px] underline underline-offset-4 hover:opacity-80 transition-opacity"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Ver vantagens completas
                </a>
              </div>

              {/* INDICADORES DE CONFIANÇA */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-[#008C3A] font-bold text-xl">+ de 65k</span>
                  <span className="text-[12px] uppercase text-gray-500 font-semibold">sócios felizes</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#008C3A] font-bold text-xl">Exclusivo</span>
                  <span className="text-[12px] uppercase text-gray-500 font-semibold">Descontos reais</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#008C3A] font-bold text-xl">100% Digital</span>
                  <span className="text-[12px] uppercase text-gray-500 font-semibold">Sem burocracia</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT (HERO IMAGE) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* OVERLAY/DECORATION */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#008C3A]/10 via-transparent to-[#AA1A2F]/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-[#008C3A]/20 rounded-tr-3xl z-0"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-[#AA1A2F]/20 rounded-bl-3xl z-0"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://nense.com.br/assets/img/planos/arquiba-60/bg-topo.jpg" 
                  alt="Torcida vibrando no estádio – Sócio Arquiba" 
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg italic">#SejaSócio</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PLANOS GRID SECTION */}
      <section id="planos" className="bg-[#F8F9FA] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1C1C] uppercase italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Escolha o seu <span className="text-[#008C3A]">Plano</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#AA1A2F] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ARQUIBA 100% */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#008C3A] flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Arquiba 100%</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6">R$ 95<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 100% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 1 no Check-in</li>
                <li className="flex items-center gap-2">✅ Até 3 convidados</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors">ASSINAR AGORA</button>
            </div>

            {/* ARQUIBA 60% */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Arquiba 60%</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6">R$ 55<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 60% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 2 no Check-in</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors">ASSINAR AGORA</button>
            </div>

            {/* GUERREIRO */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Guerreiro</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6">R$ 25<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 20% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 3 no Check-in</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors">ASSINAR AGORA</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1C1C] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <img 
            src="https://nense.com.br/assets/img/logo-socio-futebol-white.png" 
            alt="Sócio Futebol" 
            className="h-10 mx-auto mb-8"
          />
          <p className="text-gray-400 text-sm">© 2024 FLUMINENSE FOOTBALL CLUB. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </main>
  );
}