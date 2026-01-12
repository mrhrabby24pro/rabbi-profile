
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const presets = [
  { id: 'luxury', name: 'লাক্সারি গোল্ড', prompt: 'Luxury premium gold and marble background with soft cinematic studio lighting.' },
  { id: 'nature', name: 'প্রকৃতি', prompt: 'Natural outdoor setting with blurred green plants and soft morning sunlight.' },
  { id: 'cyber', name: 'সাইবারপাঙ্ক', prompt: 'Neon futuristic cyberpunk city background with blue and pink glowing lights.' },
  { id: 'minimal', name: 'মিনিমালিস্ট', prompt: 'Ultra minimalist clean white aesthetic background with soft shadows.' },
  { id: 'festive', name: 'উৎসব', prompt: 'Festive celebratory background with bokeh lights and decorative elements.' }
];

const AITool: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyPreset = (preset: typeof presets[0]) => {
    setPrompt(preset.prompt);
    setActivePreset(preset.id);
  };

  const generateDesign = async () => {
    if (!image) {
      setError('দয়া করে একটি প্রোডাক্ট ইমেজ আপলোড করুন।');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: 'image/png',
              },
            },
            {
              text: `You are a professional graphic designer. Create a high-quality, commercial marketing banner using this product image. Style: ${prompt || 'Professional, minimalist, premium lighting, high-end studio background'}. The product should be centrally placed and integrated naturally into the environment.`,
            },
          ],
        },
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        setError('এআই ইমেজ জেনারেট করতে পারেনি। আবার চেষ্টা করুন।');
      }
    } catch (err) {
      console.error(err);
      setError('ডিজাইন তৈরি করতে সমস্যা হয়েছে। আপনার এপিআই কি চেক করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-20 bg-blue-50/30">
      <div className="container-custom">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">এআই ডিজাইন টুল</h3>
        <p className="text-gray-600 mb-10 max-w-lg">আপনার প্রোডাক্টের একটি ছবি দিন এবং এআই-এর মাধ্যমে প্রফেশনাল ব্যানার ডিজাইন করুন মুহূর্তেই।</p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">স্টেপ ১: প্রোডাক্ট ছবি দিন</label>
              <div 
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${image ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                onClick={() => document.getElementById('imageInput')?.click()}
              >
                {image ? (
                  <img src={image} alt="Uploaded" className="max-h-40 mx-auto rounded-lg shadow-sm" />
                ) : (
                  <div className="space-y-2 py-4">
                    <svg className="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-gray-500 text-sm font-medium">ক্লিক করে ছবি আপলোড করুন</p>
                  </div>
                )}
                <input id="imageInput" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">স্টেপ ২: কুইক ডিজাইন স্টাইল</label>
              <div className="flex flex-wrap gap-2">
                {presets.map(p => (
                  <button 
                    key={p.id}
                    onClick={() => applyPreset(p)}
                    className={`px-3 py-2 rounded-full text-xs font-bold border transition-all ${activePreset === p.id ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-white hover:border-blue-300'}`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">স্টেপ ৩: কাস্টম বর্ণনা (ঐচ্ছিক)</label>
              <textarea 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                placeholder="যেমন: 'একটি লাক্সারি গোল্ডেন ব্যাকগ্রাউন্ড দাও'..."
                rows={2}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  setActivePreset(null);
                }}
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button 
              onClick={generateDesign}
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  এআই তৈরি করছে...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  ম্যাজিক ব্যানার তৈরি করুন
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-900 rounded-3xl p-4 min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-2xl">
            {result ? (
              <div className="space-y-4 w-full">
                <img src={result} alt="AI Result" className="w-full h-full object-contain rounded-2xl animate-fade-in" />
                <a 
                  href={result} 
                  download="rabbi_ai_design.png"
                  className="block text-center text-white/80 hover:text-white text-sm underline font-medium"
                >
                  ছবিটি ডাউনলোড করুন
                </a>
              </div>
            ) : loading ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-blue-400 font-medium animate-pulse">আপনার চমৎকার ডিজাইনটি তৈরি হচ্ছে...</p>
                <p className="text-gray-500 text-xs">এতে কিছুটা সময় লাগতে পারে, দয়া করে অপেক্ষা করুন।</p>
              </div>
            ) : (
              <div className="text-center text-gray-500 max-w-xs px-6">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p>এখানে আপনার এআই জেনারেটেড ডিজাইনটি দেখা যাবে।</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITool;
