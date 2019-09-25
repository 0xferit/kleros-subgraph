import {
  NewPhase as NewPhaseEvent,
  NewPeriod as NewPeriodEvent,
  StakeSet as StakeSetEvent,
  Draw as DrawEvent,
  TokenAndETHShift as TokenAndETHShiftEvent,
  DisputeCreation as DisputeCreationEvent,
  AppealPossible as AppealPossibleEvent,
  AppealDecision as AppealDecisionEvent, KlerosLiquid,
} from "../generated/Contract/KlerosLiquid"
import {
  NewPolicy,
  NewPeriod,
  StakeSet,
  Draw,
  TokenAndETHShift,
  DisputeCreation,
  AppealPossible,
  AppealDecision,
  DisputeStatistic,
  PeriodDisputeStatistic,
  JurorStakeAmount,
  RewardStatistic,
  SubCourtDisputeStatistic
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
  entity.phase = event.params.phase
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()
}

export function handleNewPeriod(event: NewPeriodEvent): void {
  let entity = new NewPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disputeID = event.params.disputeID
  entity.period = event.params.period
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()

  // Save Period Vs Dispute stats
  let charCodePeriod = String.fromCharCode(event.params.period)
  log.info('Period', [charCodePeriod])
  let entity1 = PeriodDisputeStatistic.load(charCodePeriod)
  if (entity1 == null) {
    entity1 = new PeriodDisputeStatistic(charCodePeriod)
    entity1.period = event.params.period
    entity1.totalDisputes = BigInt.fromI32(1)
    log.info('Initializing Period', [charCodePeriod])
  } else{
    entity1.period = event.params.period
    entity1.totalDisputes = entity1.totalDisputes.plus(BigInt.fromI32(1))
    log.info('Incrementing dispute count', [charCodePeriod])
  }
  entity1.save()
}

export function handleStakeSet(event: StakeSetEvent): void {
  let entity = new StakeSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.address = event.params.address
  entity.subcourtID = event.params.subcourtID
  entity.stake = event.params.stake
  entity.newTotalStake = event.params.newTotalStake
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()

  // Always update with the latest total stake for a juror
  let parsedId = event.params.address.toHex();
  let entity1 = JurorStakeAmount.load(parsedId)
  if (entity1 == null) {
    entity1 = new JurorStakeAmount(parsedId)
    entity1.juror = event.params.address
    entity1.stakeAmount = event.params.newTotalStake
  } else{
    entity1.juror = event.params.address
    entity1.stakeAmount = event.params.newTotalStake
  }
  entity1.save()
}

export function handleDraw(event: DrawEvent): void {
  let entity = new Draw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.address = event.params.address
  entity.disputeID = event.params.disputeID
  entity.appeal = event.params.appeal
  entity.voteID = event.params.voteID
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()
}

export function handleTokenAndETHShift(event: TokenAndETHShiftEvent): void {
  let entity = new TokenAndETHShift(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.address = event.params.address
  entity.disputeID = event.params.disputeID
  entity.tokenAmount = event.params.tokenAmount
  entity.ETHAmount = event.params.ETHAmount
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()

  // Reward stats
  let entity1 = RewardStatistic.load('ID')
  if (entity1 == null) {
    entity1 = new RewardStatistic('ID')
    // Initialize
    entity1.totalRewardedTokenAmount = BigInt.fromI32(0)
    entity1.totalRewardedEthAmount = BigInt.fromI32(0)
    entity1.totalPunishedTokenAmount = BigInt.fromI32(0)
  }
  // log.info('handleTokenAndETHShift.entity1 present',
  // [entity1.totalRewardedTokenAmount.toString()])
  if(event.params.tokenAmount.ge(BigInt.fromI32(0))){
    // log.info('handleTokenAndETHShift.entity1 adding amount', [])
    entity1.totalRewardedTokenAmount = entity1.totalRewardedTokenAmount.plus(event.params.tokenAmount)
    entity1.totalRewardedEthAmount = entity1.totalRewardedEthAmount.plus(event.params.ETHAmount)
  } else {
    // log.info('handleTokenAndETHShift.entity1 -ve tokenamount',
    // [event.params.tokenAmount.toString()])
    entity1.totalPunishedTokenAmount = entity1.totalPunishedTokenAmount.plus(event.params.tokenAmount)
  }
  entity1.save()
}

export function handleDisputeCreation(event: DisputeCreationEvent): void {
  let entity = new DisputeCreation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disputeID = event.params.disputeID
  entity.arbitrable = event.params.arbitrable
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number

  log.info('binding KlerosLiquid', [])
  let contract = KlerosLiquid.bind(event.address)
  log.info('reading dispute', [])
  let disputeObj = contract.disputes(event.params.disputeID)
  log.info('disputeObj is read', [])
  log.info('disputeObj', [disputeObj.value0.toHex()])
  entity.subcourtID = disputeObj.value0
  entity.numberOfChoices = disputeObj.value2
  entity.period = disputeObj.value3
  entity.lastPeriodChange = disputeObj.value4
  log.info('Saving disputeObj', [])
  entity.save()

  let entity1 = DisputeStatistic.load('ID')
  if (entity1 == null) {
    entity1 = new DisputeStatistic('ID')
    entity1.totalDisputes = BigInt.fromI32(1)
  } else{
    entity1.totalDisputes = entity1.totalDisputes.plus(BigInt.fromI32(1))
  }
  entity1.save()

  // Save SubCourtDisputeStatistic
  let id = entity.subcourtID.toHex()
  let entity2 = SubCourtDisputeStatistic.load(id)
  if (entity2 == null) {
    entity2 = new SubCourtDisputeStatistic(id)
    entity2.subcourtID = entity.subcourtID
    entity2.totalDisputes = BigInt.fromI32(1)
  } else{
    entity2.subcourtID = entity.subcourtID
    entity2.totalDisputes = entity2.totalDisputes.plus(BigInt.fromI32(1))
  }
  entity2.save()

}

export function handleAppealPossible(event: AppealPossibleEvent): void {
  let entity = new AppealPossible(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disputeID = event.params.disputeID
  entity.arbitrable = event.params.arbitrable
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()
}

export function handleAppealDecision(event: AppealDecisionEvent): void {
  let entity = new AppealDecision(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disputeID = event.params.disputeID
  entity.arbitrable = event.params.arbitrable
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()
}
