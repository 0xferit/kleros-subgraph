import gql from 'graphql-tag'

export const DISPUTE_COUNT = gql`
  {
    disputeStatistics(first: 1){
      id
      totalDisputes
    }
  }`;

export const TOTAL_STAKE_AMOUNT = gql`
  {
    stakeSets{
      _newTotalStake
    }
  }`;

export const TOTAL_COURTS = gql`
  {
    policyUpdates(first: 1,orderBy: subcourtID, orderDirection: desc, where:{policy_not:""}){
      subcourtID
    }
  }
`;

export const DISPUTE_WITH_PERIOD = gql`{
    periodDisputeStatistics{
    period
    totalDisputes
  }
}`;

export const TOP_FIVE_JURY_BY_STAKE_AMOUNT = gql`
  {
    jurorStakeAmounts(first: 5, orderBy: stakeAmount, orderDirection: desc, where:{stakeAmount_gt:0}){
      juror
      stakeAmount
    }
  }`;


export const DISPUTES = gql`
  {
    disputeCreations(orderBy: blockNumber, orderDirection:desc, first:10){
      id
      disputeID
      arbitrable
      contractAddress
      timestamp
      blockNumber
      subcourtID
      numberOfChoices
      period
      lastPeriodChange
      drawsInRound
      commitsInRound
      ruled
    }
  }
`;

export const REWARD_AND_PUNISHMENT = gql`
  {
    rewardStatistics(first: 1){
      id
      totalRewardedTokenAmount
      totalRewardedEthAmount
      totalPunishedTokenAmount
    }
  }
`;

export const DISPUTE_PERIODS = gql`  {
  newPeriods(first: 100, where: {disputeID:$disputeID}, orderBy: timestamp, orderDirection: asc) {
    id
    disputeID
    period
    timestamp
    contractAddress
  }
}`;
