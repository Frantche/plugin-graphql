import Model from "../orm/model";

export enum ConnectionMode {
  AUTO,
  PLAIN,
  NODES,
  EDGES,
  ITEMS
}

export enum ArgumentMode {
  TYPE,
  LIST
}

export default interface Adapter {
  getRootQueryName(): string;
  getRootMutationName(): string;

  getNameForPersist(model: Model): string;
  getNameForPush(model: Model): string;
  getNameForDestroy(model: Model): string;
  getNameForFetch(model: Model, plural: boolean): string;

  getConnectionMode(): ConnectionMode;

  getArgumentMode(): ArgumentMode;

  getFilterTypeName(model: Model): string;
  getInputTypeName(model: Model): string;

  prepareSchemaTypeName(name: string): string;
}
