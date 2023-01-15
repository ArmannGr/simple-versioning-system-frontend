export class FileVersion{
    versionId: number;
    fileContent: string;
    lastUpdatedAt: string;


    constructor(versionId: number, fileContent: string, lastUpdatedAt: string) {
        this.versionId = versionId;
        this.fileContent = fileContent;
        this.lastUpdatedAt = lastUpdatedAt;
    }


}