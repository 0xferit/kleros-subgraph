import {
  NewPeriod as NewPeriodEvent,
  TokenShift as TokenShiftEvent,
  ArbitrationReward as ArbitrationRewardEvent,
  AppealPossible as AppealPossibleEvent,
  DisputeCreation as DisputeCreationEvent,
  AppealDecision as AppealDecisionEvent
} from "../generated/Contract/Kleros"
import {
  NewPeriod,
  TokenShift,
  ArbitrationReward,
  AppealPossible,
  DisputeCreation,
  AppealDecision
} from "../generated/KlerosSchema"

export function handleNewPeriod(event: NewPeriodEvent): void {
  let entity = new NewPeriod(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._period = event.params._period
  entity._session = event.params._session
  entity.save()
}

export function handleTokenShift(event: TokenShiftEvent): void {
  let entity = new TokenShift(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._account = event.params._account
  entity._disputeID = event.params._disputeID
  entity._amount = event.params._amount
  entity.save()
}

export function handleArbitrationReward(event: ArbitrationRewardEvent): void {
  let entity = new ArbitrationReward(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._account = event.params._account
  entity._disputeID = event.params._disputeID
  entity._amount = event.params._amount
  entity.save()
}

export function handleAppealPossible(event: AppealPossibleEvent): void {
  let entity = new AppealPossible(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity.save()
}

export function handleDisputeCreation(event: DisputeCreationEvent): void {
  let entity = new DisputeCreation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity.save()
}

export function handleAppealDecision(event: AppealDecisionEvent): void {
  let entity = new AppealDecision(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._disputeID = event.params._disputeID
  entity._arbitrable = event.params._arbitrable
  entity.save()
}
