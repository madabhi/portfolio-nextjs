import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  if (path === "/mainhuadmin") {
    const token = request.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.redirect(new URL("/admin", request.nextUrl));
    } else {
      // return NextResponse.redirect(new URL("/login", request.nextUrl));
      return NextResponse.next();
    }
  } else if (path === "/admin") {
    const token = request.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else if (path === "/admin/blogs/writeblog") {
    const token = request.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else if (path === "/admin/editblog") {
    const token = request.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else {
    const token = request.cookies.get("token")?.value || "";
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/mainhuadmin", "/admin/:path*", "/admin"],
};
