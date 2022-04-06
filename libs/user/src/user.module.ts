import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/models';
import { UserController } from '@app/user/user.controller';
import { UserRepository } from '@app/user/user.repository';

@Module({
  imports: [MongooseModule.forFeature([{name : User.name, schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
