export const theme = {
  colors: {
    primary: '#4a90e2',
    secondary: '#f5a623',
    background: '#1a1a1a',
    text: '#ffffff',
    error: '#d0021b',
    success: '#7ed321',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
} as const;

export type Theme = typeof theme; 