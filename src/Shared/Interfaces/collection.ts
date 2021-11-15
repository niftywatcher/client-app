export default interface Collection {
  id: string;
  floor: number;
  address: string;
  description: string | null;
  discordUrl: string | null;
  externalUrl: string | null;
  imageUrl: string;
  instagramUsername: string | null;
  name: string;
  symbol: string | null;
  twitterUsername: string | null;
  deltaStats: {
    floor: number;
  };
  floorData: number[];
}
