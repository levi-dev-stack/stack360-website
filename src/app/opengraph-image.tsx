import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/constants/site';

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#111111',
        padding: '64px 72px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          color: '#e77725',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: 'uppercase',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: '#e77725',
            display: 'flex',
          }}
        />
        {SITE_NAME}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            color: '#9f9f9f',
            fontSize: 28,
            lineHeight: 1.35,
            maxWidth: 820,
          }}
        >
          ERP, CRM, AI, SaaS, cloud, and DevOps — engineered for partners and product teams.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#5d5d5d',
          fontSize: 22,
          fontFamily: 'ui-monospace, monospace',
        }}
      >
        <span>www.stack360.co</span>
        <span style={{ color: '#e77725' }}>Architecture Studio</span>
      </div>
    </div>,
    { ...size }
  );
}
