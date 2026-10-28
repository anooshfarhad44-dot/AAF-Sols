import { NextResponse } from 'next/server';
import { getStudioWorks } from '@/lib/getStudioWorks';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = getStudioWorks();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error scanning portfolio PDFs:', error);
    return NextResponse.json({ works: [], tabs: [] }, { status: 500 });
  }
}
