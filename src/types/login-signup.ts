/**
 * Login/Signup session metadata (maps to login_signup table)
 */
export interface LoginSignup {
  id: string
  user_id: string
  title: string
  description?: string
  status: string
  created_at: string
  updated_at: string
}

export type LoginSignupInsert = Omit<LoginSignup, 'id' | 'created_at' | 'updated_at'> & {
  id?: string
  created_at?: string
  updated_at?: string
}

export type LoginSignupUpdate = Partial<Omit<LoginSignup, 'id' | 'user_id' | 'created_at'>>
