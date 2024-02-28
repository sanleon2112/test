import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsersAPI } from './entities/usersAPI.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersAPI)
    private usersAPIModel: typeof UsersAPI,
  ) {}

  async findAll(): Promise<UsersAPI[]> {
    return this.usersAPIModel.findAll();
  }

  async findOne(id: string): Promise<UsersAPI> {
    return await this.usersAPIModel.findOne({
      where: { id },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UsersAPI> {
    return this.usersAPIModel.create(createUserDto);
  }

  async remove(id: string): Promise<string> {
    const user = await this.findOne(id);
    await user.destroy();
    return 'User deleted successfully';
  } 

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UsersAPI> {
    const user = await this.findOne(id);
    return user.update(updateUserDto);
  }
}