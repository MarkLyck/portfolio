import { css, Global } from '@emotion/react'
import cssReset from './cssReset'

export const GlobalStyles = (
  <Global
    styles={css`
    ${cssReset}

    @font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';

      html, body {
        padding: 0;
        margin: 0;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
        color: white;
        
      }
    `}
  />
)