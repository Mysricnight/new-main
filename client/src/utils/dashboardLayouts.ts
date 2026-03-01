export type DashboardLayout = 'grid' | 'list' | 'compact'

export const DASHBOARD_LAYOUTS = {
  grid: {
    label: 'Grid View',
    description: '4-column grid layout',
    columns: { base: 1, md: 2, lg: 3, xl: 4 },
    spacing: 4,
  },
  list: {
    label: 'List View',
    description: 'Single column with details',
    columns: { base: 1 },
    spacing: 3,
  },
  compact: {
    label: 'Compact View',
    description: '6+ columns, smaller cards',
    columns: { base: 2, md: 3, lg: 5, xl: 6 },
    spacing: 2,
  },
} as const

export const DEFAULT_LAYOUT: DashboardLayout = 'grid'

export function getLayoutConfig(layout: DashboardLayout = DEFAULT_LAYOUT) {
  return DASHBOARD_LAYOUTS[layout] || DASHBOARD_LAYOUTS.grid
}
