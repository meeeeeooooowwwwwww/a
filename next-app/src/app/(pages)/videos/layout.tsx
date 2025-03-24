import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos - War Room',
  description: 'Watch the latest videos from War Room covering politics, culture, and current events.',
}

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 