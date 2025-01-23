


import { Directive, Injector } from '@angular/core';
import { MessageService } from 'primeng/api';

import { BlockUIService } from 'src/app/services/blockui.service';
import { MessageErrorType } from 'src/app/models/application.enum';
import { GenericDestroy } from './destroy.generic';

@Directive()
export class GenericEffect extends GenericDestroy {
  private messageService: MessageService;
  protected blockUIService: BlockUIService;

  constructor(injector: Injector) {
    super();
    this.messageService = injector.get(MessageService);
    this.blockUIService = injector.get(BlockUIService);
  }

  protected showLoader(payload: { searchText: string }): void {
    if (payload.searchText)
      this.blockUIService.setBlockUI(true);
  }

  protected getNotificationMessage(response: any, message?: string, life: number = 2000): void {
    const errorList: any[] = Object.prototype.hasOwnProperty.call(response, 'errors') ? response?.errors : []
    const hasError = errorList?.length && errorList?.length > 0
      || response?.status && response?.status === 401
      || response?.status && response?.status === 500
      || response?.status && response?.status === 504
      || response?.errorMessage;
    const type = hasError ? MessageErrorType.Error : MessageErrorType.Success;
    const summary = message
      ? message
      : (hasError ? 'RequestError' : 'SavedSuccessfully');
    this.messageService.add({ severity: type, summary, life });
  }

  protected showError(summary: string): void {
    return this.messageService.add({ severity: 'error', summary });
  }
}