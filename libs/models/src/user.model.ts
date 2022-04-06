import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { useMongoosePlugin } from '@app/common/decorators';

export type UserDocument = User & Document;

@useMongoosePlugin()
@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  lastName: string;

  @Prop()
  firstName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
