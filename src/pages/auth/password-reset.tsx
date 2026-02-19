import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'

const schema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

export function PasswordResetPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [invalidToken, setInvalidToken] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { password: '', confirmPassword: '' },
  })

  const onSubmit = async (_data: FormData) => {
    if (!token) {
      setInvalidToken(true)
      return
    }
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((r) => setTimeout(r, 500))
      setSuccess(true)
      toast.success('Password reset successfully')
    } catch {
      toast.error('Invalid or expired token')
      setInvalidToken(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (invalidToken || !token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
        <Card className="w-full max-w-md animate-scale-in">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-h1">Invalid or expired link</CardTitle>
            <CardDescription>
              The password reset link is invalid or has expired. Please request a
              new one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/forgot-password">Request new link</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
        <Card className="w-full max-w-md animate-scale-in">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-h1">Password reset</CardTitle>
            <CardDescription>
              Your password has been updated. You can now sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/login">Sign in</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-h1">Set new password</CardTitle>
          <CardDescription>
            Enter your new password below. Use 8+ characters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className={errors.password ? 'border-error' : ''}
              />
              {errors.password && (
                <p className="text-small text-error">{errors.password.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className={errors.confirmPassword ? 'border-error' : ''}
              />
              {errors.confirmPassword && (
                <p className="text-small text-error">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Resetting...' : 'Reset password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
