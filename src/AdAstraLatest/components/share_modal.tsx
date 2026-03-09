import { useState } from 'react';
import { Button } from './button';
import { Badge } from './badge';
import { X } from './icons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export function ShareModal({ isOpen, onClose, projectName = 'this project' }: ShareModalProps) {
  const [email, setEmail] = useState('');
  const [sharedUsers, setSharedUsers] = useState<Array<{ email: string; initials: string }>>([]);
  const [emailError, setEmailError] = useState('');

  // Validate email format with domain extension
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddUser = () => {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      setEmailError('Please enter an email address');
      return;
    }
    
    if (!isValidEmail(trimmedEmail)) {
      setEmailError('Please enter a valid email address with a domain (e.g., name@email.com)');
      return;
    }
    
    const initials = trimmedEmail.charAt(0).toUpperCase();
    setSharedUsers([...sharedUsers, { email: trimmedEmail, initials }]);
    setEmail('');
    setEmailError('');
  };

  const handleRemoveUser = (index: number) => {
    setSharedUsers(sharedUsers.filter((_, i) => i !== index));
  };

  const handleShare = () => {
    // Handle share logic here
    console.log('Sharing with:', sharedUsers);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddUser();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[16px] shadow-xl z-50 w-[480px] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[rgba(0,0,0,0.1)]">
          <h2 className="text-[20px] font-semibold text-[rgba(0,0,0,0.85)]">Share {projectName}</h2>
          <button
            onClick={onClose}
            className="size-[24px] flex items-center justify-center rounded hover:bg-[rgba(0,0,0,0.05)] transition-colors"
          >
            <X className="size-[16px]" color="rgba(0,0,0,0.65)" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[24px]">
          {/* Email Input */}
          <div className="mb-[24px]">
            <label className="block text-[14px] text-[rgba(0,0,0,0.65)] mb-[8px]">
              Add people by email
            </label>
            <div className="flex gap-[8px]">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="name@email.com"
                  className={`w-full h-[40px] px-[12px] rounded-[8px] border text-[14px] text-[rgba(0,0,0,0.85)] placeholder:text-[rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                    emailError 
                      ? 'border-[#cf2828] focus:ring-[#cf2828]' 
                      : 'border-[rgba(0,0,0,0.15)] focus:ring-[#5250F3]'
                  }`}
                />
                {emailError && (
                  <p className="text-[12px] text-[#cf2828] mt-[4px]">
                    {emailError}
                  </p>
                )}
              </div>
              <Button 
                label="Add"
                variant="Primary" 
                size="Medium"
                onClick={handleAddUser}
                disabled={!email.trim() || !isValidEmail(email.trim())}
              />
            </div>
          </div>

          {/* Added Users */}
          {sharedUsers.length > 0 && (
            <div className="mb-[24px]">
              <label className="block text-[14px] text-[rgba(0,0,0,0.65)] mb-[12px]">
                People with access ({sharedUsers.length})
              </label>

              {/* Email List with Badges */}
              <div className="flex flex-wrap gap-[8px]">
                {sharedUsers.map((user, index) => (
                  <Badge
                    key={index}
                    label={user.email}
                    variant="Brand"
                    isRemovable={true}
                    onRemove={() => handleRemoveUser(index)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Info Message */}
          <div className="bg-[rgba(82,80,243,0.05)] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[12px] text-[rgba(0,0,0,0.65)]">
              People you add will be able to view and edit this project
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] px-[24px] py-[20px] border-t border-[rgba(0,0,0,0.1)]">
          <Button 
            label="Cancel"
            variant="Neutral" 
            size="Medium"
            onClick={onClose}
          />
          <Button 
            label="Share"
            variant="Primary" 
            size="Medium"
            onClick={handleShare}
            disabled={sharedUsers.length === 0}
          />
        </div>
      </div>
    </>
  );
}
