import { connectToDatabase } from '../../data/config';
import { ObjectId } from 'mongodb';
import nextConnect from 'next-connect';


const handler = nextConnect();

handler.post(async (req, res) => {
  const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection('produtos');

    await collection.insertOne({
      title,
      authorId: ObjectId(authorId),
      authorName,
      authorAvatar,
      views: 0,
      videoUrl,
      updatedAt: new Date(),
    });

    return res.status(200).json({ ok: true });
})

.get((req, res) => {
  res.send("Hello world");
});


export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;