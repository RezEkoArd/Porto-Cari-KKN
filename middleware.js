import { NextRequest,NextResponse } from "next/server"


export const config = {
  matcher: '/dashboard/:path*',
}

export default function middleware(req, res) {
  if(req.nextUrl.pathname.startsWith('/auth/login')){
    
    if(req.cookies.get('token') !== undefined){
        return NextResponse.redirect(new URL('/dashboard',req.url))
    }
  }

  if(req.nextUrl.pathname.startsWith('/dashboard')){
    if(req.cookies.get('token') === undefined){
        return NextResponse.redirect(new URL('/auth/login',req.url))
    }
  }


}
