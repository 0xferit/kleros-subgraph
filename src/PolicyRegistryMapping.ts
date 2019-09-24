import {
  PolicyUpdate as NewPolicyUpdateEvent,
} from "../generated/Contract/PolicyRegistry"
import {
  PolicyUpdate,
} from "../generated/PolicyRegistrySchema"

export function handlePolicyUpdate(event: NewPolicyUpdateEvent): void {
  let entity = new PolicyUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._subcourtID = event.params._subcourtID
  entity._policy = event.params._policy
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}
