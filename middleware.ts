import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ja'];
const DEFAULT_LOCALE = 'en';

const detectLocale = (req: NextRequest): string => {
  const acceptLang = req.headers.get('accept-language');
  if (!acceptLang) return DEFAULT_LOCALE;

  return acceptLang
    .split(',')
    .map(part => part.trim().split(';')[0].split('-')[0])
    .find(lang => SUPPORTED_LOCALES.includes(lang)) || DEFAULT_LOCALE;
};

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/ja') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
};
