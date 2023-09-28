/** @odoo-module **/

import {ConfirmationDialog} from "@web/core/confirmation_dialog/confirmation_dialog";
import {useSetupView} from "@web/views/view_hook";
import { pick } from "@web/core/utils/objects";
import {patch} from "@web/core/utils/patch";
import {FormController} from "@web/views/form/form_controller";

patch(FormController.prototype, 'FormController', {

    async edit() {
        this.canEdit = this.props.preventEdit;
        await this.model.root.switchMode("edit");
    },

    async saveButtonClicked(params = {}) {
        await this.model.root.switchMode("readonly");
        this.canEdit = !this.props.preventEdit;

        this.disableButtons();
        const record = this.model.root;
        let saved = false;

        if (this.props.saveRecord) {
            saved = await this.props.saveRecord(record, params);
        } else {
            saved = await record.save();
        }
        this.enableButtons();
        if (saved && this.props.onSave) {
            this.props.onSave(record, params);
        }

        return saved;
    },

    async discard() {
        await this.model.root.switchMode("readonly");
        this.canEdit = !this.props.preventEdit;

        if (this.props.discardRecord) {
            this.props.discardRecord(this.model.root);
            return;
        }
        await this.model.root.discard();
        if (this.props.onDiscard) {
            this.props.onDiscard(this.model.root);
        }
        if (this.model.root.isVirtual || this.env.inDialog) {
            this.env.config.historyBack();
        }
    },


    async beforeLeave() {
        if (this.model.root.isDirty) {
            let _continue = true;
            await new Promise((resolve) => {
                this.dialogService.add(ConfirmationDialog, {
                    title: this.env._t("Unsaved changes"),
                    body: this.env._t(
                        "The record has been modified, your changes will be discarded. Do you want to proceed ?"
                    ),
                    confirm: () => {
                        _continue = true;
                        resolve();
                    },
                    cancel: () => {
                        _continue = false;
                        resolve();
                    },
                })
            })
            return _continue;
        }
    }

})

FormController.defaultProps = {
    preventCreate: false,
    preventEdit: true,
}