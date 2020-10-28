export function boxWidthConvert(boxWidth: string) {
  interface BoxWidthLookup {
    full: number
    threeQuarter: number
    twoThird: number
    half: number
    third: number
    quarter: number
    [index: string]: number
  }

  const boxWidthLookup: BoxWidthLookup = {
    full: 12,
    threeQuarter: 9,
    twoThird: 8,
    half: 6,
    third: 4,
    quarter: 3,
  }

  return boxWidth ? boxWidthLookup[boxWidth] : 12
}
