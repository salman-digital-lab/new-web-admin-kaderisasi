import { notification } from "antd";
import { AxiosError } from "axios";

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    const errorMessage = error.message;
    notification.error({
      message: "Gagal",
      description: `Terjadi kegagalan: ${errorMessage}`,
    });
  } else if (isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      notification.error({
        message: "Gagal",
        description: `Server membalas dengan: ${axiosError.response.data}. Kode error: ${axiosError.response.status}`,
      });
    } else if (axiosError.request) {
      notification.error({
        message: "Gagal",
        description:
          "Tidak dapat menghubungi server. Silahkan cek koneksi internet anda.",
      });
    } else {
      notification.error({
        message: "Gagal",
        description:
          "Telah terjadi kegagalan, silahkan ulangi setelah beberapa saat",
      });
    }
  } else {
    console.error("Unknown error:", error);
    notification.error({
      message: "Gagal",
      description:
        "Telah terjadi kegagalan, silahkan ulangi setelah beberapa saat",
    });
  }
};

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}
