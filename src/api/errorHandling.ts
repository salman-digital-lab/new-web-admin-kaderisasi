import { notification } from "antd";
import { AxiosError } from "axios";

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      if (axiosError.response.status === 401) {
        notification.error({
          message: "Gagal",
          description: `Anda tidak memiliki akses`,
        });

        window?.location?.replace(window.location.origin + "/login");
      } else if (
        axiosError.response.data &&
        typeof axiosError.response.data === "object" &&
        "message" in axiosError.response.data
      ) {
        notification.error({
          message: "Gagal",
          description: `Server membalas dengan: ${axiosError.response.data.message}. Kode error: ${axiosError.response.status}`,
        });
      } else {
        notification.error({
          message: "Gagal",
          description: `Server membalas dengan: ${axiosError.message}. Kode error: ${axiosError.response.status}`,
        });
      }
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
  } else if (error instanceof Error) {
    const errorMessage = error.message;
    notification.error({
      message: "Gagal",
      description: `Terjadi kegagalan: ${errorMessage}`,
    });
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
