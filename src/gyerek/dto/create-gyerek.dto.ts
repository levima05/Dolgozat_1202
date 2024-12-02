import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateGyerekDto {
  @IsNotEmpty()
  @IsString()
  nev : string
  @IsNotEmpty()
  @IsString()
  cim : string
  @IsNotEmpty()
  @IsInt()
  jo_volt : number
}
