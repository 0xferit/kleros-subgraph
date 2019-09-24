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

export class NewPolicy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewPhase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewPhase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewPolicy", id.toString(), this);
  }

  static load(id: string): NewPolicy | null {
    return store.get("NewPolicy", id) as NewPolicy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _phase(): i32 {
    let value = this.get("_phase");
    return value.toI32();
  }

  set _phase(value: i32) {
    this.set("_phase", Value.fromI32(value));
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

export class NewPeriod extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewPeriod entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewPeriod entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewPeriod", id.toString(), this);
  }

  static load(id: string): NewPeriod | null {
    return store.get("NewPeriod", id) as NewPeriod | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _period(): i32 {
    let value = this.get("_period");
    return value.toI32();
  }

  set _period(value: i32) {
    this.set("_period", Value.fromI32(value));
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

export class StakeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeSet", id.toString(), this);
  }

  static load(id: string): StakeSet | null {
    return store.get("StakeSet", id) as StakeSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _address(): Bytes {
    let value = this.get("_address");
    return value.toBytes();
  }

  set _address(value: Bytes) {
    this.set("_address", Value.fromBytes(value));
  }

  get _subcourtID(): BigInt {
    let value = this.get("_subcourtID");
    return value.toBigInt();
  }

  set _subcourtID(value: BigInt) {
    this.set("_subcourtID", Value.fromBigInt(value));
  }

  get _stake(): BigInt {
    let value = this.get("_stake");
    return value.toBigInt();
  }

  set _stake(value: BigInt) {
    this.set("_stake", Value.fromBigInt(value));
  }

  get _newTotalStake(): BigInt {
    let value = this.get("_newTotalStake");
    return value.toBigInt();
  }

  set _newTotalStake(value: BigInt) {
    this.set("_newTotalStake", Value.fromBigInt(value));
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

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Draw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Draw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Draw", id.toString(), this);
  }

  static load(id: string): Draw | null {
    return store.get("Draw", id) as Draw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _address(): Bytes {
    let value = this.get("_address");
    return value.toBytes();
  }

  set _address(value: Bytes) {
    this.set("_address", Value.fromBytes(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _appeal(): BigInt {
    let value = this.get("_appeal");
    return value.toBigInt();
  }

  set _appeal(value: BigInt) {
    this.set("_appeal", Value.fromBigInt(value));
  }

  get _voteID(): BigInt {
    let value = this.get("_voteID");
    return value.toBigInt();
  }

  set _voteID(value: BigInt) {
    this.set("_voteID", Value.fromBigInt(value));
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

export class TokenAndETHShift extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenAndETHShift entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenAndETHShift entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenAndETHShift", id.toString(), this);
  }

  static load(id: string): TokenAndETHShift | null {
    return store.get("TokenAndETHShift", id) as TokenAndETHShift | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _address(): Bytes {
    let value = this.get("_address");
    return value.toBytes();
  }

  set _address(value: Bytes) {
    this.set("_address", Value.fromBytes(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _tokenAmount(): BigInt {
    let value = this.get("_tokenAmount");
    return value.toBigInt();
  }

  set _tokenAmount(value: BigInt) {
    this.set("_tokenAmount", Value.fromBigInt(value));
  }

  get _ETHAmount(): BigInt {
    let value = this.get("_ETHAmount");
    return value.toBigInt();
  }

  set _ETHAmount(value: BigInt) {
    this.set("_ETHAmount", Value.fromBigInt(value));
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

export class DisputeCreation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DisputeCreation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DisputeCreation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DisputeCreation", id.toString(), this);
  }

  static load(id: string): DisputeCreation | null {
    return store.get("DisputeCreation", id) as DisputeCreation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _arbitrable(): Bytes {
    let value = this.get("_arbitrable");
    return value.toBytes();
  }

  set _arbitrable(value: Bytes) {
    this.set("_arbitrable", Value.fromBytes(value));
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

export class AppealPossible extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppealPossible entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppealPossible entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppealPossible", id.toString(), this);
  }

  static load(id: string): AppealPossible | null {
    return store.get("AppealPossible", id) as AppealPossible | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _arbitrable(): Bytes {
    let value = this.get("_arbitrable");
    return value.toBytes();
  }

  set _arbitrable(value: Bytes) {
    this.set("_arbitrable", Value.fromBytes(value));
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

export class AppealDecision extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppealDecision entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppealDecision entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppealDecision", id.toString(), this);
  }

  static load(id: string): AppealDecision | null {
    return store.get("AppealDecision", id) as AppealDecision | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _disputeID(): BigInt {
    let value = this.get("_disputeID");
    return value.toBigInt();
  }

  set _disputeID(value: BigInt) {
    this.set("_disputeID", Value.fromBigInt(value));
  }

  get _arbitrable(): Bytes {
    let value = this.get("_arbitrable");
    return value.toBytes();
  }

  set _arbitrable(value: Bytes) {
    this.set("_arbitrable", Value.fromBytes(value));
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
