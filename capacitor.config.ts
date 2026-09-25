import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'lk.gov.aluvihare.household',
  appName: 'Aluvihare Household System',
  webDir: 'dist',
  server: {
    // Serve over https:// so Supabase and other https APIs treat the
    // WebView like a normal secure origin (avoids CORS / mixed-content issues).
    androidScheme: 'https',
  },
};

export default config;
