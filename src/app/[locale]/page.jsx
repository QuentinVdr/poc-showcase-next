import { useMessages, useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('homePage');

  const blocks = useMessages().homePage.blocks;

  return (
    <main className="mx-auto my-4 flex w-10/12 max-w-6xl flex-col gap-4">
      <h1 className="text-4xl">{t('title')}</h1>
      <div>
        <p>{t('description')}</p>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum dolore repellendus eius in possimus
          veniam minima id soluta numquam rerum consectetur, officiis, minus repudiandae?{' '}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.title}>
              <h2>{block.title}</h2>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
