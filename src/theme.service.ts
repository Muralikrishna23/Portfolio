import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkThemeClass = 'dark-theme';
  private lightThemeClass = 'light-theme';

  constructor() { }
  

  enableDarkTheme() {
    document.body.classList.remove(this.lightThemeClass);
    document.body.classList.add(this.darkThemeClass);
  }

  enableLightTheme() {
    document.body.classList.remove(this.darkThemeClass);
    document.body.classList.add(this.lightThemeClass);
  }

  toggleTheme(isDarkMode: boolean) {
    isDarkMode ? this.enableDarkTheme() : this.enableLightTheme();
  }
  
}

