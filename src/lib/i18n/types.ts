export type GetOptionsReturnType = {
    debug?: boolean;
    supportedLngs: string[];
    fallbackLng: string;
    lng: Languages;
    fallbackNS: string;
    defaultNS: string;
    namespace: NamespaceType;
    detection: {
        order: ['cookie'];
        lookupCookie: 'locale';
        caches: ['cookie'];
        cookieMinutes: number;
        cookieOptions: {
            path: '/';
        };
    };
};

export const enum Languages {
    RU = 'ru',
    EN = 'en',
}

export type NamespaceType = 'translation';
