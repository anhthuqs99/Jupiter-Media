import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "home",
		loadChildren: () =>
			import("./pages/home-page/home-page.module").then(
				(m) => m.HomePageModule
			),
	},
	{ path: "", redirectTo: "home", pathMatch: "full" },
];
