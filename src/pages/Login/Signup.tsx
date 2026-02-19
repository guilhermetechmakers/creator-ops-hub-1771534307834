import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import { LoginSignupToggle, type AuthMode } from '@/components/login-signup/LoginSignupToggle'
import {
  EmailPasswordForm,
  type AuthFormValues,
} from '@/components/login-signup/EmailPasswordForm'
import { SocialOAuthButtons } from '@/components/login-signup/SocialOAuthButtons'
import { ContinueWithGoogle } from '@/components/login-signup/ContinueWithGoogle'
import { ForgotPasswordTermsPrivacy } from '@/components/login-signup/ForgotPasswordTermsPrivacy'
import { SSOEnterpriseCTA } from '@/components/login-signup/SSOEnterpriseCTA'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

const signupSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function LoginSignupPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<AuthMode>('signup')
  const [isLoading, setIsLoading] = useState(false)
  const [googleConsentOpen, setGoogleConsentOpen] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const schema = mode === 'login' ? loginSchema : signupSchema
  const defaultValues: AuthFormValues =
    mode === 'login'
      ? { email: '', password: '' }
      : { email: '', password: '', confirmPassword: '' }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    reset(
      mode === 'login'
        ? { email: '', password: '' }
        : { email: '', password: '', confirmPassword: '' }
    )
  }, [mode, reset])

  useEffect(() => {
    document.title = mode === 'login' ? 'Sign In | Creator Ops Hub' : 'Sign Up | Creator Ops Hub'
    return () => {
      document.title = 'Creator Ops Hub'
    }
  }, [mode])

  const onSubmit = async (_data: AuthFormValues) => {
    setIsLoading(true)
    try {
      // Mock auth - in production, call Supabase Edge Function
      localStorage.setItem('access_token', 'mock-token')
      toast.success(
        mode === 'login'
          ? 'Signed in successfully'
          : 'Account created successfully'
      )
      navigate('/dashboard')
    } catch {
      toast.error(
        mode === 'login'
          ? 'Invalid email or password'
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleClick = () => {
    setGoogleConsentOpen(true)
  }

  const handleGoogleConsent = async () => {
    setGoogleLoading(true)
    try {
      // Mock OAuth - in production, call Supabase Edge Function for Google OAuth
      localStorage.setItem('access_token', 'mock-google-token')
      toast.success('Connected with Google')
      setGoogleConsentOpen(false)
      navigate('/dashboard')
    } catch {
      toast.error('Failed to connect with Google')
    } finally {
      setGoogleLoading(false)
    }
  }

  const handleAppleClick = () => {
    toast.info('Apple Sign-In coming soon')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="space-y-4 text-center">
          <LoginSignupToggle mode={mode} onModeChange={setMode} />
          <div className="space-y-1">
            <CardTitle className="text-h1">
              {mode === 'login' ? 'Sign in' : 'Create an account'}
            </CardTitle>
            <CardDescription>
              {mode === 'login'
                ? 'Enter your credentials to access your workspace'
                : 'Get started with your free Creator Ops Hub workspace'}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <EmailPasswordForm
            mode={mode}
            register={register}
            errors={errors}
            isLoading={isLoading}
            submitLabel={mode === 'login' ? 'Sign in' : 'Create account'}
            onSubmit={handleSubmit(onSubmit)}
          />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-small">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <SocialOAuthButtons
            onGoogleClick={handleGoogleClick}
            onAppleClick={handleAppleClick}
          />

          <ForgotPasswordTermsPrivacy mode={mode} />

          <SSOEnterpriseCTA />

          <p className="text-center text-small text-muted-foreground">
            {mode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <Link
                  to="/login-/-signup"
                  className="text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault()
                    setMode('signup')
                  }}
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link
                  to="/login-/-signup"
                  className="text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault()
                    setMode('login')
                  }}
                >
                  Sign in
                </Link>
              </>
            )}
          </p>
        </CardContent>
      </Card>

      <ContinueWithGoogle
        open={googleConsentOpen}
        onOpenChange={setGoogleConsentOpen}
        onConsent={handleGoogleConsent}
        isLoading={googleLoading}
      />
    </div>
  )
}
