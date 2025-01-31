import { AddressAction } from "./address";
import { Action, ActionSchemaAny } from "./base";
import { GetBalanceAction } from "./get_balance";
import { TransferAction } from "./transfer";

export function getAllActions(): Action<ActionSchemaAny>[] {
    return [new AddressAction(), new GetBalanceAction(), new TransferAction()];
}

export const ACTIONS = getAllActions();

export { Action, ActionSchemaAny };
