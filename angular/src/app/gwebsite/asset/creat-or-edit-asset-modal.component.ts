import {
    Component,
    ElementRef,
    EventEmitter,
    Injector,
    Output,
    ViewChild
} from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";
import { ModalDirective } from "ngx-bootstrap";
import {
    AssetServiceProxy,
    AssetInput
} from "@shared/service-proxies/service-proxies";

@Component({
    selector: "createOrEditAssetModal",
    templateUrl: "./creat-or-edit-asset-modal.component.html"
})
export class CreateOrEditAssetModalComponent extends AppComponentBase {
    @ViewChild("createOrEditModal") modal: ModalDirective;
    @ViewChild("assetCombobox") assetCombobox: ElementRef;
    @ViewChild("iconCombobox") iconCombobox: ElementRef;
    @ViewChild("dateInput") dateInput: ElementRef;

    /**
     * @Output dùng để public event cho component khác xử lý
     */
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    saving = false;

    asset: AssetInput = new AssetInput();

    constructor(injector: Injector, private _AssetService: AssetServiceProxy) {
        super(injector);
    }

    show(assetId?: number | null | undefined): void {
        this.saving = false;

        this._AssetService.getAssetForEdit(assetId).subscribe(result => {
            this.asset = result;
            this.modal.show();
        });
    }

    save(): void {
        let input = this.asset;
        this.saving = true;
        this._AssetService.createOrEditAsset(input).subscribe(result => {
            this.notify.info(this.l("SavedSuccessfully"));
            this.close();
        });
    }

    close(): void {
        this.modal.hide();
        this.modalSave.emit(null);
    }
}
