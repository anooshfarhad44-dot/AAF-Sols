import fs from 'fs';
import path from 'path';

export interface FancyBoxItem {
  id: string;
  title: string;
  type: 'image' | 'pdf';
  fileUrl: string;
  fileName: string;
  category: string;
  categoryLabel: string;
  dimensions?: string;
  material?: string;
  finish?: string;
  description: string;
  badgeClass: string;
  accentColor: string;
  isRealFile?: boolean;
}

export interface BoxCategoryTab {
  id: string;
  label: string;
  count: number;
}

function formatBoxTitle(fileName: string): string {
  const withoutExt = fileName.replace(/\.(pdf|jpg|jpeg|png|webp)$/i, '');
  const cleanPrefix = withoutExt.replace(/^\d+[_-\s]+/, '');
  return cleanPrefix.replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function detectCategory(fileName: string): { id: string; label: string; badge: string; color: string; material: string; finish: string; dim: string } {
  const lower = fileName.toLowerCase();
  
  if (lower.includes('perfume') || lower.includes('cosmetic') || lower.includes('serum')) {
    return {
      id: 'perfume',
      label: 'Perfume & Cosmetics',
      badge: 'bg-violet-50 text-violet-700 border-violet-200',
      color: 'violet',
      material: '1200 GSM Kappa Board + Velvet Foam Tray',
      finish: 'Spot UV + Soft-Touch Matte Lamination',
      dim: '4.5" × 4.5" × 6.0"',
    };
  }
  if (lower.includes('sweet') || lower.includes('mithai') || lower.includes('food') || lower.includes('chocolate')) {
    return {
      id: 'sweets',
      label: 'Sweets & Food Gift Boxes',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      color: 'amber',
      material: 'Food-Grade Artboard + Kappa Base',
      finish: 'Gold Hot Foil Stamping + Gloss Aqueous Coating',
      dim: '9.0" × 6.5" × 2.5"',
    };
  }
  if (lower.includes('apparel') || lower.includes('shirt') || lower.includes('garment') || lower.includes('clothing')) {
    return {
      id: 'apparel',
      label: 'Apparel & Garment Boxes',
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      color: 'blue',
      material: '1400 GSM Rigid Board + Textured Linen Paper',
      finish: 'Embossed Logo + Satin Ribbon Pull',
      dim: '14.0" × 10.0" × 3.0"',
    };
  }
  if (lower.includes('foil') || lower.includes('gold') || lower.includes('luxury') || lower.includes('gift')) {
    return {
      id: 'gold-foil',
      label: 'Gold Foil & Luxury Gift Boxes',
      badge: 'bg-yellow-50 text-amber-800 border-amber-300',
      color: 'amber',
      material: '1500 GSM Heavy Kappa + Gold Mirrored Card',
      finish: 'Deep Gold Hot Foil Stamping + Soft-Touch Matte',
      dim: '8.5" × 6.0" × 2.5"',
    };
  }
  if (lower.includes('die') || lower.includes('cut') || lower.includes('carton')) {
    return {
      id: 'die-cut',
      label: 'Custom Die-Cut Packaging',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      color: 'emerald',
      material: '350 GSM Bleached Kraft / Art Card',
      finish: 'Precision Die-Cut + Creasing + Matte Finish',
      dim: 'Custom Client Specs',
    };
  }

  return {
    id: 'rigid',
    label: 'Rigid Luxury Boxes',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    color: 'orange',
    material: '1200 GSM Industrial Kappa Board',
    finish: 'Matte Lamination + Magnetic Lid Closure',
    dim: '8.0" × 8.0" × 3.0"',
  };
}

export function getFancyBoxes(): { items: FancyBoxItem[]; tabs: BoxCategoryTab[] } {
  const baseDir = path.join(process.cwd(), 'public', 'Web Site Data', 'FancyBoxes');
  const items: FancyBoxItem[] = [];

  // Curated showcase items as base examples so the screen looks luxurious even before extra files are uploaded
  const sampleItems: FancyBoxItem[] = [
    {
      id: 'sample-black-gold-rigid',
      title: 'AA Luxury Black & Gold Foil Magnetic Rigid Box',
      type: 'image',
      fileUrl: '/studio-packaging-branding.jpg',
      fileName: 'studio-packaging-branding.jpg',
      category: 'gold-foil',
      categoryLabel: 'Gold Foil & Luxury Gift Boxes',
      dimensions: '8.5" × 6.0" × 2.5"',
      material: '1500 GSM Industrial Kappa Board + Black Velvet Tray',
      finish: 'Precision Deep Gold Hot Foil Stamping + Soft-Touch Matte',
      description: 'Handcrafted luxury magnetic closure gift box with bespoke metallic gold foil crest stamping and precision-cut foam interior.',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
      accentColor: 'amber',
      isRealFile: false,
    },
    {
      id: 'sample-perfume-rigid',
      title: 'Velvet Soft-Touch Luxury Perfume Presentation Box',
      type: 'image',
      fileUrl: '/studio-packaging-branding.jpg',
      fileName: 'perfume-packaging-box.jpg',
      category: 'perfume',
      categoryLabel: 'Perfume & Cosmetics',
      dimensions: '4.5" × 4.5" × 6.0"',
      material: '1200 GSM Rigid Kappa Board + Custom Bottle Cushion',
      finish: 'Spot UV Varnish + Soft-Touch Matte Black Paper',
      description: 'Two-piece rigid box with shoulder neck divider, custom die-cut bottle cradle, and raised spot gloss graphics.',
      badgeClass: 'bg-violet-50 text-violet-700 border-violet-200',
      accentColor: 'violet',
      isRealFile: false,
    },
    {
      id: 'sample-mithai-sweet-box',
      title: 'Royal Mughal Festive Sweet & Mithai Gift Box',
      type: 'image',
      fileUrl: '/studio-packaging-branding.jpg',
      fileName: 'royal-mithai-box.jpg',
      category: 'sweets',
      categoryLabel: 'Sweets & Food Gift Boxes',
      dimensions: '10.0" × 7.0" × 2.5"',
      material: 'Food-Grade Board + Kappa Reinforcement',
      finish: 'Copper Gold Foil + Traditional Jali Die-Cut Sleeve',
      description: 'Ornate traditional celebration packaging with gold foiling, partitioned sweet compartments, and food-safe barrier lining.',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
      accentColor: 'amber',
      isRealFile: false,
    },
    {
      id: 'sample-apparel-drawer-box',
      title: 'Slide-Out Drawer Apparel & Luxury Silk Packaging',
      type: 'image',
      fileUrl: '/studio-packaging-branding.jpg',
      fileName: 'apparel-drawer-box.jpg',
      category: 'apparel',
      categoryLabel: 'Apparel & Garment Boxes',
      dimensions: '14.0" × 10.0" × 3.0"',
      material: '1400 GSM Rigid Board with Textured Grey Linen Wrap',
      finish: 'Debossed Monogram + Grosgrain Ribbon Puller',
      description: 'Sliding matchbox-style luxury drawer with reinforced borders, textured exterior paper, and custom pull ribbon.',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      accentColor: 'blue',
      isRealFile: false,
    },
  ];

  // Scan the real folder
  if (fs.existsSync(baseDir)) {
    const files = fs.readdirSync(baseDir);

    for (const file of files) {
      const lower = file.toLowerCase();
      const isPdf = lower.endsWith('.pdf');
      const isImg = lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');

      if (!isPdf && !isImg) continue;

      const catInfo = detectCategory(file);
      const title = formatBoxTitle(file);
      const fileUrl = `/Web Site Data/FancyBoxes/${encodeURIComponent(file)}`;

      items.push({
        id: `box-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`,
        title: title,
        type: isPdf ? 'pdf' : 'image',
        fileUrl: fileUrl,
        fileName: file,
        category: catInfo.id,
        categoryLabel: catInfo.label,
        dimensions: catInfo.dim,
        material: catInfo.material,
        finish: catInfo.finish,
        description: `Authentic AA Graphic Studio production deliverable. Custom manufactured fancy box with ${catInfo.finish} on ${catInfo.material}.`,
        badgeClass: catInfo.badge,
        accentColor: catInfo.color,
        isRealFile: true,
      });
    }
  }

  // Combine real scanned files with sample showcases (if real files don't already have them)
  const combined = [...items, ...sampleItems];

  // Build dynamic category tabs
  const categoryCounts: Record<string, { label: string; count: number }> = {};
  for (const item of combined) {
    if (!categoryCounts[item.category]) {
      categoryCounts[item.category] = { label: item.categoryLabel, count: 0 };
    }
    categoryCounts[item.category].count += 1;
  }

  const tabs: BoxCategoryTab[] = [
    { id: 'all', label: 'All Fancy Boxes', count: combined.length },
    ...Object.entries(categoryCounts).map(([catId, data]) => ({
      id: catId,
      label: data.label,
      count: data.count,
    })),
  ];

  return { items: combined, tabs };
}

