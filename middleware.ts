import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

function detectLocale(req: NextRequest): string | null {
    // 禁用基于浏览器语言的自动重定向
    return null;
}

export default function middleware(req: NextRequest) {
    const localeFromBrowser = detectLocale(req);
    const effectiveLocale = 'en'; // 强制使用'en'作为默认locale

    //console.log('Effective Locale:', effectiveLocale); // 调试信息

    // 如果是根路径，则重定向到/zh
    if (req.nextUrl.pathname === '/') {
        const url = req.nextUrl.clone();
        url.pathname = '/zh';
        return NextResponse.redirect(url);
    }

    const handleRequest = createMiddleware({
        locales: ['en', 'zh'],
        defaultLocale: effectiveLocale,
    });

    return handleRequest(req);
}

export const config = {
    matcher: ['/', '/(zh|en)/:path*']
};