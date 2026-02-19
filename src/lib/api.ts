const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export interface ApiError {
  message: string
  code?: string
  status?: number
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: ApiError = {
      message: response.statusText,
      status: response.status,
    }
    try {
      const data = await response.json()
      error.message = data.message ?? data.error ?? response.statusText
      error.code = data.code
    } catch {
      // Use default message
    }
    throw error
  }

  const contentType = response.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return response.json()
  }
  return response.text() as unknown as T
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`
  const token = localStorage.getItem('access_token')

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  return handleResponse<T>(response)
}

export const api = {
  get: <T>(endpoint: string) => apiFetch<T>(endpoint, { method: 'GET' }),
  post: <T>(endpoint: string, body?: unknown) =>
    apiFetch<T>(endpoint, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T>(endpoint: string, body?: unknown) =>
    apiFetch<T>(endpoint, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  patch: <T>(endpoint: string, body?: unknown) =>
    apiFetch<T>(endpoint, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),
  delete: <T>(endpoint: string) => apiFetch<T>(endpoint, { method: 'DELETE' }),
}
