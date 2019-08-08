
export class LoggingService {

  logStatusChange(status: string) {
    console.log('LoggingService: A server status changed. New Status: ' + status);
  }

}
