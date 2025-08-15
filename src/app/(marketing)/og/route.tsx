import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Cyllabs';
  const brand = searchParams.get('brand') || 'Web Development for Singapore SMEs';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>{title}</h1>
        <p style={{ fontSize: '30px' }}>{brand}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}