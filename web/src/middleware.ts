import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "arbeitssicherheit.nrw";
const CANONICAL_HOST = "www.arbeitssicherheit.nrw";

/**
 * Leitet Anfragen ohne „www.“ dauerhaft auf die kanonische Domain (SITE.url).
 * Behebt SEO-Hinweise, wenn geprüft wird https://arbeitssicherheit.nrw/ aber canonical www ist.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  if (host !== APEX_HOST) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
