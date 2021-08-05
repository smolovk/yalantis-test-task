import UserService from '../services/users';

export const create = async (req: any, res: any) => {
  const user = await UserService.create(req);
  return res.status(200).json(user.getDataValue('id'));
};

export const findById = async (req: any, res: any) => {
  const { id } = req.params;
  const user = await UserService.findById(Number(id));
  res.status(200).json({ user });
};

export default create;
