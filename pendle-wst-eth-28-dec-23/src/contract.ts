import {
  Approval as ApprovalEvent,
  Burn as BurnEvent,
  IncreaseObservationCardinalityNext as IncreaseObservationCardinalityNextEvent,
  Mint as MintEvent,
  Swap as SwapEvent,
  Transfer as TransferEvent,
  UpdateImpliedRate as UpdateImpliedRateEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  Burn,
  IncreaseObservationCardinalityNext,
  Mint,
  Swap,
  Transfer,
  UpdateImpliedRate
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiverSy = event.params.receiverSy
  entity.receiverPt = event.params.receiverPt
  entity.netLpBurned = event.params.netLpBurned
  entity.netSyOut = event.params.netSyOut
  entity.netPtOut = event.params.netPtOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseObservationCardinalityNext(
  event: IncreaseObservationCardinalityNextEvent
): void {
  let entity = new IncreaseObservationCardinalityNext(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.observationCardinalityNextOld =
    event.params.observationCardinalityNextOld
  entity.observationCardinalityNextNew =
    event.params.observationCardinalityNextNew

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.netLpMinted = event.params.netLpMinted
  entity.netSyUsed = event.params.netSyUsed
  entity.netPtUsed = event.params.netPtUsed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.receiver = event.params.receiver
  entity.netPtOut = event.params.netPtOut
  entity.netSyOut = event.params.netSyOut
  entity.netSyFee = event.params.netSyFee
  entity.netSyToReserve = event.params.netSyToReserve

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateImpliedRate(event: UpdateImpliedRateEvent): void {
  let entity = new UpdateImpliedRate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp
  entity.lnLastImpliedRate = event.params.lnLastImpliedRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
