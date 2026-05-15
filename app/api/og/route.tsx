import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || siteConfig.name
  const type = searchParams.get('type') || 'page'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: '24px',
              color: '#a1a1aa',
              fontFamily: 'monospace',
            }}
          >
            {type.toUpperCase()}
          </span>
        </div>

        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#ededed',
            lineHeight: 1.1,
            maxWidth: '800px',
            marginBottom: '24px',
          }}
        >
          {title}
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 'auto',
          }}
        >
          <span
            style={{
              fontSize: '32px',
              color: '#ededed',
              fontWeight: 'bold',
            }}
          >
            {siteConfig.name}
          </span>
          <span
            style={{
              fontSize: '24px',
              color: '#71717a',
            }}
          >
            {siteConfig.url.replace('https://', '')}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}