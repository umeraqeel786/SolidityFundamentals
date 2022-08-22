const path = require("path");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const PinImageToIpfs = async (filePath, filename) => {
  const pinataEndpoint = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  const pinataApiKey = "";
  const pinataApiSecret ="";

  const form_data = new FormData();
  try {
    form_data.append("file", fs.createReadStream(`${filePath}//${filename}`));

    const request = {
      method: "post",
      url: pinataEndpoint,
      maxContentLength: "Infinity",
      headers: {
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataApiSecret,
        "Content-Type": `multipart/form-data; boundary=${form_data._boundary}`,
      },
      data: form_data,
    };

    const response = await axios(request);
    const imageHash = response.data.IpfsHash;
    console.log(imageHash);
    let str = filename;
    const Name = str.slice(0, -4);

    metaData = {
      description:
        "Friendly OpenSea Creature that enjoys long swims in the ocean.",
      image: "https://ipfs.io/ipfs/" + imageHash,
      name: `${Name}`,
      attributes: [
        {
          trait_type: "Personality",
          value: "Sad",
        },
        {
          display_type: "boost_number",
          trait_type: "Aqua Power",
          value: 40,
        },
        {
          display_type: "boost_percentage",
          trait_type: "Stamina Increase",
          value: 10,
        },
      ],
    };

    const metadataJson = JSON.stringify(metaData);

    await fs.writeFile(
      path.join(__dirname, `../Metadata/${Name}.json`),
      metadataJson,
      "utf8",
      function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        } else {
          console.log("JSON file has been saved to " + `Metadata/${Name}`);
        }
      }
    );

    const getMetaDataJson = path.join(__dirname, `../Metadata/${Name}.json`);
    const form_meta_data = new FormData();
    try {
      form_meta_data.append("file", fs.createReadStream(getMetaDataJson));
      const request = {
        method: "post",
        url: pinataEndpoint,
        maxContentLength: "Infinity",
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataApiSecret,
          "Content-Type": `multipart/form-data; boundary=${form_meta_data._boundary}`,
        },
        data: form_meta_data,
      };

      const response = await axios(request);
      console.log(response.data.IpfsHash);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  PinImageToIpfs,
};
