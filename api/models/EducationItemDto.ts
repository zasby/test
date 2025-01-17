/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EducationItemContent = {
    name: string | null;
    description: string | null;
    videoId: string | null;
}

export type EducationItemDto = {
    id?: number;
    name?: string | null;
    description?: string | null;
    videoId?: string | null;
    isAvailable?: boolean;
    key?: string | null;
    children?: EducationItemDto[] | null;
    progress?: number;
    content: {
        [key: string]: EducationItemContent,
    };
}

