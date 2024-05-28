import { Country, Region } from "../props";

export const wantToOptions = [
  {
    id: "1",
    title: "Here to discover Grocery deals",
    sub_title:
      "I want to find the best deals so i can save money on my groceries",
    image: require("../../../../assets/images/west-africa-region.png"),
  },
  {
    id: "2",
    title: "Here to shop from local stores",
    sub_title:
      "I want to find all my ethnic products to be able to shop and stay connected with them",
    image: require("../../../../assets/images/north-africa-region.png"),
  },
  {
    id: "3",
    title: "I want to stay connected with my ethnicity",
    sub_title:
      "Here to stay in touch with my origin roots, discover recipes, stay close to my community and more",
    image: require("../../../../assets/images/south-africa-region.png"),
  },
  {
    id: "4",
    title: "Here to discover services",
    sub_title:
      "I want to find people who are offering services I may be looking for",
    image: require("../../../../assets/images/east-africa-region.png"),
  },
  {
    id: "5",
    title: "Just browsing and looking",
    sub_title:
      "I just want to look around and see if there is anything that suits me",
    image: require("../../../../assets/images/south-asia-region.png"),
  },
];

export const WestAfricaRegion = {
  id: 1,
  regionName: "W. Africa",
};

export const CaribbeanRegion = {
  id: 2,
  regionName: "Caribbean",
};

export const EastAfricaRegion = {
  id: 3,
  regionName: "E. Africa",
};

export const NorthAfricaRegion = {
  id: 4,
  regionName: "N. Africa",
};

export const SouthAfricaRegion = {
  id: 5,
  regionName: "S. Africa",
};

export const EastAsiaRegion = {
  id: 6,
  regionName: "East Asia",
};

export const SoutheastAsiaRegion = {
  id: 7,
  regionName: "Southeast Asia",
};

export const SouthAsiaRegion = {
  id: 8,
  regionName: "South Asia",
};

export const CentralAsiaRegion = {
  id: 9,
  regionName: "Central Asia",
};

export const WesternAsiaRegion = {
  id: 10,
  regionName: "Western Asia",
};

export const NorthernEuropeRegion = {
  id: 11,
  regionName: "Northern Europe",
};

export const WesternEuropeRegion = {
  id: 12,
  regionName: "Western Europe",
};

export const EasternEuropeRegion = {
  id: 13,
  regionName: "Eastern Europe",
};

export const SouthernEuropeRegion = {
  id: 14,
  regionName: "Southern Europe",
};

export const SouthAmericaRegion = {
  id: 15,
  regionName: "South America",
};

export const OceaniaRegion = {
  id: 16,
  regionName: "Oceania",
};

export const CentralAfricanRegion = {
  id: 17,
  regionName: "Central Africa",
};

export const CentralAmericaRegion = {
  id: 18,
  regionName: "Central America",
};

export const regions: Region[] = [
  WestAfricaRegion,
  CaribbeanRegion,
  EastAfricaRegion,
  NorthAfricaRegion,
  SouthAfricaRegion,
  EastAsiaRegion,
  SoutheastAsiaRegion,
  SouthAsiaRegion,
  CentralAsiaRegion,
  WesternAsiaRegion,
  NorthernEuropeRegion,
  WesternEuropeRegion,
  EasternEuropeRegion,
  SouthernEuropeRegion,
  SouthAmericaRegion,
  CentralAmericaRegion,
  OceaniaRegion,
];

export const regionalOptions = [
  {
    id: "1",
    name: WestAfricaRegion.regionName,
    image: require("../../../../assets/images/west-africa-region.png"),
  },
  {
    id: "2",
    name: CaribbeanRegion.regionName,
    image: require("../../../../assets/images/caribbean-region.png"),
  },
  // {
  //   id: "2",
  //   name: "N. Africa",
  //   image: require("../../../../assets/images/north-africa-region.png"),
  // },
  // {
  //   id: "3",
  //   name: "South Africa",
  //   image: require("../../../../assets/images/south-africa-region.png"),
  // },
  // {
  //   id: "4",
  //   name: "East Africa",
  //   image: require("../../../../assets/images/east-africa-region.png"),
  // },
  // {
  //   id: "5",
  //   name: "South Asia",
  //   image: require("../../../../assets/images/south-asia-region.png"),
  // },

  // {
  //   id: "7",
  //   name: "South America",
  //   image: require("../../../../assets/images/south-america-region.png"),
  // },
  // {
  //   id: "8",
  //   name: "North America",
  //   image: require("../../../../assets/images/north-america-region.png"),
  // },
  // {
  //   id: "9",
  //   name: "China",
  //   image: require("../../../../assets/images/korea-region.png"),
  // },
];

export const countries: Country[] = [
  // West African Countries
  {
    id: 1,
    region: WestAfricaRegion.regionName,
    countryName: "Nigeria",
    flag: require("../../../../assets/images/flags/ng.webp"),
  },
  {
    id: 2,
    region: WestAfricaRegion.regionName,
    countryName: "Ghana",
    flag: require("../../../../assets/images/flags/gh.webp"),
  },
  {
    id: 3,
    region: WestAfricaRegion.regionName,
    countryName: "Cote d'Ivoire",
    flag: require("../../../../assets/images/flags/ci.webp"),
  },
  {
    id: 4,
    region: WestAfricaRegion.regionName,
    countryName: "Senegal",
    flag: require("../../../../assets/images/flags/sn.webp"),
  },
  {
    id: 5,
    region: WestAfricaRegion.regionName,
    countryName: "Mali",
    flag: require("../../../../assets/images/flags/ml.webp"),
  },
  {
    id: 6,
    region: WestAfricaRegion.regionName,
    countryName: "Niger",
    flag: require("../../../../assets/images/flags/ne.webp"),
  },
  {
    id: 7,
    region: WestAfricaRegion.regionName,
    countryName: "Guinea",
    flag: require("../../../../assets/images/flags/gn.webp"),
  },
  {
    id: 8,
    region: WestAfricaRegion.regionName,
    countryName: "Burkina Faso",
    flag: require("../../../../assets/images/flags/bf.webp"),
  },
  {
    id: 9,
    region: WestAfricaRegion.regionName,
    countryName: "Benin",
    flag: require("../../../../assets/images/flags/bj.webp"),
  },
  {
    id: 10,
    region: WestAfricaRegion.regionName,
    countryName: "Sierra Leone",
    flag: require("../../../../assets/images/flags/sl.webp"),
  },
  {
    id: 11,
    region: WestAfricaRegion.regionName,
    countryName: "Liberia",
    flag: require("../../../../assets/images/flags/lr.webp"),
  },
  {
    id: 12,
    region: WestAfricaRegion.regionName,
    countryName: "Mauritania",
    flag: require("../../../../assets/images/flags/mr.webp"),
  },
  {
    id: 13,
    region: WestAfricaRegion.regionName,
    countryName: "Togo",
    flag: require("../../../../assets/images/flags/tg.webp"),
  },
  {
    id: 14,
    region: WestAfricaRegion.regionName,
    countryName: "Gambia",
    flag: require("../../../../assets/images/flags/gm.webp"),
  },
  {
    id: 15,
    region: WestAfricaRegion.regionName,
    countryName: "Cape Verde",
    flag: require("../../../../assets/images/flags/cv.webp"),
  },
  {
    id: 16,
    region: WestAfricaRegion.regionName,
    countryName: "Guinea-Bissau",
    flag: require("../../../../assets/images/flags/gw.webp"),
  },

  // Caribbean Countries
  {
    id: 17,
    region: CaribbeanRegion.regionName,
    countryName: "Cuba",
    flag: require("../../../../assets/images/flags/cu.webp"),
  },
  {
    id: 18,
    region: CaribbeanRegion.regionName,
    countryName: "Haiti",
    flag: require("../../../../assets/images/flags/ht.webp"),
  },
  {
    id: 19,
    region: CaribbeanRegion.regionName,
    countryName: "Dominican Republic",
    flag: require("../../../../assets/images/flags/do.webp"),
  },
  {
    id: 20,
    region: CaribbeanRegion.regionName,
    countryName: "Jamaica",
    flag: require("../../../../assets/images/flags/jm.webp"),
  },
  {
    id: 21,
    region: CaribbeanRegion.regionName,
    countryName: "Trinidad and Tobago",
    flag: require("../../../../assets/images/flags/tt.webp"),
  },
  {
    id: 22,
    region: CaribbeanRegion.regionName,
    countryName: "Barbados",
    flag: require("../../../../assets/images/flags/bb.webp"),
  },
  {
    id: 23,
    region: CaribbeanRegion.regionName,
    countryName: "Saint Lucia",
    flag: require("../../../../assets/images/flags/lc.webp"),
  },
  {
    id: 24,
    region: CaribbeanRegion.regionName,
    countryName: "Grenada",
    flag: require("../../../../assets/images/flags/gd.webp"),
  },
  {
    id: 25,
    region: CaribbeanRegion.regionName,
    countryName: "Saint Vincent",
    flag: require("../../../../assets/images/flags/vc.webp"),
  },
  {
    id: 26,
    region: CaribbeanRegion.regionName,
    countryName: "Antigua and Barbuda",
    flag: require("../../../../assets/images/flags/ag.webp"),
  },
  {
    id: 27,
    region: CaribbeanRegion.regionName,
    countryName: "Dominica",
    flag: require("../../../../assets/images/flags/dm.webp"),
  },
  {
    id: 28,
    region: CaribbeanRegion.regionName,
    countryName: "Saint Kitts and Nevis",
    flag: require("../../../../assets/images/flags/kn.webp"),
  },
  {
    id: 29,
    region: CaribbeanRegion.regionName,
    countryName: "Bahamas",
    flag: require("../../../../assets/images/flags/bs.webp"),
  },
  {
    id: 30,
    region: CaribbeanRegion.regionName,
    countryName: "Belize",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  // East African Countries
  {
    id: 31,
    region: EastAfricaRegion.regionName,
    countryName: "Kenya",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 32,
    region: EastAfricaRegion.regionName,
    countryName: "Tanzania",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 33,
    region: EastAfricaRegion.regionName,
    countryName: "Uganda",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 34,
    region: EastAfricaRegion.regionName,
    countryName: "Rwanda",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 35,
    region: EastAfricaRegion.regionName,
    countryName: "Burundi",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 36,
    region: EastAfricaRegion.regionName,
    countryName: "South Sudan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 37,
    region: EastAfricaRegion.regionName,
    countryName: "Ethiopia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 38,
    region: EastAfricaRegion.regionName,
    countryName: "Eritrea",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 39,
    region: EastAfricaRegion.regionName,
    countryName: "Somalia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 40,
    region: EastAfricaRegion.regionName,
    countryName: "Djibouti",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 41,
    region: EastAfricaRegion.regionName,
    countryName: "Mozambique",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 42,
    region: EastAfricaRegion.regionName,
    countryName: "Madagascar",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 43,
    region: EastAfricaRegion.regionName,
    countryName: "Malawi",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 44,
    region: EastAfricaRegion.regionName,
    countryName: "Mauritius",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 45,
    region: EastAfricaRegion.regionName,
    countryName: "Comoros",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 46,
    region: EastAfricaRegion.regionName,
    countryName: "Seychelles",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Northern African Countries
  {
    id: 47,
    region: NorthAfricaRegion.regionName,
    countryName: "Egypt",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 48,
    region: NorthAfricaRegion.regionName,
    countryName: "Libya",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 49,
    region: NorthAfricaRegion.regionName,
    countryName: "Tunisia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 50,
    region: NorthAfricaRegion.regionName,
    countryName: "Algeria",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 51,
    region: NorthAfricaRegion.regionName,
    countryName: "Morocco",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 52,
    region: NorthAfricaRegion.regionName,
    countryName: "Sudan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 53,
    region: NorthAfricaRegion.regionName,
    countryName: "Western Sahara",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Central African Countries
  {
    id: 54,
    region: CentralAfricanRegion.regionName,
    countryName: "Angola",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 55,
    region: CentralAfricanRegion.regionName,
    countryName: "Cameroon",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 56,
    region: CentralAfricanRegion.regionName,
    countryName: "Central African Republic",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 57,
    region: CentralAfricanRegion.regionName,
    countryName: "Chad",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 58,
    region: CentralAfricanRegion.regionName,
    countryName: "Congo",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 59,
    region: CentralAfricanRegion.regionName,
    countryName: "Democratic Republic of the Congo",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 60,
    region: CentralAfricanRegion.regionName,
    countryName: "Equatorial Guinea",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 61,
    region: CentralAfricanRegion.regionName,
    countryName: "Gabon",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 62,
    region: CentralAfricanRegion.regionName,
    countryName: "Sao Tome and Principe",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Southern African Countries
  {
    id: 63,
    region: SouthAfricaRegion.regionName,
    countryName: "Botswana",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 64,
    region: SouthAfricaRegion.regionName,
    countryName: "Eswatini",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 65,
    region: SouthAfricaRegion.regionName,
    countryName: "Lesotho",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 66,
    region: SouthAfricaRegion.regionName,
    countryName: "Namibia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 67,
    region: SouthAfricaRegion.regionName,
    countryName: "South Africa",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 68,
    region: SouthAfricaRegion.regionName,
    countryName: "Zambia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 69,
    region: SouthAfricaRegion.regionName,
    countryName: "Zimbabwe",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  // East Asian Countries
  {
    id: 70,
    region: EastAsiaRegion.regionName,
    countryName: "China",
    flag: require("../../../../assets/images/flags/cn.webp"),
  },
  {
    id: 71,
    region: EastAsiaRegion.regionName,
    countryName: "Japan",
    flag: require("../../../../assets/images/flags/jp.webp"),
  },
  {
    id: 72,
    region: EastAsiaRegion.regionName,
    countryName: "South Korea",
    flag: require("../../../../assets/images/flags/kr.webp"),
  },
  {
    id: 73,
    region: EastAsiaRegion.regionName,
    countryName: "Taiwan",
    flag: require("../../../../assets/images/flags/tw.webp"),
  },
  {
    id: 74,
    region: EastAsiaRegion.regionName,
    countryName: "Mongolia",
    flag: require("../../../../assets/images/flags/mn.webp"),
  },

  // Southeast Asian Countries
  {
    id: 75,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Indonesia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 76,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Malaysia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 77,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Philippines",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 78,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Singapore",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 79,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Thailand",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 80,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Vietnam",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 81,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Myanmar (Burma)",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 82,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Cambodia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 83,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Laos",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 84,
    region: SoutheastAsiaRegion.regionName,
    countryName: "Brunei",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 85,
    region: SoutheastAsiaRegion.regionName,
    countryName: "East Timor",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // South Asian Countries
  {
    id: 86,
    region: SouthAsiaRegion.regionName,
    countryName: "India",
    flag: require("../../../../assets/images/flags/in.webp"),
  },
  {
    id: 87,
    region: SouthAsiaRegion.regionName,
    countryName: "Pakistan",
    flag: require("../../../../assets/images/flags/pk.webp"),
  },
  {
    id: 88,
    region: SouthAsiaRegion.regionName,
    countryName: "Bangladesh",
    flag: require("../../../../assets/images/flags/bd.webp"),
  },
  {
    id: 89,
    region: SouthAsiaRegion.regionName,
    countryName: "Sri Lanka",
    flag: require("../../../../assets/images/flags/lk.webp"),
  },
  {
    id: 90,
    region: SouthAsiaRegion.regionName,
    countryName: "Nepal",
    flag: require("../../../../assets/images/flags/np.webp"),
  },
  {
    id: 91,
    region: SouthAsiaRegion.regionName,
    countryName: "Bhutan",
    flag: require("../../../../assets/images/flags/bt.webp"),
  },
  {
    id: 92,
    region: SouthAsiaRegion.regionName,
    countryName: "Maldives",
    flag: require("../../../../assets/images/flags/mv.webp"),
  },
  {
    id: 93,
    region: SouthAsiaRegion.regionName,
    countryName: "Afghanistan",
    flag: require("../../../../assets/images/flags/af.webp"),
  },

  // Central Asian Countries
  {
    id: 94,
    region: CentralAsiaRegion.regionName,
    countryName: "Kazakhstan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 95,
    region: CentralAsiaRegion.regionName,
    countryName: "Uzbekistan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 96,
    region: CentralAsiaRegion.regionName,
    countryName: "Turkmenistan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 97,
    region: CentralAsiaRegion.regionName,
    countryName: "Kyrgyzstan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 98,
    region: CentralAsiaRegion.regionName,
    countryName: "Tajikistan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Western Asian Countries (Middle East)
  {
    id: 99,
    region: WesternAsiaRegion.regionName,
    countryName: "Saudi Arabia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 100,
    region: WesternAsiaRegion.regionName,
    countryName: "Iran",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 101,
    region: WesternAsiaRegion.regionName,
    countryName: "Iraq",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 102,
    region: WesternAsiaRegion.regionName,
    countryName: "Israel",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 103,
    region: WesternAsiaRegion.regionName,
    countryName: "Turkey",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 104,
    region: WesternAsiaRegion.regionName,
    countryName: "United Arab Emirates",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 105,
    region: WesternAsiaRegion.regionName,
    countryName: "Qatar",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 106,
    region: WesternAsiaRegion.regionName,
    countryName: "Kuwait",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 107,
    region: WesternAsiaRegion.regionName,
    countryName: "Bahrain",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 108,
    region: WesternAsiaRegion.regionName,
    countryName: "Oman",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 109,
    region: WesternAsiaRegion.regionName,
    countryName: "Lebanon",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 110,
    region: WesternAsiaRegion.regionName,
    countryName: "Jordan",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 111,
    region: WesternAsiaRegion.regionName,
    countryName: "Syria",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 112,
    region: WesternAsiaRegion.regionName,
    countryName: "Yemen",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Northern European Countries
  {
    id: 113,
    region: NorthernEuropeRegion.regionName,
    countryName: "Denmark",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 114,
    region: NorthernEuropeRegion.regionName,
    countryName: "Estonia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 115,
    region: NorthernEuropeRegion.regionName,
    countryName: "Finland",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 116,
    region: NorthernEuropeRegion.regionName,
    countryName: "Iceland",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 117,
    region: NorthernEuropeRegion.regionName,
    countryName: "Ireland",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 118,
    region: NorthernEuropeRegion.regionName,
    countryName: "Latvia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 119,
    region: NorthernEuropeRegion.regionName,
    countryName: "Lithuania",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 120,
    region: NorthernEuropeRegion.regionName,
    countryName: "Norway",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 121,
    region: NorthernEuropeRegion.regionName,
    countryName: "Sweden",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 122,
    region: NorthernEuropeRegion.regionName,
    countryName: "United Kingdom",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Western European Countries
  {
    id: 123,
    region: WesternEuropeRegion.regionName,
    countryName: "Austria",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 124,
    region: WesternEuropeRegion.regionName,
    countryName: "Belgium",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 125,
    region: WesternEuropeRegion.regionName,
    countryName: "France",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 126,
    region: WesternEuropeRegion.regionName,
    countryName: "Germany",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 127,
    region: WesternEuropeRegion.regionName,
    countryName: "Liechtenstein",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 128,
    region: WesternEuropeRegion.regionName,
    countryName: "Luxembourg",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 129,
    region: WesternEuropeRegion.regionName,
    countryName: "Monaco",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 130,
    region: WesternEuropeRegion.regionName,
    countryName: "Netherlands",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 131,
    region: WesternEuropeRegion.regionName,
    countryName: "Switzerland",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Eastern European Countries
  {
    id: 132,
    region: EasternEuropeRegion.regionName,
    countryName: "Belarus",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 133,
    region: EasternEuropeRegion.regionName,
    countryName: "Bulgaria",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 134,
    region: EasternEuropeRegion.regionName,
    countryName: "Czech Republic",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 135,
    region: EasternEuropeRegion.regionName,
    countryName: "Hungary",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 136,
    region: EasternEuropeRegion.regionName,
    countryName: "Moldova",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 137,
    region: EasternEuropeRegion.regionName,
    countryName: "Poland",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 138,
    region: EasternEuropeRegion.regionName,
    countryName: "Romania",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 139,
    region: EasternEuropeRegion.regionName,
    countryName: "Russia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 140,
    region: EasternEuropeRegion.regionName,
    countryName: "Slovakia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 141,
    region: EasternEuropeRegion.regionName,
    countryName: "Ukraine",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Southern European Countries
  {
    id: 142,
    region: SouthernEuropeRegion.regionName,
    countryName: "Albania",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 143,
    region: SouthernEuropeRegion.regionName,
    countryName: "Andorra",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 144,
    region: SouthernEuropeRegion.regionName,
    countryName: "Bosnia and Herzegovina",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 145,
    region: SouthernEuropeRegion.regionName,
    countryName: "Croatia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 146,
    region: SouthernEuropeRegion.regionName,
    countryName: "Greece",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 147,
    region: SouthernEuropeRegion.regionName,
    countryName: "Italy",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 148,
    region: SouthernEuropeRegion.regionName,
    countryName: "Kosovo",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 149,
    region: SouthernEuropeRegion.regionName,
    countryName: "Malta",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 150,
    region: SouthernEuropeRegion.regionName,
    countryName: "Montenegro",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 151,
    region: SouthernEuropeRegion.regionName,
    countryName: "North Macedonia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 152,
    region: SouthernEuropeRegion.regionName,
    countryName: "Portugal",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 153,
    region: SouthernEuropeRegion.regionName,
    countryName: "San Marino",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 154,
    region: SouthernEuropeRegion.regionName,
    countryName: "Serbia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 155,
    region: SouthernEuropeRegion.regionName,
    countryName: "Slovenia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 156,
    region: SouthernEuropeRegion.regionName,
    countryName: "Spain",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 157,
    region: SouthernEuropeRegion.regionName,
    countryName: "Vatican City",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Central American Countries including Mexico
  {
    id: 158,
    region: CentralAmericaRegion.regionName,
    countryName: "Mexico",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 159,
    region: CentralAmericaRegion.regionName,
    countryName: "Guatemala",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 160,
    region: CentralAmericaRegion.regionName,
    countryName: "El Salvador",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 161,
    region: CentralAmericaRegion.regionName,
    countryName: "Honduras",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 162,
    region: CentralAmericaRegion.regionName,
    countryName: "Nicaragua",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 163,
    region: CentralAmericaRegion.regionName,
    countryName: "Costa Rica",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 164,
    region: CentralAmericaRegion.regionName,
    countryName: "Panama",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // South American Countries
  {
    id: 166,
    region: SouthAmericaRegion.regionName,
    countryName: "Argentina",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 167,
    region: SouthAmericaRegion.regionName,
    countryName: "Bolivia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 168,
    region: SouthAmericaRegion.regionName,
    countryName: "Brazil",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 169,
    region: SouthAmericaRegion.regionName,
    countryName: "Chile",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 170,
    region: SouthAmericaRegion.regionName,
    countryName: "Colombia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 171,
    region: SouthAmericaRegion.regionName,
    countryName: "Ecuador",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 172,
    region: SouthAmericaRegion.regionName,
    countryName: "Guyana",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 173,
    region: SouthAmericaRegion.regionName,
    countryName: "Paraguay",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 174,
    region: SouthAmericaRegion.regionName,
    countryName: "Peru",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 175,
    region: SouthAmericaRegion.regionName,
    countryName: "Suriname",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 176,
    region: SouthAmericaRegion.regionName,
    countryName: "Uruguay",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 177,
    region: SouthAmericaRegion.regionName,
    countryName: "Venezuela",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },

  // Oceanian Countries
  {
    id: 178,
    region: OceaniaRegion.regionName,
    countryName: "Australia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 179,
    region: OceaniaRegion.regionName,
    countryName: "Fiji",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 180,
    region: OceaniaRegion.regionName,
    countryName: "Kiribati",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 181,
    region: OceaniaRegion.regionName,
    countryName: "Marshall Islands",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 182,
    region: OceaniaRegion.regionName,
    countryName: "Micronesia",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 183,
    region: OceaniaRegion.regionName,
    countryName: "Nauru",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 184,
    region: OceaniaRegion.regionName,
    countryName: "New Zealand",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 185,
    region: OceaniaRegion.regionName,
    countryName: "Palau",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 186,
    region: OceaniaRegion.regionName,
    countryName: "Papua New Guinea",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 187,
    region: OceaniaRegion.regionName,
    countryName: "Samoa",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 188,
    region: OceaniaRegion.regionName,
    countryName: "Solomon Islands",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 189,
    region: OceaniaRegion.regionName,
    countryName: "Tonga",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 190,
    region: OceaniaRegion.regionName,
    countryName: "Tuvalu",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
  {
    id: 191,
    region: OceaniaRegion.regionName,
    countryName: "Vanuatu",
    flag: require("../../../../assets/images/flags/bz.webp"),
  },
];
