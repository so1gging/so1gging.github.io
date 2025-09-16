import type {NextConfig} from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '.' : '', // 반드시 끝에 슬래시
}

export default nextConfig
