import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Save } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [groqKey, setGroqKey] = useState('');
  const [hitCount, setHitCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setGroqKey(localStorage.getItem('groq_api_key') || '');
      const count = parseInt(localStorage.getItem('groq_hit_count') || '0', 10);
      setHitCount(count);
    }
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem('groq_api_key', groqKey);
    onClose();
  };

  const handleResetCount = () => {
    localStorage.setItem('groq_hit_count', '0');
    setHitCount(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="AI Settings">
      <div className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Configure your Groq API key to enable the AI Tutor. Keys are stored locally in your browser.
        </p>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Groq API Key 
            <span className="ml-2 text-xs font-normal text-slate-500">(Fast & Free Tier Available)</span>
          </label>
          <input
            type="password"
            value={groqKey}
            onChange={(e) => setGroqKey(e.target.value)}
            placeholder="gsk_..."
            className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <p className="text-xs text-slate-500">
            Get a free key at <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">console.groq.com</a>
          </p>
        </div>

        <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">API Usage</h4>
            <p className="text-xs text-slate-500">Requests made this session</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400">{hitCount}</span>
            <button onClick={handleResetCount} className="block text-[10px] text-red-500 hover:underline mt-1 w-full text-right">
              Reset
            </button>
          </div>
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
