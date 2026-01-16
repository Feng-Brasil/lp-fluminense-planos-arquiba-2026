export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#212529] selection:bg-[#9C2A36] selection:text-white" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <nav className="bg-[#FFFFFF] border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://nense.com.br/assets/img/logo-socio-futebol.png" 
                alt="Sócio Futebol" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* CONTADOR DE SÓCIOS */}
          <div className="hidden lg:flex items-center">
            <div className="bg-[#006437] text-white px-8 py-2.5 rounded-full text-[16px] font-black uppercase tracking-[0.15em] shadow-md border-2 border-[#004d2a]">
              SOMOS 65.432 SÓCIOS DO FLU
            </div>
          </div>
          
          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-[14px] font-bold text-[#495057] px-4 uppercase">Login</a>
            <a href="#planos" className="bg-[#006437] text-white px-6 py-3 text-[14px] font-bold rounded-md hover:bg-[#004d2a] transition-all uppercase">
              Seja Sócio
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - ARQUIBA 60% STYLE (COPIED FROM LINK) */}
      <section className="relative w-full bg-[#006437] overflow-hidden min-h-[600px] flex items-center">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://nense.com.br/assets/img/planos/arquiba-60/bg-topo.jpg" 
            alt="Background Arquiba" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006437] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-white">
              <div className="inline-block bg-[#9C2A36] text-white px-4 py-1 rounded mb-6 text-[14px] font-bold uppercase tracking-wider">
                Plano Arquiba 60%
              </div>
              <h1 className="text-[48px] md:text-[80px] font-black leading-[0.9] uppercase italic mb-6">
                O MARACA É <br />
                <span className="text-[#9C2A36]">SUA CASA.</span>
              </h1>
              <p className="text-[18px] md:text-[22px] font-medium mb-8 max-w-lg leading-relaxed">
                Garanta 60% de desconto em todos os jogos com mando de campo do Fluminense no setor de arquibancada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex flex-col">
                  <span className="text-[14px] uppercase font-bold opacity-80">A partir de</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[20px] font-bold">R$</span>
                    <span className="text-[56px] font-black leading-none">55</span>
                    <span className="text-[16px] font-medium">/mês</span>
                  </div>
                </div>
                <a href="#" className="bg-[#9C2A36] hover:bg-[#7a212a] text-white px-10 py-5 rounded-lg font-black uppercase text-[18px] transition-all shadow-xl hover:scale-105">
                  Assinar Agora
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT - CARD MOCKUP */}
            <div className="hidden lg:flex justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#9C2A36] opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="https://nense.com.br/assets/img/planos/arquiba-60/card-arquiba-60.png" 
                  alt="Cartão Arquiba 60%" 
                  className="relative z-10 w-[450px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM WAVE DECORATION */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.1,123.61,105.54,182.21,95.83,240.81,86.12,263.39,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* PLANOS GRID SECTION */}
      <section id="planos" className="bg-[#FFFFFF] py-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-black text-[#212529] uppercase italic leading-none">
              ESCOLHA O SEU <span className="text-[#006437]">PLANO</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#9C2A36] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            
            {/* PLANO ARQUIBA 100% */}
            <div className="bg-[#FFFFFF] border-2 border-[#006437] rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all group relative">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Arquiba 100%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">95</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>100% desc.</strong> em arquibancada</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>Prioridade 1</strong> no check-in</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* PLANO ARQUIBA 60% */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Arquiba 60%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">55</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>60% desc.</strong> em arquibancada</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>Prioridade 2</strong> no check-in</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* PLANO GUERREIRO */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Guerreiro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">25</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>20% desc.</strong> em arquibancada</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>Prioridade 3</strong> no check-in</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* PLANO MARACA+ */}
            <div className="bg-[#FFFFFF] border-2 border-[#9C2A36] rounded-xl overflow-hidden flex flex-col shadow-xl relative z-10 transform lg:scale-105">
              <div className="bg-[#9C2A36] text-white text-center py-1.5 text-[10px] font-bold uppercase tracking-widest">
                Plano Premium
              </div>
              <div className="p-5 bg-[#FFF5F6] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Maraca +</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#9C2A36]">175</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#212529] font-bold">
                    <span className="text-[#9C2A36]">★</span>
                    <span>Check-in em qualquer setor</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#212529] font-bold">
                    <span className="text-[#9C2A36]">★</span>
                    <span>Prioridade Máxima</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#9C2A36] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#7a212a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* PLANO SUB-12 */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#9C2A36] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Sub-12</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#9C2A36]">15</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#9C2A36] font-bold">✓</span>
                    <span>Até 12 anos de idade</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#9C2A36] font-bold">✓</span>
                    <span>Check-in gratuito</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#9C2A36] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#7a212a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-[#F8F9FA] py-20 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-black text-[#212529] uppercase italic mb-6 leading-tight">
                POR QUE SER <span className="text-[#9C2A36]">SÓCIO FUTEBOL?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-[#006437] font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Prioridade Máxima</h4>
                    <p className="text-[#6C757D] text-[14px]">Garanta seu lugar no Maracanã antes de todo mundo nos jogos decisivos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-[#006437] font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Economia Real</h4>
                    <p className="text-[#6C757D] text-[14px]">Com os descontos nos ingressos, o plano se paga em apenas um ou dois jogos no mês.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-[#006437] font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Experiências</h4>
                    <p className="text-[#6C757D] text-[14px]">Participe de sorteios para visitas ao CT, Match Day e outros eventos exclusivos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://nense.com.br/assets/img/bg-home-socio.png" 
                alt="Torcida Fluminense" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#212529] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
            <div className="col-span-1 md:col-span-1">
              <img 
                src="https://nense.com.br/assets/img/logo-socio-futebol-white.png" 
                alt="Sócio Futebol" 
                className="h-12 mb-6"
              />
            </div>
            <div>
              <h5 className="font-bold uppercase text-[14px] mb-6 text-[#9C2A36]">Institucional</h5>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">O Programa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparência</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase text-[14px] mb-6 text-[#006437]">Ajuda</h5>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chat Online</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase text-[14px] mb-6">Redes Sociais</h5>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-all cursor-pointer">f</div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-all cursor-pointer">t</div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-all cursor-pointer">i</div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500 font-medium">
            <p>© 2024 FLUMINENSE FOOTBALL CLUB. TODOS OS DIREITOS RESERVADOS.</p>
            <p>DESENVOLVIDO POR FFC TECH</p>
          </div>
        </div>
      </footer>
    </main>
  );
}