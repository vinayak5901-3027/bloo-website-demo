import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = `${siteConfig.name}  -  ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social card. Generated at build/request time  -  no external assets.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0B1220 0%, #111A2B 55%, #1A3A6B 140%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: '#F4F1EA',
              letterSpacing: '-0.02em',
            }}
          >
            Bloo
          </div>
          <div style={{ width: 2, height: 36, background: 'rgba(244,241,234,0.18)' }} />
          <div
            style={{
              fontSize: 20,
              color: '#6FE3C8',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
            }}
          >
            Telemetry Intelligence
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              maxWidth: 1000,
            }}
          >
            <span style={{ color: '#F4F1EA' }}>The system of record for</span>
            <span style={{ color: '#6FE3C8', fontStyle: 'italic' }}>Telemetry Intelligence.</span>
          </div>
          <div style={{ fontSize: 26, color: '#D1CFC7', marginTop: 24, maxWidth: 900 }}>
            Full-fidelity logging, detection, and AI-driven security operations  -  in your cloud, at
            predictable cost.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ height: 8, width: 8, borderRadius: 9999, background: '#6FE3C8' }} />
          <div style={{ fontSize: 20, color: '#969A9B' }}>bloo.io</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
