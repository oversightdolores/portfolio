const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const withBasePath = (path: string) => {
  if (!path) return path
  if (path.startsWith('http')) return path
  if (!basePath) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
