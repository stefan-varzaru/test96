'use client';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('title')}</h1>
      <p>{t('message')}</p>
    </div>
  );
}

