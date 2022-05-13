import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HeaderComponent, ButtonComponent, TasksComponent, TaskItemComponent, AddTaskComponent, AboutComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
