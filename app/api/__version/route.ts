export const runtime = 'edge'

export async function GET() {
  return Response.json(
    {
      version: process.env.npm_package_version || '0.1.0',
      sha: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local',
      branch: process.env.VERCEL_GIT_COMMIT_REF || 'unknown',
    },
    {
      headers: { 'Cache-Control': 'no-store' },
    }
  )
}