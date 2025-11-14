// Auto-load all content modules in this directory
// Each module must export a default object with shape: { card, caseStudies }

const modules = import.meta.glob('./*.js', { eager: true, import: 'default' });

const allEntries = Object.values(modules).filter(Boolean);

// Build cards array with stable ids based on ordering
export const cardsPorfolio = allEntries
  .map((entry, index) => ({
    // prefer explicit id from file, otherwise fallback to order
    id: entry.card?.id ?? index + 1,
    ...entry.card,
  }))
  // keep only entries that actually have minimal required fields
  .filter((c) => c && c.slug && c.title);

export function getCardBySlug(slug) {
  return cardsPorfolio.find((c) => c.slug === slug) || null;
}

export function getCaseStudyBySlug(slug) {
  const entry = allEntries.find((e) => e?.card?.slug === slug);
  return entry?.caseStudies || null;
}

export default cardsPorfolio;


