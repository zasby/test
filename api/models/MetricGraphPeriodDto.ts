/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSource2UserQuotaDto } from './MetricSource2UserQuotaDto';
import type { MetricSource2UserValueDto } from './MetricSource2UserValueDto';

export type MetricGraphPeriodDto = {
    label?: string | null;
    date?: string;
    value?: MetricSource2UserValueDto;
    quota?: MetricSource2UserQuotaDto;
}
