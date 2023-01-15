export class FileVersion{
    versionId: number;
    fileContent: string;
    lastUpdatedAt: Date;


    constructor(versionId: number, fileContent: string, lastUpdatedAt: Date) {
        this.versionId = versionId;
        this.fileContent = fileContent;
        this.lastUpdatedAt = lastUpdatedAt;
    }


}