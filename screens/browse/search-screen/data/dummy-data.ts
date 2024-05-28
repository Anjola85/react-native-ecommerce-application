
import businessData from "./store-dummy-data.json";
import { AddressRespDto } from "../../../../api/api-contracts/user/responses/address.response";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { CountryListRespDto } from "../../../../api/api-contracts/user/responses/country.response";
import { MobileRespDto } from "../../../../api/api-contracts/user/responses/mobile.response";
import { RegionListRespDto } from "../../../../api/api-contracts/user/responses/region.response";
import { ScheduleRespDto, DaySchedule } from "../../../../api/api-contracts/user/responses/schedule.response";

class BusinessRespDtoBuilder {
  static fromJSON(json: any): BusinessRespDto {
      return {
          id: json.id,
          name: json.name,
          description: json.description,
          address: this.createAddressRespDto(json.address),
          email: json.email,
          mobile: this.createMobileRespDto(json.mobile),
          schedule: this.createScheduleRespDto(json.schedule),
          website: json.website,
          countries: this.createCountryListRespDto(json.countries),
          regions: this.createRegionListRespDto(json.regions),
          businessType: json.businessType,
          rating: json.rating,
          backgroundImage: json.backgroundImage,
          profileImage: json.profileImage,
          createdAt: json.createdAt,
      };
  }

  private static createAddressRespDto(json: any): AddressRespDto {
      return {
          id: json.id,
          isPrimary: json.isPrimary,
          unit: json.unit,
          street: json.street,
          city: json.city,
          province: json.province,
          postalCode: json.postalCode,
          country: json.country,
          latitude: json.latitude,
          longitude: json.longitude,
      };
  }

  private static createMobileRespDto(json: any): MobileRespDto {
      return {
          id: json.id,
          isPrimary: json.isPrimary,
          countryCode: json.countryCode,
          phoneNumber: json.phoneNumber,
          isoType: json.isoType,
      };
  }

  private static createScheduleRespDto(json: any): ScheduleRespDto {
      return {
          monday: this.createDaySchedule(json.monday),
          tuesday: this.createDaySchedule(json.tuesday),
          wednesday: this.createDaySchedule(json.wednesday),
          thursday: this.createDaySchedule(json.thursday),
          friday: this.createDaySchedule(json.friday),
          saturday: this.createDaySchedule(json.saturday),
          sunday: this.createDaySchedule(json.sunday),
      };
  }

  private static createDaySchedule(json: any): DaySchedule {
      return {
          open: { hour: json.open.hour, minute: json.open.minute },
          close: { hour: json.close.hour, minute: json.close.minute },
      };
  }

  private static createCountryListRespDto(json: any): CountryListRespDto {
      return {
          countryList: json.countryList.map((c: any) => ({ id: c.id, name: c.name })),
          size: json.size,
      };
  }

  private static createRegionListRespDto(json: any): RegionListRespDto {
      return {
          regionList: json.regionList.map((r: any) => ({ id: r.id, name: r.name })),
          size: json.size,
      };
  }
}

const businessRespList = businessData.payload.result.businessList.map((b: any) => BusinessRespDtoBuilder.fromJSON(b));

export default businessRespList;
