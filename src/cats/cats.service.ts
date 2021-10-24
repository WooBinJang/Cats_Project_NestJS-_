import { CatsRepository } from './cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(private readonly CatsRepository: CatsRepository) {}
  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.CatsRepository.existsByEmail(email); // 중복확인 boolean

    if (isCatExist) {
      throw new UnauthorizedException('해당 이메일은 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10); //비밀번호 암호화

    const cat = await this.CatsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
