import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

interface TutorInputProps {
  onSubmit: (topic: string) => void;
  isLoading: boolean;
}

export function TutorInput({ onSubmit, isLoading }: TutorInputProps) {
  const { t } = useTranslation();
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={t('tutor.input.placeholder')}
          className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !topic.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}