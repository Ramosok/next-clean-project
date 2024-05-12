import type { GetOptionsReturnType, NamespaceType } from 'src/lib/i18n/types';
import { Languages } from 'src/lib/i18n/types';

export const fallbackLng: Languages = Languages.EN;
export const languages = [fallbackLng, Languages.RU];
export const defaultNS: NamespaceType = 'translation';
export const cookieName = 'i18next';

const COOKIE_LIFETIME = 10080; // 7 days

export function getOptions(lng = fallbackLng, namespace = defaultNS): GetOptionsReturnType {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        namespace,
        detection: {
            order: ['cookie'],
            lookupCookie: 'locale',
            caches: ['cookie'],
            cookieMinutes: COOKIE_LIFETIME,
            cookieOptions: {
                path: '/',
            },
        },
    };
}
