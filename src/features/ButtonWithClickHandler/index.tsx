'use client';

import type { FC } from 'react';

import { useTranslationClient } from 'src/lib/i18n/hooks';
import { Button } from 'src/shared/ui';

export const ButtonWithClickHandler: FC = () => {
    const { t } = useTranslationClient();

    const reqHelp = (): void => {
        console.log('Requesting help...');
    };

    return <Button onClick={reqHelp}> {t('btn')}</Button>;
};
