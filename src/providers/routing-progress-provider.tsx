'use client';
import NextTopLoader from 'nextjs-toploader';

export default function RoutingProgressBar() {
  return (
    <NextTopLoader
      color="#e77725"
      initialPosition={0.08}
      crawlSpeed={250}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease-in-out"
      speed={300}
      shadow="0 0 8px #e77725, 0 0 4px #e77725"
    />
  );
}
