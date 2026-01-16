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

      {/* HERO & PLANOS INTEGRATED SECTION */}
      <section className="relative bg-[#F8F9FA] pt-20 pb-24 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* HERO CONTENT */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-[50px] md:text-[90px] font-black text-[#212529] leading-[0.85] mb-6 uppercase italic tracking-tighter">
              2026 <span className="text-[#9C2A36]">COMEÇOU!</span>
            </h1>
            <p className="text-[20px] md:text-[24px] text-[#6C757D] max-w-3xl font-semibold leading-tight mb-4">
              A temporada está só no início. Escolha seu plano e jogue junto com o Fluzão!
            </p>
          </div>

          {/* COMPACT PLANOS GRID */}
          <div id="planos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            
            {/* PLANO ARQUIBA 100% */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Arquiba 100%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">85</span>
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
                    <span><strong>Prioridade 1</strong></span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar
                </button>
              </div>
            </div>

            {/* PLANO ARQUIBA 75% */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Arquiba 75%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">60</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>75% desc.</strong> em arquibancada</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>Prioridade 2</strong></span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar
                </button>
              </div>
            </div>

            {/* PLANO RAIZ */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-5 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Raiz</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#006437]">35</span>
                  <span className="text-[12px] font-medium text-[#6C757D]">/mês</span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span>Acesso à compra de ingressos</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#006437] font-bold">✓</span>
                    <span><strong>Prioridade 3</strong></span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#006437] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#004d2a] transition-colors">
                  Assinar
                </button>
              </div>
            </div>

            {/* PLANO MARACA+ (DESTAQUE) */}
            <div className="bg-[#FFFFFF] border-2 border-[#9C2A36] rounded-xl overflow-hidden flex flex-col shadow-xl relative z-10 transform lg:scale-105">
              <div className="bg-[#9C2A36] text-white text-center py-1 text-[10px] font-bold uppercase tracking-widest">
                Mais Completo
              </div>
              <div className="p-5 bg-[#FFF5F6] border-b border-[#DEE2E6]">
                <h3 className="text-[18px] font-black text-[#212529] uppercase italic mb-1">Maraca +</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[32px] font-black text-[#9C2A36]">145</span>
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
                  Assinar
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
                    <span>Até 12 anos</span>
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-[#495057]">
                    <span className="text-[#9C2A36] font-bold">✓</span>
                    <span>Check-in gratuito</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-[#9C2A36] text-white py-3 rounded-lg font-bold uppercase text-[12px] hover:bg-[#7a212a] transition-colors">
                  Assinar
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-[#FFFFFF] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-black text-[#212529] uppercase italic mb-6 leading-tight">
                POR QUE SER <span className="text-[#9C2A36]">SÓCIO FUTEBOL?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-[#006437] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Prioridade Máxima</h4>
                    <p className="text-[#6C757D] text-[14px]">Garanta seu lugar no Maracanã antes de todo mundo nos jogos decisivos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-[#006437] font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Economia Real</h4>
                    <p className="text-[#6C757D] text-[14px]">Com os descontos nos ingressos, o plano se paga em apenas um ou dois jogos no mês.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-[#006437] font-bold">03</span>
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
                <li><a href="#" className="hover:text-white">O Programa</a></li>
                <li><a href="#" className="hover:text-white">Transparência</a></li>
                <li><a href="#" className="hover:text-white">Termos e Condições</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase text-[14px] mb-6 text-[#006437]">Ajuda</h5>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><a href="#" className="hover:text-white">Dúvidas Frequentes</a></li>
                <li><a href="#" className="hover:text-white">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white">Chat Online</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase text-[14px] mb-6">Redes Sociais</h5>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-colors cursor-pointer">f</div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-colors cursor-pointer">t</div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#006437] transition-colors cursor-pointer">i</div>
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