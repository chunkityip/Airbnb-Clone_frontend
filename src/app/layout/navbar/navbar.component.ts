import {Component, effect, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "./category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";
import {ToastService} from "../toast.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  location = "Anywhere";
  guest = "Add guests";
  dates = "Any week";

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
  }

  private fetchMenu(): MenuItem[] {
    // if (this.authService.isAuthenticated()) {
    //   return [
    //     {
    //       label: "My properties",
    //       routerLink: "landlord/properties",
    //       visible: this.hasToBeLandlord(),
    //     },
    //     {
    //       label: "My booking",
    //       routerLink: "booking",
    //     },
    //     {
    //       label: "My reservation",
    //       routerLink: "landlord/reservation",
    //       visible: this.hasToBeLandlord(),
    //     },
    //     {
    //       label: "Log out",
    //       command: this.logout
    //     },
    //   ]
    // } else {
      return [
        {
          label: "Sign up",
          styleClass: "font-bold",
          // command: this.login
        },
        {
          label: "Log in",
          // command: this.login
        }
      ]
    }
  }


