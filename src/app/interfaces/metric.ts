import { ICase } from './case';

export interface IStateMetrics {
    cases: ICase[];
    totalCases: number;
    totalNewCases: number;
    totalContacted: number;
    totalConfirmed: number;
    totalQuanrantined: number;
    totalFake: number;
}
