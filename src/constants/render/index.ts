import { ACTIVITY_CATEGORY_ENUM, ACTIVITY_TYPE_ENUM } from "../enum/activity";
import { USER_LEVEL_ENUM } from "../enum/profile";

export function renderUserLevel(level: USER_LEVEL_ENUM | undefined) {
  switch (level) {
    case USER_LEVEL_ENUM.JAMAAH:
      return "Jamaah";
    case USER_LEVEL_ENUM.AKTIVIS:
      return "Aktivis";
    case USER_LEVEL_ENUM.AKTIVIS_KK:
      return "Aktivis KK";
    case USER_LEVEL_ENUM.KADER:
      return "Kader";
    case USER_LEVEL_ENUM.KADER_INVENTRA:
      return "Kader Inventra";
    case USER_LEVEL_ENUM.KADER_KOMPROF:
      return "Kader Komprof";
    case USER_LEVEL_ENUM.KADER_LANJUT:
      return "Kader Lanjut";
    default:
      "-";
  }
}

export function renderActivityType(level: ACTIVITY_TYPE_ENUM) {
  switch (level) {
    case ACTIVITY_TYPE_ENUM.COMMON:
      return "Umum";
    case ACTIVITY_TYPE_ENUM.REGISTRATION_ONLY:
      return "Umum - Hanya Pendaftaran";
    case ACTIVITY_TYPE_ENUM.SSC:
      return "Spiritual Camp";
    case ACTIVITY_TYPE_ENUM.KK:
      return "Kelompok Keluarga";
    case ACTIVITY_TYPE_ENUM.LMD:
      return "LMD";
    case ACTIVITY_TYPE_ENUM.INVENTRA:
      return "Inventra";
    case ACTIVITY_TYPE_ENUM.KOMPROF:
      return "Komunitas Profesi";
    case ACTIVITY_TYPE_ENUM.SPECTRA:
      return "SPECTRA";
    default:
      return "-";
  }
}

export function renderActivityCategory(level: ACTIVITY_CATEGORY_ENUM) {
  switch (level) {
    case ACTIVITY_CATEGORY_ENUM.PELATIHAN:
      return "Pelatihan";
    case ACTIVITY_CATEGORY_ENUM.KEASRAMAAN:
      return "Keasramaan";
    case ACTIVITY_CATEGORY_ENUM.KADERISASI:
      return "Kaderisasi";
    case ACTIVITY_CATEGORY_ENUM.AKTUALISASI_DIRI:
      return "Aktualisasi Diri";
    case ACTIVITY_CATEGORY_ENUM.KEALUMNIAN:
      return "Kealumnian";
    default:
      return "-";
  }
}

export function renderNotification(code: string) {
  switch (code) {
    case "LOGIN_SUCCESS":
      return "Anda berhasil masuk";
    case "USER_NOT_FOUND":
      return "Anda tidak terdaftar";
    case "UPDATE_DATA_SUCCESS":
      return "Data berhasil diubah";
    default:
      return code;
  }
}
