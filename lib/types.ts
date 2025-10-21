export type Issue = {
  slug: string
  title: string
  icon: string
  summary: string
  tags: string[]
}

export type Event = {
  id: string
  title: string
  date: string
  location: string
  cta: { label: string; href: string }
}

export type Endorsement = {
  name: string
  title?: string
  quote: string
}