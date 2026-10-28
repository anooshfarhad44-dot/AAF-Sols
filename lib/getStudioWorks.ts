import fs from 'fs';
import path from 'path';

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  folderName: string;
  fileName: string;
  pdfUrl: string;
  description: string;
  badgeClass: string;
  accentColor: string;
  dimensions?: string;
}

export interface CategoryTab {
  id: string;
  label: string;
  count: number;
}

// Category configuration mapping folder names to display names and styles
const categoryConfig: Record<string, { id: string; label: string; badgeClass: string; accentColor: string; defaultDesc: string }> = {
  BussinesCard: {
    id: "business-cards",
    label: "Business Cards",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "blue",
    defaultDesc: "Corporate & luxury business card vector layout with CMYK print calibration and precision bleeds."
  },
  BookCovers: {
    id: "book-covers",
    label: "Book & Magazine Covers",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    accentColor: "amber",
    defaultDesc: "Full publication jacket with spine measurements, barcode integration, and artistic typography."
  },
  Menus: {
    id: "menus",
    label: "Restaurant Menus",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentColor: "emerald",
    defaultDesc: "Dining and restaurant menu design with organized course sections and appetizing presentation."
  },
  Posters: {
    id: "posters",
    label: "Event Posters",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    accentColor: "purple",
    defaultDesc: "High-impact promotional and event celebration poster layout with rich vector hierarchy."
  },
  Certificates: {
    id: "certificates",
    label: "Certificates",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    accentColor: "rose",
    defaultDesc: "Formal recognition and achievement award document with guilloche security framing."
  }
};

/**
 * Format raw filename into a clean, human-readable title
 * Example: "08_Business_Card_1.pdf" -> "Business Card 1"
 * Example: "ABC_Modern_Card_1_Aurora_Tech.pdf" -> "ABC Modern Card 1 Aurora Tech"
 */
function formatTitle(fileName: string): string {
  const withoutExt = fileName.replace(/\.pdf$/i, '');
  // Remove numeric prefixes like "01_", "08_", "10_"
  const cleanPrefix = withoutExt.replace(/^\d+[_-\s]+/, '');
  // Replace underscores and dashes with spaces
  const withSpaces = cleanPrefix.replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
  return withSpaces;
}

/**
 * Scan public/Web Site Data dynamically and return all PDF works
 */
export function getStudioWorks(): { works: WorkItem[]; tabs: CategoryTab[] } {
  const baseDir = path.join(process.cwd(), 'public', 'Web Site Data');

  if (!fs.existsSync(baseDir)) {
    return { works: [], tabs: [{ id: 'all', label: 'All Projects', count: 0 }] };
  }

  const works: WorkItem[] = [];
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const folderName = entry.name;
    const folderPath = path.join(baseDir, folderName);
    const files = fs.readdirSync(folderPath);

    const config = categoryConfig[folderName] || {
      id: folderName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      label: folderName.replace(/([A-Z])/g, ' $1').trim(),
      badgeClass: "bg-stone-50 text-stone-700 border-stone-200",
      accentColor: "stone",
      defaultDesc: `Professional ${folderName} graphic design and print deliverable.`
    };

    for (const file of files) {
      if (!file.toLowerCase().endsWith('.pdf')) continue;

      const title = formatTitle(file);
      const pdfUrl = `/Web Site Data/${encodeURIComponent(folderName)}/${encodeURIComponent(file)}`;

      works.push({
        id: `${config.id}-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`,
        title: title,
        category: config.id,
        categoryLabel: config.label,
        folderName: folderName,
        fileName: file,
        pdfUrl: pdfUrl,
        description: config.defaultDesc,
        badgeClass: config.badgeClass,
        accentColor: config.accentColor,
        dimensions: folderName === 'BussinesCard' ? '3.5" × 2.0"' : undefined
      });
    }
  }

  // Sort works so newest or alphabetically ordered
  works.sort((a, b) => a.title.localeCompare(b.title));

  // Build dynamic category tabs
  const categoryCounts: Record<string, { label: string; count: number }> = {};
  for (const item of works) {
    if (!categoryCounts[item.category]) {
      categoryCounts[item.category] = { label: item.categoryLabel, count: 0 };
    }
    categoryCounts[item.category].count += 1;
  }

  const tabs: CategoryTab[] = [
    { id: 'all', label: 'All Projects', count: works.length },
    ...Object.entries(categoryCounts).map(([catId, data]) => ({
      id: catId,
      label: data.label,
      count: data.count
    }))
  ];

  return { works, tabs };
}
