import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IShop } from 'src/interfaces';

export type ShopsDocument = Shops & Document;

@Schema({ timestamps: true })
class Shops implements IShop {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  desc: string;

  @Prop()
  owner_id: string;

  @Prop([String])
  categories: string[];

  @Prop([String])
  products?: string[];
}

export const ShopsSchema = SchemaFactory.createForClass(Shops);
