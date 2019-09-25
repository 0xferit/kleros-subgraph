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
  entity.subcourtID = event.params.subcourtID
  entity.policy = event.params.policy
  entity.contractAddress = event.address
  entity.timestamp = event.block.timestamp
  entity.blockNumber = event.block.number
  entity.save()
}
