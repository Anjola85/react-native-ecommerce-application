import { UserInformationRespDto } from "./user.information.response";

export class LoginResponseDto {
  token: string;
  userInfo: UserInformationRespDto;

  constructor(token: string, userInfo: UserInformationRespDto) {
    this.token = token;
    this.userInfo = userInfo;
  }
}
