export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1C1C1C] selection:bg-[#AA1A2F] selection:text-white" style={{ fontFamily: 'Balboa, sans-serif' }}>
      
      {/* HEADER / NAVIGATION */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://nense.com.br/assets/img/logo-socio-futebol.png" 
                alt="Sócio Futebol" 
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[16px] font-bold text-[#FFFFFF] uppercase hover:opacity-80 transition-opacity" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Login</a>
            <a href="#" className="text-[16px] font-bold text-[#FFFFFF] uppercase hover:opacity-80 transition-opacity" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Minha Conta</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Full Width */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://nense.com.br/assets/img/planos/arquiba-60/bg-topo.jpg" 
            alt="Torcida do Fluminense" 
            className="w-full h-full object-cover"
          />
          {/* Overlay escuro em degradê */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1C1C1C]"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 pt-20 flex flex-col items-center text-center">
          <span className="text-[#FFFFFF] text-[14px] lg:text-[18px] font-bold uppercase tracking-[3px] mb-4" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>
            1 MÊS GRÁTIS NA MENSALIDADE DO CONVIDADO
          </span>
          
          <h1 className="text-[56px] lg:text-[90px] font-black leading-[0.9] text-[#FFFFFF] mb-6 italic" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>
            O FLU SE VIVE JUNTO!
          </h1>
          
          <p className="text-[20px] lg:text-[26px] font-medium text-[#FFFFFF] mb-12 max-w-2xl opacity-90">
            Convide, economize e sigam juntos na arquibancada.
          </p>

          {/* Lista de benefícios em boxes na horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4">
              <span className="text-3xl text-white">🎟️</span>
              <p className="text-white text-[14px] font-bold uppercase leading-tight" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Mais prioridade na compra de ingressos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4">
              <span className="text-3xl text-white">$</span>
              <p className="text-white text-[14px] font-bold uppercase leading-tight" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Descontos em ingressos para convidados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4">
              <span className="text-3xl text-white">👥</span>
              <p className="text-white text-[14px] font-bold uppercase leading-tight" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Viva o jogo com quem faz parte da sua história</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4">
              <span className="text-3xl text-white">🔥</span>
              <p className="text-white text-[14px] font-bold uppercase leading-tight" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>VAMOS TODOS JUNTOS RUMO À GLÓRIA</p>
            </div>
          </div>

          {/* Botão principal (CTA) */}
          <a 
            href="#planos" 
            className="bg-[#008C3A] text-white px-12 py-6 rounded-full font-black text-[20px] lg:text-[24px] uppercase transition-all hover:scale-105 hover:bg-[#006b2c] shadow-[0_0_30px_rgba(0,140,58,0.4)]"
            style={{ fontFamily: 'Balboa Bold, sans-serif' }}
          >
            Adicionar convidado agora
          </a>
        </div>
      </section>

      {/* PLANOS GRID SECTION */}
      <section id="planos" className="bg-[#F8F9FA] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1C1C] uppercase italic" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>
              Escolha o seu <span className="text-[#008C3A]">Plano</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#AA1A2F] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ARQUIBA 100% */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#008C3A] flex flex-col">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Arquiba 100%</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>R$ 95<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 100% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 1 no Check-in</li>
                <li className="flex items-center gap-2">✅ Até 3 convidados</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>ASSINAR AGORA</button>
            </div>

            {/* ARQUIBA 60% */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Arquiba 60%</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>R$ 55<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 60% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 2 no Check-in</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>ASSINAR AGORA</button>
            </div>

            {/* GUERREIRO */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>Guerreiro</h3>
              <div className="text-4xl font-black text-[#008C3A] mb-6" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>R$ 25<span className="text-sm text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2">✅ 20% de desconto no ingresso</li>
                <li className="flex items-center gap-2">✅ Prioridade 3 no Check-in</li>
              </ul>
              <button className="w-full bg-[#008C3A] text-white py-4 rounded-xl font-bold hover:bg-[#006b2c] transition-colors" style={{ fontFamily: 'Balboa Bold, sans-serif' }}>ASSINAR AGORA</button>
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
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Balboa, sans-serif' }}>© 2024 FLUMINENSE FOOTBALL CLUB. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </main>
  );
}