import mybooks from '@/src/models/mybooks';
import { dbConnect } from '@/src/utils/dbConnect';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  dbConnect();
  const mybookData = await request.json();
  const mybook = await mybooks.create(mybookData);

  return new NextResponse(JSON.stringify(mybook));
};

export const GET = async (request: NextRequest) => {
  dbConnect();
  const res = await mybooks.find();
  return new NextResponse(JSON.stringify(res));
};
