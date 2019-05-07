import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuClientComponent } from "@app/gwebsite/menu-client/menu-client.component";
import { DemoModelComponent } from "./demo-model/demo-model.component";
import { CustomerComponent } from "./customer/customer.component";
import { AssetComponent } from "./asset/asset.component";
import { AssetRentComponent } from "./assetrent/assetrent.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                children: [
                    {
                        path: "menu-client",
                        component: MenuClientComponent,
                        data: { permission: "Pages.Administration.MenuClient" }
                    }
                ]
            },
            {
                path: "",
                children: [
                    {
                        path: "demo-model",
                        component: DemoModelComponent,
                        data: { permission: "Pages.Administration.DemoModel" }
                    }
                ]
            },
            {
                path: "",
                children: [
                    {
                        path: "customer",
                        component: CustomerComponent,
                        data: { permission: "Pages.Administration.Customer" }
                    }
                ]
            },
            {
                path: "",
                children: [
                    {
                        path: "asset",
                        component: AssetComponent,
                        data: { permission: "Pages.Administration.Asset" }
                    }
                ]
            },
            {
                path: "",
                children: [
                    {
                        path: "assetrent",
                        component: AssetRentComponent,
                        data: { permission: "Pages.Administration.AssetRent" }
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class GWebsiteRoutingModule {}
