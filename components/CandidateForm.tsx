








'use client';

import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight, Home, AlertTriangle } from 'lucide-react';

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
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'confirm_missing_files'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Strip out non-numeric characters
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'passport') => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({ ...prev, [type]: e.target.files![0] }));
    }
  };

  const executeSubmission = async () => {
    setStatus('submitting');
    setErrorMessage('');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('roleCategory', formData.roleCategory);
    if (files.cv) data.append('cv', files.cv);
    if (files.passport) data.append('passport', files.passport);

    try {
      const res = await fetch(`${process.env.VELMORA_GLOBAL_BACKEND_API_URL || 'http://localhost:3000'}/v1/candidates/apply`, {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Server error during processing. Please try again later.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to connect to the backend server. Please check your network connection.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate phone number starts with 07 or 01 and has exactly 10 digits
    const phoneRegex = /^(07|01)\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus('error');
      setErrorMessage('Invalid phone number. Must be 10 digits starting with 07 or 01 (e.g., 0712345678).');
      return;
    }

    // 2. Check if files are missing -> If so, prompt confirmation instead of blocking
    if (!files.cv || !files.passport) {
      setStatus('confirm_missing_files');
      return;
    }

    await executeSubmission();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#111116] border border-[#23232D] rounded-xl text-white shadow-2xl">
      {/* Node System Badge Header */}
      <div className="flex items-center justify-between border-b border-[#23232D] pb-4 mb-8">
        <div>
          <span className="text-xs font-mono text-[#E2A900] tracking-widest uppercase">Velmora // VGRS-07</span>
          <h2 className="text-2xl font-black uppercase tracking-wider text-white mt-1">
            Global Talent Intake Page
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#23232D] text-[#E000FF] font-mono text-xs rounded border border-[#E000FF]/30">
          Velmora Global Recruitment Solutions
        </span>
      </div>

      {status === 'success' ? (
        <div className="py-12 text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-[#E000FF] mx-auto animate-bounce" />
          <h3 className="text-2xl font-bold tracking-wide">APPLICATION TRANSMITTED</h3>
          <p className="text-[#9E9EB3] max-w-md mx-auto">
            Your credentials and documents have been safely logged into the Velmora HR network layer. Our team will review your profile, and get back to You.
          </p>
          <div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-[#23232D] hover:bg-[#E000FF] hover:text-black border border-[#E000FF]/40 text-white font-mono text-xs uppercase font-bold px-6 py-3 rounded transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home Page</span>
            </a>
          </div>
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
              <label className="block text-xs font-mono text-[#9E9EB3] uppercase mb-2">Phone / WhatsApp (10 digits, e.g., 0712...)</label>
              <input
                type="text"
                required
                maxLength={10}
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="07/01********"
                className="w-full bg-[#08080C] border border-[#23232D] focus:border-[#E000FF] rounded px-4 py-3 text-sm outline-none transition-colors font-mono"
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
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* File Upload Dropzones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* CV Upload */}
            <div className={`border-2 border-dashed rounded-lg p-5 bg-[#08080C] text-center transition-all ${!files.cv && status === 'confirm_missing_files' ? 'border-red-500 bg-red-950/20' : 'border-[#23232D] hover:border-[#E000FF]/50'}`}>
              <FileText className="w-8 h-8 text-[#E000FF] mx-auto mb-2" />
              <p className="text-xs font-mono text-[#9E9EB3] uppercase mb-1">Curriculum Vitae (CV)</p>
              <p className="text-xs text-gray-500 mb-3">PDF or DOCX (Max 10MB)</p>
              <label className="cursor-pointer inline-block bg-[#111116] border border-[#E000FF] text-white hover:bg-[#E000FF] hover:text-black font-mono text-xs font-bold px-4 py-2 rounded transition-all">
                {files.cv ? files.cv.name : 'SELECT CV FILE'}
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'cv')} className="hidden" />
              </label>
            </div>

            {/* Passport Upload */}
            <div className={`border-2 border-dashed rounded-lg p-5 bg-[#08080C] text-center transition-all ${!files.passport && status === 'confirm_missing_files' ? 'border-red-500 bg-red-950/20' : 'border-[#23232D] hover:border-[#E2A900]/50'}`}>
              <Upload className="w-8 h-8 text-[#E2A900] mx-auto mb-2" />
              <p className="text-xs font-mono text-[#9E9EB3] uppercase mb-1">Passport Copy / Identification</p>
              <p className="text-xs text-gray-500 mb-3">PDF, PNG, or JPG (Max 10MB)</p>
              <label className="cursor-pointer inline-block bg-[#111116] border border-[#E2A900] text-white hover:bg-[#E2A900] hover:text-black font-mono text-xs font-bold px-4 py-2 rounded transition-all">
                {files.passport ? files.passport.name : 'SELECT PASSPORT'}
                <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'passport')} className="hidden" />
              </label>
            </div>
          </div>

          {/* Missing Files Confirmation Box */}
          {status === 'confirm_missing_files' && (
            <div className="bg-red-950/40 border border-red-600 p-4 rounded-lg space-y-3 font-mono">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-bold">WARNING: Missing Documents Detected</span>
              </div>
              <p className="text-xs text-gray-300">
                You have not attached {!files.cv && !files.passport ? 'both a CV and a Passport' : !files.cv ? 'a CV' : 'a Passport'}. Are you sure you want to submit your dossier without these documents?
              </p>
              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={executeSubmission}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase px-4 py-2 rounded transition-all"
                >
                  Yes, Submit Anyway
                </button>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="bg-[#23232D] hover:bg-gray-700 text-white text-xs font-bold uppercase px-4 py-2 rounded transition-all"
                >
                  Cancel & Add Files
                </button>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-400 text-sm font-mono bg-red-950/30 p-3 rounded border border-red-800">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          {status !== 'confirm_missing_files' && (
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#E000FF] hover:bg-[#BF00FF] text-black font-black uppercase tracking-wider py-4 rounded transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{status === 'submitting' ? 'TRANSMITTING DATA...' : 'SUBMIT CANDIDATE DOSSIER'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </form>
      )}
    </div>
  );
}