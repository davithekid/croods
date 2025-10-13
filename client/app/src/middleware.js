import { NextResponse } from "next/server";

const publicRoutes = [
  { path: '/login', whenAuthentication: 'redirect' },
  { path: '/register', whenAuthentication: 'redirect' },
  { path: '/', whenAuthentication: 'next' },
  { path: '/servicos', whenAuthentication: 'next' },
  { path: '/planos', whenAuthentication: 'next' },
  { path: '/sobre', whenAuthentication: 'next' },
];

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.path === path);
  const authToken = request.cookies.get('Token');

  // Usuário não autenticado tentando acessar rota protegida
  if (!authToken) {
    if (publicRoute) {
      return NextResponse.next();
    } else {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
      redirectUrl.searchParams.set('authError', 'login-required');
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Usuário autenticado acessando rota pública com redirect
  if (authToken && publicRoute && publicRoute.whenAuthentication === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images).*)',
  ],
};

