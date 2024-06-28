import { NextRequest, NextResponse } from 'next/server';
import dbconnect from '../lib/dbconnect';

export const POST = async (request: NextRequest) => {
  const res = await dbconnect(
    'mongodb+srv://EA2009:<UTKgzg3Nmt2Olddl>@cluster0.mb8kibd.mongodb.net/'
  );
  NextResponse.json('Gelukt!');
};
