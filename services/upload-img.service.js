const multer = require("multer");
const path = require("path");
const sharp = require( "sharp" );
const fs = require( "fs-extra" );


const uploadConfig = multer({
  dest: "./public/images/upload",
  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname).toLowerCase();
    if (
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".webp"
    ) {
      return callback(null, false);
    }

    callback(null, true);
  },
});
const imageUploader = uploadConfig.array("images", 10);
const upload = (req, res, next) => {
  imageUploader(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error" });
    }
    const promises = [];

    // compress image
    req.files.forEach((file) => {
      promises.push(compressImage(file));
    });

    const images = await Promise.all( promises );
    return res.json(images);
  });
}; 
//   compress image
const compressImage = async (file) => {
  const filePath = `./public/images/file/${ file.filename }.jpeg`;
  const outputDir = path.join( __dirname, "..", "public", "images", "file" );
  fs.ensureDir( outputDir ).then( () => {
    sharp( file.path )
      .resize({ width: 800 })
      .jpeg( { quality: 80 } )
      .toFile( filePath );
  } );
  return `images/file/${file.filename}.jpeg`;

//  await sharp(file.path)
//       .resize({ width: 800 })
//       .jpeg({ quality: 80 })
//       .toFile(filePath);

//     // Cấp quyền và xóa tệp tin gốc
//   fs.chmodSync( file.path, 0o777 );
//   fs.remove( file.path );
//     return `images/file/${file.filename}.jpeg`;
};

module.exports = upload;
