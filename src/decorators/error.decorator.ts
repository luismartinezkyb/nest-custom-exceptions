import { Inject } from '@nestjs/common';
import { ErrorHandlerService } from 'src/users/error-handler.service';

export function ErrorHandlerResponse() {
  const injectErrorHandlerService = Inject(ErrorHandlerService);
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    injectErrorHandlerService(target, 'handlerError');
    const originalMethod = propertyDescriptor.value;

    propertyDescriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error: unknown) {
        // console.log({ error });
        if (error instanceof Error) {
          const errorHandlerService: ErrorHandlerService = this.handlerError;
          // console.log({ errorHandlerService });
          return errorHandlerService.handleError(error, propertyKey);
        }
        throw error;
      }
    };
    return propertyDescriptor;
  };
}
