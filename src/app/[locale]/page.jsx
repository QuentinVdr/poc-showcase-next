import { useMessages, useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('homePage');

  const messages = useMessages();
  const blocks = messages.homePage.blocks;

  return (
    <main className="mx-auto my-4 flex w-10/12 max-w-6xl flex-col gap-4">
      <h1 className="text-4xl">{t('title')}</h1>
      <p>{t('description')}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blocks.map((block) => (
          <div key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
