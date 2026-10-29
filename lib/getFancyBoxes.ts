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

const BOX_DETAILS_MAP: Record<string, {
  title: string;
  category: string;
  categoryLabel: string;
  dimensions: string;
  material: string;
  finish: string;
  description: string;
  badgeClass: string;
  accentColor: string;
}> = {
  '01_mixed_mithai_sweets_red_box': {
    title: 'Royal Mixed Mithai & Sweets Rigid Gift Box',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '14.0" × 7.5" × 2.5"',
    material: 'Food-Grade Certified Artboard + 1400 GSM Kappa Base',
    finish: 'Red Foil Crest Stamping + Compartmentalized Sweets Tray',
    description: 'Traditional luxury celebration packaging with gold-lined sweet partitions, moisture barrier food lining, and royal crimson exterior.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '02_rapidsilicon_corporate_gift_box_dry_fruits': {
    title: 'RapidSilicon Executive Dry Fruits Corporate Gift Box',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '12.0" × 9.0" × 3.0"',
    material: '1500 GSM Industrial Rigid Kappa Board + Custom Cavities',
    finish: 'Matte Soft-Touch Black Lamination + Spot UV Brand Logo',
    description: 'Corporate client appreciation box designed for RapidSilicon, complete with dedicated custom compartments for gourmet dry fruits and nuts.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '03_black_empty_compartment_gift_box': {
    title: 'Premium Multi-Compartment Black Luxury Box',
    category: 'rigid-luxury',
    categoryLabel: 'Magnetic & Luxury Rigid',
    dimensions: '9.0" × 9.0" × 2.5"',
    material: '1400 GSM Rigid Board with Textured Jet-Black Wrapping',
    finish: 'Magnetic Flap Closure + Precision Die-Cut Dividers',
    description: 'Minimalist high-end black presentation box featuring customizable modular partitions suitable for jewelry, accessories, or corporate gifts.',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    accentColor: 'sky',
  },
  '04_navy_blue_ribbon_gift_box': {
    title: 'Navy Blue Satin Ribbon Magnetic Gift Box',
    category: 'rigid-luxury',
    categoryLabel: 'Magnetic & Luxury Rigid',
    dimensions: '10.0" × 8.0" × 3.5"',
    material: '1400 GSM Rigid Kappa Board + Navy Blue Linen Texture',
    finish: 'Embossed Monogram + Premium Satin Ribbon Pull Closure',
    description: 'Timeless luxury royal navy blue rigid gift box with hand-tied satin ribbon closure and concealed magnetic front lock.',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    accentColor: 'sky',
  },
  '05_ecodiva_black_luxury_box_blue_interior': {
    title: 'Ecodiva Luxury Box with Royal Blue Interior',
    category: 'perfume',
    categoryLabel: 'Perfumes & Cosmetics',
    dimensions: '8.0" × 6.0" × 2.8"',
    material: '1500 GSM High-Density Kappa + Velvet Fabric Liner',
    finish: 'Deep Gold Foil Stamping + Contrast Cobalt Blue Inner Cavity',
    description: 'Bespoke cosmetics packaging for Ecodiva featuring a dramatic two-tone palette, rich velvet-lined product cradle, and gold stamped lid.',
    badgeClass: 'bg-violet-50 text-violet-800 border-violet-200',
    accentColor: 'violet',
  },
  '06_white_ramadan_gift_box_gold_calligraphy': {
    title: 'White Ramadan Kareem Gift Box with Gold Calligraphy',
    category: 'festive-islamic',
    categoryLabel: 'Ramadan & Islamic Luxury',
    dimensions: '9.5" × 9.5" × 4.0"',
    material: '1600 GSM Heavy Kappa Board + Textured Pearl White Paper',
    finish: '3D Gold Metallic Arabic Calligraphy Plaque + Navy Satin Bow',
    description: 'Exclusive Ramadan collection rigid box adorned with raised 3D gold mirror calligraphy emblem, silk floral topper, and magnetic lid.',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentColor: 'emerald',
  },
  '07_las_vegas_city_navy_blue_gift_box': {
    title: 'Las Vegas City Skyline Navy Blue Corporate Box',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '11.0" × 8.5" × 3.0"',
    material: '1400 GSM Rigid Kappa Board with Soft-Touch Wrap',
    finish: 'Metallic Foil Skyline Graphic + Custom Foam Bottle Cushion',
    description: 'Souvenir and corporate event luxury box featuring high-definition foil-embossed city graphics and bespoke product inlay.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '08_al_madina_black_gold_islamic_gift_box': {
    title: 'Al Madina Black & Gold Foil Islamic Gift Box',
    category: 'festive-islamic',
    categoryLabel: 'Ramadan & Islamic Luxury',
    dimensions: '8.5" × 8.5" × 3.0"',
    material: '1500 GSM Industrial Kappa + Black Velvet Tray',
    finish: 'Deep Hot Foil Stamping + Intricate Islamic Geometric Border',
    description: 'Sacred occasion presentation packaging featuring ornate Islamic lattice motifs and shimmering metallic gold hot stamping on matte black.',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentColor: 'emerald',
  },
  '09_gold_eid_mubarak_stuffed_dates_box': {
    title: 'Gold Foil Eid Mubarak Stuffed Dates Box',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '12.0" × 8.0" × 2.2"',
    material: 'Food-Safe Golden Mirrored Board + Kappa Base',
    finish: 'Gold Leaf Foil Calligraphy + 24-Piece Date Compartments',
    description: 'Festive Eid collection box with individually partitioned compartments for almond and pecan stuffed Arabian dates.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '10_premium_stuffed_dates_tray_cashew_almond': {
    title: 'Luxury Stuffed Dates & Dry Fruit Gift Tray',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '13.5" × 9.0" × 2.0"',
    material: 'Heavy Rigid Kappa Tray with Food-Grade Clear Lid Cover',
    finish: 'Gold Foil Perimeter Border + Molded Protective Food Cavities',
    description: 'Artisan gourmet confection packaging engineered for luxury stuffed dates, roasted cashews, and California almonds.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '11_fresh_premium_dates_tray': {
    title: 'Fresh Premium Dates Wooden-Texture Gift Tray',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '14.0" × 10.0" × 2.2"',
    material: '1600 GSM Kappa with Textured Woodgrain Surface Wrap',
    finish: 'Debossed Branding + High-Clarity Acrylic Window Lid',
    description: 'Organic and traditional dates display tray with durable rigid construction and crystal-clear presentation window.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '12_burnt_caramel_hazelnuts_luxury_chocolate_boxes': {
    title: 'Burnt Caramel & Hazelnut Artisan Chocolate Box',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '7.5" × 7.5" × 1.8"',
    material: 'Food-Grade Black Artboard + Gold Cavity Insert',
    finish: 'Raised Spot UV + Micro-Embossed Chocolate Seal',
    description: 'Artisan chocolatier 16-cavity presentation box designed for temperature-sensitive hand-crafted pralines and truffles.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '13_thierry_atlan_luxury_chocolate_box': {
    title: 'Thierry Atlan Gourmet Chocolate Presentation Box',
    category: 'sweets-food',
    categoryLabel: 'Mithai, Dates & Chocolates',
    dimensions: '8.0" × 6.5" × 2.0"',
    material: '1200 GSM Kappa Board + Gold Mirrored Inner Frame',
    finish: 'Matte Touch Film + Gold Foil Typography Stamping',
    description: 'Haute confectionery rigid gift pack with slide-out tray and gold foil branding for high-end chocolate boutiques.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: 'rose',
  },
  '14_explore_challenge_2020_champion_box_side': {
    title: 'Explore Challenge Champion Award Box (Side Angle)',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '10.5" × 10.5" × 4.0"',
    material: '1600 GSM Extra-Heavy Kappa Board',
    finish: 'Cyberpunk Holographic Foil + Soft Matte Protective Coat',
    description: 'High-impact commemorative championship gift box created for corporate hackathons and technology award ceremonies.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '15_explore_challenge_2020_champion_box_top': {
    title: 'Explore Challenge Champion Award Box (Top View)',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '10.5" × 10.5" × 4.0"',
    material: '1600 GSM Extra-Heavy Kappa Board',
    finish: 'Precision Laser Foil Stamping + Velvet Interior Cushion',
    description: 'Top overview displaying the custom laser die-cut lid with metallic geometric foiling and high-contrast award graphics.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '16_himalayan_pink_salt_corporate_gift_box': {
    title: 'Himalayan Pink Salt Executive Corporate Gift Box',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '11.0" × 7.5" × 3.5"',
    material: '1500 GSM Industrial Rigid Board + Die-Cut Jar Cushions',
    finish: 'Textured Kraft Paper + Copper Bronze Foil Seal',
    description: 'Organic gourmet export corporate packaging featuring reinforced bottle cavities tailored for organic pink salt grinders.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '17_ici_pakistan_75_years_celebration_box': {
    title: 'ICI Pakistan 75th Jubilee Celebration Box',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '12.5" × 9.5" × 3.5"',
    material: '1800 GSM Heavyweight Kappa Board + Satin Fabric Bed',
    finish: 'Embossed Corporate Crest + Silver/Gold Dual Foil Stamping',
    description: 'Historical milestone corporate gift set manufactured for ICI Pakistan 75-year commemorative nationwide executive distribution.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
  '18_retail_box_magnetic_closure_grey_orange': {
    title: 'Two-Tone Magnetic Closure Rigid Box (Grey & Orange)',
    category: 'rigid-luxury',
    categoryLabel: 'Magnetic & Luxury Rigid',
    dimensions: '9.0" × 6.5" × 2.8"',
    material: '1300 GSM Kappa Board + Contrast Color Liners',
    finish: 'Hidden Neodymium Magnetic Flap + Matte Velvet Lamination',
    description: 'Contemporary retail and electronics rigid packaging with dual-accent orange interior and sleek charcoal grey shell.',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    accentColor: 'sky',
  },
  '19_black_perfume_bottle_gift_box': {
    title: 'Matte Black Luxury Perfume Bottle Packaging Box',
    category: 'perfume',
    categoryLabel: 'Perfumes & Cosmetics',
    dimensions: '5.0" × 5.0" × 7.0"',
    material: '1400 GSM Rigid Kappa Board + High-Density EVA Foam',
    finish: 'Spot Gloss UV Over Matte Black + Raised Gold Foil Crest',
    description: 'Luxury fragrance presentation pack featuring shock-absorbent custom die-cut bottle cradle and seamless shoulder-neck closure.',
    badgeClass: 'bg-violet-50 text-violet-800 border-violet-200',
    accentColor: 'violet',
  },
  '20_black_perfume_dropper_bottle_box': {
    title: 'Black Dropper Bottle Serum & Perfume Rigid Box',
    category: 'perfume',
    categoryLabel: 'Perfumes & Cosmetics',
    dimensions: '4.5" × 4.5" × 6.5"',
    material: '1200 GSM Kappa Board + Velvet-Topped Foam Cavity',
    finish: 'Soft-Touch Matte Finish + Precision Anti-Rattle Snug Fit',
    description: 'Cosmetic serum and artisanal perfume dropper packaging offering maximum protection and ultra-premium unboxing appeal.',
    badgeClass: 'bg-violet-50 text-violet-800 border-violet-200',
    accentColor: 'violet',
  },
  '21_purple_print_house_magnetic_box_gold_interior': {
    title: 'Purple Magnetic Box with Shimmering Gold Interior',
    category: 'rigid-luxury',
    categoryLabel: 'Magnetic & Luxury Rigid',
    dimensions: '8.5" × 7.0" × 3.0"',
    material: '1500 GSM Industrial Rigid Board + Mirrored Gold Lining',
    finish: 'Velvet Soft-Touch Deep Purple + High-Gloss Gold Foil Flap',
    description: 'Signature AA Graphic Studio showpiece box demonstrating high-precision wrapped edges, mirrored gold foil interior, and snap magnets.',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
    accentColor: 'sky',
  },
  '22_personalized_corporate_gift_set_mohammad_taha': {
    title: 'Personalized VIP Executive Gift Set Box',
    category: 'corporate',
    categoryLabel: 'Corporate & VIP Gifts',
    dimensions: '13.0" × 10.0" × 3.2"',
    material: '1600 GSM Extra-Heavy Kappa + Laser-Cut Velvet Foam Bed',
    finish: 'Custom Monogram Foil Printing + Multi-Item Cavities',
    description: 'Bespoke corporate gift box personalized with recipient naming, engineered to secure customized diary, pen, power bank, and keychain.',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'amber',
  },
};

function formatBoxTitle(fileName: string): string {
  const withoutExt = fileName.replace(/\.(pdf|jpg|jpeg|png|webp)$/i, '');
  const cleanPrefix = withoutExt.replace(/^\d+[_-\s]+/, '');
  return cleanPrefix.replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function detectCategoryFallback(fileName: string) {
  const lower = fileName.toLowerCase();
  
  if (lower.includes('perfume') || lower.includes('cosmetic') || lower.includes('serum') || lower.includes('dropper')) {
    return {
      id: 'perfume',
      label: 'Perfumes & Cosmetics',
      badge: 'bg-violet-50 text-violet-800 border-violet-200',
      color: 'violet',
      material: '1200 GSM Kappa Board + Velvet Foam Tray',
      finish: 'Spot UV + Soft-Touch Matte Lamination',
      dim: '4.5" × 4.5" × 6.0"',
    };
  }
  if (lower.includes('sweet') || lower.includes('mithai') || lower.includes('food') || lower.includes('chocolate') || lower.includes('date') || lower.includes('fruit')) {
    return {
      id: 'sweets-food',
      label: 'Mithai, Dates & Chocolates',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      color: 'rose',
      material: 'Food-Grade Artboard + Kappa Base',
      finish: 'Gold Hot Foil Stamping + Gloss Aqueous Coating',
      dim: '12.0" × 8.0" × 2.5"',
    };
  }
  if (lower.includes('ramadan') || lower.includes('islamic') || lower.includes('eid') || lower.includes('madina')) {
    return {
      id: 'festive-islamic',
      label: 'Ramadan & Islamic Luxury',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      color: 'emerald',
      material: '1600 GSM Kappa Board + Pearlized Paper',
      finish: '3D Gold Metallic Foil Calligraphy + Satin Ribbon',
      dim: '9.5" × 9.5" × 4.0"',
    };
  }
  if (lower.includes('corporate') || lower.includes('celebration') || lower.includes('champion') || lower.includes('salt') || lower.includes('personalized')) {
    return {
      id: 'corporate',
      label: 'Corporate & VIP Gifts',
      badge: 'bg-amber-50 text-amber-800 border-amber-300',
      color: 'amber',
      material: '1500 GSM Industrial Rigid Board + Velvet Inner Tray',
      finish: 'Matte Soft-Touch + Gold/Silver Hot Foil Stamping',
      dim: '12.0" × 9.5" × 3.0"',
    };
  }

  return {
    id: 'rigid-luxury',
    label: 'Magnetic & Luxury Rigid',
    badge: 'bg-sky-50 text-sky-800 border-sky-200',
    color: 'sky',
    material: '1400 GSM Heavy Kappa Board',
    finish: 'Matte Lamination + Neodymium Magnetic Closure',
    dim: '10.0" × 8.0" × 3.0"',
  };
}

export function getFancyBoxes(): { items: FancyBoxItem[]; tabs: BoxCategoryTab[] } {
  const foldersToScan = [
    {
      dir: path.join(process.cwd(), 'public', 'Fancy_Boxes'),
      urlPrefix: '/Fancy_Boxes',
    },
    {
      dir: path.join(process.cwd(), 'public', 'Web Site Data', 'FancyBoxes'),
      urlPrefix: '/Web Site Data/FancyBoxes',
    },
  ];

  const items: FancyBoxItem[] = [];
  const seenFiles = new Set<string>();

  for (const folder of foldersToScan) {
    if (!fs.existsSync(folder.dir)) continue;

    const files = fs.readdirSync(folder.dir).sort((a, b) => {
      // Natural sort by numeric prefix (01_, 02_, etc.)
      const numA = parseInt(a.match(/^\d+/)?.[0] || '999', 10);
      const numB = parseInt(b.match(/^\d+/)?.[0] || '999', 10);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });

    for (const file of files) {
      const lower = file.toLowerCase();
      const isPdf = lower.endsWith('.pdf');
      const isImg = lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');

      if (!isPdf && !isImg) continue;
      if (seenFiles.has(file)) continue;
      seenFiles.add(file);

      const fileKey = file.replace(/\.(png|jpg|jpeg|pdf|webp)$/i, '').toLowerCase();
      const matchedDetail = BOX_DETAILS_MAP[fileKey];

      if (matchedDetail) {
        items.push({
          id: `box-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`,
          title: matchedDetail.title,
          type: isPdf ? 'pdf' : 'image',
          fileUrl: `${folder.urlPrefix}/${encodeURIComponent(file)}`,
          fileName: file,
          category: matchedDetail.category,
          categoryLabel: matchedDetail.categoryLabel,
          dimensions: matchedDetail.dimensions,
          material: matchedDetail.material,
          finish: matchedDetail.finish,
          description: matchedDetail.description,
          badgeClass: matchedDetail.badgeClass,
          accentColor: matchedDetail.accentColor,
          isRealFile: true,
        });
      } else {
        const catInfo = detectCategoryFallback(file);
        const title = formatBoxTitle(file);
        items.push({
          id: `box-${file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`,
          title: title,
          type: isPdf ? 'pdf' : 'image',
          fileUrl: `${folder.urlPrefix}/${encodeURIComponent(file)}`,
          fileName: file,
          category: catInfo.id,
          categoryLabel: catInfo.label,
          dimensions: catInfo.dim,
          material: catInfo.material,
          finish: catInfo.finish,
          description: `Authentic AA Graphic Studio luxury production deliverable. Custom manufactured fancy box with ${catInfo.finish} on ${catInfo.material}.`,
          badgeClass: catInfo.badge,
          accentColor: catInfo.color,
          isRealFile: true,
        });
      }
    }
  }

  // Predefined preferred order for category tabs
  const categoryOrder = [
    'all',
    'corporate',
    'sweets-food',
    'festive-islamic',
    'perfume',
    'rigid-luxury',
  ];

  const categoryCounts: Record<string, { label: string; count: number }> = {};
  for (const item of items) {
    if (!categoryCounts[item.category]) {
      categoryCounts[item.category] = { label: item.categoryLabel, count: 0 };
    }
    categoryCounts[item.category].count += 1;
  }

  const tabs: BoxCategoryTab[] = [
    { id: 'all', label: 'All Fancy Boxes', count: items.length },
  ];

  // Add tabs in preferred order
  for (const catId of categoryOrder) {
    if (catId === 'all') continue;
    if (categoryCounts[catId]) {
      tabs.push({
        id: catId,
        label: categoryCounts[catId].label,
        count: categoryCounts[catId].count,
      });
      delete categoryCounts[catId];
    }
  }

  // Add any remaining
  for (const [catId, data] of Object.entries(categoryCounts)) {
    tabs.push({
      id: catId,
      label: data.label,
      count: data.count,
    });
  }

  return { items, tabs };
}
