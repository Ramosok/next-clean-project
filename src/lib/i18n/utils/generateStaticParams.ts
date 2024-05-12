import { languages } from 'src/lib/i18n/config';
import type { Languages } from 'src/lib/i18n/types';

export const generateStaticParams = async (): Promise<{ lng: Languages }[]> => {
    return languages.map((lng) => ({ lng }));
};
