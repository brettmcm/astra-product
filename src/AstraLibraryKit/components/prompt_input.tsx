import { cn } from './utils';
import { useState } from 'react';
import { Badge } from './badge'
import { IconButton } from './icon_button'
import { Send } from 'lucide-react'

interface PromptInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  onAttach?: () => void;
  disabled?: boolean;
  className?: string;
}

export function PromptInput({
  value = '',
  placeholder = 'Describe your video',
  onChange,
  onSend,
  onAttach,
  disabled = false,
  className
}: PromptInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const [attachments, setAttachments] = useState<string[]>([]); // tags shown like file_1

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleSend = () => {
    if (!disabled && inputValue.trim()) {
      onSend?.();
    }
  };

  const handleAttach = () => {
    if (!disabled) {
      const attachmentId = `Attachment ${attachments.length + 1}`;
      setAttachments(prev => [...prev, attachmentId]);
      onAttach?.();
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div 
      className={cn(
        'bg-surface-bg box-border content-stretch flex flex-col items-start justify-between p-[24px] rounded-[24px] w-full relative transition-all duration-300',
        attachments.length > 0 ? 'h-[200px]' : 'h-[135px]',
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
    >
      <div className="absolute border border-border-primary border-solid inset-0 pointer-events-none rounded-[24px]" />

      {/* Attachments */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 w-full mb-2">
          {attachments.map((attachment, index) => (
            <Badge
              key={index}
              label={attachment}
              variant="brand"
              removable={true}
              onRemove={() => handleRemoveAttachment(index)}
            />
          ))}
        </div>
      )}

      {/* Send Button */}
      <IconButton
        icon={<Send size={16} />}
        variant="primary"
        size="medium"
        onClick={handleSend}
        disabled={disabled || !inputValue.trim()}
        className="absolute bottom-[10px] right-[10px] hover:scale-105 transition-transform"
      />
      
      {/* Attachment Button */}
      <button
        onClick={handleAttach}
        disabled={disabled}
        className="absolute left-[24px] bottom-[12px] overflow-clip size-[20px] hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded"
      >
        <div className="absolute inset-[5.78%_10.67%_8.34%_8.34%]">
          <div className="absolute inset-[-4.37%_-4.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
              <path 
                d="M17.1986 9.05185L9.54028 16.7102C8.60208 17.6484 7.3296 18.1755 6.00278 18.1755C4.67596 18.1755 3.40348 17.6484 2.46528 16.7102C1.52708 15.772 1 14.4995 1 13.1727C1 11.8459 1.52708 10.5734 2.46528 9.63519L10.1236 1.97685C10.7491 1.35138 11.5974 1 12.4819 1C13.3665 1 14.2148 1.35138 14.8403 1.97685C15.4657 2.60232 15.8171 3.45064 15.8171 4.33519C15.8171 5.21973 15.4657 6.06805 14.8403 6.69352L7.17361 14.3519C6.86088 14.6646 6.43672 14.8403 5.99445 14.8403C5.55217 14.8403 5.12801 14.6646 4.81528 14.3519C4.50255 14.0391 4.32685 13.615 4.32685 13.1727C4.32685 12.7304 4.50255 12.3063 4.81528 11.9935L11.8903 4.92685" 
                stroke="var(--text-primary)"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>
        </div>
      </button>
      
      {/* Text Input Area */}
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        className="font-sans font-normal min-w-full relative shrink-0 text-input-sm text-text-primary w-full h-full bg-transparent border-none outline-none resize-none placeholder:text-text-primary pr-[60px] pb-[40px]"

      />
    </div>
  );
}
