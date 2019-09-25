import gql from 'graphql-tag'

export const DISPUTE_COUNT = gql`{
  disputeStatistics(first: 1){
    id
    totalDisputes
  }
}`
