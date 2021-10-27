import connectToDatabase from '../config';

export async function getProdutos() {
  const { db } = await connectToDatabase();

  const data = await db.collection('produtos').find().toArray();

  return data;
}

export default getProdutos;