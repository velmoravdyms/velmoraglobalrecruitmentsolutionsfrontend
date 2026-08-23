import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CandidateForm from '@/components/CandidateForm';

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[#08080C] text-white flex flex-col justify-between">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <CandidateForm />
      </main>
      <Footer />
    </div>
  );
}