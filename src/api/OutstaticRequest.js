import { getDocumentBySlug, getDocuments } from 'outstatic/server';

export function getPostList(locale) {
  return getDocuments(`${locale}-posts`, ['title', 'slug']);
}

export function getPostBySlug(locale, slug) {
  return getDocumentBySlug(`${locale}-posts`, slug, ['title', 'content']);
}
