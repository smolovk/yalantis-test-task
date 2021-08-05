import path from 'path';
import User from '../db/models/User';
import { resizeAndSave } from '../libs/images';

class UserService {
  static async create(req: any) {
    const tmpPath = await req.file.path;
    const permanentPath = await path.join(__dirname, '..', String(process.env.SAVE_DIR), req.file.filename);

    // resize image to 200x200 px and save
    await resizeAndSave(tmpPath, permanentPath);

    const user = await User.build({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      imagePath: req.file.filename,
    });

    await user.save();

    return user;
  }

  static async findById(id: number) {
    const user = await User.findOne({ where: { id } });
    return user;
  }
}

export default UserService;
