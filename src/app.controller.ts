import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/cats/hello
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
