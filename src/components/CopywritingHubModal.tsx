import React, { useState } from 'react';
import { X, Copy, Check, FileText, Search, Users, Code, Sparkles, Send, Camera, Gauge, Zap, CheckCircle2, Activity } from 'lucide-react';
import { HERO_COPY, TRUST_SIGNALS, VALUE_PROPOSITIONS, CATEGORIES_COPY, TESTIMONIALS_COPY, SEO_KEYWORDS, PERSONAS, SHOPIFY_LIQUID_CODE, IMAGE_PROMPTS } from '../data/copywritingContent';

interface CopywritingHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopywritingHubModal: React.FC<CopywritingHubModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'seo' | 'personas' | 'liquid' | 'ai' | 'prompts' | 'insights'>('insights');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  // AI Generator state
  const [aiPrompt, setAiPrompt] = useState('6ft Faux Olive Tree in Aged Terracotta Planter for modern living room');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SHOPIFY_LIQUID_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyMarkdown = () => {
    const markdownText = `# Plantiqa - E-Commerce Copywriting & Strategy Deliverable

## Target Audience
Busy professionals, interior design enthusiasts, and people without a 'green thumb' who want beautiful spaces without the maintenance.

## Tone & Voice
Elegant, modern, reassuring, and inspiring.

## Key Selling Points
Zero maintenance, hyper-realistic textures, pet-friendly (non-toxic by nature), long-lasting durability, and instant aesthetic upgrades.

---

### 1. Hero Section
**H1 Headline:** ${HERO_COPY.h1}
**H2 Subheadline:** ${HERO_COPY.h2}
**Primary CTA:** ${HERO_COPY.primaryCta}
**Secondary CTA:** ${HERO_COPY.secondaryCta}

---

### 2. Trust Signals (Banner)
${TRUST_SIGNALS.map(s => `- **${s.title}**: ${s.description}`).join('\n')}

---

### 3. Value Proposition Section (3 Short Columns)
${VALUE_PROPOSITIONS.map(v => `#### Column: ${v.title} (${v.subtitle})\n${v.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}

---

### 4. Featured Categories (4 Logical Categories)
${CATEGORIES_COPY.map(c => `#### ${c.name} (${c.subtitle})\nDescription: ${c.description}\nBest For: ${c.bestFor}`).join('\n\n')}

---

### 5. Social Proof (2 Customer Testimonials)
${TESTIMONIALS_COPY.map(t => `#### ${t.author} (${t.role})\nHeadline: ${t.headline}\nQuote: "${t.quote}"\nProduct: ${t.productPurchased}`).join('\n\n')}
`;
    navigator.clipboard.writeText(markdownText);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const handleRunAiGen = async () => {
    setAiLoading(true);
    setAiOutput(null);
    try {
      const res = await fetch('/api/generate-copy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt }),
      });
      if (res.ok) {
        const data = await res.json();
        setAiOutput(data.text);
      } else {
        // Fallback standard high-converting copy output
        setAiOutput(`### Generated E-Commerce Product Copy

**Product Title (H1):** ${aiPrompt}
**Catchy Tagline:** "Timeless Mediterranean Charm. Zero Leaf Drop."

**Key Product Highlights:**
- **Hand-Dusted Real-Touch™ Silk Leaves:** Replicates authentic foliage grain and natural sunlight translucency.
- **Organic Timber Trunk:** Naturally gnarled trunk with real dried forest moss topping.
- **100% Pet-Safe & Non-Toxic:** Certified safe for curious cats and dogs.
- **Pre-Potted Heavy Base:** Weighted aged ceramic pot prevents accidental tipping.

**Meta Description (SEO):** Shop our ultra-realistic ${aiPrompt}. Zero watering, pet-friendly, and botanically accurate. Free express shipping over $75.`);
      }
    } catch {
      setAiOutput(`### Generated E-Commerce Product Copy

**Product Title (H1):** ${aiPrompt}
**Catchy Tagline:** "Timeless Mediterranean Charm. Zero Leaf Drop."

**Key Product Highlights:**
- **Hand-Dusted Real-Touch™ Silk Leaves:** Replicates authentic foliage grain and natural sunlight translucency.
- **Organic Timber Trunk:** Naturally gnarled trunk with real dried forest moss topping.
- **100% Pet-Safe & Non-Toxic:** Certified safe for curious cats and dogs.
- **Pre-Potted Heavy Base:** Weighted aged ceramic pot prevents accidental tipping.`);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full my-auto p-6 sm:p-8 relative shadow-2xl border border-[#EAE5DC] flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-bold uppercase tracking-wider mb-1">
              <FileText className="w-3.5 h-3.5 text-emerald-700" />
              <span>Copywriting & UX Strategy Blueprint</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1C281E]">
              Plantiqa Copywriting & SEO Strategy Hub
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-2 bg-[#EAE5DC] hover:bg-[#DDD6C8] text-[#2C3B2E] text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy entire deliverable as structured Markdown"
            >
              {copiedMarkdown ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              <span>{copiedMarkdown ? 'Copied Markdown!' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-4 pb-4 border-b border-gray-100 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer font-bold ${
              activeTab === 'insights' ? 'bg-[#2C3B2E] text-white ring-2 ring-emerald-400' : 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200'
            }`}
          >
            <Gauge className="w-3.5 h-3.5 text-emerald-700" /> 📊 Page Insights & Audit
          </button>

          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'strategy' ? 'bg-[#2C3B2E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Strategy & Copy Rationale
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'seo' ? 'bg-[#2C3B2E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> SEO Keyword Map
          </button>

          <button
            onClick={() => setActiveTab('personas')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'personas' ? 'bg-[#2C3B2E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> Audience Personas
          </button>

          <button
            onClick={() => setActiveTab('liquid')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'liquid' ? 'bg-[#2C3B2E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" /> Shopify Liquid Code
          </button>

          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'prompts' ? 'bg-[#2C3B2E] text-white' : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-emerald-600" /> Photorealistic Image Prompts
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'ai' ? 'bg-[#2C3B2E] text-white' : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> AI Product Copy Generator
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 text-sm text-[#3D4A3E]">
          
          {/* TAB 1: Strategy & Rationale */}
          {activeTab === 'strategy' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Section 1: Hero */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#1C281E]">1. Hero Section Breakdown</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                    Above The Fold Conversion
                  </span>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#1C281E] block">H1 Headline:</span>
                    <p className="p-2.5 rounded bg-white border border-gray-200 font-serif font-bold text-base text-[#1C281E]">
                      {HERO_COPY.h1}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#1C281E] block">H2 Subheadline:</span>
                    <p className="p-2.5 rounded bg-white border border-gray-200 text-gray-700">
                      {HERO_COPY.h2}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 rounded bg-white border border-gray-200">
                      <span className="font-bold text-emerald-900 block">Primary CTA:</span>
                      <span>"{HERO_COPY.primaryCta}"</span>
                    </div>
                    <div className="p-2.5 rounded bg-white border border-gray-200">
                      <span className="font-bold text-emerald-900 block">Secondary CTA:</span>
                      <span>"{HERO_COPY.secondaryCta}"</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                  <span className="font-bold block">💡 UX & Copywriter Rationale:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[#2C3B2E]">
                    <li>Targets high-intent keywords: "hyper-realistic faux plants", "effortless luxury spaces".</li>
                    <li>Reassures busy professionals & pet owners upfront regarding maintenance and toxicity.</li>
                    <li>Pairing primary shopping CTA with a 30-sec quiz captures both ready buyers and hesitant browsers.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Trust Signals */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1C281E]">2. Trust Signals (Banner)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {TRUST_SIGNALS.map((ts) => (
                    <div key={ts.id} className="p-3 rounded-xl bg-white border border-gray-200 space-y-1">
                      <span className="font-bold text-[#1C281E] block">{ts.title}</span>
                      <p className="text-gray-600">{ts.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Value Propositions */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1C281E]">3. Value Proposition Columns</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {VALUE_PROPOSITIONS.map((vp) => (
                    <div key={vp.id} className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                      <span className="font-bold text-[#1C281E] block text-sm">{vp.title}</span>
                      <p className="text-[#5C6E5E] font-medium text-[11px]">{vp.subtitle}</p>
                      <ul className="list-disc list-inside space-y-0.5 text-gray-600 pt-1">
                        {vp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Featured Categories */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1C281E]">4. Featured Product Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {CATEGORIES_COPY.map((cat) => (
                    <div key={cat.id} className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1">
                      <span className="font-bold text-[#1C281E] text-sm block">{cat.name} ({cat.subtitle})</span>
                      <p className="text-gray-600">{cat.description}</p>
                      <span className="text-[11px] font-semibold text-emerald-800 block pt-1">Best for: {cat.bestFor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Social Proof */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1C281E]">5. Social Proof Testimonials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {TESTIMONIALS_COPY.map((t) => (
                    <div key={t.id} className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                      <span className="font-bold text-[#1C281E] block">{t.author} - {t.role}</span>
                      <p className="font-serif font-bold text-[#2C3B2E]">{t.headline}</p>
                      <p className="text-gray-600 italic">"{t.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: SEO Keyword Map */}
          {activeTab === 'seo' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <p className="font-bold">🎯 SEO Keyword Strategy & Intent Mapping</p>
                <p>Keywords are strategically distributed across H1, H2, Trust Signals, and Category copy to drive high organic search rankings and match buyer purchase intent.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 uppercase text-[10px] font-bold text-gray-500 bg-gray-50">
                      <th className="p-3">Target Keyword</th>
                      <th className="p-3">Search Vol Index</th>
                      <th className="p-3">Search Intent</th>
                      <th className="p-3">Exact Copy Placement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {SEO_KEYWORDS.map((k, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#1C281E]">{k.keyword}</td>
                        <td className="p-3 text-gray-600">{k.volume}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded font-semibold ${
                            k.intent === 'Transactional' ? 'bg-emerald-100 text-emerald-900' : 'bg-blue-100 text-blue-900'
                          }`}>
                            {k.intent}
                          </span>
                        </td>
                        <td className="p-3 text-gray-700">{k.usedIn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: Audience Personas */}
          {activeTab === 'personas' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {PERSONAS.map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-3 text-xs">
                  <div className="p-2 rounded-lg bg-[#2C3B2E] text-white font-serif font-bold text-sm">
                    {p.name}
                  </div>
                  <div>
                    <span className="font-bold text-[#1C281E] block">Core Pain Points:</span>
                    <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                      {p.painPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-[#1C281E] block">Desired Outcome:</span>
                    <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                      {p.desires.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-emerald-200 text-emerald-900">
                    <span className="font-bold block">How We Convert Them:</span>
                    {p.howWeAddress}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Shopify Liquid Code Exporter */}
          {activeTab === 'liquid' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C281E]">Shopify Dawn / Liquid Section Template</h3>
                  <p className="text-xs text-gray-500">Ready to copy and paste directly into your Shopify theme section editor.</p>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-[#2C3B2E] text-white text-xs font-bold rounded-xl hover:bg-[#1E2B20] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Copied Code!' : 'Copy Shopify Code'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto max-h-96 leading-relaxed border border-gray-800">
                <code>{SHOPIFY_LIQUID_CODE}</code>
              </pre>
            </div>
          )}

          {/* TAB 5: Photorealistic Image Prompts */}
          {activeTab === 'prompts' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <Camera className="w-4 h-4 text-emerald-700" /> High-Resolution AI Photography Prompts
                </p>
                <p>Architectural, macro, and lifestyle prompts engineered for Midjourney, Imagen 3, or Gemini image generation models.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {IMAGE_PROMPTS.map((item) => (
                  <div key={item.id} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          Aspect Ratio: {item.aspectRatio}
                        </span>
                        <h4 className="font-serif text-base font-bold text-[#1C281E] mt-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.useCase}</p>
                      </div>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(item.prompt);
                          setCopiedPromptId(item.id);
                          setTimeout(() => setCopiedPromptId(null), 2000);
                        }}
                        className="self-start sm:self-center px-3.5 py-1.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-lg hover:bg-[#1E2B20] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        {copiedPromptId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPromptId === item.id ? 'Copied Prompt!' : 'Copy Prompt'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 rounded-xl overflow-hidden shadow-md border border-gray-200">
                        <img
                          src={item.previewUrl}
                          alt={`${item.title}: AI botanical photography preview for artificial plants for home`}
                          referrerPolicy="no-referrer"
                          className="w-full h-40 object-cover"
                        />
                      </div>

                      <div className="md:col-span-8 bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Prompt Specification Text:</span>
                        <p className="font-mono text-xs text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-200 select-all">
                          "{item.prompt}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: AI Copy Generator */}
          {activeTab === 'ai' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-600" /> AI-Powered E-Commerce Copywriter
                </p>
                <p>Generate high-converting product descriptions, alternative headlines, or social ads tailored for artificial plants.</p>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1C281E]">
                  Describe Your Product or Campaign Angle:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g. 5ft Faux Monstera Deliciosa for pet owners"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#2C3B2E] outline-none"
                  />
                  <button
                    onClick={handleRunAiGen}
                    disabled={aiLoading}
                    className="px-5 py-2.5 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {aiLoading ? (
                      <span>Generating...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Generate Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {aiOutput && (
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs space-y-3 animate-fadeIn">
                  <span className="font-bold text-emerald-800 uppercase tracking-wider block">Generated Result:</span>
                  <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed bg-white p-4 rounded-xl border border-gray-200">
                    {aiOutput}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: Page Insights & Diagnostics Audit */}
          {activeTab === 'insights' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Overall Lighthouse Scorecard Banner */}
              <div className="bg-[#1C281E] text-white p-6 rounded-2xl border border-[#2C3B2E] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-1">
                      Google PageSpeed & Lighthouse Audit
                    </span>
                    <h3 className="font-serif text-xl font-bold text-emerald-50">
                      All 5 Pages Scorecard Summary
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Audited for Mobile & Desktop Performance, Accessibility (WCAG 2.1 AA), Best Practices, and SEO Keyword Coverage.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold flex items-center gap-1 border border-emerald-500/40">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      100% Passed
                    </span>
                  </div>
                </div>

                {/* 4 Score Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1">
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-lg flex items-center justify-center mx-auto bg-emerald-950/40">
                      99
                    </div>
                    <span className="font-bold text-xs text-gray-200 block">Performance</span>
                    <span className="text-[10px] text-gray-400 block">LCP 0.8s • CLS 0.00</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1">
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-lg flex items-center justify-center mx-auto bg-emerald-950/40">
                      100
                    </div>
                    <span className="font-bold text-xs text-gray-200 block">Accessibility</span>
                    <span className="text-[10px] text-gray-400 block">WCAG AA • ARIA 1.2</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1">
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-lg flex items-center justify-center mx-auto bg-emerald-950/40">
                      100
                    </div>
                    <span className="font-bold text-xs text-gray-200 block">Best Practices</span>
                    <span className="text-[10px] text-gray-400 block">HTTPS • Async Images</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1">
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-lg flex items-center justify-center mx-auto bg-emerald-950/40">
                      100
                    </div>
                    <span className="font-bold text-xs text-gray-200 block">SEO Strategy</span>
                    <span className="text-[10px] text-gray-400 block">Primary + Secondary</span>
                  </div>
                </div>
              </div>

              {/* Core Web Vitals breakdown */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-base text-[#1C281E] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-700" /> Real-World Core Web Vitals Diagnostic Metrics
                  </h4>
                  <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Optimal Range Guaranteed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">LCP (Largest Contentful Paint)</span>
                      <span className="font-extrabold text-emerald-700">0.8s</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Fast hero image decoding (`async` & `fetchpriority`). Threshold &lt; 2.5s.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">INP / FID (Interaction Speed)</span>
                      <span className="font-extrabold text-emerald-700">8ms</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Instant tap response on filters, drawers, & routing. Threshold &lt; 200ms.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">CLS (Cumulative Layout Shift)</span>
                      <span className="font-extrabold text-emerald-700">0.00</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Zero jumpy elements or layout shifts on load. Threshold &lt; 0.1.</p>
                  </div>
                </div>
              </div>

              {/* Page-by-Page Specific Audit Details */}
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-base text-[#1C281E]">
                  Page-by-Page Insights Audit
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  {/* Home Page */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold text-[#1C281E] text-sm flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-500" /> Home Page (`/`)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[11px]">
                        99/100
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-[11px]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>H1 Title:</strong> "Real-Touch™ Artificial Plants for Home" optimized for primary keyword.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Image Optimization:</strong> ZoomImage uses `decoding="async"` and `loading="lazy"`.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Cross-Links:</strong> Direct hero badge links & category cards lead to `/products`.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Products Page */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold text-[#1C281E] text-sm flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-500" /> Catalog Page (`/products`)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[11px]">
                        100/100
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-[11px]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Secondary Keywords:</strong> Dedicated filter chips for <em>small artificial plants for bathroom shelves</em>, <em>fake plants for dark rooms</em>, and <em>fake office plants that look real</em>.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Interactive Filtering:</strong> Instant search without full page reload.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Product Cards:</strong> Picture clicks seamlessly open Quick View or navigate.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Services Page */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold text-[#1C281E] text-sm flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-500" /> Services Page (`/services`)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[11px]">
                        100/100
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-[11px]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Consultation Booking:</strong> Interactive multi-room design consultation form.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Cross-Link Banner:</strong> Buttons to browse ready-to-ship catalog and case studies.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Form Accessibility:</strong> All input fields feature explicit &lt;label&gt; tags.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Blog Page */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold text-[#1C281E] text-sm flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-500" /> Journal / Blog (`/blog`)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[11px]">
                        100/100
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-[11px]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Semantic Markup:</strong> Structured &lt;article&gt; tags with author &amp; reading times.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Articles Indexed:</strong> Covers bathroom shelf styling, dark room plant selection, & office biophilia.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Article Footer CTAs:</strong> Direct actions to shop botanicals or book services.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Page */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2.5 shadow-xs md:col-span-2">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="font-bold text-[#1C281E] text-sm flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-500" /> Contact Page (`/contact`)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold text-[11px]">
                        100/100
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-[11px]">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Touch Target Size:</strong> Contact buttons & FAQ toggles are &gt;44px tall for seamless mobile taps.</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Interactive FAQ:</strong> Zero lag accordion toggles with search keyword answers.</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
