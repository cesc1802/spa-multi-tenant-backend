import { modelOptions, prop, Severity } from '@typegoose/typegoose';
import { StatusEnum } from '@app/common/enums';

@modelOptions({
    options: { allowMixed: Severity.ALLOW },
    schemaOptions: {
      timestamps: true, toJSON: {
        virtuals: true,
        getters: true,
      },
    },
  },
)
export abstract class BaseModel {
  @prop()
  createdAt?: Date;

  @prop()
  updatedAt?: Date;

  @prop({ enum: StatusEnum, type: String, default: StatusEnum.Active })
  status: StatusEnum;

  id?: string;
}
