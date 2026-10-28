import { NextResponse } from 'next/server';
import { getFancyBoxes } from '@/lib/getFancyBoxes';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = getFancyBoxes();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error scanning Fancy Boxes files:', error);
    return NextResponse.json({ items: [], tabs: [] }, { status: 500 });
  }
}

