const { exec } = require('child_process');

// GPU rendering with FFmpeg and NVIDIA acceleration
const renderVideo = (inputPath, outputPath) => {
  const command = `ffmpeg -hwaccel cuda -i ${inputPath} -vf scale=3840:2160 -c:v h264_nvenc ${outputPath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Video rendering failed:', error);
      return;
    }
    console.log('Video rendering completed:', outputPath);
  });
};

module.exports = { renderVideo };

