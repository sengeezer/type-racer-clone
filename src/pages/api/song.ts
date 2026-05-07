import { getFirestore } from "firedb";
import { getRandomSong } from "utils";
import type { NextApiRequest, NextApiResponse } from "next";
import type { SongData } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SongData>
) {
  const snapshot = await getFirestore().collection("texts").get();
  const song = getRandomSong(snapshot.docs.map(doc => doc.data() as SongData));
  res.json(song);
}
