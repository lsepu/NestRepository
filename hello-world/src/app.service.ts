import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getMessage(): string {
    return 'Esta es mi primera aplicación en Nest';
  }

}
