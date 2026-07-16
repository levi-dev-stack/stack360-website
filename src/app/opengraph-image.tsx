import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/constants/site';

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const COLORS = {
  paper: '#f6f0ed',
  white: '#ffffff',
  ink: '#1a1a1a',
  quiet: '#5d5d5d',
  muted: '#9f9f9f',
  primary: '#e77725',
  primaryTint: '#efc59c',
  primarySoft: 'rgba(231, 119, 37, 0.14)',
} as const;

export default async function OpenGraphImage() {
  const iconBytes = await readFile(join(process.cwd(), 'public/stack360-icon.png'));
  const iconSrc = `data:image/png;base64,${iconBytes.toString('base64')}`;
  const wordmarkBytes = await readFile(join(process.cwd(), 'public/stack360.jpg'));
  const wordmarkSrc = `data:image/jpeg;base64,${wordmarkBytes.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(145deg, ${COLORS.paper} 0%, ${COLORS.white} 48%, ${COLORS.primaryTint} 100%)`,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -60,
          width: 420,
          height: 420,
          borderRadius: 999,
          background: COLORS.primarySoft,
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: 999,
          background: COLORS.primarySoft,
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          position: 'relative',
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: next/og ImageResponse requires native <img> */}
        <img
          src={iconSrc}
          width={112}
          height={112}
          alt={SITE_NAME}
          style={{
            borderRadius: 22,
            objectFit: 'contain',
          }}
        />

        {/* biome-ignore lint/performance/noImgElement: next/og ImageResponse requires native <img> */}
        <img
          src={wordmarkSrc}
          width={420}
          height={78}
          alt={SITE_NAME}
          style={{
            objectFit: 'contain',
          }}
        />

        <div
          style={{
            color: COLORS.quiet,
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: -0.2,
            lineHeight: 1.3,
            textAlign: 'center',
            maxWidth: 820,
          }}
        >
          {SITE_TAGLINE}
        </div>

        <div
          style={{
            marginTop: 4,
            height: 4,
            width: 72,
            borderRadius: 2,
            background: COLORS.primary,
            display: 'flex',
          }}
        />
      </div>
    </div>,
    { ...size }
  );
}
