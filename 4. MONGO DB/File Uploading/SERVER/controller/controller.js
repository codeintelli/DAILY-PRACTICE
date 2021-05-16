const UploadModel = require("../model/Schema");
const fs = require("fs");
exports.home = async (req, res) => {
  const all_img = await UploadModel.find();

  res.render("main", { images: all_img });
};

exports.upload = (req, res, next) => {
  const files = req.files;

  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path);
    console.log(img);
    return (encode_image = img.toString("base64"));
  });

  let result = imgArray.map((src, index) => {
    // to store image in database
    let finalImg = {
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase64: src,
    };

    let newUpload = new UploadModel(finalImg);
    return newUpload
      .save()
      .then(() => {
        return {
          message: `${files[index].originalname} File upload successfully`,
        };
      })
      .catch((err) => {
        if (err) {
          if (err.name === "MongoError" && error.code === 11000) {
            return Promise.reject({
              error: `Duplicate ${files[index].originalname} File Already Exist`,
            });
          }
        }
        return Promise.reject({
          error: `error Message ||Can't Upload ${files[index].originalname} something missing`,
        });
      });
  });

  Promise.all(result).then((msg) => {
    res.redirect("/");
    // res.json(msg);
  });
};
