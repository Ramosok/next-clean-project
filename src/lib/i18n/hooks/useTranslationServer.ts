import type { i18n, TFunction } from 'i18next';
import { createInstance } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from 'src/lib/i18n/config';
import type { Languages, NamespaceType } from 'src/lib/i18n/types';

export const initI18next = async (lng: Languages, namespaceFile: NamespaceType): Promise<i18n> => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(
            resourcesToBackend(
                (language: Languages, namespace: NamespaceType) =>
                    import(`/public/locales/${language}/${namespace}.json`)
            )
        )
        .init(getOptions(lng, namespaceFile));
    return i18nInstance;
};

export const useTranslationServer = async (
    lng: Languages,
    namespaceFile: NamespaceType,
    options?: { keyPrefix: string }
): Promise<{ t: TFunction<NamespaceType>; i18n: i18n }> => {
    const i18nextInstance = await initI18next(lng, namespaceFile);
    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(namespaceFile) ? namespaceFile[0] : namespaceFile,
            options?.keyPrefix
        ),
        i18n: i18nextInstance,
    };
};
