export interface GraphCell {
  /** Intensity 0 (empty) to 4 (busiest). */
  level: number
  /** Animation delay in seconds. */
  delay: number
}

export const GRAPH_WEEKS = 52
export const GRAPH_DAYS = 7

/**
 * Decorative "career contribution graph", denser towards the right.
 * Seeded rather than using Math.random so server-prerendered HTML and the
 * hydrated client produce identical output.
 */
export function buildContributionGraph(weeks = GRAPH_WEEKS, seed = 7): GraphCell[] {
  let state = seed
  const random = () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }

  const cells: GraphCell[] = []
  for (let week = 0; week < weeks; week++) {
    const bias = week / weeks
    for (let day = 0; day < GRAPH_DAYS; day++) {
      let level = 0
      if (random() < 0.35 + bias * 0.5) {
        level = Math.min(4, 1 + Math.floor(random() * (1 + bias * 3.2)))
      }
      const delay = 0.9 + week * 0.022 + random() * 0.12
      cells.push({ level, delay: Math.round(delay * 1000) / 1000 })
    }
  }
  return cells
}
