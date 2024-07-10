const multer = require("multer");
const path = require( "path" );
const ffmpeg = require( "fluent-ffmpeg" );
const fs = require( "fs-extra" );


const uploadConfig = multer({
  dest: "./public/music/upload",
  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname).toLowerCase();

    if (
      ext !== ".mp3" &&
      ext !== ".ogg" &&
      ext !== ".wav" &&
      ext !== ".m4a"
    ) {
      return callback(null, false);
    }

    callback(null, true);
  },
});
const musicUploader = uploadConfig.array("songs", 10);
const upload = (req, res, next) => {
  musicUploader(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error" });
    }

    const promises = [];

    // compress song
    req.files.forEach((file) => {
      promises.push(compressMusic(file));
    });

    const song = await Promise.all(promises);
    return res.json(song);
  });
};
//   compress image
const compressMusic = async (file) => {
 const filePath = `./public/music/file/${file.filename}.mp3`;
  const outputDir = path.join( __dirname, "..", "public", "music", "file" );
  fs.ensureDir( outputDir ).then( () => { 
    ffmpeg( file.path )
      .audioBitrate( 128 )
      .audioChannels( 2 )
      .output( filePath )
      .on( "error", ( err ) => {
        console.log( err );
      } )
      .on( "end", () => {
        fs.remove( file.path );
      } )
      .save( filePath );
  } );
  return `music/file/${file.filename}.mp3`;
};
module.exports = upload;