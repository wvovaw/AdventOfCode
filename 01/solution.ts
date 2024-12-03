type Report = number[]

function isReportSafe(report: Report): boolean {
  // indicates if the sequence must be decreasing or increasing
  const sign = Math.sign(report[1] - report[0])

  for (let i = 1; i < report.length; i++) {
    const d = report[i] - report[i - 1]
    const dAbs = Math.abs(d)

    if (dAbs < 1 || dAbs > 3) return false

    if (sign !== Math.sign(d)) {
      return false
    }
  }
  return true
}

export function partOne(text: string): number {
  const reports = text.split('\n').map((r) => r.split(/\s+/).map(Number))
  const safeReports = reports.map(isReportSafe).filter(Boolean).length
  return safeReports
}
