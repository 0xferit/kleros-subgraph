// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PolicyUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PolicyUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PolicyUpdate entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PolicyUpdate", id.toString(), this);
  }

  static load(id: string): PolicyUpdate | null {
    return store.get("PolicyUpdate", id) as PolicyUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _subcourtID(): BigInt {
    let value = this.get("_subcourtID");
    return value.toBigInt();
  }

  set _subcourtID(value: BigInt) {
    this.set("_subcourtID", Value.fromBigInt(value));
  }

  get _policy(): string {
    let value = this.get("_policy");
    return value.toString();
  }

  set _policy(value: string) {
    this.set("_policy", Value.fromString(value));
  }

  get _contractAddress(): Bytes {
    let value = this.get("_contractAddress");
    return value.toBytes();
  }

  set _contractAddress(value: Bytes) {
    this.set("_contractAddress", Value.fromBytes(value));
  }

  get _timestamp(): BigInt {
    let value = this.get("_timestamp");
    return value.toBigInt();
  }

  set _timestamp(value: BigInt) {
    this.set("_timestamp", Value.fromBigInt(value));
  }

  get _blockNumber(): BigInt {
    let value = this.get("_blockNumber");
    return value.toBigInt();
  }

  set _blockNumber(value: BigInt) {
    this.set("_blockNumber", Value.fromBigInt(value));
  }
}
