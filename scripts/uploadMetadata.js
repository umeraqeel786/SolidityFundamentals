const path = require("path");
const { PinImageToIpfs } = require("./pinataApi");
const ImagePath = path.join(__dirname, "../Images");
const fs = require("fs");

const PinToPinata = async () => {
  const images = fs.readdirSync(ImagePath);

  for (const image of images) {
    await PinImageToIpfs(ImagePath, image);
  }
};

PinToPinata();
