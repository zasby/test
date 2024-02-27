/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DomainEventRunAtTypes } from './DomainEventRunAtTypes';

export type DomainEventBase = {
    readonly dateOccurred?: string;
    runsAt?: DomainEventRunAtTypes;
}
