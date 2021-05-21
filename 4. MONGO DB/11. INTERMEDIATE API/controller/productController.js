import { Products } from "../model";
import multer from "multer";
import path from "path";
import CustomErrorHandler from "../services/CustomErrorHandler";
import Joi from "joi";
import fs from "fs";
import productSchemaValidation from "../validator/productValidator";
// store in database or filename or destination
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, `uploads`),
  filename: (req, file, cb) => {
    let uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const handleMulter = multer({
  storage,
  limits: {
    fileSize: 1000000 * 5,
  },
}).single("image");

const productController = {
  async store(req, res, next) {
    handleMulter(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      console.log(req.file);
      const filePath = req.file.path;
      console.log(filePath);
      // validate the requests

      const { error } = productSchemaValidation.validate(req.body);
      if (error) {
        //delete image
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });
        return next(error);
      }
      const { name, price, size } = req.body;
      let document;
      try {
        document = await Products.create({
          name,
          price,
          size,
          image: filePath,
        });
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },

  // update the data
  update(req, res, next) {
    handleMulter(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // validation
      const { error } = productSchemaValidation.validate(req.body);
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }

        return next(error);
        // rootfolder/uploads/filename.png
      }

      const { name, price, size } = req.body;
      let document;
      try {
        document = await Products.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            price,
            size,
            ...(req.file && { image: filePath }),
          },
          { new: true }
        );
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  // delete the data
  async destroy(req, res, next) {
    try {
      let document = await Products.findOneAndDelete({ _id: req.params.id });
      if (!document) {
        res.status(404).json({ message: "Record Not Found" });
      }
      const imagePath = document._doc.image;
      console.log(imagePath);
      // http://localhost:5000/uploads/1616444052539-425006577.png
      // approot/http://localhost:5000/uploads/1616444052539-425006577.png
      fs.unlink(`${appRoot}/${imagePath}`, (err) => {
        if (err) {
          return next(CustomErrorHandler.serverError());
        }
        return res.json(document);
      });
    } catch (err) {
      return next(err);
    }
    res.status(201).json("data delete successfully");
  },

  // get all data
  async index(req, res, next) {
    let document;
    try {
      document = await Products.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    res.status(201).json(document);
  },

  // get specific data
  async show(req, res, next) {
    let document;
    try {
      document = await Products.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    res.status(201).json(document);
  },
};

export default productController;
