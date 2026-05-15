export const runtime = 'edge'

export async function GET() {
  const resume = {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: 'MohitXCode',
      label: 'Developer building in public',
      url: 'https://mohitxcode.space',
      summary: 'Still learning. Always shipping.',
      profiles: [
        { network: 'GitHub', username: 'mohitxcode', url: 'https://github.com/mohitxcode' },
        { network: 'Twitter', username: 'mohitxcode', url: 'https://x.com/mohitxcode' },
      ],
    },
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
    ],
  }

  return Response.json(resume, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}