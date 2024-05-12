import Link from 'next/link';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

import { ButtonWithClickHandler } from 'src/features';
import { languages } from 'src/lib/i18n/config';
import { useTranslationServer } from 'src/lib/i18n/hooks';
import type { Languages } from 'src/lib/i18n/types';

interface HomePageProps {
    params: { lng: Languages };
}

export default async function Page({ params: { lng } }: HomePageProps): Promise<ReactElement> {
    const { t } = await useTranslationServer(lng, 'translation');

    return (
        <section className="flex h-96 flex-col items-center justify-center gap-4">
            <h1>{t('title')}</h1>

            <ButtonWithClickHandler />

            <div>
                <Trans i18nKey="languageSwitcher" t={t}>
                    Switch from <strong>{lng}</strong> to:
                </Trans>
                {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                        return (
                            <span key={l}>
                                {index > 0 && ' or '}
                                <Link href={`/${l}`}>{l}</Link>
                            </span>
                        );
                    })}
            </div>
        </section>
    );
}
