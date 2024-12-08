type Rule = [number, number]
type Rules = Rule[]
type Update = number[]
type Updates = Update[]

function getInputs(text: string): [Rules, Updates] {
  const [orderingText, updateText] = text.split('\n\n')
  const orderingRules: Rules = orderingText.split('\n')
    .map((r) => {
      const xy = r.split('|')
      return [parseInt(xy[0]), parseInt(xy[1])]
    })
  const updates: Updates = updateText.split('\n')
    .map((r) => (r.split(',').map(Number)))
  return [orderingRules, updates]
}

function testRule(update: Update, rule: Rule): Rule {
  const x = update.indexOf(rule[0])
  const y = update.indexOf(rule[1])
  return [x, y]
}

function isRuleRelevant(update: Update, rule: Rule): boolean {
  const [x, y] = testRule(update, rule)
  return x >= 0 && y >= 0
}

function isUpdateCorrect(update: Update, orderingRules: Rules): boolean {
  let isCorrect = true
  orderingRules.forEach((r) => {
    if (isRuleRelevant(update, r)) {
      const [x, y] = testRule(update, r)
      if (x > y) isCorrect = false
    }
  })
  return isCorrect
}

function getRelevantRules(update: Update, orderingRules: Rules): Rules {
  const rules: Rules = []
  for (const r of orderingRules) {
    if (isRuleRelevant(update, r)) rules.push(r)
  }
  return rules
}

function fixUpdate(update: Update, orderingRules: Rules): Update {
  const newUpd = Array.from(update)
  const relevantRules = getRelevantRules(update, orderingRules)

  while (!isUpdateCorrect(newUpd, relevantRules)) {
    for (let i = 0; i < relevantRules.length; ++i) {
      const [x, y] = testRule(newUpd, relevantRules[i])
      if (x > y) {
        ;[newUpd[x], newUpd[y]] = [newUpd[y], newUpd[x]]
        i = 0
      }
    }
  }
  return newUpd
}

export function partOne(text: string): number {
  const [orderingRules, updates] = getInputs(text)

  const centers: number[] = []
  for (const upd of updates) {
    const isCorrect = isUpdateCorrect(upd, orderingRules)
    if (isCorrect) centers.push(upd[Math.floor(upd.length / 2)])
  }
  return centers.reduce((a, c) => (a + c), 0)
}

export function partTwo(text: string): number {
  const [orderingRules, updates] = getInputs(text)

  const centers: number[] = []
  for (const upd of updates) {
    const isCorrect = isUpdateCorrect(upd, orderingRules)
    if (!isCorrect) {
      const fixedUpd = fixUpdate(upd, orderingRules)
      centers.push(fixedUpd[Math.floor(upd.length / 2)])
    }
  }
  return centers.reduce((a, c) => (a + c), 0)
}
