import { USER_LEVEL_ENUM } from '../enum/profile';


export function getUserLevel (level: USER_LEVEL_ENUM) {

  switch (level) {
    case USER_LEVEL_ENUM.JAMAAH:
      return 'Jamaah';
    case USER_LEVEL_ENUM.AKTIVIS:
      return 'Aktivis';
    case USER_LEVEL_ENUM.AKTIVIS_KK:
      return 'Aktivis KK';
    case USER_LEVEL_ENUM.KADER:
      return 'Kader';
    case USER_LEVEL_ENUM.KADER_INVENTRA:
      return 'Kader Inventra';
    case USER_LEVEL_ENUM.KADER_KOMPROF:
      return 'Kader Komprof';
    case USER_LEVEL_ENUM.KADER_LANJUT:
      return 'Kader Lanjut';
    default:
      'Not Available';
  }
}