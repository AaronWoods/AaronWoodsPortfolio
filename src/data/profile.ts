import type { Profile } from './types'

// TODO(content): replace every [BRACKETED] value with the real thing from LinkedIn.
export const profile: Profile = {
  name: 'Aaron Woods',
  headline: '[ONE-LINE HEADLINE FROM LINKEDIN]',
  location: '[LOCATION]',
  about: ['[ABOUT SECTION FROM LINKEDIN: two or three sentences.]'],
  email: '[EMAIL]',
  contactMessage: '[SHORT LINE INVITING CONTACT]',
  graphCaption: '[N] roles over [YEARS] years',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' }, // TODO(content): profile URL
    { label: 'GitHub', href: 'https://github.com/AaronWoods' },
  ],
}
