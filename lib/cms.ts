/**
 * Typed fetch client for the CMS API running at CMS_API_URL (default: http://localhost:4000).
 * All server-side fetches use ISR revalidation (60 s by default).
 * Client-side fetches use NEXT_PUBLIC_CMS_API_URL.
 */

const BASE =
  (typeof window === 'undefined'
    ? process.env.CMS_API_URL
    : process.env.NEXT_PUBLIC_CMS_API_URL) ?? 'http://localhost:4000';

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface CmsBlock {
  id: string;
  type: string;
  data: Record<string, unknown>;
}

export interface CmsPage {
  slug: string;
  title: string;
  updatedAt: string;
  blocks: CmsBlock[];
}

export interface CmsPageMeta {
  slug: string;
  title: string;
  updatedAt: string;
}

export interface GlobalNav {
  logo: { darkSrc: string; lightSrc: string; alt: string; href: string };
  cta: { label: string; href: string };
  primaryNav: Array<{
    label: string;
    href?: string;
    children?: Array<{ label: string; href: string; description?: string }>;
  }>;
}

export interface GlobalFooter {
  tagline: string;
  newsletter: { eyebrow: string; placeholder: string; buttonLabel: string };
  columns: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  social: { linkedin?: string; x?: string; github?: string; youtube?: string };
  legal: { copyright: string; links: Array<{ label: string; href: string }> };
}

export interface GlobalSeo {
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  twitterHandle: string;
  ogImage: string;
}

export interface GlobalConfig {
  nav: GlobalNav;
  footer: GlobalFooter;
  seo: GlobalSeo;
}

// ─── Public endpoints ─────────────────────────────────────────────────────────

export async function getPage(
  slug: string,
  revalidate = 60,
): Promise<CmsPage | null> {
  try {
    const res = await fetch(`${BASE}/api/pages/${slug}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json() as Promise<CmsPage>;
  } catch {
    return null;
  }
}

export async function getGlobalConfig(
  revalidate = 60,
): Promise<GlobalConfig | null> {
  try {
    const res = await fetch(`${BASE}/api/global`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json() as Promise<GlobalConfig>;
  } catch {
    return null;
  }
}

// ─── Admin endpoints (require Bearer JWT) ────────────────────────────────────

export async function adminListPages(token: string): Promise<CmsPageMeta[]> {
  const res = await fetch(`${BASE}/api/admin/pages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`CMS error ${res.status}`);
  return res.json();
}

export async function adminGetPage(token: string, slug: string): Promise<CmsPage> {
  const res = await fetch(`${BASE}/api/admin/pages/${slug}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`CMS error ${res.status}`);
  return res.json();
}

export async function adminSavePage(
  token: string,
  slug: string,
  blocks: CmsBlock[],
  title?: string,
): Promise<void> {
  const res = await fetch(`${BASE}/api/admin/pages/${slug}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocks, title }),
  });
  if (!res.ok) throw new Error(`CMS error ${res.status}`);
}

export async function adminSaveGlobal(
  token: string,
  config: GlobalConfig,
): Promise<void> {
  const res = await fetch(`${BASE}/api/admin/global`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(config),
  });
  if (!res.ok) throw new Error(`CMS error ${res.status}`);
}
