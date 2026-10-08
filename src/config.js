// Currently active sources reported on 6:18:22 PM PST 9/13/2026

// None Anime Tested: 936075
// Anime Tested: 37854

// Fshare/Fsonic Tested: 155 ( they don't have Michael )

export const SOURCES = [
    {
        key: '123anime',
        label: '123Anime',
        sourceFile: '123anime',
        proxyParam: 'a1',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: false,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /hlsx\d+cdn\.|burntburst\d+\.store|echovideo\.ru/i,
            headers: {
                Referer: 'https://play2.echovideo.ru/',
                Origin: 'https://play2.echovideo.ru',
            },
        },],
    },

    {
        key: '111477',
        label: '111477',
        sourceFile: '111477',
        proxyParam: 'a11',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /111477\.xyz/i,
            headers: {
                Referer: 'https://st.111477.xyz/',
                Origin: 'https://st.111477.xyz',
            },
        }],
    },

    {
        key: 'anihq-sub',
        label: 'AniHQ (Sub)',
        sourceFile: 'anihq',
        proxyParam: 'ahsub',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true
    },

    {
        key: 'anihq-dub',
        label: 'AniHQ (Dub)',
        sourceFile: 'anihq',
        proxyParam: 'ahdub',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true
    },

    {
        key: 'anineko-sub',
        sourceFile: 'anineko',
        label: 'AniNeko (Sub)',
        proxyParam: 'anksub',
        timeout: 25000,
        jitter: 500,
        retries: 2
    },

    {
        key: 'anineko-dub',
        sourceFile: 'anineko',
        label: 'AniNeko (Dub)',
        proxyParam: 'ankdub',
        timeout: 25000,
        jitter: 500,
        retries: 2
    },

    {
        key: 'bcine',
        label: 'Bcine',
        sourceFile: 'bcine',
        proxyParam: 'bc',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        cdnHeaders: [{
            pattern: /1embed\.cc|videasy\.to/i,
            headers: {
                Referer: 'https://bcine.ru/',
                Origin: 'https://bcine.ru',
            },
        }],
    },

    {
        key: 'dulo',
        label: 'Dulo',
        sourceFile: 'dulo',
        proxyParam: 'dl',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /dulo\.mov/i,
            headers: {
                Referer: 'https://dulo.mov/',
                Origin: 'https://dulo.mov',
            },
        }],
    },

    {
        key: 'flaxmovies',
        label: 'FlaxMovies',
        sourceFile: 'flaxmovies',
        proxyParam: 'fx',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /flix2watch\.pro/i,
            headers: {
                Referer: 'https://flaxmovies.xyz/',
                Origin: 'https://flaxmovies.xyz',
            },
        },],
    },

    {
        key: 'fsonline',
        label: 'FSOnline',
        sourceFile: 'fsonline',
        proxyParam: 'fo',
        timeout: 20000,
        retries: 1,
        jitter: 0,
        multiUrl: true,
        skipProxy: true,
    },

    {
        key: 'kisskh',
        label: 'KissKH',
        sourceFile: 'kisskh',
        proxyParam: 'kk',
        timeout: 30000,
        jitter: 500,
        retries: 1,
    },

    {
        key: 'lmscript',
        label: 'LMScript',
        sourceFile: 'lmscript',
        proxyParam: 'lmsc',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
    },

    {
        key: 'lookmovie',
        label: 'LookMovie',
        sourceFile: 'lookmovie',
        proxyParam: 'lm',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        verifyHeaders: {
            'Accept-Language': 'en-US,en;q=0.9',
        },
    },

    {
        key: 'movienight',
        label: 'MovieNight',
        sourceFile: 'movienight',
        proxyParam: 'mn',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /movienig\.ht/i,
            headers: {
                Referer: 'https://movienig.ht/',
                Origin: 'https://movienig.ht',
            },
        }],
    },

    {
        key: 'movy',
        label: 'Movy',
        sourceFile: 'movy',
        proxyParam: 'mv',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /wecollege\.net|movy\.bz/i,
            headers: {
                Referer: 'https://www.movy.bz/',
                Origin: 'https://www.movy.bz',
            },
        }],
    },

    {
        key: 'pengu',
        label: 'Pengu',
        sourceFile: 'pengu',
        proxyParam: 'pg',
        timeout: 25000,
        jitter: 500,
        retries: 1,
        multiUrl: true,
        skipProxy: true,
        disabled: false, // Enabled, but only returns streams when a manifest is provided
    },

    {
        key: 'pstream',
        label: 'PStream',
        sourceFile: 'pstream',
        proxyParam: 'ps',
        timeout: 35000,
        jitter: 500,
        retries: 1,
        multiUrl: true,
    },

    {
        key: 'purstream',
        sourceFile: 'purstream',
        label: 'Purstream',
        proxyParam: 'ps',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        skipProxy: true
    },

    {
        key: 'rivestream',
        label: 'RiveStream',
        sourceFile: 'rivestream',
        proxyParam: 'rs',
        timeout: 30000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
    },

    {
        key: 'streamaggregator',
        label: 'StreamAggregator',
        sourceFile: 'streamaggregator',
        proxyParam: 'sa',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /streamaggregator\.in/i,
            headers: {
                Referer: 'https://streamaggregator.in/',
                Origin: 'https://streamaggregator.in',
            },
        }],
    },
    {
        key: 'vidapi',
        label: 'VidAPI',
        sourceFile: 'vidapi',
        proxyParam: 'va',
        timeout: 25000,
        jitter: 500,
        retries: 1,
        multiUrl: true
    },

    {
        key: 'vidcore',
        label: 'VidCore',
        sourceFile: 'vidcore',
        proxyParam: 'vc',
        timeout: 35000,
        jitter: 500,
        retries: 1,
        multiUrl: true,
    },
    {
        key: 'vidfast',
        label: 'VidFast',
        sourceFile: 'vidfast',
        proxyParam: 'vf',
        timeout: 35000,
        jitter: 500,
        retries: 1,
        multiUrl: true,
    },

    {
        key: 'vidgod',
        label: 'VidGod',
        sourceFile: 'vidgod',
        proxyParam: 'vg',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
    },

    {
        key: 'vidlink',
        label: 'Vidlink',
        sourceFile: 'vidlink',
        proxyParam: 'vl',
        timeout: 20000,
        jitter: 500,
        retries: 2,
        skipProxy: true,
        multiUrl: true,
    },

    {
        key: 'vidnest',
        label: 'VidNest',
        sourceFile: 'vidnest',
        proxyParam: 'vdn',
        timeout: 20000,
        retries: 1,
        jitter: 0,
        multiUrl: true,
    },

    {
        key: 'vidnest-sub',
        label: 'VidNest (Sub)',
        sourceFile: 'vidnest',
        proxyParam: 'vdn',
        timeout: 20000,
        retries: 1,
        jitter: 0,
        multiUrl: true,
        skipProxy: true,
    },

    {
        key: 'vidnest-dub',
        label: 'VidNest (Dub)',
        sourceFile: 'vidnest',
        proxyParam: 'vdn',
        timeout: 20000,
        retries: 1,
        jitter: 0,
        multiUrl: true,
        skipProxy: true,
    },

    {
        key: 'vidrock',
        label: 'VidRock',
        sourceFile: 'vidrock',
        proxyParam: 'vr',
        timeout: 20000,
        jitter: 800,
        retries: 3,
        multiUrl: true,
        cdnHeaders: [{
            pattern: /./,
            headers: {
                Accept: '/',
                'Accept-Language': 'en-US,en;q=0.9',
                Referer: 'https://vidrock.ru/',
                Origin: 'https://vidrock.ru',
            },
        },],
    },

    {
        key: 'vidup',
        label: 'VidUp',
        sourceFile: 'vidup',
        proxyParam: 'vu',
        timeout: 35000,
        jitter: 500,
        retries: 1,
        multiUrl: true
    },

    {
        key: 'vidvault',
        label: 'VidVault',
        sourceFile: 'vidvault',
        proxyParam: 'vv',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
    },

    {
        key: 'vidzee',
        label: 'VidZee',
        sourceFile: 'vidzee',
        proxyParam: 'vz',
        timeout: 20000,
        sourcesTimeout: 10000,
        jitter: 400,
        retries: 3,
        verifyHeaders: {
            Accept: '/',
            'Accept-Language': 'en-US,en;q=0.9',
            Referer: 'https://player.vidzee.wtf',
            Origin: 'https://player.vidzee.wtf',
        },
    },

    {
        key: 'vixsrc',
        label: 'VixSrc',
        sourceFile: 'vixsrc',
        proxyParam: 'vx',
        timeout: 35000,
        jitter: 0,
        retries: 2,
        multiUrl: false,
        skipProxy: true,
        verifyHeaders: {
            Accept: 'application/json, text/javascript, /; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9',
            Referer: 'https://vixsrc.to/',
            Origin: 'https://vixsrc.to',
        },
    },

    {
        key: 'xdownloader',
        label: 'XDownloader',
        sourceFile: 'xdownloader',
        proxyParam: 'xd',
        timeout: 25000,
        jitter: 500,
        retries: 2,
        multiUrl: true,
        skipProxy: true,
        cdnHeaders: [{
            pattern: /films365\.org/i,
            headers: {
                Referer: 'https://www.films365.org/',
                Origin: 'https://www.films365.org',
            },
        }],
    },

];

export const HEALTH_PROBE_ID = '155';
export const SOURCE_MAP = Object.fromEntries(SOURCES.map(s => [s.key, s]));
export default SOURCES;