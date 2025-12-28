import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Save } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [openaiKey, setOpenaiKey] = useState('');
  const [geminiKey, setGeminiKey] = useState('');
  const [geminiModel, setGeminiModel] = useState('');
  const [groqKey, setGroqKey] = useState('');
  const [xaiKey, setXaiKey] = useState('');

  useEffect(() => {
    if (isOpen) {
      setOpenaiKey(localStorage.getItem('openai_api_key') || '');
      setGeminiKey(localStorage.getItem('gemini_api_key') || '');
      setGeminiModel(localStorage.getItem('gemini_model') || '');
      setGroqKey(localStorage.getItem('groq_api_key') || '');
      setXaiKey(localStorage.getItem('xai_api_key') || '');
    }
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem('openai_api_key', openaiKey);
    localStorage.setItem('gemini_api_key', geminiKey);
    localStorage.setItem('gemini_model', geminiModel);
    localStorage.setItem('groq_api_key', groqKey);
    localStorage.setItem('xai_api_key', xaiKey);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="AI Settings">
      <div className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Configure your API keys to enable AI features. Keys are stored locally in your browser.
        </p>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">OpenAI API Key</label>
          <input
            type="password"
            value={openaiKey}
            onChange={(e) => setOpenaiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Google Gemini API Key</label>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline">Get Key &rarr;</a>
          </div>
          <input
            type="password"
            value={geminiKey}
            onChange={(e) => setGeminiKey(e.target.value)}
            placeholder="AIza..."
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            value={geminiModel}
            onChange={(e) => setGeminiModel(e.target.value)}
            placeholder="Optional: Custom Model Name (e.g. gemini-1.5-flash)"
            className="w-full mt-2 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Groq API Key 
            <span className="ml-2 text-xs font-normal text-slate-500">(Fast inference for Llama/Mixtral models)</span>
          </label>
          <input
            type="password"
            value={groqKey}
            onChange={(e) => setGroqKey(e.target.value)}
            placeholder="gsk_..."
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            xAI API Key 
            <span className="ml-2 text-xs font-normal text-slate-500">(Elon Musk's Grok model - Different from Groq)</span>
          </label>
          <input
            type="password"
            value={xaiKey}
            onChange={(e) => setXaiKey(e.target.value)}
            placeholder="xai-..."
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors flex items-center gap-2"
          >
            <Save size={16} /> Save Keys
          </button>
        </div>
      </div>
    </Modal>
  );
}
