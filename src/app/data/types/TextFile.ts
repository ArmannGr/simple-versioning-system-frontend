import {FileVersion} from "./FileVersion";

export class TextFile{
    name: string;
    createdAt: Date;
    versions: FileVersion[];
    versionCount: number;
    locked: boolean;

    constructor(name:string, createdAt:Date, versions:FileVersion[],versionCount:number, locked:boolean) {
    this.name = name;
    this.createdAt = createdAt;
    this.versions = versions;
    this.versionCount = versionCount;
    this.locked = locked;

    }




}