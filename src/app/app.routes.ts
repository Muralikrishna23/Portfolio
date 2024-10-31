import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"projects",component:ProjectsComponent},
    {path:"skills", component:SkillsComponent},
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"footer", component:FooterComponent}
];
@NgModule({
    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
   
})
export class AppRoutingModule{}
