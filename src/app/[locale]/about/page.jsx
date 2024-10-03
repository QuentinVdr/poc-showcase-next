import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

  return <h1>{t('title')}</h1>;
}
