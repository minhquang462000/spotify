const router = require("express").Router();

const imageUploadService = require( "../../services/upload-img.service" );
const musicUploadService = require( "../../services/upload-music.service" );
router.post( "/images", imageUploadService );
router.post( "/musics", musicUploadService );
module.exports = router;
