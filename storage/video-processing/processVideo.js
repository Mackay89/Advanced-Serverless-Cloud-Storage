const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

// Process 12K video
const processVideo = (inputPath, outputPath) => {
  ffmpeg(inputPath)
    .outputOptions(['-vf scale=7680:4320']) // Scale to 12K
    .on('start', () => console.log('Video processing started'))
    .on('end', () => console.log('Video processing completed'))
    .on('error', (error) => console.error('Video processing error:', error))
    .save(outputPath);
};

module.exports = { processVideo };

