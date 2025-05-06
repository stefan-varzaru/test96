// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist or has been moved.</p>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}

