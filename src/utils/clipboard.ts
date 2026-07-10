/**
 * Copy text to the clipboard with progressive fallbacks for client components.
 * Prefer Clipboard API → execCommand → window.prompt.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  const value = text.trim();
  if (!value || typeof window === 'undefined') {
    return false;
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Fall through to legacy paths.
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.padding = '0';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';
    textarea.style.background = 'transparent';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, value.length);

    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (ok) {
      return true;
    }
  } catch {
    // Fall through to prompt.
  }

  try {
    window.prompt('Copy to clipboard: Ctrl/Cmd+C, then Enter', value);
    return true;
  } catch {
    return false;
  }
}
