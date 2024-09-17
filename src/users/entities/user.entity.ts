import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  lastLogin: Date;
}
