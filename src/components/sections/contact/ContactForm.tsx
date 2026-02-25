"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const ErrorMessage = ({ text }: { text: string }) => (
    <p className="text-[12px] text-red-500/80 mt-1.5 font-mono">
        {text}
    </p>
);

const Spinner = () => (
    <svg
        width="16" height="16" viewBox="0 0 16 16"
        className="animate-[spin_0.8s_linear_infinite]"
    >
        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
        <path d="M8 2a6 6 0 0 1 6 6" stroke="#0c0c0b" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
);

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        website: '', // Honeypot
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!formData.projectType) newErrors.projectType = 'Please select a project type';
        if (!formData.budget) newErrors.budget = 'Please select a budget range';
        if (!formData.message.trim()) newErrors.message = 'Tell us about your project';
        else if (formData.message.trim().length < 20) {
            newErrors.message = 'Please provide a bit more detail';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error);

            setStatus('success');
            setFormData({
                name: '', email: '', company: '',
                projectType: '', budget: '', message: '', website: ''
            });
            setErrors({});
        } catch (error) {
            setStatus('error');
        }
    };

    const inputStyles = "w-full bg-[#0c0c0b] border border-white/10 rounded-lg px-4 py-3.5 text-[15px] text-white font-light outline-none transition-all placeholder:text-white/20 focus:border-white/30";
    const errorStyles = "border-red-500/50";
    const labelStyles = "block font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 mb-2";

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="bg-[#161614] border border-white/[0.07] rounded-[16px] p-[clamp(32px,4vw,48px)] flex flex-col items-center justify-center text-center py-20 px-4 gap-4"
            >
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-2">
                    <Check className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-white">Message sent.</h3>
                <p className="text-[15px] text-white/50 font-light leading-[1.7] max-w-[320px]">
                    We&apos;ll review your project and get back to you within 24 hours. Check your inbox for a confirmation.
                </p>
                <p className="text-[12px] text-white/25 font-mono uppercase tracking-[0.12em] mt-2">
                    — Raunak & the Converge team
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="bg-[#161614] border border-white/[0.07] rounded-[16px] p-[clamp(32px,4vw,48px)] relative overflow-hidden"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === 'error' && (
                    <div className="p-4 bg-red-500/8 border border-red-500/20 rounded-lg text-sm text-red-500/80">
                        Something went wrong. Please try again or email us directly at contact@convergedigital.com
                    </div>
                )}

                {/* Honeypot */}
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    className="absolute left-[-9999px] opacity-0 pointer-events-none"
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className={labelStyles}>Name *</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className={`${inputStyles} ${errors.name ? errorStyles : ""}`}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <ErrorMessage text={errors.name} />}
                    </div>
                    <div>
                        <label className={labelStyles}>Email *</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className={`${inputStyles} ${errors.email ? errorStyles : ""}`}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <ErrorMessage text={errors.email} />}
                    </div>
                </div>

                <div>
                    <label className={labelStyles}>
                        Company <span className="opacity-40">(optional)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your company or startup name"
                        className={inputStyles}
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className={labelStyles}>Project Type *</label>
                        <div className="relative">
                            <select
                                className={`${inputStyles} ${errors.projectType ? errorStyles : ""} pr-10 cursor-pointer appearance-none`}
                                value={formData.projectType}
                                onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 16px center'
                                }}
                            >
                                <option value="" disabled>Select type</option>
                                <option value="MVP Development">MVP Development</option>
                                <option value="Scalable Web App">Scalable Web App</option>
                                <option value="UI & Product Design">UI & Product Design</option>
                                <option value="Product Strategy">Product Strategy</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {errors.projectType && <ErrorMessage text={errors.projectType} />}
                    </div>
                    <div>
                        <label className={labelStyles}>Budget Range *</label>
                        <div className="relative">
                            <select
                                className={`${inputStyles} ${errors.budget ? errorStyles : ""} pr-10 cursor-pointer appearance-none`}
                                value={formData.budget}
                                onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 16px center'
                                }}
                            >
                                <option value="" disabled>Select budget</option>
                                <option value="Under $5k">Under $5k</option>
                                <option value="$5k – $10k">$5k – $10k</option>
                                <option value="$10k – $25k">$10k – $25k</option>
                                <option value="$25k – $50k">$25k – $50k</option>
                                <option value="$50k+">$50k+</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                        </div>
                        {errors.budget && <ErrorMessage text={errors.budget} />}
                    </div>
                </div>

                <div>
                    <label className={labelStyles}>Tell us about your project *</label>
                    <textarea
                        rows={5}
                        placeholder="Describe what you're building, the problem you're solving, and where you are in the process..."
                        className={`${inputStyles} ${errors.message ? errorStyles : ""} resize-vertical min-h-[140px]`}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <ErrorMessage text={errors.message} />}
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-[52px] mt-2 bg-white text-[#0c0c0b] rounded-full text-[15px] font-medium transition-all hover:opacity-90 active:scale-[0.98] disabled:bg-white/70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === 'loading' ? (
                        <>
                            <Spinner />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>

                <p className="text-[12px] text-white/20 text-center mt-3 font-mono tracking-tight">
                    Your information is kept confidential.
                </p>
            </form>
        </motion.div>
    );
}
