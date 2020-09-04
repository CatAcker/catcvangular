import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from "igniteui-angular";

@Component({
  selector: 'app-defaultview',
  templateUrl: './defaultview.component.html',
  styleUrls: ['./defaultview.component.css']
})
export class DefaultviewComponent {
  public navItems = [
    { name: "account_circle", text: "Avatar" },
    { name: "error", text: "Badge" },
    { name: "group_work", text: "Button Group" }
];

public selected = "Avatar";

@ViewChild(IgxNavigationDrawerComponent, { static: true })
public drawer: IgxNavigationDrawerComponent;

public navigate(item) {
    this.selected = item.text;
    this.drawer.close();
}
}