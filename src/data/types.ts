export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  headline: string
  location: string
  /** Paragraphs shown in the About card. */
  about: string[]
  email: string
  /** Short line above the contact buttons. */
  contactMessage: string
  /** Caption on the decorative graph, e.g. "5 roles over 12 years". */
  graphCaption: string
  links: SocialLink[]
  /** Optional path under `public/`; initials are shown when omitted. */
  photo?: string
}

export interface Role {
  company: string
  title: string
  /** Display text, e.g. "2021" or "Mar 2021". */
  start: string
  /** `null` means the role is current. */
  end: string | null
  summary: string
}

export interface Education {
  institution: string
  qualification: string
  start: string
  end: string
}
