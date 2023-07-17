import { NFTStorage, File } from "nft.storage";
require('dotenv').config();

/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (image, name, description) => {
  const nftstorage_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE1N2Q0RDY4NzAwODJjNjQwRTJCMTJBRmJiMzUxM2E1N2FENEY0NTYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NTE4NTg1NTcxNywibmFtZSI6Ik5GVCBURVNUIn0.jiTgS_rSCxTvHBG7HKPGd-f8_Q01P50e-09G5q1UE_o';

  console.log("Preparing Metadata ....");
  const nft = {
    image,
    name,
    description,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: nftstorage_key as string});
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);

  return metadata;
};
