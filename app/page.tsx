
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const activeJobs = [
    { title: 'Factory Workers & Assemblers', location: 'Poland & Romania', pay: 'Competitive EUR/hr', tag: 'URGENT INTAKE' },
    { title: 'Warehouse Logistics Helpers', location: 'Slovakia & Czech Republic', pay: 'Accommodation Included', tag: 'CONTRACT 2 YRS' },
    { title: 'House Managers & Nannies', location: 'UAE / Qatar / Saudi Arabia', pay: 'Free Housing & Airfare', tag: 'FREE MEDICAL' },
    { title: 'Security Guards & Watchmen', location: 'Qatar & Turkey', pay: 'Training Provided', tag: 'HOT OPENING' },
  ];

  const recruitmentSteps = [
    { num: '01', title: 'Document Submission', desc: 'Submit your valid passport, updated CV, and academic or professional certificates.' },
    { num: '02', title: 'Medical & Screening', desc: 'Undergo mandatory medical fitness testing and preliminary agency interview screening.' },
    { num: '03', title: 'Contract & Visa Approval', desc: 'Receive your official work contract from the destination country and initiate visa processing.' },
    { num: '04', title: 'Deployment & Travel', desc: 'Complete pre-departure orientation, receive flight arrangements, and deploy to your destination.' },
  ];

  const destinationCountries = [
    { region: 'EASTERN EUROPE', countries: 'Poland, Slovakia, Slovenia, Romania, Czech Republic' },
    { region: 'MIDDLE EAST & GULF', countries: 'UAE (Dubai), Qatar, Saudi Arabia, Bahrain' },
    { region: 'CROSS-BORDER HUB', countries: 'Turkey & Regional Expansion Nodes' },
  ];

  const servicesList = [
    {
      type: 'CV CREATION & REVAMPING',
      badge: 'CAREER SUPPORT',
      desc: 'Professional formatting of Europass and Gulf-standard CVs tailored to pass international employer Applicant Tracking Systems (ATS).',
    },
    {
      type: 'PASSPORT APPLICATION & TRACKING',
      badge: 'DOCUMENTATION',
      desc: 'Step-by-step guidance for eCitizen passport applications, appointment scheduling, requirement verification, and status tracking.',
    },
    {
      type: 'WORK PERMIT / VISA',
      badge: 'VISA & LEGAL',
      desc: 'Full legal work authorization processing, employment contracts, and verified employer sponsorship across Europe and Gulf regions.',
    },
    {
      type: 'VISIT / TOURIST VISA',
      badge: 'VISA & LEGAL',
      desc: 'Fast-track application processing for business, trade fairs, family visits, and short-term overseas travel.',
    },
    {
      type: 'STUDY / STUDENT VISA',
      badge: 'VISA & LEGAL',
      desc: 'Complete admission guidance, university placement support, and student visa filing for top European and global institutes.',
    },
    {
      type: 'MEDICAL & PRE-DEPARTURE ORIENTATION',
      badge: 'DEPLOYMENT PREP',
      desc: 'Booking approved medical screening centers (GAMCA/GCC) and conducting mandatory pre-departure cultural and work ethic briefings.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans scroll-smooth">
      <div className="text-white">
        <Navbar />
      </div>

      {/* Dark Hero Section */}
      <section className="bg-slate-100 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16 w-full text-left">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 py-1 rounded text-xs font-mono text-[#E2A900] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E2A900] animate-pulse"></span>
            <span className="font-bold">NEA LICENSED INTERNATIONAL RECRUITMENT AGENCY</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl uppercase mb-6 text-slate-900">
            OVERSEAS FACTORY, WAREHOUSE & <span className="text-[#E000FF]">DOMESTIC JOBS IN EUROPE & GULF</span>
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mb-8 leading-relaxed font-medium">
            Velmora Global Recruitment Solutions connects Kenyan workers directly with verified employers across Eastern Europe, Turkey, and the Gulf.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <Link
              href="/submit"
              className="bg-[#E000FF] hover:bg-[#c400df] text-white font-bold uppercase px-8 py-4 rounded transition-all text-center shadow-md shadow-[#E000FF]/25"
            >
              APPLY NOW / SUBMIT PASSPORT & CV
            </Link>
        


            <a
            href="https://wa.me/254715633999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D2818] hover:bg-[#25D366] text-white font-mono font-bold text-xs uppercase px-8 py-4 rounded transition-all duration-300 text-center flex items-center justify-center border border-[#164228] hover:border-[#25D366] shadow-md hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <span>WHATSAPP US 07-15-633-999</span>
          </a>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      {/* <section id="about" className="bg-[#08080C] bg-[#F1F5F9] text-white py-16 px-6 border-b border-[#23232D] scroll-mt-20"> */}

      {/* <section id="about" className="bg-[#1A1A24] text-white py-16 px-6 border-b border-[#23232D] scroll-mt-20"> */}
      <section id="about" className="bg-[#0F172A] text-white py-16 px-6 border-b to-slate-200 text-slate-900 scroll-mt-20">
      {/* <section id="about" className="bg-[#E2E8F0] text-slate-900 py-16 px-6 border-b to-slate-200 text-slate-900 scroll-mt-20"> */}
  

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-2">
                CRITICAL INFRASTRUCTURE // WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                BRIDGING KENYAN TALENT WITH <span className="text-[#E000FF]">GLOBAL OPPORTUNITY</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9E9EB3] uppercase border border-[#23232D] px-3 py-1 rounded">
              NEA REGISTRATION // VGRS-07
            </span>
          </div>

          {/* Core Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Story Column */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-sans text-sm md:text-base leading-relaxed">
              <p className="font-semibold text-white text-lg">
                Velmora Global Recruitment Solutions is a fully licensed, ethical labor mobility partner headquartered in Nairobi, Kenya.
              </p>
              <p>
                We specialize in end-to-end international manpower placement across high-demand labor corridors in Eastern Europe, Turkey, and the Gulf Region. From factory operations and logistics handling to hospitality and domestic healthcare, we streamline cross-border recruitment for both candidates and international enterprise partners.
              </p>
              <p>
                Operating under strict compliance with the National Employment Authority (NEA), our team handles every step of the talent pathway—verifying candidate credentials, orchestrating visa work permits, facilitating medical screenings, and managing pre-departure orientation.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
                <Link
                  href="/submit"
                  className="bg-[#E000FF] hover:bg-[#BF00FF] text-white font-bold uppercase px-6 py-3 rounded transition-all shadow-[0_0_15px_rgba(224,0,255,0.2)]"
                >
                  APPLY FOR OPEN POSITIONS
                </Link>
                <a
                  href="#contact"
                  className="border border-[#23232D] hover:border-white text-white font-bold uppercase px-6 py-3 rounded transition-all"
                >
                  PARTNER WITH US
                </a>
              </div>
            </div>

            {/* Key Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#111116] border border-[#23232D] p-5 rounded-lg space-y-2">
                <span className="text-[#E2A900] font-bold text-sm block">01 / ETHICAL RECRUITMENT</span>
                <p className="text-[#9E9EB3] text-[11px] leading-normal">
                  Strict adherence to fair wage practices and transparent deployment contracts with zero hidden fees.
                </p>
              </div>

              <div className="bg-[#111116] border border-[#23232D] p-5 rounded-lg space-y-2">
                <span className="text-[#E000FF] font-bold text-sm block">02 / EUROPE & GULF HUBS</span>
                <p className="text-[#9E9EB3] text-[11px] leading-normal">
                  Direct employer pipelines in Poland, Slovakia, UAE, Qatar, Saudi Arabia, and Turkey.
                </p>
              </div>

              <div className="bg-[#111116] border border-[#23232D] p-5 rounded-lg space-y-2">
                <span className="text-[#E000FF] font-bold text-sm block">03 / END-TO-END VISAS</span>
                <p className="text-[#9E9EB3] text-[11px] leading-normal">
                  Full work authorization management, passport processing support, and embassy appointments.
                </p>
              </div>

              <div className="bg-[#111116] border border-[#23232D] p-5 rounded-lg space-y-2">
                <span className="text-[#E2A900] font-bold text-sm block">04 / PRE-DEPARTURE READY</span>
                <p className="text-[#9E9EB3] text-[11px] leading-normal">
                  Comprehensive candidate briefings, medical clearance coordination, and travel logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content Area */}
      <div className="bg-white text-slate-900">
        {/* Section 1: Active Vacancies */}
        <section id="jobs" className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-1">IMMEDIATE RECRUITMENT</span>
              <h2 className="text-2xl font-black uppercase text-slate-900">AVAILABLE JOB VACANCIES</h2>
            </div>
            <Link href="/submit" className="text-xs font-mono text-[#E000FF] font-bold hover:underline">SUBMIT CV FOR VACANCIES →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeJobs.map((job, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col justify-between hover:border-[#E000FF] hover:shadow-md transition-all">
                <div>
                  <span className="text-[10px] font-mono bg-[#E000FF]/10 text-[#E000FF] border border-[#E000FF]/30 px-2 py-0.5 rounded font-bold uppercase">
                    {job.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 uppercase mt-3 mb-2">{job.title}</h3>
                  <p className="text-xs text-slate-600 font-mono mb-1">📍 Destination: <span className="text-slate-900 font-semibold">{job.location}</span></p>
                  <p className="text-xs text-[#E2A900] font-mono font-bold mb-4">💰 {job.pay}</p>
                </div>
                <Link
                  href="/submit"
                  className="w-full text-center bg-slate-900 hover:bg-[#E000FF] text-white font-mono text-xs font-bold py-2.5 rounded transition-all"
                >
                  APPLY FOR THIS ROLE
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Recruitment Process */}
        <section className="max-w-7xl mx-auto px-6 py-12 w-full border-t border-slate-100">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-1">SIMPLE 4-STEP PATHWAY</span>
            <h2 className="text-2xl font-black uppercase text-slate-900">HOW THE RECRUITMENT PROCESS WORKS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentSteps.map((step) => (
              <div key={step.num} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-[#E000FF] transition-all flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-mono font-black text-[#E000FF] block mb-3">{step.num}</span>
                  <h3 className="text-base font-bold text-slate-900 uppercase mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Destination Countries */}
        <section className="max-w-7xl mx-auto px-6 py-12 w-full border-t border-slate-100">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-1">GLOBAL DEPLOYMENT NETWORK</span>
            <h2 className="text-2xl font-black uppercase text-slate-900">DESTINATION COUNTRIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinationCountries.map((dest, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-[#E000FF] transition-all">
                <span className="text-xs font-mono text-[#E2A900] font-bold block mb-2">{dest.region}</span>
                <p className="text-slate-900 font-bold text-base leading-relaxed">{dest.countries}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Agency & Support Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-12 w-full border-t border-slate-100 pb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-1">
                LEGAL, DOCUMENTATION & CAREER SUPPORT
              </span>
              <h2 className="text-2xl font-black uppercase text-slate-900">
                OUR COMPREHENSIVE SERVICES
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              END-TO-END OVERSEAS DEPLOYMENT SUPPORT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-[#E000FF] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold bg-[#E000FF]/10 text-[#E000FF] border border-[#E000FF]/30 px-2 py-0.5 rounded uppercase inline-block mb-3">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 uppercase mb-2">
                    {service.type}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-mono font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex justify-between items-center text-xs font-mono">
                  <span className="text-[#E2A900] font-bold">VERIFIED SERVICE</span>
                  <Link
                    href="/submit"
                    className="text-[#E000FF] font-bold hover:underline"
                  >
                    ENQUIRE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Dark Contact & Location Section */}
      <section id="contact" className="bg-[#08080C] text-white border-t border-[#23232D] py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            <div className="bg-[#111116] border border-[#23232D] p-8 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#E2A900] font-bold uppercase tracking-wider block mb-1">VISIT OUR OFFICES</span>
                <h2 className="text-2xl font-black uppercase text-white mb-6">CONTACT & LOCATION</h2>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <p className="text-[#9E9EB3] uppercase mb-1">PHYSICAL HEADQUARTERS:</p>
                    <p className="text-white text-sm font-bold">Matrix 1 Building, General Mathenge Drive</p>
                    <p className="text-gray-400">Nairobi, Kenya</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-[#9E9EB3] uppercase mb-1">PHONE / WHATSAPP SUPPORT:</p>
                    <a href="tel:0715633999" className="text-[#E000FF] text-base font-bold block hover:underline">
                      +254 715 633 999
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="text-[#9E9EB3] uppercase mb-1">WORKING HOURS:</p>
                    <p className="text-white">Monday – Friday: 7:00 AM – 7:00 PM</p>
                    <p className="text-white">Saturday: 7:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.me/254715633999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase text-xs py-3.5 rounded-lg text-center block transition-all shadow-md"
                >
                  CHAT DIRECTLY ON WHATSAPP
                </a>
              </div>
            </div>

            <div className="bg-[#111116] border border-[#23232D] rounded-xl overflow-hidden h-[380px] md:h-auto">
              <iframe
                title="Velmora Recruitment Location"
                src="https://maps.google.com/maps?q=-1.2583,36.8045&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}