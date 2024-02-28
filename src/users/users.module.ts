import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersAPI } from './entities/usersAPI.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([UsersAPI])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}