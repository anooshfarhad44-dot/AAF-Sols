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
 */
function formatTitle(fileName: string): string {
  const withoutExt = fileName.replace(/\.pdf$/i, '');
  // Remove numeric prefixes like "01_", "08_", "10_"
  const cleanPrefix = withoutExt.replace(/^\d+[_-\s]+/, '');
  // Replace underscores with spaces
  let formatted = cleanPrefix.replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Clean up parenthesis formatting if any (e.g. "4 Pages" or "One Page")
  formatted = formatted
    .replace(/\bOne Page Landscape\b/i, 'One-Page Landscape')
    .replace(/\bOne Page\b/i, 'Single Page')
    .replace(/\b(\d+)\s+Pages\b/i, '($1 Pages)');
    
  return formatted;
}

/**
 * Automatically determine item dimensions or format based on folder and filename
 */
function getDimensions(folderName: string, fileName: string): string | undefined {
  if (folderName === 'BussinesCard') return '3.5" × 2.0" (Card)';
  if (folderName === 'Menus') {
    if (fileName.includes('4_Pages')) return '4-Page Menu Booklet';
    if (fileName.includes('3_Pages')) return '3-Page Menu Spread';
    if (fileName.includes('Landscape')) return 'Single Page (Landscape)';
    if (fileName.includes('One_Page')) return 'Single Page Dine-In';
    return 'Dine-In Menu';
  }
  if (folderName === 'Posters') return 'A3 / Large Poster';
  if (folderName === 'Certificates') return 'A4 / 300 DPI';
  if (folderName === 'BookCovers') return 'Full Wrap & Spine';
  return undefined;
}

/**
 * Automatically generate tailored description for specific files
 */
function getDescription(folderName: string, fileName: string, defaultDesc: string): string {
  if (fileName.includes('Desi_Restaurant')) return 'Authentic traditional & desi cuisine menu featuring curries, tandoor specials, and beverage combos.';
  if (fileName.includes('Fast_Food')) return 'High-energy fast food landscape spread with burgers, loaded fries, meal deals, and pricing badges.';
  if (fileName.includes('Luxury_Restaurant')) return 'Comprehensive 4-page fine dining booklet layout with appetizers, steaks, signature desserts, and beverage pairings.';
  if (fileName.includes('Modern_Cafe')) return 'Specialty coffee, bakery, breakfast, and artisan cafe 3-page menu with modern minimalist spacing.';
  if (fileName.includes('Charcoal_BBQ')) return 'Family platters, charcoal grilled specialties, karahi, and BBQ feast 4-page menu layout.';
  if (fileName.includes('Hotel_Menu')) return 'Sophisticated multi-course dining menu designed with elegant serif typography and decorative border dividers.';
  if (fileName.includes('Burger_Hub')) return 'Vibrant fast-casual menu layout featuring item categories, promotional deal combos, and bold price callouts.';
  if (fileName.includes('Aurora_Tech')) return 'Futuristic gradient tech identity card with sleek typography and QR profile integration.';
  if (fileName.includes('Black_Gold_Foil')) return 'Premium black matte finish with gold foil stamped accents and executive typography.';
  if (fileName.includes('Vibrant_Gradient')) return 'Eye-catching colorful gradient theme tailored for design and digital creative studios.';
  if (fileName.includes('Wave_Blue')) return 'Fluid corporate wave motif with high-contrast information hierarchy.';
  return defaultDesc;
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
      const dimensions = getDimensions(folderName, file);
      const description = getDescription(folderName, file, config.defaultDesc);

      works.push({
        id: `${config.id}-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`,
        title: title,
        category: config.id,
        categoryLabel: config.label,
        folderName: folderName,
        fileName: file,
        pdfUrl: pdfUrl,
        description: description,
        badgeClass: config.badgeClass,
        accentColor: config.accentColor,
        dimensions: dimensions
      });
    }
  }

  // Sort works alphabetically by title
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
