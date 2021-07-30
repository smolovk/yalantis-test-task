import path from 'path';
import sharp from 'sharp';

import User from '../types/user';
import InMemoryDb from '../db/InMemoryDb';

class UserController {
  /**
   * Create user
   * @param req
   * @param res
   */
  static create(req: any, res: any) {
    const tmpPath = req.file.path;
    const permanentPath = path.join(__dirname, '../uploads', req.file.filename);

    // resize image to 200x200 px
    sharp(tmpPath).resize({ height: 200, width: 200 }).toFile(permanentPath);

    const user: User = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      imagePath: permanentPath,
    };

    InMemoryDb.saveUser(user);

    res.status(200).json(user.id);
  }

  /**
   * Find user by id
   * @param req
   * @param res
   */
  static findById(req: any, res: any) {
    const { id } = req.params;
    res.status(200).json({ message: id, user: InMemoryDb.getUserById(Number(id)) });
  }
}

export default UserController;
