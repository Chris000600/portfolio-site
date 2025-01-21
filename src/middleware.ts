import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET // Use your NextAuth secret
  });

  const url = new URL(req.url);

  // Check if the request is for an admin page
  if (url.pathname.startsWith('/admin')) {
    // Redirect to the login page if no token is found
    if (!token) {
      url.pathname = '/api/auth/signin';
      return NextResponse.redirect(url);
    }
  }

  // Allow the request to continue if authenticated
  return NextResponse.next();
}

// Apply middleware only to routes under `/admin`
export const config = {
  matcher: '/admin/:path*'
};
