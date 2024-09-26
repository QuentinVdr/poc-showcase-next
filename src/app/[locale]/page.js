import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('homePage');

  return (
    <main className="mx-auto my-4 flex w-11/12 max-w-6xl flex-col gap-4">
      <h1 className="text-4xl">{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
