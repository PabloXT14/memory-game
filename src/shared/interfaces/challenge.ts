export type ChallengeCard = {
  name: string
  image: string
}

export type Challenge = {
  id: string
  title: string
  gradient: [string, string]
  arrowColor: string
  cards: ChallengeCard[]
}
