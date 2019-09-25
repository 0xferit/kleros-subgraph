import {
  NewPhase as NewPhaseEvent,
  NewPeriod as NewPeriodEvent,
  StakeSet as StakeSetEvent,
  Draw as DrawEvent,
  TokenAndETHShift as TokenAndETHShiftEvent,
  DisputeCreation as DisputeCreationEvent,
  AppealPossible as AppealPossibleEvent,
  AppealDecision as AppealDecisionEvent,
} from "../generated/Contract/KlerosLiquid"
import {
  NewPolicy,
  NewPeriod,
  StakeSet,
  Draw,
  TokenAndETHShift,
  DisputeCreation,
  AppealPossible,
  AppealDecision, DisputeStatistic
} from "../generated/KlerosLiquidSchema"
import {
  log,
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal,
  json
} from "@graphprotocol/graph-ts";

export function handleNewPhase(event: NewPhaseEvent): void {
  let entity = new NewPolicy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._phase = event.params._phase
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleNewPeriod(event: NewPeriodEvent): void {
  let entity = new NewPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._period = event.params._period
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleStakeSet(event: StakeSetEvent): void {
  let entity = new StakeSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._subcourtID = event.params._subcourtID
  entity._stake = event.params._stake
  entity._newTotalStake = event.params._newTotalStake
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleDraw(event: DrawEvent): void {
  let entity = new Draw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._disputeID = event.params._disputeID
  entity._appeal = event.params._appeal
  entity._voteID = event.params._voteID
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleTokenAndETHShift(event: TokenAndETHShiftEvent): void {
  let entity = new TokenAndETHShift(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity._disputeID = event.params._disputeID
  entity._tokenAmount = event.params._tokenAmount
  entity._ETHAmount = event.params._ETHAmount
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()

  let entity1 = DisputeStatistic.load('singleID')
  if (entity1 == null) {
    entity1 = new DisputeStatistic('singleID')
    log.debug('handleTokenAndETHShift.entity1 not present', [entity1._totalRewardedTokenAmount.toString()])
    if(event.params._tokenAmount.gt(BigInt.fromI32(0))){
      log.debug('handleTokenAndETHShift.entity1 initializing amount', [])
      entity1._totalRewardedTokenAmount = event.params._tokenAmount
      entity1._totalRewardedEthAmount = event.params._ETHAmount
    } else {
      log.debug('handleTokenAndETHShift.entity1 +ve tokenamount', [event.params._tokenAmount.toString()])
      entity1._totalPunishedTokenAmount = event.params._tokenAmount
    }
  } else{
    log.debug('handleTokenAndETHShift.entity1 present', [entity1._totalRewardedTokenAmount.toString()])
    if(event.params._tokenAmount.gt(BigInt.fromI32(0))){
      log.debug('handleTokenAndETHShift.entity1 adding amount', [])
      entity1._totalRewardedTokenAmount = entity1._totalRewardedTokenAmount.plus(event.params._tokenAmount)
      entity1._totalRewardedEthAmount = entity1._totalRewardedEthAmount.plus(event.params._ETHAmount)
    } else {
      log.debug('handleTokenAndETHShift.entity1 -ve tokenamount', [event.params._tokenAmount.toString()])
      entity1._totalPunishedTokenAmount = entity1._totalPunishedTokenAmount.plus(event.params._tokenAmount)
    }
  }
  entity1.save()
}

export function handleDisputeCreation(event: DisputeCreationEvent): void {
  let entity = new DisputeCreation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()

  let entity1 = DisputeStatistic.load('singleID')
  if (entity1 == null) {
    entity1 = new DisputeStatistic('singleID')
    entity1._totalDisputes = BigInt.fromI32(1)
  } else{
    entity1._totalDisputes = entity1._totalDisputes.plus(BigInt.fromI32(1))
  }
  entity1.save()
}

export function handleAppealPossible(event: AppealPossibleEvent): void {
  let entity = new AppealPossible(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleAppealDecision(event: AppealDecisionEvent): void {
  let entity = new AppealDecision(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}
