import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileHero from '../ProfileHero.vue'
import type { Profile } from '@/data/types'

const profile: Profile = {
  name: 'Ada Lovelace',
  headline: 'Mathematician',
  location: 'London',
  about: ['About text'],
  email: 'ada@example.com',
  contactMessage: 'Say hi',
  graphCaption: '3 roles over 10 years',
  links: [{ label: 'GitHub', href: 'https://github.com/ada' }],
}

describe('ProfileHero', () => {
  it('renders the name, headline and caption from the profile', () => {
    const wrapper = mount(ProfileHero, { props: { profile } })
    expect(wrapper.find('h1').text()).toBe('Ada Lovelace')
    expect(wrapper.text()).toContain('Mathematician')
    expect(wrapper.text()).toContain('3 roles over 10 years')
  })

  it('falls back to initials when there is no photo', () => {
    const wrapper = mount(ProfileHero, { props: { profile } })
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.hero__photo--initials').text()).toBe('AL')
  })

  it('opens external links safely', () => {
    const wrapper = mount(ProfileHero, { props: { profile } })
    const link = wrapper.find('a[href="https://github.com/ada"]')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
