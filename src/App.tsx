import { useState, useCallback } from 'react'
import { Button } from './AstraLibraryKit/components/button'
import { InputField } from './AstraLibraryKit/components/input_field'
import { AstraLogo } from './AstraLibraryKit/components/astra_logo'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Building2 } from 'lucide-react'

// ─── Validation helpers ──────────────────────────────────────────────────────

function validateEmail(email: string): string | null {
  if (!email) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address'
  return null
}

function validatePassword(password: string): string | null {
  if (!password) return 'Password is required'
  if (password.length < 8) return 'Must be at least 8 characters'
  if (!/[A-Z]/.test(password)) return 'Must include an uppercase letter'
  if (!/[a-z]/.test(password)) return 'Must include a lowercase letter'
  if (!/[0-9]/.test(password)) return 'Must include a number'
  return null
}

// ─── Types ───────────────────────────────────────────────────────────────────

type AuthView = 'login' | 'signup' | 'sso' | 'forgot-password'
type SubmitState = 'idle' | 'loading' | 'error' | 'success'

// ─── Social / SSO icons ─────────────────────────────────────────────────────

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.997 10.997 0 0 0 12 23z" fill="#34A853" />
      <path d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a11.01 11.01 0 0 0 0 9.86l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

// ─── Divider ────────────────────────────────────────────────────────────────

function Divider({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-[var(--border-secondary)]" />
      <span className="text-[12px] text-[var(--text-tertiary)] font-medium uppercase tracking-wider">{text}</span>
      <div className="flex-1 h-px bg-[var(--border-secondary)]" />
    </div>
  )
}

// ─── Password strength indicator ────────────────────────────────────────────

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: '8+ characters', pass: password.length >= 8 },
    { label: 'Uppercase', pass: /[A-Z]/.test(password) },
    { label: 'Lowercase', pass: /[a-z]/.test(password) },
    { label: 'Number', pass: /[0-9]/.test(password) },
  ]
  const score = checks.filter(c => c.pass).length

  if (!password) return null

  const colors = ['bg-[var(--danger)]', 'bg-[var(--danger)]', 'bg-[var(--warning)]', 'bg-[var(--warning)]', 'bg-[var(--success)]']

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className={`h-[3px] flex-1 rounded-full transition-colors ${i < score ? colors[score] : 'bg-[var(--bg-subtle)]'}`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {checks.map(c => (
          <span key={c.label} className={`text-[11px] ${c.pass ? 'text-[var(--text-secondary)]' : 'text-[var(--text-tertiary)]'}`}>
            {c.pass ? '✓' : '○'} {c.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Login Screen ───────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<AuthView>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [ssoOrg, setSsoOrg] = useState('')

  // Touched state for showing validation on blur
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const emailError = touched.email ? validateEmail(email) : null
  const passwordError = touched.password ? validatePassword(password) : null
  const confirmError = touched.confirmPassword && view === 'signup' && confirmPassword !== password
    ? 'Passwords do not match'
    : null

  const isFormValid = view === 'sso'
    ? ssoOrg.trim().length > 0
    : view === 'forgot-password'
      ? !validateEmail(email)
      : !validateEmail(email) && !validatePassword(password) && (view === 'login' || confirmPassword === password)

  const handleBlur = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }, [])

  const resetForm = useCallback(() => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setSsoOrg('')
    setShowPassword(false)
    setTouched({})
    setSubmitState('idle')
    setErrorMessage('')
  }, [])

  const switchView = useCallback((newView: AuthView) => {
    resetForm()
    setView(newView)
  }, [resetForm])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ email: true, password: true, confirmPassword: true })

    if (!isFormValid) return

    setSubmitState('loading')
    setErrorMessage('')

    // Simulate API call
    setTimeout(() => {
      // Simulate error for demo: "test@error.com" triggers an error state
      if (email === 'test@error.com') {
        setSubmitState('error')
        setErrorMessage('Invalid credentials. Please try again.')
        return
      }
      setSubmitState('success')
    }, 1800)
  }, [isFormValid, email])

  const handleSocialLogin = useCallback((provider: string) => {
    setSubmitState('loading')
    setErrorMessage('')
    setTimeout(() => {
      setSubmitState('success')
    }, 1500)
  }, [])

  // ─── Success state ──────────────────────────────────────────────────────

  if (submitState === 'success') {
    return (
      <div className="min-h-screen bg-[var(--surface-bg)] flex items-center justify-center p-6">
        <div className="w-full max-w-[400px] text-center space-y-6">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-[var(--brand-tertiary)]">
            <AstraLogo size={40} />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-[var(--text-primary)] font-[var(--font-display)]">
              {view === 'forgot-password' ? 'Check your email' : 'Welcome to Astra'}
            </h1>
            <p className="text-[14px] text-[var(--text-secondary)] mt-2">
              {view === 'forgot-password'
                ? `We sent a reset link to ${email}`
                : view === 'signup'
                  ? 'Your account has been created successfully.'
                  : 'You have been signed in successfully.'}
            </p>
          </div>
          <Button
            variant="primary"
            size="medium"
            onClick={() => {
              resetForm()
              setView('login')
            }}
          >
            {view === 'forgot-password' ? 'Back to login' : 'Continue to Astra'}
          </Button>
        </div>
      </div>
    )
  }

  // ─── Auth forms ─────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[var(--surface-bg)] flex">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[560px] bg-[var(--brand-primary)] flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative star shapes */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="absolute -top-20 -left-20 size-[300px]" viewBox="0 0 32 32" fill="white">
            <path d="M16.35 4c1.01 7.28 4.37 10.64 11.65 11.65v.7c-7.28 1.01-10.64 4.37-11.65 11.65h-.7C14.64 20.72 11.28 17.36 4 16.35v-.7C11.28 14.64 14.64 11.28 15.65 4h.7Z" />
          </svg>
          <svg className="absolute bottom-10 right-10 size-[200px]" viewBox="0 0 32 32" fill="white">
            <path d="M16.35 4c1.01 7.28 4.37 10.64 11.65 11.65v.7c-7.28 1.01-10.64 4.37-11.65 11.65h-.7C14.64 20.72 11.28 17.36 4 16.35v-.7C11.28 14.64 14.64 11.28 15.65 4h.7Z" />
          </svg>
        </div>
        <div className="relative z-10">
          <AstraLogo size={40} />
        </div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-[32px] font-semibold text-white leading-tight">
            Create stunning videos with AI
          </h2>
          <p className="text-[16px] text-white/70 max-w-[360px]">
            Astra helps you edit, enhance, and produce professional video content effortlessly.
          </p>
        </div>
        <div className="relative z-10" />
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-[400px] space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center">
            <AstraLogo size={40} />
          </div>

          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-[24px] font-semibold text-[var(--text-primary)]">
              {view === 'login' && 'Sign in to Astra'}
              {view === 'signup' && 'Create your account'}
              {view === 'sso' && 'Sign in with SSO'}
              {view === 'forgot-password' && 'Reset your password'}
            </h1>
            <p className="text-[14px] text-[var(--text-secondary)]">
              {view === 'login' && 'Welcome back. Enter your credentials to continue.'}
              {view === 'signup' && 'Get started with Astra for free.'}
              {view === 'sso' && 'Enter your organization to continue.'}
              {view === 'forgot-password' && "Enter your email and we'll send you a reset link."}
            </p>
          </div>

          {/* Error banner */}
          {submitState === 'error' && errorMessage && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-[13px] text-red-700 flex items-start gap-2">
              <span className="shrink-0 mt-px">⚠</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* ─── SSO form ─────────────────────────────────────────────── */}
          {view === 'sso' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Organization"
                placeholder="your-company"
                value={ssoOrg}
                onChange={setSsoOrg}
                prefix={<Building2 size={16} className="text-[var(--text-tertiary)]" />}
                suffix=".sso.astra.ai"
              />
              <Button
                variant="primary"
                size="medium"
                disabled={!isFormValid || submitState === 'loading'}
                className="w-full"
              >
                {submitState === 'loading' ? 'Connecting…' : 'Continue with SSO'}
              </Button>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="w-full text-center text-[13px] text-[var(--brand-primary)] hover:underline cursor-pointer"
              >
                Back to sign in
              </button>
            </form>
          )}

          {/* ─── Forgot password form ────────────────────────────────── */}
          {view === 'forgot-password' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <InputField
                  label="Email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={setEmail}
                  prefix={<Mail size={16} className="text-[var(--text-tertiary)]" />}
                  onBlur={() => handleBlur('email')}
                />
                {emailError && <p className="text-[12px] text-[var(--danger)] mt-1">{emailError}</p>}
              </div>
              <Button
                variant="primary"
                size="medium"
                disabled={!isFormValid || submitState === 'loading'}
                className="w-full"
              >
                {submitState === 'loading' ? 'Sending…' : 'Send reset link'}
              </Button>
              <button
                type="button"
                onClick={() => switchView('login')}
                className="w-full text-center text-[13px] text-[var(--brand-primary)] hover:underline cursor-pointer"
              >
                Back to sign in
              </button>
            </form>
          )}

          {/* ─── Login / Signup form ─────────────────────────────────── */}
          {(view === 'login' || view === 'signup') && (
            <>
              {/* Social buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  disabled={submitState === 'loading'}
                  className="w-full flex items-center justify-center gap-3 h-[44px] rounded-lg border border-[var(--border-primary)] bg-[var(--surface-bg)] hover:bg-[var(--surface-hover)] transition-colors text-[14px] font-medium text-[var(--text-primary)] disabled:opacity-50 cursor-pointer"
                >
                  <GoogleIcon className="size-5" />
                  Continue with Google
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('apple')}
                  disabled={submitState === 'loading'}
                  className="w-full flex items-center justify-center gap-3 h-[44px] rounded-lg border border-[var(--border-primary)] bg-[var(--surface-bg)] hover:bg-[var(--surface-hover)] transition-colors text-[14px] font-medium text-[var(--text-primary)] disabled:opacity-50 cursor-pointer"
                >
                  <AppleIcon className="size-5" />
                  Continue with Apple
                </button>
                <button
                  type="button"
                  onClick={() => switchView('sso')}
                  disabled={submitState === 'loading'}
                  className="w-full flex items-center justify-center gap-3 h-[44px] rounded-lg border border-[var(--border-primary)] bg-[var(--surface-bg)] hover:bg-[var(--surface-hover)] transition-colors text-[14px] font-medium text-[var(--text-primary)] disabled:opacity-50 cursor-pointer"
                >
                  <Building2 size={18} className="text-[var(--text-secondary)]" />
                  Continue with SSO
                </button>
              </div>

              <Divider text="or" />

              {/* Email / password form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <InputField
                    label="Email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={setEmail}
                    prefix={<Mail size={16} className="text-[var(--text-tertiary)]" />}
                    onBlur={() => handleBlur('email')}
                  />
                  {emailError && <p className="text-[12px] text-[var(--danger)] mt-1">{emailError}</p>}
                </div>

                <div>
                  <div className="relative">
                    <InputField
                      label="Password"
                      placeholder={view === 'signup' ? 'Create a password' : 'Enter your password'}
                      value={password}
                      onChange={setPassword}
                      prefix={<Lock size={16} className="text-[var(--text-tertiary)]" />}
                      suffix={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      }
                      onBlur={() => handleBlur('password')}
                      type={showPassword ? 'text' : 'password'}
                    />
                  </div>
                  {passwordError && <p className="text-[12px] text-[var(--danger)] mt-1">{passwordError}</p>}
                  {view === 'signup' && <div className="mt-2"><PasswordStrength password={password} /></div>}
                </div>

                {view === 'signup' && (
                  <div>
                    <InputField
                      label="Confirm password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={setConfirmPassword}
                      prefix={<Lock size={16} className="text-[var(--text-tertiary)]" />}
                      onBlur={() => handleBlur('confirmPassword')}
                      type={showPassword ? 'text' : 'password'}
                    />
                    {confirmError && <p className="text-[12px] text-[var(--danger)] mt-1">{confirmError}</p>}
                  </div>
                )}

                {view === 'login' && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => switchView('forgot-password')}
                      className="text-[13px] text-[var(--brand-primary)] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="medium"
                  disabled={!isFormValid || submitState === 'loading'}
                  iconEnd={submitState !== 'loading' ? <ArrowRight size={16} /> : undefined}
                  className="w-full"
                >
                  {submitState === 'loading'
                    ? (view === 'signup' ? 'Creating account…' : 'Signing in…')
                    : (view === 'signup' ? 'Create account' : 'Sign in')}
                </Button>
              </form>

              {/* Toggle login/signup */}
              <p className="text-center text-[13px] text-[var(--text-secondary)]">
                {view === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => switchView(view === 'login' ? 'signup' : 'login')}
                  className="text-[var(--brand-primary)] font-medium hover:underline cursor-pointer"
                >
                  {view === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
