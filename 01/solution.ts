type Report = number[]

function getReports(text: string): Report[] {
  return text.split('\n').map((r) => r.split(/\s+/).map(Number))
}

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

function isReportsSafeTolerant(report: Report): boolean {
  const isSafe = isReportSafe(report)
  if (isSafe) return true

  for (let i = 0; i < report.length; i++) {
    if (isReportSafe(report.toSpliced(i, 1))) {
      return true
    }
  }

  return false
}

export function partOne(text: string): number {
  const reports = getReports(text)
  const safeReports = reports.map(isReportSafe).filter(Boolean).length
  return safeReports
}

export function partTwo(text: string): number {
  const reports = getReports(text)
  const safeReports = reports.map(isReportsSafeTolerant).filter(Boolean).length
  return safeReports
}
