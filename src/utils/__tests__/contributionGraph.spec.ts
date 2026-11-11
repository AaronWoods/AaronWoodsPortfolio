import { describe, expect, it } from 'vitest'
import { buildContributionGraph, GRAPH_DAYS, GRAPH_WEEKS } from '../contributionGraph'

describe('buildContributionGraph', () => {
  it('produces weeks x days cells with levels 0-4', () => {
    const cells = buildContributionGraph()
    expect(cells).toHaveLength(GRAPH_WEEKS * GRAPH_DAYS)
    expect(cells.every((c) => c.level >= 0 && c.level <= 4)).toBe(true)
  })

  it('is deterministic, so prerendered HTML matches hydration', () => {
    expect(buildContributionGraph()).toEqual(buildContributionGraph())
  })

  it('is busier towards the end than the start', () => {
    const cells = buildContributionGraph()
    const half = cells.length / 2
    const sum = (xs: typeof cells) => xs.reduce((n, c) => n + c.level, 0)
    expect(sum(cells.slice(half))).toBeGreaterThan(sum(cells.slice(0, half)))
  })
})
