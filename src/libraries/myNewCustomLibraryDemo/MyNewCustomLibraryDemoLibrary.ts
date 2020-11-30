export class MyNewCustomLibraryDemoLibrary {
  public name(): string {
    return 'MyNewCustomLibraryDemoLibrary';
  }

  public getCurrentTime(): string {
    
    let currentDate: Date;
    let str: string;

    currentDate = new Date();

    str = "<br>Current date : " + currentDate.toDateString();
    str += "<br>Current time : " + currentDate.toTimeString();

    return(str);
  }
}
