import Header from '@components/global/Header/Header';
import '@styles/global.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: {
    template: '%s | Biogasview',
    default: 'Biogasview',
  },
  description: 'Website to present biogasview',
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
      </head>
      <body className="bg-neutral-100">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
