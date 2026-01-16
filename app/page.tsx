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

          {/* CONTADOR DE SÓCIOS (SUBSTITUINDO NAV LINKS) */}
          <div className="hidden lg:flex items-center">
            <div className="bg-[#006437] text-white px-6 py-2 rounded-full text-[14px] font-black uppercase tracking-widest shadow-sm">
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

      {/* HERO SECTION */}
      <section className="relative bg-[#F8F9FA] py-24 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[50px] md:text-[82px] font-black text-[#212529] leading-[0.9] mb-6 uppercase italic tracking-tighter">
              2026 <span className="text-[#9C2A36]">COMEÇOU!</span>
            </h1>
            <p className="text-[20px] md:text-[24px] text-[#6C757D] max-w-3xl font-medium leading-relaxed">
              A temporada está só no início e com torcida tricolor jogando junto somos muito fortes! Seja parte da história desse ano dentro do Maraca.
            </p>
          </div>
        </div>
      </section>

      {/* PLANOS GRID */}
      <section id="planos" className="bg-[#FFFFFF] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PLANO ARQUIBA 100% */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-8 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[24px] font-black text-[#212529] uppercase italic mb-1">Arquiba 100%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[14px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[42px] font-black text-[#006437]">85</span>
                  <span className="text-[18px] font-bold text-[#6C757D]">,00</span>
                  <span className="text-[14px] font-medium text-[#6C757D] ml-1">/mês</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span><strong>100% de desconto</strong> em ingressos de arquibancada</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span><strong>Prioridade 1</strong> na compra de ingressos</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span>Direito a voto (conforme estatuto)</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 pt-0">
                <button className="w-full bg-[#006437] text-white py-4 rounded-lg font-bold uppercase text-[14px] tracking-wider hover:bg-[#004d2a] transition-colors">
                  Quero este plano
                </button>
              </div>
            </div>

            {/* PLANO MARACA+ (DESTAQUE) */}
            <div className="bg-[#FFFFFF] border-2 border-[#9C2A36] rounded-xl overflow-hidden flex flex-col shadow-xl relative transform md:-translate-y-4">
              <div className="bg-[#9C2A36] text-white text-center py-2 text-[12px] font-bold uppercase tracking-widest">
                O Plano Mais Completo
              </div>
              <div className="p-8 bg-[#FFF5F6] border-b border-[#DEE2E6]">
                <h3 className="text-[24px] font-black text-[#212529] uppercase italic mb-1">Maraca +</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[14px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[42px] font-black text-[#9C2A36]">145</span>
                  <span className="text-[18px] font-bold text-[#6C757D]">,00</span>
                  <span className="text-[14px] font-medium text-[#6C757D] ml-1">/mês</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] text-[#212529] font-semibold">
                    <span className="text-[#9C2A36] mt-1">●</span>
                    <span>Check-in em qualquer setor do estádio</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#212529] font-semibold">
                    <span className="text-[#9C2A36] mt-1">●</span>
                    <span>Prioridade Máxima de compra</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#212529] font-semibold">
                    <span className="text-[#9C2A36] mt-1">●</span>
                    <span>1 convidado com 50% de desconto</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#212529] font-semibold">
                    <span className="text-[#9C2A36] mt-1">●</span>
                    <span>Kit Sócio exclusivo</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 pt-0">
                <button className="w-full bg-[#9C2A36] text-white py-4 rounded-lg font-bold uppercase text-[14px] tracking-wider hover:bg-[#7a212a] transition-colors">
                  Assinar Agora
                </button>
              </div>
            </div>

            {/* PLANO ARQUIBA 75% */}
            <div className="bg-[#FFFFFF] border border-[#DEE2E6] rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#006437] transition-all group">
              <div className="p-8 bg-[#F8F9FA] border-b border-[#DEE2E6]">
                <h3 className="text-[24px] font-black text-[#212529] uppercase italic mb-1">Arquiba 75%</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[14px] font-bold text-[#6C757D]">R$</span>
                  <span className="text-[42px] font-black text-[#006437]">60</span>
                  <span className="text-[18px] font-bold text-[#6C757D]">,00</span>
                  <span className="text-[14px] font-medium text-[#6C757D] ml-1">/mês</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span><strong>75% de desconto</strong> em arquibancada</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span><strong>Prioridade 2</strong> na compra de ingressos</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] text-[#495057]">
                    <span className="text-[#006437] mt-1">●</span>
                    <span>Rede de parceiros e descontos</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 pt-0">
                <button className="w-full bg-[#006437] text-white py-4 rounded-lg font-bold uppercase text-[14px] tracking-wider hover:bg-[#004d2a] transition-colors">
                  Quero este plano
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-[#F8F9FA] py-20 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-black text-[#212529] uppercase italic mb-6 leading-tight">
                POR QUE SER <span className="text-[#9C2A36]">SÓCIO FUTEBOL?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-[#006437] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Prioridade Máxima</h4>
                    <p className="text-[#6C757D] text-[14px]">Garanta seu lugar no Maracanã antes de todo mundo nos jogos decisivos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-[#006437] font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] uppercase text-[16px]">Economia Real</h4>
                    <p className="text-[#6C757D] text-[14px]">Com os descontos nos ingressos, o plano se paga em apenas um ou dois jogos no mês.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
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