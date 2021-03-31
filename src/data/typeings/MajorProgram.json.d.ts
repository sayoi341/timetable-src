declare  module '../MajorProgram.json' {
    interface CP {
        [Class: string]: {[Day: string]: {[Time:string]: {[Str:string]: string}}}
    }

    const data:CP;
    export default data;
}
