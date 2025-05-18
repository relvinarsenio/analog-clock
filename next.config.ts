
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clock.noteapp.icu',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
