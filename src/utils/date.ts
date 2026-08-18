export function formatPostedAgo(isoDate: string | undefined): string {
  if (!isoDate) {
    return '';
  }

  const posted = new Date(isoDate);

  if (Number.isNaN(posted.getTime())) {
    return '';
  }

  const diffMs = Date.now() - posted.getTime();
  const days = Math.max(0, Math.floor(diffMs / 86_400_000));

  if (days === 0) {
    return 'Posted today';
  }

  if (days === 1) {
    return 'Posted 1 day ago';
  }

  return `Posted ${days} days ago`;
}
