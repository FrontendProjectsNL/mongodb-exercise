import mybooks from '@/src/models/mybooks';
import { dbConnect } from '@/src/utils/dbConnect';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  // const res = await new dbconnect(
  //   'mongodb+srv://EA2009:UTKgzg3Nmt2Olddl@cluster0.mb8kibd.mongodb.net/'
  // );
  // console.log('=============> res is: ', res);
  // console.log('=============> res is: ', res);
  // console.log('=============> res is: ', res);

  dbConnect();
  const mybookData = await request.json();
  console.log('+++++++++++ request.json() is: ', mybookData, '+++++++++++');

  const mybook = await mybooks.create(mybookData);

  return new NextResponse(
    JSON.stringify(mybook})
  );
};

export const GET = async (request: NextRequest) => {
  return new NextResponse(
    JSON.stringify({
      message: 'Het is gelukt!',
    })
  );
};
