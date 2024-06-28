import mybooks from '@/src/models/mybooks';
import { dbConnect } from '@/src/utils/dbConnect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }) => {
  dbConnect();
  const { id } = params;

  const result = await mybooks.findById(id);

  return new NextResponse(JSON.stringify(result));
};
