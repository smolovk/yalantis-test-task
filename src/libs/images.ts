import sharp from 'sharp';

const resizeAndSave = (filePath: string, permanentPath: string) => {
  sharp(filePath).resize({ height: 200, width: 200 }).toFile(permanentPath);
};

export default resizeAndSave;
