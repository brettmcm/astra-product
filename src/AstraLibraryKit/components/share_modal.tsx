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
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-light rounded-[16px] shadow-xl z-50 w-[480px] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-border-light">
          <h2 className="text-[20px] font-semibold text-text-primary">Share {projectName}</h2>
          <button
            onClick={onClose}
            className="size-[24px] flex items-center justify-center rounded hover:bg-bg-hover transition-colors"
          >
            <X className="size-[16px]" color="var(--ads-text-secondary)" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[24px]">
          {/* Email Input */}
          <div className="mb-[24px]">
            <label className="block text-[14px] text-text-secondary mb-[8px]">
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
                  className={`w-full h-[40px] px-[12px] rounded-[8px] border text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                    emailError
                      ? 'border-danger focus:ring-danger'
                      : 'border-border-primary focus:ring-brand-primary'
                  }`}
                />
                {emailError && (
                  <p className="text-[12px] text-danger mt-[4px]">
                    {emailError}
                  </p>
                )}
              </div>
              <Button
                variant="primary"
                size="medium"
                onClick={handleAddUser}
                disabled={!email.trim() || !isValidEmail(email.trim())}
              >Add</Button>
            </div>
          </div>

          {/* Added Users */}
          {sharedUsers.length > 0 && (
            <div className="mb-[24px]">
              <label className="block text-[14px] text-text-secondary mb-[12px]">
                People with access ({sharedUsers.length})
              </label>

              {/* Email List with Badges */}
              <div className="flex flex-wrap gap-[8px]">
                {sharedUsers.map((user, index) => (
                  <Badge
                    key={index}
                    label={user.email}
                    variant="brand"
                    removable={true}
                    onRemove={() => handleRemoveUser(index)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Info Message */}
          <div className="bg-brand-tertiary rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[12px] text-text-secondary">
              People you add will be able to view and edit this project
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] px-[24px] py-[20px] border-t border-border-light">
          <Button
            variant="neutral"
            size="medium"
            onClick={onClose}
          >Cancel</Button>
          <Button
            variant="primary"
            size="medium"
            onClick={handleShare}
            disabled={sharedUsers.length === 0}
          >Share</Button>
        </div>
      </div>
    </>
  );
}
