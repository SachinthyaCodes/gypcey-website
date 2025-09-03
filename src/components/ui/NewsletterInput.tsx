'use client';

import React from 'react';

interface NewsletterInputProps {
  placeholder?: string;
  className?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

/**
 * Newsletter subscription input component
 * @param placeholder - Input placeholder text
 * @param className - Additional CSS classes
 * @param buttonText - Optional button text (if not provided, no button will be shown)
 * @param onSubmit - Function called when the form is submitted
 */
export const NewsletterInput: React.FC<NewsletterInputProps> = ({
  placeholder = 'Email Address Here',
  className = '',
  buttonText,
  onSubmit
}) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-1.5 px-3 bg-transparent border border-white/50 rounded text-xs text-white placeholder-white/70 focus:outline-none focus:border-white"
        aria-label="Email for newsletter"
        required
      />
      {buttonText && (
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-xs bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded-r"
          aria-label="Subscribe to newsletter"
        >
          {buttonText}
        </button>
      )}
    </form>
  );
};

export default NewsletterInput;