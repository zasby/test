/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { UserAvatarDto } from "./UserAvatarDto";

export type AutocompleteModel = {
    id?: number;
    text?: string | null;
}

export type AutocompleteUserModel = AutocompleteModel & {
    avatar?: UserAvatarDto;
    color?: string;
    isCurrent?: boolean;
    avatarText?: string | null | (string | undefined | null)[];
    disabled?: boolean;
}
