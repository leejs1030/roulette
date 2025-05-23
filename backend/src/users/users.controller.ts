import { Controller, Get, SerializeOptions, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/user.decorator';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { GetProfileResponseDto } from './dto/get-profile-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @SerializeOptions({
    type: GetProfileResponseDto,
  })
  getProfile(@CurrentUser() user: User): GetProfileResponseDto {
    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
    };
  }
}
