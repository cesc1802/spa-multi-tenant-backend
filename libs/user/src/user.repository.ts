import { Injectable } from '@nestjs/common';
import { BaseRepository } from '@app/common/base.repository';
import { User, UserDocument } from '@app/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
