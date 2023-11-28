import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Burn,
  IncreaseObservationCardinalityNext,
  Mint,
  Swap,
  Transfer,
  UpdateImpliedRate
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBurnEvent(
  receiverSy: Address,
  receiverPt: Address,
  netLpBurned: BigInt,
  netSyOut: BigInt,
  netPtOut: BigInt
): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam(
      "receiverSy",
      ethereum.Value.fromAddress(receiverSy)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "receiverPt",
      ethereum.Value.fromAddress(receiverPt)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "netLpBurned",
      ethereum.Value.fromUnsignedBigInt(netLpBurned)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "netSyOut",
      ethereum.Value.fromUnsignedBigInt(netSyOut)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "netPtOut",
      ethereum.Value.fromUnsignedBigInt(netPtOut)
    )
  )

  return burnEvent
}

export function createIncreaseObservationCardinalityNextEvent(
  observationCardinalityNextOld: i32,
  observationCardinalityNextNew: i32
): IncreaseObservationCardinalityNext {
  let increaseObservationCardinalityNextEvent = changetype<
    IncreaseObservationCardinalityNext
  >(newMockEvent())

  increaseObservationCardinalityNextEvent.parameters = new Array()

  increaseObservationCardinalityNextEvent.parameters.push(
    new ethereum.EventParam(
      "observationCardinalityNextOld",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(observationCardinalityNextOld)
      )
    )
  )
  increaseObservationCardinalityNextEvent.parameters.push(
    new ethereum.EventParam(
      "observationCardinalityNextNew",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(observationCardinalityNextNew)
      )
    )
  )

  return increaseObservationCardinalityNextEvent
}

export function createMintEvent(
  receiver: Address,
  netLpMinted: BigInt,
  netSyUsed: BigInt,
  netPtUsed: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "netLpMinted",
      ethereum.Value.fromUnsignedBigInt(netLpMinted)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "netSyUsed",
      ethereum.Value.fromUnsignedBigInt(netSyUsed)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "netPtUsed",
      ethereum.Value.fromUnsignedBigInt(netPtUsed)
    )
  )

  return mintEvent
}

export function createSwapEvent(
  caller: Address,
  receiver: Address,
  netPtOut: BigInt,
  netSyOut: BigInt,
  netSyFee: BigInt,
  netSyToReserve: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "netPtOut",
      ethereum.Value.fromSignedBigInt(netPtOut)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "netSyOut",
      ethereum.Value.fromSignedBigInt(netSyOut)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "netSyFee",
      ethereum.Value.fromUnsignedBigInt(netSyFee)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "netSyToReserve",
      ethereum.Value.fromUnsignedBigInt(netSyToReserve)
    )
  )

  return swapEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUpdateImpliedRateEvent(
  timestamp: BigInt,
  lnLastImpliedRate: BigInt
): UpdateImpliedRate {
  let updateImpliedRateEvent = changetype<UpdateImpliedRate>(newMockEvent())

  updateImpliedRateEvent.parameters = new Array()

  updateImpliedRateEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  updateImpliedRateEvent.parameters.push(
    new ethereum.EventParam(
      "lnLastImpliedRate",
      ethereum.Value.fromUnsignedBigInt(lnLastImpliedRate)
    )
  )

  return updateImpliedRateEvent
}
