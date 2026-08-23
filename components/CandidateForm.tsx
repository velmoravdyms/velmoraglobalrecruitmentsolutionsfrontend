'use client';

import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleCategory: 'tech-engineering',
  });
  const [files, setFiles] = useState<{ cv: File | null; passport: File | null }>({
    cv: null,
    passport: null,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'passport') => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({ ...prev, [type]: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('roleCategory', formData.roleCategory);
    if (files.cv) data.append('cv', files.cv);
    if (files.passport) data.append('passport', files.passport);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/v1/candidates/apply`, {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#111116] border border-[#23232D] rounded-xl text-white shadow-2xl">
      {/* Node System Badge Header */}
      <div className="flex items-center justify-between border-b border-[#23232D] pb-4 mb-8">
        <div>
          <span className="text-xs font-mono text-[#E2A900] tracking-widest uppercase">NODE // VGRS-07</span>
          <h2 className="text-2xl font-black uppercase tracking-wider text-white mt-1">
            Global Talent Intake Terminal
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#23232D] text-[#E000FF] font-mono text-xs rounded border border-[#E000FF]/30">
          SYSTEM ACTIVE
        </span>
      </div>

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-[#E000FF] mx-auto animate-bounce" />
          <h3 className="text-2xl font-bold">APPLICATION TRANSMITTED</h3>
          <p className="text-[#9E9EB3] max-w-md mx-auto">
            Your credentials and documents have been safely logged into the Velmora HR network layer. Our team will review your profile.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#9E9EB3] uppercase mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Jane Doe"
                className="w-full bg-[#08080C] border border-[#23232D] focus:border-[#E000FF] rounded px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#9E9EB3] uppercase mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@domain.com"
                className="w-full bg-[#08080C] border border-[#23232D] focus:border-[#E000FF] rounded px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#9E9EB3] uppercase mb-2">Phone / WhatsApp</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+254 700 000 000"
                className="w-full bg-[#08080C] border border-[#23232D] focus:border-[#E000FF] rounded px-4 py-3 text-sm outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#9E9EB3] uppercase mb-2">Primary Expertise</label>
              <select
                value={formData.roleCategory}
                onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                className="w-full bg-[#08080C] border border-[#23232D] focus:border-[#E000FF] rounded px-4 py-3 text-sm outline-none text-white transition-colors"
              >
                <option value="tech-engineering">Tech & Software Engineering</option>
                <option value="executive-management">Executive & Management</option>
                <option value="operations-logistics">Operations & Logistics</option>
                <option value="construction-machinery">Engineering & Construction</option>
              </select>
            </div>
          </div>

          {/* File Upload Dropzones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* CV Upload */}
            <div className="border-2 border-dashed border-[#23232D] hover:border-[#E000FF]/50 rounded-lg p-5 bg-[#08080C] text-center transition-all">
              <FileText className="w-8 h-8 text-[#E000FF] mx-auto mb-2" />
              <p className="text-xs font-mono text-[#9E9EB3] uppercase mb-1">Curriculum Vitae (CV)</p>
              <p className="text-xs text-gray-500 mb-3">PDF or DOCX (Max 10MB)</p>
              <label className="cursor-pointer inline-block bg-[#111116] border border-[#E000FF] text-white hover:bg-[#E000FF] hover:text-black font-mono text-xs font-bold px-4 py-2 rounded transition-all">
                {files.cv ? files.cv.name : 'SELECT CV FILE'}
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'cv')} className="hidden" />
              </label>
            </div>

            {/* Passport Upload */}
            <div className="border-2 border-dashed border-[#23232D] hover:border-[#E000FF]/50 rounded-lg p-5 bg-[#08080C] text-center transition-all">
              <Upload className="w-8 h-8 text-[#E2A900] mx-auto mb-2" />
              <p className="text-xs font-mono text-[#9E9EB3] uppercase mb-1">Passport Copy / Identification</p>
              <p className="text-xs text-gray-500 mb-3">PDF, PNG, or JPG (Max 10MB)</p>
              <label className="cursor-pointer inline-block bg-[#111116] border border-[#E2A900] text-white hover:bg-[#E2A900] hover:text-black font-mono text-xs font-bold px-4 py-2 rounded transition-all">
                {files.passport ? files.passport.name : 'SELECT PASSPORT'}
                <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'passport')} className="hidden" />
              </label>
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-500 text-sm font-mono bg-red-950/30 p-3 rounded border border-red-800">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>Failed to submit documents. Please check network connection and try again.</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#E000FF] hover:bg-[#BF00FF] text-black font-black uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{status === 'submitting' ? 'TRANSMITTING DATA...' : 'SUBMIT CANDIDATE DOSSIER'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
}