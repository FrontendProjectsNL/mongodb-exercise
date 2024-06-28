import { NextRequest, NextResponse } from 'next/server';
// import dbconnect from '../lib/dbconnect';

export const POST = async (request: NextRequest) => {
  // const res = await new dbconnect(
  //   'mongodb+srv://EA2009:UTKgzg3Nmt2Olddl@cluster0.mb8kibd.mongodb.net/'
  // );
  // console.log('=============> res is: ', res);
  // console.log('=============> res is: ', res);
  // console.log('=============> res is: ', res);
  return new NextResponse(
    JSON.stringify({
      message: 'POST Gelukt!',
    })
  );
};

export const GET = async (request: NextRequest) => {
  return new NextResponse(
    JSON.stringify({
      message: 'Het is gelukt!',
    })
  );
};
