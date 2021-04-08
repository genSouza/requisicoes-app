import { classToPlain } from 'class-transformer';

export abstract class Model {
  id: string = '0';

  toObject(): object {
    let obj: any = classToPlain(this);
    delete obj.id;
    return obj.id;
  }

}
