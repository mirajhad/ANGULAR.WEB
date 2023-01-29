import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Common/footer/footer.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { SidemenuComponent } from './Components/Common/sidemenu/sidemenu.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ProjectComponent } from './Components/project/project.component';
import { SkillsComponent } from './Components/skills/skills.component';

// MODULES
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
