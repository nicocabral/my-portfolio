import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nico Cabral — Senior Software Engineer & UI/UX Developer',
    short_name: 'Nico Cabral',
    description:
      'Senior Software Engineer and UI/UX Developer with 7+ years building scalable web platforms and APIs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05060c',
    theme_color: '#3b82f6',
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
