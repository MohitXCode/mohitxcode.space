export const runtime = 'edge'

export async function GET() {
  const card = `
╭─────────────────────────────────────╮
│                                     │
│   MohitXCode                        │
│   Developer · Builder · Learner     │
│                                     │
│   mohitxcode.space                  │
│   github.com/mohitxcode             │
│   x.com/mohitxcode                  │
│                                     │
│   "Building in public."             │
│                                     │
╰─────────────────────────────────────╯
`.trim()

  return new Response(card, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}