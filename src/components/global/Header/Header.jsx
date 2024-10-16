import LanguageSwitcher from '@components/global/LanguageSwitcher/LanguageSwitcher';
import { Link } from '@i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="flex flex-row items-center gap-8 bg-primary-600 px-4 py-2.5 text-white">
      <span className="text-xl font-bold">{t('title')}</span>
      <nav className="flex flex-row items-center gap-2 text-lg">
        <Link
          className="rounded-xl px-3 py-1 font-semibold text-white no-underline hover:bg-primary-700 hover:text-primary-200"
          href="/"
        >
          {t('home')}
        </Link>
        <Link
          className="rounded-xl px-3 py-1 font-semibold text-white no-underline hover:bg-primary-700 hover:text-primary-200"
          href="/about"
        >
          {t('about')}
        </Link>
        <Link
          className="rounded-xl px-3 py-1 font-semibold text-white no-underline hover:bg-primary-700 hover:text-primary-200"
          href="/blog"
        >
          {t('blog')}
        </Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
