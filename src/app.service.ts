import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    return {
      name: 'task-tracker',
      version: '0.0.1',
      description: 'An REST API with NESTJS and MONGODB for a Task Tracker Application',
      author: 'Rajsekhor Saikia',
    };
  }
}
