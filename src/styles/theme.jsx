import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --success-color: #16a34a;
    --error-color: #dc2626;
    --warning-color: #d97706;
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --background: #ffffff;
    --border: #e5e7eb;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.5;
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .btn-primary:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
  }

  .alert-success {
    color: var(--success-color);
    background-color: rgba(22, 163, 74, 0.1);
  }

  .alert-danger {
    color: var(--error-color);
    background-color: rgba(220, 38, 38, 0.1);
  }

  .toast-success {
    background-color: rgba(22, 163, 74, 0.1);
    color: var(--success-color);
  }

  .toast-error {
    background-color: rgba(220, 38, 38, 0.1);
    color: var(--error-color);
  }
`
