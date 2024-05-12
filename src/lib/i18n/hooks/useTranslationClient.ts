'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useParams } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import type { UseTranslationResponse } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from 'src/lib/i18n/config';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) => import(`/public/locales/${language}/${namespace}.json`)
        )
    )
    .init(getOptions());

export const useTranslationClient = (ns?: string): UseTranslationResponse<string, unknown> => {
    const params = useParams();

    const i18nextOrigin = useTranslation(ns || 'translation');
    const { i18n } = i18nextOrigin;

    useEffect(() => {
        if (params?.lng) {
            i18n.changeLanguage(params?.lng as string).catch(null);
        }
    }, []);

    return i18nextOrigin;
};
