import mongoose from 'mongoose';

export default async function savemd(
  //   username: string,
  //   path: string[],
  //   title: string,
  //   content: string,
  myModel: mongoose.Model<mongoose.Document>,
) {
  const allMarkdown = await myModel.find({});
  return allMarkdown;
}
