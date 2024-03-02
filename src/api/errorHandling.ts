import { message } from 'antd';
import { AxiosError } from 'axios';


export const handleError = (error : unknown) => {
    if (error instanceof Error) {
        const errorMessage = error.message;
        message.error(`An error occurred: ${errorMessage}`);
      } else if (isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          message.error(`Server responded with: ${axiosError.response.data}. Status code: ${axiosError.response.status}`);
        } else if (axiosError.request) {
          message.error('No response received from server. Please check your internet connection.');
        } else {
          console.error('Error:', axiosError.message);
          message.error(`An error occurred. Please try again later.`);
        }
      } else {
        console.error('Unknown error:', error);
        message.error('An unknown error occurred. Please try again later.');
      }
};

function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }
