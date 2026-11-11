import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ExperienceTimeline from '../ExperienceTimeline.vue'
import type { Role } from '@/data/types'

const roles: Role[] = [
  { company: 'Acme', title: 'Engineer', start: '2022', end: null, summary: 'Built things.' },
  { company: 'Globex', title: 'Intern', start: '2020', end: '2021', summary: 'Learned things.' },
]

describe('ExperienceTimeline', () => {
  it('renders one entry per role, from data', () => {
    const wrapper = mount(ExperienceTimeline, { props: { roles } })
    const items = wrapper.findAll('li')
    expect(items).toHaveLength(2)
    expect(items[0]!.text()).toContain('Engineer')
    expect(items[0]!.text()).toContain('Acme')
    expect(items[1]!.text()).toContain('Globex')
  })

  it('shows "Present" for the current role and the end date otherwise', () => {
    const wrapper = mount(ExperienceTimeline, { props: { roles } })
    const dates = wrapper.findAll('.timeline__dates').map((d) => d.text())
    expect(dates).toEqual(['2022 – Present', '2020 – 2021'])
  })

  it('marks only the current role with the pulsing dot', () => {
    const wrapper = mount(ExperienceTimeline, { props: { roles } })
    expect(wrapper.findAll('.timeline__ping')).toHaveLength(1)
  })
})
