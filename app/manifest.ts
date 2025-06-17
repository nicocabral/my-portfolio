import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nico Cabral - Developer Lead',
    short_name: 'Nico Cabral',
    description: 'Developer Lead with 7+ years experience in API and Web Development',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  };
}
