import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
      <AlertCircle className="h-5 w-5 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
}