import { BusinessResponse } from "../../../api/api-contracts/user/responses/business.response";

export const dummyBusinesses: BusinessResponse[] = [
  {
    id: "10001",
    name: "North West African Market",
    description: "Get a wide range of African food items and groceries",
    address: {
      id: "10001",
      primary: true,
      unit: "Block 7",
      street: "45 winds drive",
      city: "Toronto",
      province: "Ontario",
      postalCode: "m3j0k9",
      country: "Canada",
      latitude: 43.7733,
      longitude: -79.3359,
    },
    email: "northweststores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 4,
          minute: 0,
        },
      },
      monday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 2,
          minute: 0,
        },
      },
      sunday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 17,
          minute: 0,
        },
      },
      tuesday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 17,
          minute: 0,
        },
      },
      saturday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 17,
          minute: 0,
        },
      },
      thursday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 17,
          minute: 0,
        },
      },
      wednesday: {
        open: {
          hour: 9,
          minute: 0,
        },
        close: {
          hour: 17,
          minute: 0,
        },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Carribean"],
    regions: ["West African", "North African", "East African"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10002",
    name: "Dummy Market 1",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "",
      street: "Oak Avenue",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M4B 1B3",
      country: "Canada",
      latitude: 43.4316,
      longitude: -78.9315,
      primary: true,
    },
    email: "dummy1stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 13, minute: 20 },
        close: { hour: 22, minute: 34 },
      },
      monday: { open: { hour: 20, minute: 37 }, close: { hour: 6, minute: 6 } },
      sunday: {
        open: { hour: 11, minute: 13 },
        close: { hour: 0, minute: 22 },
      },
      tuesday: {
        open: { hour: 21, minute: 31 },
        close: { hour: 6, minute: 29 },
      },
      saturday: {
        open: { hour: 12, minute: 59 },
        close: { hour: 0, minute: 19 },
      },
      thursday: {
        open: { hour: 21, minute: 34 },
        close: { hour: 8, minute: 30 },
      },
      wednesday: {
        open: { hour: 21, minute: 56 },
        close: { hour: 12, minute: 47 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "North African", "East African"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10003",
    name: "Dummy Market 2",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "Unit 15",
      street: "Maple Street",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M1B 2K5",
      country: "Canada",
      latitude: 43.5131,
      longitude: -79.5041,
      primary: true,
    },
    email: "dummy2stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 8, minute: 11 },
        close: { hour: 23, minute: 30 },
      },
      monday: {
        open: { hour: 7, minute: 24 },
        close: { hour: 20, minute: 45 },
      },
      sunday: {
        open: { hour: 9, minute: 33 },
        close: { hour: 18, minute: 29 },
      },
      tuesday: {
        open: { hour: 6, minute: 47 },
        close: { hour: 21, minute: 15 },
      },
      saturday: {
        open: { hour: 10, minute: 2 },
        close: { hour: 16, minute: 38 },
      },
      thursday: {
        open: { hour: 5, minute: 55 },
        close: { hour: 22, minute: 7 },
      },
      wednesday: {
        open: { hour: 14, minute: 20 },
        close: { hour: 17, minute: 50 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "Caribbean", "East African"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10004",
    name: "Dummy Market 3",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "Block 2",
      street: "Pine Lane",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M2R 1Z5",
      country: "Canada",
      latitude: 43.3502,
      longitude: -79.5919,
      primary: true,
    },
    email: "dummy3stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 12, minute: 5 },
        close: { hour: 19, minute: 48 },
      },
      monday: {
        open: { hour: 2, minute: 15 },
        close: { hour: 17, minute: 22 },
      },
      sunday: {
        open: { hour: 10, minute: 30 },
        close: { hour: 22, minute: 10 },
      },
      tuesday: {
        open: { hour: 3, minute: 45 },
        close: { hour: 23, minute: 55 },
      },
      saturday: {
        open: { hour: 11, minute: 40 },
        close: { hour: 18, minute: 20 },
      },
      thursday: {
        open: { hour: 9, minute: 25 },
        close: { hour: 20, minute: 30 },
      },
      wednesday: {
        open: { hour: 8, minute: 50 },
        close: { hour: 21, minute: 10 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "North African", "Caribbean"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10005",
    name: "Dummy Market 4",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "Block 6",
      street: "Cedar Road",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M4B 1B3",
      country: "Canada",
      latitude: 44.0836,
      longitude: -79.5869,
      primary: true,
    },
    email: "dummy4stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 1, minute: 50 },
        close: { hour: 10, minute: 25 },
      },
      monday: {
        open: { hour: 13, minute: 5 },
        close: { hour: 22, minute: 40 },
      },
      sunday: {
        open: { hour: 7, minute: 20 },
        close: { hour: 18, minute: 55 },
      },
      tuesday: {
        open: { hour: 4, minute: 35 },
        close: { hour: 20, minute: 5 },
      },
      saturday: {
        open: { hour: 16, minute: 10 },
        close: { hour: 23, minute: 30 },
      },
      thursday: {
        open: { hour: 6, minute: 45 },
        close: { hour: 15, minute: 20 },
      },
      wednesday: {
        open: { hour: 9, minute: 0 },
        close: { hour: 19, minute: 45 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "Filipino", "Caribbean"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10006",
    name: "Dummy Market 5",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "",
      street: "Elm Way",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M5S 2B2",
      country: "Canada",
      latitude: 43.6785,
      longitude: -79.3659,
      primary: true,
    },
    email: "dummy5stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 14, minute: 30 },
        close: { hour: 22, minute: 50 },
      },
      monday: {
        open: { hour: 0, minute: 10 },
        close: { hour: 11, minute: 35 },
      },
      sunday: {
        open: { hour: 8, minute: 45 },
        close: { hour: 17, minute: 15 },
      },
      tuesday: {
        open: { hour: 5, minute: 55 },
        close: { hour: 14, minute: 20 },
      },
      saturday: {
        open: { hour: 10, minute: 0 },
        close: { hour: 20, minute: 0 },
      },
      thursday: {
        open: { hour: 2, minute: 40 },
        close: { hour: 12, minute: 30 },
      },
      wednesday: {
        open: { hour: 7, minute: 25 },
        close: { hour: 16, minute: 5 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "Haitian", "Caribbean", "South American"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
  {
    id: "10007",
    name: "Dummy Market 6",
    description: "Get a wide range of groceries and essentials",
    address: {
      unit: "Unit 8",
      street: "Elm Way",
      city: "Toronto",
      province: "Ontario",
      postalCode: "M1P 4N7",
      country: "Canada",
      latitude: 43.322,
      longitude: -79.7152,
      primary: true,
    },
    email: "dummy6stores@gmail.com",
    mobile: {
      phoneNumber: "6478074038",
      countryCode: "+1",
      isoType: "CA",
    },
    schedule: {
      friday: {
        open: { hour: 3, minute: 30 },
        close: { hour: 13, minute: 15 },
      },
      monday: {
        open: { hour: 15, minute: 20 },
        close: { hour: 23, minute: 40 },
      },
      sunday: {
        open: { hour: 9, minute: 10 },
        close: { hour: 19, minute: 30 },
      },
      tuesday: {
        open: { hour: 1, minute: 5 },
        close: { hour: 10, minute: 45 },
      },
      saturday: {
        open: { hour: 12, minute: 15 },
        close: { hour: 21, minute: 50 },
      },
      thursday: {
        open: { hour: 4, minute: 25 },
        close: { hour: 13, minute: 55 },
      },
      wednesday: {
        open: { hour: 11, minute: 0 },
        close: { hour: 18, minute: 20 },
      },
    },
    createdAt: "2024-02-08T23:29:01.864Z",
    website: "https://www.quiikmart.com/",
    rating: "4.0",
    businessType: "grocery",
    country: "Nigeria",
    countries: ["Ghana", "Cameroon", "Caribbean"],
    regions: ["West African", "Haitian", "Caribbean", "Indian"],
    backgroundImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
    profileImage:
      "https://quiikmart-version1-app.s3.amazonaws.com/defaultStore.png?AWSAccessKeyId=ASIAVPMC24V2K2OPVIFP&Expires=1707435967&Signature=X%2FrPHpiq99Ozy6JbnS2VWr44wjI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEC8aDGNhLWNlbnRyYWwtMSJGMEQCIBs6ze1HgZeC%2By5738HgjZKzi%2FX%2FIQy422pERDcVRg6yAiB72REAYmKlbnfhuZEohuhx4B4AXTIFQ%2BtNs%2FafW7zf6yrPBQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NjYyMDkwMTc0OCIM6YvCpi4QGkn4DZGjKqMFbbdb9nT4SNsD0YUHfck%2BL4ymaHbtn2r6zHyjtqlU1GRBwqk7Ir8A6dkJdLqQX7vVVCejBNCn7mG09VgGYhI2yoLAusqFYZRE0qyYi1zb65F%2Frro%2FX8GsJ8nJYNWYyLiJrYaq7PblrnaS1PHED7texdz6hoQQEgH3JOCO8EloHcHBJ2Qaqz%2BWDK4t78CbjanEniq8mkyqy8oUVtkAsjes%2F52nkaUbQzjiIrfw7aijUJ6L7L8C8JAvYEToJINtuO7TOBY25xXpwNx9D3XJJzaDJpu3wgPl2e3xCeGQ3OUsdr8%2Fc0P2la%2BlIF%2B6mTNu8u3sF0c55GHD3y1o3E2IqJ03x1BHcUVxApfjoLsXrhfG8YvL6Swp4a7rnaj%2FP4t6faXvS65B3lzqzZZvaUw%2FnWcJBfNm9AF%2BvdMsxN42g969Q8aotUywnHQEreaTSbS%2FFqSLsa1RwhH5tTJTSutZWznzqcUj5%2B3ji%2FNw7SzEIg12Vzg3qLUqjRrm4wEhRx7FBzMF%2B9WSKkkVCBxiW82vjoTjixW%2BIyaieDBZOj7fEhnCLyc0pQMxSRdf8vjKhFR6v%2BuiK4ABxAOaPO3eYYfVEreeCeXSkB4t1aBjfO38o2KCGR5paldq%2FILM6OsZ0cSzGbA0pkbIKCOyQgkpuy1uZCj6pIA5L1Z7sn%2Fk6YINQ0Z2AL0Ie8E%2F0wrWO%2Fny3DtzkBMTshE6sQ2dNjP8ll09X8bwyDz%2Be2NXd%2FmS5Kzs7q0qn2Hb9hvw34ybwcPAgPKdDOAaGg8UzvtNOD4097Q0I980Ls%2BwmQRuSA2yz60TkaRpUs%2BMchOLNEaZ1T3%2FyFrQKmNufzIDJgnSZRl2HUZCSlqZhKzaby62tFXp5KYzfwIk%2BKaRMOCwbBDZp23HEtjJiIgGVqBMMPKyla4GOrIBBjw6UTOQLv2dbGHAWMJoccbsm6j%2BAgwxCJGXStyNEC4zcU6jkEVjGuX6pz%2FfgidyjVl9ws%2BjXDAv9iaxSgVMgLWRqiy924AGePBxt4KCXIdKkegHHrAfk6mJGf2LEwe6qFuz5WudRlB0BbG%2FakNkDnMRlkCkeH8rOqlaY2%2BR1ZKsrUgx5WfDURNV5ZmuO1djsgtqDb7YsoDCPUVO4YhsU2fpggzXQXL3FfLGCNV3hPAB4A%3D%3D",
  },
];
